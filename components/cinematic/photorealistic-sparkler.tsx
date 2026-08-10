"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export interface PhotorealisticSparklerProps {
  opacity?: number;
}

interface DynamicSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
  gravity: number;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
}

export default function PhotorealisticSparkler({ opacity = 1 }: PhotorealisticSparklerProps) {
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

    const colors = [
      "rgba(255, 255, 255, ",
      "rgba(254, 240, 138, ",
      "rgba(251, 191, 36, ",
      "rgba(245, 158, 11, ",
      "rgba(217, 119, 6, ",
    ];

    let sparks: DynamicSpark[] = [];

    // Tip location relative to hero container
    const getTipCoords = () => {
      const w = canvas.width;
      const h = canvas.height;
      return {
        x: isMobile ? w * 0.28 : w * 0.22,
        y: isMobile ? h * 0.16 : h * 0.22,
      };
    };

    const createTipSpark = (tX: number, tY: number): DynamicSpark => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.0 + 1.0;
      const isWhiteHot = Math.random() < 0.25;

      return {
        x: tX,
        y: tY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 0.4),
        size: isWhiteHot ? Math.random() * 2.5 + 1.5 : Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.8 + 0.2,
        decay: Math.random() * 0.02 + 0.008,
        color: isWhiteHot ? colors[0] : colors[Math.floor(Math.random() * (colors.length - 1)) + 1],
        gravity: Math.random() * 0.08 + 0.03,
        life: 0,
        maxLife: Math.random() * 45 + 20,
        trail: [],
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const tip = getTipCoords();

      // Emit new micro-sparks from burning tip
      const spawnRate = isMobile ? 2 : 4;
      for (let i = 0; i < spawnRate; i++) {
        sparks.push(createTipSpark(tip.x, tip.y));
      }

      // Draw tip white-hot heat bloom
      ctx.save();
      const flicker = Math.random() * 8 - 4;
      const radius = 32 + flicker;
      const radialGlow = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, radius);
      radialGlow.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      radialGlow.addColorStop(0.35, "rgba(251, 191, 36, 0.6)");
      radialGlow.addColorStop(1, "rgba(217, 119, 6, 0)");

      ctx.beginPath();
      ctx.arc(tip.x, tip.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = radialGlow;
      ctx.fill();
      ctx.restore();

      // Update & render tip-originating sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.life++;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 4) p.trail.shift();

        if (p.alpha <= 0 || p.life > p.maxLife) {
          sparks.splice(i, 1);
        } else {
          ctx.save();

          if (p.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let t = 1; t < p.trail.length; t++) {
              ctx.lineTo(p.trail[t].x, p.trail[t].y);
            }
            ctx.strokeStyle = `${p.color}${Math.max(0, p.alpha * 0.7)})`;
            ctx.lineWidth = p.size * 0.85;
            ctx.lineCap = "round";
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
          ctx.fill();

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity]);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ opacity }}
    >
      {/* Real Photorealistic Burning Sparkler Asset Image */}
      <div className="absolute top-[-3%] left-[-4%] sm:left-[2%] w-[260px] sm:w-[380px] aspect-[3/4] opacity-90 transform -rotate-12 drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] pointer-events-none">
        <Image
          src="/branding/real-sparkler-burn.jpg"
          alt="Real Photorealistic Burning Sparkler Asset"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Layered Tip Emission Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
