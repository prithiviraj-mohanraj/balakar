"use client";

import React, { useEffect, useRef } from "react";

export type SparklerColorTheme = "gold" | "red" | "green" | "blue" | "multicolour";

export interface DiwaliHeroCanvasProps {
  colorTheme?: SparklerColorTheme;
  opacity?: number;
}

interface SparklerParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
  isWhiteHot: boolean;
  gravity: number;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
}

interface DistantFirework {
  x: number;
  y: number;
  color: string;
  radius: number;
  maxRadius: number;
  alpha: number;
  decay: number;
  sparkles: { x: number; y: number; vx: number; vy: number; alpha: number }[];
}

interface SparklerPerformer {
  id: string;
  colorTheme: SparklerColorTheme;
  startX: number;
  startY: number;
  cp1X: number;
  cp1Y: number;
  cp2X: number;
  cp2Y: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  active: boolean;
  delayFrames: number;
  currentX: number;
  currentY: number;
  trailHistory: { x: number; y: number }[];
  sparks: SparklerParticle[];
}

export default function DiwaliHeroCanvas({
  colorTheme = "gold",
  opacity = 1,
}: DiwaliHeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
      isMobile = canvas.width < 768;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Color palettes for authentic pyrotechnic sparkler formulations
    const palettes: Record<SparklerColorTheme, string[]> = {
      gold: [
        "rgba(255, 255, 255, ",
        "rgba(254, 240, 138, ",
        "rgba(251, 191, 36, ",
        "rgba(245, 158, 11, ",
        "rgba(217, 119, 6, ",
      ],
      red: [
        "rgba(255, 255, 255, ",
        "rgba(254, 202, 202, ",
        "rgba(248, 113, 113, ",
        "rgba(239, 68, 68, ",
        "rgba(185, 28, 28, ",
      ],
      green: [
        "rgba(255, 255, 255, ",
        "rgba(187, 247, 208, ",
        "rgba(74, 222, 128, ",
        "rgba(34, 197, 94, ",
        "rgba(21, 128, 61, ",
      ],
      blue: [
        "rgba(255, 255, 255, ",
        "rgba(191, 219, 254, ",
        "rgba(96, 165, 250, ",
        "rgba(59, 130, 246, ",
        "rgba(29, 78, 216, ",
      ],
      multicolour: [
        "rgba(255, 255, 255, ",
        "rgba(251, 191, 36, ",  // gold
        "rgba(239, 68, 68, ",   // red
        "rgba(34, 197, 94, ",   // green
        "rgba(59, 130, 246, ",  // blue
        "rgba(168, 85, 247, ",  // purple
      ],
    };

    // Initialize 2-3 Asymmetrical Animated Performers
    const createPerformers = (w: number, h: number): SparklerPerformer[] => {
      return [
        // Performer 1: Elegant Golden Sparkler sweep entering from Upper-Left
        {
          id: "performer-1",
          colorTheme: "gold",
          startX: -30,
          startY: h * 0.16,
          cp1X: w * 0.22,
          cp1Y: h * 0.08,
          cp2X: w * 0.3,
          cp2Y: h * 0.32,
          endX: w * 0.08,
          endY: h * 0.48,
          progress: 0,
          speed: isMobile ? 0.0036 : 0.0022,
          active: true,
          delayFrames: 0,
          currentX: -30,
          currentY: h * 0.16,
          trailHistory: [],
          sparks: [],
        },
        // Performer 2: Colourful Sparkler entering gracefully from Right Edge
        {
          id: "performer-2",
          colorTheme: colorTheme === "gold" ? "red" : colorTheme,
          startX: w + 30,
          startY: h * 0.22,
          cp1X: w * 0.78,
          cp1Y: h * 0.12,
          cp2X: w * 0.68,
          cp2Y: h * 0.38,
          endX: w + 40,
          endY: h * 0.54,
          progress: 0,
          speed: isMobile ? 0.0034 : 0.002,
          active: false,
          delayFrames: 180, // Enters staggered after performer 1
          currentX: w + 30,
          currentY: h * 0.22,
          trailHistory: [],
          sparks: [],
        },
        // Performer 3: Subtle golden spark arc near lower-right
        {
          id: "performer-3",
          colorTheme: "multicolour",
          startX: w * 0.85,
          startY: h + 20,
          cp1X: w * 0.75,
          cp1Y: h * 0.78,
          cp2X: w * 0.9,
          cp2Y: h * 0.65,
          endX: w + 30,
          endY: h * 0.75,
          progress: 0,
          speed: isMobile ? 0.003 : 0.0018,
          active: false,
          delayFrames: 360,
          currentX: w * 0.85,
          currentY: h + 20,
          trailHistory: [],
          sparks: [],
        },
      ];
    };

    let performers = createPerformers(canvas.width, canvas.height);

    // Distant Diwali Fireworks
    let distantFireworks: DistantFirework[] = [];
    const fwColors = [
      "rgba(251, 191, 36, ", // Gold
      "rgba(239, 68, 68, ",  // Red
      "rgba(34, 197, 94, ",  // Green
      "rgba(96, 165, 250, ", // Blue
      "rgba(217, 70, 239, ", // Violet
    ];

    const createDistantFirework = (w: number, h: number): DistantFirework => {
      const x = Math.random() * (w * 0.8) + (w * 0.1);
      const y = Math.random() * (h * 0.4) + (h * 0.05);
      const color = fwColors[Math.floor(Math.random() * fwColors.length)];
      const maxRadius = Math.random() * 45 + 30;

      const sparkles = [];
      const count = isMobile ? 12 : 24;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.2);
        const speed = Math.random() * 1.8 + 0.8;
        sparkles.push({
          x: 0,
          y: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
        });
      }

      return {
        x,
        y,
        color,
        radius: 2,
        maxRadius,
        alpha: 0.65,
        decay: Math.random() * 0.008 + 0.005,
        sparkles,
      };
    };

    // Parallax mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - canvas.width / 2) * 0.025;
      targetMouseY = (e.clientY - rect.top - canvas.height / 2) * 0.025;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create a spark originating directly from a moving burning tip
    const createSpark = (
      originX: number,
      originY: number,
      theme: SparklerColorTheme
    ): SparklerParticle => {
      const palette = palettes[theme] || palettes.gold;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.2 + 1.2;
      const isWhiteHot = Math.random() < 0.28;

      return {
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 0.5),
        size: isWhiteHot ? Math.random() * 2.4 + 1.4 : Math.random() * 1.6 + 0.7,
        alpha: Math.random() * 0.85 + 0.15,
        decay: Math.random() * 0.02 + 0.009,
        color: isWhiteHot ? palette[0] : palette[Math.floor(Math.random() * (palette.length - 1)) + 1],
        isWhiteHot,
        gravity: Math.random() * 0.065 + 0.025,
        life: 0,
        maxLife: Math.random() * 45 + 20,
        trail: [],
      };
    };

    let globalFrame = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      globalFrame++;

      // Parallax lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // 1. Render Distant Festive Fireworks Blooms (Celebratory Diwali Background)
      if (globalFrame % (isMobile ? 120 : 80) === 0 && distantFireworks.length < 4) {
        distantFireworks.push(createDistantFirework(canvas.width, canvas.height));
      }

      for (let fIdx = distantFireworks.length - 1; fIdx >= 0; fIdx--) {
        const fw = distantFireworks[fIdx];
        fw.alpha -= fw.decay;
        fw.radius += (fw.maxRadius - fw.radius) * 0.04;

        if (fw.alpha <= 0) {
          distantFireworks.splice(fIdx, 1);
          continue;
        }

        ctx.save();
        // Soft diffuse firework aura
        const aura = ctx.createRadialGradient(fw.x, fw.y, 0, fw.x, fw.y, fw.radius * 1.5);
        aura.addColorStop(0, `${fw.color}${fw.alpha * 0.35})`);
        aura.addColorStop(1, `${fw.color}0)`);
        ctx.beginPath();
        ctx.arc(fw.x, fw.y, fw.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = aura;
        ctx.fill();

        // Individual firework star points
        fw.sparkles.forEach((sp) => {
          sp.x += sp.vx;
          sp.y += sp.vy + 0.02; // slight gravity
          ctx.beginPath();
          ctx.arc(fw.x + sp.x, fw.y + sp.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `${fw.color}${fw.alpha * 0.8})`;
          ctx.fill();
        });
        ctx.restore();
      }

      // 2. Render Moving Sparkler Performers
      performers.forEach((p, pIdx) => {
        if (!p.active) {
          if (globalFrame >= p.delayFrames) {
            p.active = true;
          }
          return;
        }

        // Advance cubic Bezier progress
        p.progress += p.speed;

        if (p.progress <= 1) {
          const t = p.progress;
          const invT = 1 - t;

          p.currentX =
            invT * invT * invT * p.startX +
            3 * invT * invT * t * p.cp1X +
            3 * invT * t * t * p.cp2X +
            t * t * t * p.endX +
            mouseX;

          p.currentY =
            invT * invT * invT * p.startY +
            3 * invT * invT * t * p.cp1Y +
            3 * invT * t * t * p.cp2Y +
            t * t * t * p.endY +
            mouseY;

          // Tip movement history for long-exposure light trail
          p.trailHistory.push({ x: p.currentX, y: p.currentY });
          if (p.trailHistory.length > (isMobile ? 12 : 24)) {
            p.trailHistory.shift();
          }

          // Emit sparks directly from moving combustion tip
          const spawnRate = isMobile ? 2 : 4;
          for (let i = 0; i < spawnRate; i++) {
            p.sparks.push(createSpark(p.currentX, p.currentY, p.colorTheme));
          }
        } else {
          // Loop with randomized organic trajectories
          p.progress = 0;
          p.trailHistory = [];

          if (pIdx === 0) {
            p.startX = -30;
            p.startY = Math.random() * (canvas.height * 0.25) + canvas.height * 0.1;
            p.cp1X = canvas.width * 0.22;
            p.cp1Y = Math.random() * (canvas.height * 0.18);
            p.cp2X = canvas.width * 0.32;
            p.cp2Y = Math.random() * (canvas.height * 0.3) + canvas.height * 0.18;
            p.endX = -30;
            p.endY = Math.random() * (canvas.height * 0.25) + canvas.height * 0.35;
          } else if (pIdx === 1) {
            p.startX = canvas.width + 30;
            p.startY = Math.random() * (canvas.height * 0.25) + canvas.height * 0.12;
            p.cp1X = canvas.width * 0.78;
            p.cp1Y = Math.random() * (canvas.height * 0.18);
            p.cp2X = canvas.width * 0.68;
            p.cp2Y = Math.random() * (canvas.height * 0.3) + canvas.height * 0.18;
            p.endX = canvas.width + 30;
            p.endY = Math.random() * (canvas.height * 0.25) + canvas.height * 0.38;
          } else {
            p.startX = canvas.width * 0.85;
            p.startY = canvas.height + 20;
            p.cp1X = canvas.width * 0.72;
            p.cp1Y = canvas.height * 0.75;
            p.cp2X = canvas.width * 0.88;
            p.cp2Y = canvas.height * 0.62;
            p.endX = canvas.width + 30;
            p.endY = canvas.height * 0.72;
          }
        }

        // Render Long-Exposure Golden/Colour Light Trail
        if (p.trailHistory.length > 1) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p.trailHistory[0].x, p.trailHistory[0].y);
          for (let h = 1; h < p.trailHistory.length; h++) {
            ctx.lineTo(p.trailHistory[h].x, p.trailHistory[h].y);
          }
          const trailStroke =
            p.colorTheme === "red"
              ? "rgba(239, 68, 68, 0.4)"
              : p.colorTheme === "green"
              ? "rgba(34, 197, 94, 0.4)"
              : p.colorTheme === "blue"
              ? "rgba(59, 130, 246, 0.4)"
              : "rgba(245, 158, 11, 0.45)";
          ctx.strokeStyle = trailStroke;
          ctx.lineWidth = 3.2;
          ctx.lineCap = "round";
          ctx.stroke();

          // Intense core streak
          ctx.beginPath();
          const startIdx = Math.max(0, p.trailHistory.length - 6);
          ctx.moveTo(p.trailHistory[startIdx].x, p.trailHistory[startIdx].y);
          for (let h = startIdx + 1; h < p.trailHistory.length; h++) {
            ctx.lineTo(p.trailHistory[h].x, p.trailHistory[h].y);
          }
          ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
          ctx.lineWidth = 1.6;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.restore();
        }

        // Render Physical Metallic Sparkler Stick entering partially from edge
        if (p.progress <= 1 && p.trailHistory.length > 2) {
          ctx.save();
          // Draw a small realistic steel wire stick trailing behind the tip
          const tip = { x: p.currentX, y: p.currentY };
          const prevTip = p.trailHistory[0];
          const dx = tip.x - prevTip.x;
          const dy = tip.y - prevTip.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          if (len > 0) {
            const stickLen = isMobile ? 35 : 55;
            const stickStartX = tip.x - (dx / len) * stickLen;
            const stickStartY = tip.y - (dy / len) * stickLen;

            // Steel wire
            ctx.beginPath();
            ctx.moveTo(stickStartX, stickStartY);
            ctx.lineTo(tip.x, tip.y);
            ctx.strokeStyle = "rgba(148, 163, 184, 0.75)";
            ctx.lineWidth = 2.2;
            ctx.stroke();

            // Textured chemical coating
            ctx.beginPath();
            ctx.moveTo(tip.x - (dx / len) * (stickLen * 0.7), tip.y - (dy / len) * (stickLen * 0.7));
            ctx.lineTo(tip.x, tip.y);
            ctx.strokeStyle = "rgba(71, 85, 105, 0.9)";
            ctx.lineWidth = 3.6;
            ctx.lineCap = "round";
            ctx.stroke();
          }
          ctx.restore();
        }

        // Render Intensely White-Hot Combustion Point & Radiant Glow
        if (p.progress <= 1) {
          ctx.save();
          const flicker = Math.random() * 5 - 2.5;
          const radius = 26 + flicker;
          const radialGlow = ctx.createRadialGradient(p.currentX, p.currentY, 0, p.currentX, p.currentY, radius);
          radialGlow.addColorStop(0, "rgba(255, 255, 255, 0.98)");
          radialGlow.addColorStop(
            0.35,
            p.colorTheme === "red"
              ? "rgba(239, 68, 68, 0.6)"
              : p.colorTheme === "green"
              ? "rgba(34, 197, 94, 0.6)"
              : p.colorTheme === "blue"
              ? "rgba(59, 130, 246, 0.6)"
              : "rgba(251, 191, 36, 0.6)"
          );
          radialGlow.addColorStop(1, "rgba(217, 119, 6, 0)");

          ctx.beginPath();
          ctx.arc(p.currentX, p.currentY, radius, 0, Math.PI * 2);
          ctx.fillStyle = radialGlow;
          ctx.fill();

          // Intense core point
          ctx.beginPath();
          ctx.arc(p.currentX, p.currentY, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#F59E0B";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();
        }

        // Render Sparks Shooting FROM Moving Tip
        for (let sIdx = p.sparks.length - 1; sIdx >= 0; sIdx--) {
          const sp = p.sparks[sIdx];
          sp.life++;
          sp.vy += sp.gravity;
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.alpha -= sp.decay;

          sp.trail.push({ x: sp.x, y: sp.y });
          if (sp.trail.length > 5) sp.trail.shift();

          if (sp.alpha <= 0 || sp.life > sp.maxLife) {
            p.sparks.splice(sIdx, 1);
          } else {
            ctx.save();

            // Branching spark line
            if (sp.trail.length > 1) {
              ctx.beginPath();
              ctx.moveTo(sp.trail[0].x, sp.trail[0].y);
              for (let t = 1; t < sp.trail.length; t++) {
                ctx.lineTo(sp.trail[t].x, sp.trail[t].y);
              }
              ctx.strokeStyle = `${sp.color}${Math.max(0, sp.alpha * 0.7)})`;
              ctx.lineWidth = sp.size * 0.8;
              ctx.lineCap = "round";
              ctx.stroke();
            }

            // Head spark
            ctx.beginPath();
            ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
            ctx.fillStyle = `${sp.color}${Math.max(0, sp.alpha)})`;
            ctx.fill();

            ctx.restore();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorTheme, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000"
      style={{ opacity }}
    />
  );
}
