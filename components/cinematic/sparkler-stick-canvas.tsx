"use client";

import React, { useEffect, useRef } from "react";

export interface SparklerStickCanvasProps {
  opacity?: number;
  interactive?: boolean;
}

interface SparklerStick {
  startX: number; // percentage or fraction
  startY: number;
  tipX: number;
  tipY: number;
  angle: number; // radians
  length: number;
  wireLength: number;
  flicker: number;
  sparks: SparklerParticle[];
  smoke: SmokeParticle[];
}

interface SparklerParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  color: string;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
}

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
}

interface SweepingTrail {
  x: number;
  y: number;
  vx: number;
  vy: number;
  curve: number;
  history: { x: number; y: number }[];
  alpha: number;
  color: string;
}

export default function SparklerStickCanvas({
  opacity = 0.9,
  interactive = true,
}: SparklerStickCanvasProps) {
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

    // Color palette for high-contrast golden/amber sparkler emissions over light backgrounds
    const colors = [
      "rgba(217, 119, 6, ",   // amber-600
      "rgba(245, 158, 11, ",  // amber-500
      "rgba(251, 191, 36, ",  // amber-400
      "rgba(234, 88, 12, ",   // orange-600
      "rgba(180, 83, 9, ",    // amber-700 contrast
      "rgba(255, 237, 213, ", // warm white core
    ];

    // Define physical sparkler sticks around the hero edges
    const setupSticks = (w: number, h: number): SparklerStick[] => {
      const stickDefs = isMobile
        ? [
            // Mobile: 2 sticks
            { sX: -0.05, sY: 0.05, tX: 0.22, tY: 0.28, angle: Math.PI * 0.25 }, // Top-Left
            { sX: 1.05, sY: 0.05, tX: 0.78, tY: 0.28, angle: Math.PI * 0.75 },  // Top-Right
          ]
        : [
            // Desktop: 4 sticks framing edges
            { sX: -0.04, sY: 0.04, tX: 0.24, tY: 0.26, angle: Math.PI * 0.22 }, // Top-Left
            { sX: 1.04, sY: 0.04, tX: 0.76, tY: 0.26, angle: Math.PI * 0.78 },  // Top-Right
            { sX: -0.03, sY: 0.65, tX: 0.18, tY: 0.48, angle: -Math.PI * 0.15 }, // Left-Edge
            { sX: 1.03, sY: 0.65, tX: 0.82, tY: 0.48, angle: Math.PI * 1.15 },  // Right-Edge
          ];

      return stickDefs.map((def) => {
        const startX = def.sX * w;
        const startY = def.sY * h;
        const tipX = def.tX * w;
        const tipY = def.tY * h;
        const dx = tipX - startX;
        const dy = tipY - startY;
        const length = Math.sqrt(dx * dx + dy * dy);

        return {
          startX,
          startY,
          tipX,
          tipY,
          angle: def.angle,
          length,
          wireLength: length * 0.35,
          flicker: 0,
          sparks: [],
          smoke: [],
        };
      });
    };

    let sticks = setupSticks(canvas.width, canvas.height);

    const updateStickPositions = () => {
      if (!canvas) return;
      sticks = setupSticks(canvas.width, canvas.height);
    };

    window.addEventListener("resize", updateStickPositions);

    // Create a spark originating directly from a sparkler's burning tip
    const createTipSpark = (tipX: number, tipY: number): SparklerParticle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.8 + 1.2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed + (Math.random() * 0.4);
      const size = Math.random() * 2.5 + 1.2;
      const maxAlpha = Math.random() * 0.75 + 0.25;
      const decay = Math.random() * 0.018 + 0.008;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const maxLife = Math.random() * 55 + 25;

      return {
        x: tipX,
        y: tipY,
        vx,
        vy,
        size,
        alpha: maxAlpha,
        maxAlpha,
        decay,
        color,
        life: 0,
        maxLife,
        trail: [],
      };
    };

    // Create a smoke particle drifting from burning tip
    const createTipSmoke = (tipX: number, tipY: number): SmokeParticle => {
      return {
        x: tipX + (Math.random() - 0.5) * 6,
        y: tipY + (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.3),
        size: Math.random() * 12 + 6,
        alpha: Math.random() * 0.12 + 0.04,
        maxAlpha: 0.15,
        decay: Math.random() * 0.0025 + 0.001,
      };
    };

    // Sweeping spark trails behind products
    let sweepingTrails: SweepingTrail[] = [];
    const createSweepingTrail = (): SweepingTrail => {
      const startLeft = Math.random() < 0.5;
      return {
        x: startLeft ? -50 : canvas.width + 50,
        y: Math.random() * (canvas.height * 0.5) + canvas.height * 0.2,
        vx: (startLeft ? 1 : -1) * (Math.random() * 2.5 + 1.5),
        vy: (Math.random() - 0.5) * 1.2,
        curve: (Math.random() - 0.5) * 0.02,
        history: [],
        alpha: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    if (!isMobile) {
      sweepingTrails.push(createSweepingTrail());
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render Sweeping Trails behind content
      sweepingTrails.forEach((st, index) => {
        st.vy += st.curve;
        st.x += st.vx;
        st.y += st.vy;
        st.alpha -= 0.0025;

        st.history.push({ x: st.x, y: st.y });
        if (st.history.length > 12) st.history.shift();

        if (st.history.length > 1) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(st.history[0].x, st.history[0].y);
          for (let i = 1; i < st.history.length; i++) {
            ctx.lineTo(st.history[i].x, st.history[i].y);
          }
          ctx.strokeStyle = `${st.color}${Math.max(0, st.alpha * 0.6)})`;
          ctx.lineWidth = 2.5;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.restore();
        }

        if (st.alpha <= 0 || st.x < -100 || st.x > canvas.width + 100) {
          sweepingTrails[index] = createSweepingTrail();
        }
      });

      // Render each Sparkler Stick
      sticks.forEach((stick) => {
        stick.flicker = (Math.random() - 0.5) * 0.3;

        // 1. Draw physical sparkler stick (Metal wire + Grey Coated Sparkler Body)
        ctx.save();
        
        // Dark steel wire handle
        ctx.beginPath();
        ctx.moveTo(stick.startX, stick.startY);
        const midX = stick.startX + (stick.tipX - stick.startX) * 0.35;
        const midY = stick.startY + (stick.tipY - stick.startY) * 0.35;
        ctx.lineTo(midX, midY);
        ctx.strokeStyle = "#475569"; // Steel grey wire
        ctx.lineWidth = 3.5;
        ctx.lineCap = "round";
        ctx.stroke();

        // Grey coated sparkler stick body
        ctx.beginPath();
        ctx.moveTo(midX, midY);
        ctx.lineTo(stick.tipX, stick.tipY);
        ctx.strokeStyle = "#334155"; // Dark slate sparkler chemical coating
        ctx.lineWidth = 5.5;
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.restore();

        // 2. Generate new tip sparks and smoke
        const sparkSpawnCount = isMobile ? 3 : 5;
        for (let i = 0; i < sparkSpawnCount; i++) {
          stick.sparks.push(createTipSpark(stick.tipX, stick.tipY));
        }

        if (Math.random() < 0.4) {
          stick.smoke.push(createTipSmoke(stick.tipX, stick.tipY));
        }

        // 3. Render Smoke
        stick.smoke.forEach((sm, smIndex) => {
          sm.x += sm.vx;
          sm.y += sm.vy;
          sm.size += 0.25;
          sm.alpha -= sm.decay;

          if (sm.alpha > 0) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(sm.x, sm.y, sm.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${sm.alpha * 0.2})`;
            ctx.fill();
            ctx.restore();
          } else {
            stick.smoke.splice(smIndex, 1);
          }
        });

        // 4. Render Sparks Shooting FROM Burning Tip
        stick.sparks.forEach((p, pIndex) => {
          p.life++;
          p.vy += 0.08; // Gravity drop
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;

          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 5) p.trail.shift();

          const isDead = p.alpha <= 0 || p.life > p.maxLife;

          if (isDead) {
            stick.sparks.splice(pIndex, 1);
          } else {
            ctx.save();

            // Long exposure trail line
            if (p.trail.length > 1) {
              ctx.beginPath();
              ctx.moveTo(p.trail[0].x, p.trail[0].y);
              for (let t = 1; t < p.trail.length; t++) {
                ctx.lineTo(p.trail[t].x, p.trail[t].y);
              }
              ctx.strokeStyle = `${p.color}${Math.max(0, p.alpha * 0.7)})`;
              ctx.lineWidth = p.size * 0.8;
              ctx.lineCap = "round";
              ctx.stroke();
            }

            // Glowing spark head
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
            ctx.fill();

            ctx.restore();
          }
        });

        // 5. Draw White-Hot Burning Tip & Glowing Light Halo
        ctx.save();

        // Luminous Light Bloom Halo around tip
        const glowRadius = 38 + stick.flicker * 15;
        const radialGlow = ctx.createRadialGradient(
          stick.tipX, stick.tipY, 0,
          stick.tipX, stick.tipY, glowRadius
        );
        radialGlow.addColorStop(0, "rgba(255, 247, 237, 0.95)");  // White-hot core
        radialGlow.addColorStop(0.25, "rgba(251, 191, 36, 0.75)"); // Golden aura
        radialGlow.addColorStop(0.6, "rgba(245, 158, 11, 0.35)");  // Amber bloom
        radialGlow.addColorStop(1, "rgba(217, 119, 6, 0)");

        ctx.beginPath();
        ctx.arc(stick.tipX, stick.tipY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = radialGlow;
        ctx.fill();

        // Intense Burning Core Point
        ctx.beginPath();
        ctx.arc(stick.tipX, stick.tipY, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#F59E0B";
        ctx.shadowBlur = 15;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", updateStickPositions);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000"
      style={{ opacity }}
    />
  );
}
