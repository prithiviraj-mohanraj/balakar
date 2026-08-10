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

    // Precise tip position at far left edge matching the transparent asset
    const getTipCoords = () => {
      const w = canvas.width;
      const h = canvas.height;
      return {
        x: isMobile ? w * 0.12 : w * 0.11,
        y: isMobile ? h * 0.14 : h * 0.18,
      };
    };

    const createTipSpark = (tX: number, tY: number): DynamicSpark => {
      const angle = (Math.random() - 0.2) * Math.PI; // Angled inward towards right
      const speed = Math.random() * 3.5 + 0.8;
      const isWhiteHot = Math.random() < 0.25;

      return {
        x: tX,
        y: tY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + (Math.random() * 0.2),
        size: isWhiteHot ? Math.random() * 2.2 + 1.2 : Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.75 + 0.25,
        decay: Math.random() * 0.02 + 0.009,
        color: isWhiteHot ? colors[0] : colors[Math.floor(Math.random() * (colors.length - 1)) + 1],
        gravity: Math.random() * 0.06 + 0.02,
        life: 0,
        maxLife: Math.random() * 40 + 18,
        trail: [],
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const tip = getTipCoords();

      // Emit new micro-sparks from burning tip
      const spawnRate = isMobile ? 1 : 3;
      for (let i = 0; i < spawnRate; i++) {
        sparks.push(createTipSpark(tip.x, tip.y));
      }

      // Draw tip white-hot heat bloom
      ctx.save();
      const flicker = Math.random() * 4 - 2;
      const radius = 22 + flicker;
      const radialGlow = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, radius);
      radialGlow.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      radialGlow.addColorStop(0.4, "rgba(251, 191, 36, 0.5)");
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
            ctx.strokeStyle = `${p.color}${Math.max(0, p.alpha * 0.65)})`;
            ctx.lineWidth = p.size * 0.8;
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
      {/* Seamless 100% Transparent PNG Burning Sparkler Asset (No Card, No Black Rectangle) */}
      <div className="absolute top-[2%] left-[-2%] sm:left-[1%] w-[130px] sm:w-[190px] aspect-[3/4] opacity-95 transform -rotate-15 drop-shadow-[0_0_20px_rgba(245,158,11,0.35)] pointer-events-none">
        <Image
          src="/branding/transparent-sparkler.png"
          alt="Transparent Burning Sparkler Visual Asset"
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
