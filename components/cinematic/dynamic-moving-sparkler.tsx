"use client";

import React, { useEffect, useRef } from "react";

export interface DynamicMovingSparklerProps {
  opacity?: number;
}

interface SparklerPerformer {
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
  sparks: DynamicSpark[];
  smoke: DynamicSmoke[];
}

interface DynamicSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  color: string;
  isWhiteHot: boolean;
  gravity: number;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
}

interface DynamicSmoke {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
}

export default function DynamicMovingSparkler({ opacity = 1 }: DynamicMovingSparklerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    const isMobile = window.innerWidth < 768;

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Color palette simulating real high-speed sparkler combustion & long exposure trails
    const colors = [
      "rgba(255, 255, 255, ",   // White-hot core
      "rgba(254, 240, 138, ",  // Amber-200 bright spark
      "rgba(251, 191, 36, ",   // Amber-400 gold body
      "rgba(245, 158, 11, ",   // Amber-500 warm gold
      "rgba(217, 119, 6, ",    // Amber-600 deep gold
      "rgba(234, 88, 12, ",    // Orange-600 trailing spark
    ];

    // Helper: Create cubic Bezier motion performers
    const createPerformers = (w: number, h: number): SparklerPerformer[] => {
      return [
        // Performer 1: Sweeps gracefully from Upper-Left
        {
          startX: -40,
          startY: h * 0.15,
          cp1X: w * 0.18,
          cp1Y: h * 0.08,
          cp2X: w * 0.28,
          cp2Y: h * 0.32,
          endX: w * 0.08,
          endY: h * 0.45,
          progress: 0,
          speed: isMobile ? 0.0035 : 0.0022,
          active: true,
          delayFrames: 0,
          currentX: -40,
          currentY: h * 0.15,
          trailHistory: [],
          sparks: [],
          smoke: [],
        },
        // Performer 2: Sweeps gracefully from Right Edge (Delayed)
        {
          startX: w + 40,
          startY: h * 0.2,
          cp1X: w * 0.82,
          cp1Y: h * 0.12,
          cp2X: w * 0.72,
          cp2Y: h * 0.38,
          endX: w + 40,
          endY: h * 0.52,
          progress: 0,
          speed: isMobile ? 0.0035 : 0.0022,
          active: false,
          delayFrames: 220, // Enters after performer 1
          currentX: w + 40,
          currentY: h * 0.2,
          trailHistory: [],
          sparks: [],
          smoke: [],
        },
      ];
    };

    let performers = createPerformers(canvas.width, canvas.height);

    const updatePerformerLayout = () => {
      if (!canvas) return;
      performers = createPerformers(canvas.width, canvas.height);
    };

    window.addEventListener("resize", updatePerformerLayout);

    // Mouse Parallax Offset
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - canvas.width / 2) * 0.03;
      targetMouseY = (e.clientY - rect.top - canvas.height / 2) * 0.03;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create a micro-spark originating directly from a moving tip
    const createSpark = (originX: number, originY: number): DynamicSpark => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.0 + 1.0;
      const isWhiteHot = Math.random() < 0.25;

      return {
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 0.4),
        size: isWhiteHot ? Math.random() * 2.4 + 1.4 : Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.8 + 0.2,
        maxAlpha: 0.9,
        decay: Math.random() * 0.02 + 0.008,
        color: isWhiteHot ? colors[0] : colors[Math.floor(Math.random() * (colors.length - 1)) + 1],
        isWhiteHot,
        gravity: Math.random() * 0.07 + 0.025,
        life: 0,
        maxLife: Math.random() * 48 + 20,
        trail: [],
      };
    };

    // Create soft smoke particle
    const createSmoke = (originX: number, originY: number): DynamicSmoke => {
      return {
        x: originX + (Math.random() - 0.5) * 8,
        y: originY + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(Math.random() * 0.6 + 0.2),
        size: Math.random() * 10 + 5,
        alpha: Math.random() * 0.1 + 0.03,
        decay: Math.random() * 0.002 + 0.001,
      };
    };

    let globalFrame = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      globalFrame++;

      // Smooth mouse parallax lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      performers.forEach((p, pIdx) => {
        // Handle activation delay
        if (!p.active) {
          if (globalFrame >= p.delayFrames) {
            p.active = true;
          }
          return;
        }

        // Advance Bezier progress
        p.progress += p.speed;

        if (p.progress <= 1) {
          const t = p.progress;
          const invT = 1 - t;

          // Cubic Bezier interpolation: B(t) = (1-t)^3*P0 + 3(1-t)^2*t*P1 + 3(1-t)*t^2*P2 + t^3*P3
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

          // Store tip position history for long-exposure light trail
          p.trailHistory.push({ x: p.currentX, y: p.currentY });
          if (p.trailHistory.length > (isMobile ? 12 : 22)) {
            p.trailHistory.shift();
          }

          // Emit sparks directly from the moving tip
          const spawnRate = isMobile ? 2 : 4;
          for (let i = 0; i < spawnRate; i++) {
            p.sparks.push(createSpark(p.currentX, p.currentY));
          }

          if (Math.random() < 0.35) {
            p.smoke.push(createSmoke(p.currentX, p.currentY));
          }
        } else {
          // Loop and reset performer with new randomized Bezier control points
          p.progress = 0;
          p.trailHistory = [];
          
          if (pIdx === 0) {
            p.startX = -40;
            p.startY = Math.random() * (canvas.height * 0.25) + canvas.height * 0.1;
            p.cp1X = canvas.width * 0.2;
            p.cp1Y = Math.random() * (canvas.height * 0.2);
            p.cp2X = canvas.width * 0.3;
            p.cp2Y = Math.random() * (canvas.height * 0.35) + canvas.height * 0.2,
            p.endX = -40;
            p.endY = Math.random() * (canvas.height * 0.3) + canvas.height * 0.3;
          } else {
            p.startX = canvas.width + 40;
            p.startY = Math.random() * (canvas.height * 0.25) + canvas.height * 0.15;
            p.cp1X = canvas.width * 0.8;
            p.cp1Y = Math.random() * (canvas.height * 0.2);
            p.cp2X = canvas.width * 0.7;
            p.cp2Y = Math.random() * (canvas.height * 0.35) + canvas.height * 0.2;
            p.endX = canvas.width + 40;
            p.endY = Math.random() * (canvas.height * 0.3) + canvas.height * 0.35;
          }
        }

        // 1. Render Long-Exposure Glowing Light Trail
        if (p.trailHistory.length > 1) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p.trailHistory[0].x, p.trailHistory[0].y);
          for (let h = 1; h < p.trailHistory.length; h++) {
            ctx.lineTo(p.trailHistory[h].x, p.trailHistory[h].y);
          }
          ctx.strokeStyle = "rgba(245, 158, 11, 0.45)";
          ctx.lineWidth = 3.5;
          ctx.lineCap = "round";
          ctx.stroke();

          // Core bright streak
          ctx.beginPath();
          ctx.moveTo(p.trailHistory[Math.max(0, p.trailHistory.length - 6)].x, p.trailHistory[Math.max(0, p.trailHistory.length - 6)].y);
          for (let h = Math.max(0, p.trailHistory.length - 5); h < p.trailHistory.length; h++) {
            ctx.lineTo(p.trailHistory[h].x, p.trailHistory[h].y);
          }
          ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
          ctx.lineWidth = 1.8;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.restore();
        }

        // 2. Render White-Hot Moving Tip & Radiant Light Bloom
        if (p.progress <= 1) {
          ctx.save();
          const flicker = Math.random() * 6 - 3;
          const radius = 28 + flicker;
          const radialGlow = ctx.createRadialGradient(p.currentX, p.currentY, 0, p.currentX, p.currentY, radius);
          radialGlow.addColorStop(0, "rgba(255, 255, 255, 0.98)");
          radialGlow.addColorStop(0.35, "rgba(251, 191, 36, 0.65)");
          radialGlow.addColorStop(1, "rgba(217, 119, 6, 0)");

          ctx.beginPath();
          ctx.arc(p.currentX, p.currentY, radius, 0, Math.PI * 2);
          ctx.fillStyle = radialGlow;
          ctx.fill();

          // Intense core point
          ctx.beginPath();
          ctx.arc(p.currentX, p.currentY, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#F59E0B";
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.restore();
        }

        // 3. Render Smoke
        p.smoke.forEach((sm, smIdx) => {
          sm.x += sm.vx;
          sm.y += sm.vy;
          sm.size += 0.2;
          sm.alpha -= sm.decay;

          if (sm.alpha > 0) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(sm.x, sm.y, sm.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${sm.alpha * 0.25})`;
            ctx.fill();
            ctx.restore();
          } else {
            p.smoke.splice(smIdx, 1);
          }
        });

        // 4. Render Sparks Shooting FROM Moving Tip (High-Speed Camera Physics)
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

            if (sp.trail.length > 1) {
              ctx.beginPath();
              ctx.moveTo(sp.trail[0].x, sp.trail[0].y);
              for (let t = 1; t < sp.trail.length; t++) {
                ctx.lineTo(sp.trail[t].x, sp.trail[t].y);
              }
              ctx.strokeStyle = `${sp.color}${Math.max(0, sp.alpha * 0.7)})`;
              ctx.lineWidth = sp.size * 0.85;
              ctx.lineCap = "round";
              ctx.stroke();
            }

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
      window.removeEventListener("resize", updatePerformerLayout);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000"
      style={{ opacity }}
    />
  );
}
