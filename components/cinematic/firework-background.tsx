"use client";

import React, { useEffect, useRef } from "react";

export interface FireworkBackgroundProps {
  type?: "hero" | "trails" | "bursts" | "embers" | "category" | "subtle";
  density?: number;
  speed?: number;
  opacity?: number;
  colorScheme?: "gold" | "amber" | "emerald" | "crimson" | "silver" | "multicolor";
  interactive?: boolean;
}

export default function FireworkBackground({
  type = "hero",
  density = 40,
  speed = 1,
  opacity = 0.75,
  colorScheme = "gold",
  interactive = true,
}: FireworkBackgroundProps) {
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
    const activeDensity = isMobile ? Math.max(12, Math.floor(density * 0.45)) : density;

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Color palettes optimized for high contrast over light ivory backgrounds
    const getColorPalette = (scheme: string) => {
      switch (scheme) {
        case "emerald":
          return [
            "rgba(5, 150, 105, ",    // emerald-600
            "rgba(16, 185, 129, ",   // emerald-500
            "rgba(52, 211, 153, ",   // emerald-400
            "rgba(217, 119, 6, ",    // amber-600 contrast spark
          ];
        case "crimson":
          return [
            "rgba(220, 38, 38, ",    // red-600
            "rgba(239, 68, 68, ",    // red-500
            "rgba(245, 158, 11, ",   // amber-500
            "rgba(217, 119, 6, ",    // amber-600
          ];
        case "silver":
          return [
            "rgba(71, 85, 105, ",    // slate-600 core
            "rgba(148, 163, 184, ",  // slate-400
            "rgba(217, 119, 6, ",    // gold accent
            "rgba(245, 158, 11, ",   // amber spark
          ];
        case "multicolor":
          return [
            "rgba(217, 119, 6, ",    // amber-600
            "rgba(219, 39, 119, ",   // pink-600
            "rgba(37, 99, 235, ",    // blue-600
            "rgba(5, 150, 105, ",    // emerald-600
            "rgba(147, 51, 234, ",   // purple-600
          ];
        case "amber":
          return [
            "rgba(217, 119, 6, ",    // amber-600
            "rgba(245, 158, 11, ",   // amber-500
            "rgba(180, 83, 9, ",     // amber-700 contrast
            "rgba(251, 191, 36, ",   // amber-400
          ];
        case "gold":
        default:
          return [
            "rgba(217, 119, 6, ",    // amber-600
            "rgba(245, 158, 11, ",   // amber-500
            "rgba(251, 191, 36, ",   // amber-400
            "rgba(180, 83, 9, ",     // amber-700
            "rgba(234, 88, 12, ",    // orange-600
          ];
      }
    };

    const colors = getColorPalette(colorScheme);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      maxAlpha: number;
      decay: number;
      color: string;
      trail: Array<{ x: number; y: number }>;
      curve: number;
      life: number;
      maxLife: number;
    }

    interface Burst {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      color: string;
      sparks: Array<{
        angle: number;
        distance: number;
        speed: number;
        size: number;
        alpha: number;
      }>;
    }

    let particles: Particle[] = [];
    let bursts: Burst[] = [];

    const createParticle = (customX?: number, customY?: number, isInitial = false): Particle => {
      const x = customX !== undefined ? customX : Math.random() * canvas.width;
      const y = customY !== undefined ? customY : (isInitial ? Math.random() * canvas.height : canvas.height + 20);
      
      const size = Math.random() * 2.4 + 1.0;
      const speedX = (Math.random() - 0.5) * 0.9 * speed;
      const speedY = -(Math.random() * 1.0 + 0.35) * speed;
      const maxAlpha = Math.random() * 0.65 + 0.3;
      const decay = (Math.random() * 0.0035 + 0.001) * speed;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const curve = (Math.random() - 0.5) * 0.035;
      const maxLife = Math.random() * 180 + 90;

      return {
        x,
        y,
        size,
        speedX,
        speedY,
        alpha: isInitial ? Math.random() * maxAlpha : maxAlpha,
        maxAlpha,
        decay,
        color,
        trail: [],
        curve,
        life: 0,
        maxLife,
      };
    };

    const createBurst = (customX?: number, customY?: number): Burst => {
      const x = customX !== undefined ? customX : Math.random() * canvas.width;
      const y = customY !== undefined ? customY : Math.random() * (canvas.height * 0.45) + 60;
      const maxRadius = Math.random() * 100 + 70;
      const color = colors[Math.floor(Math.random() * colors.length)];

      const sparkCount = Math.floor(Math.random() * 18) + 12;
      const sparks = [];
      for (let i = 0; i < sparkCount; i++) {
        sparks.push({
          angle: Math.random() * Math.PI * 2,
          distance: 0,
          speed: Math.random() * 1.4 + 0.6,
          size: Math.random() * 2.2 + 1,
          alpha: Math.random() * 0.8 + 0.25,
        });
      }

      return {
        x,
        y,
        radius: 0,
        maxRadius,
        alpha: Math.random() * 0.4 + 0.2,
        color,
        sparks,
      };
    };

    for (let i = 0; i < activeDensity; i++) {
      particles.push(createParticle(undefined, undefined, true));
    }

    if (type === "hero" || type === "bursts") {
      const initialBurstCount = isMobile ? 1 : 2;
      for (let b = 0; b < initialBurstCount; b++) {
        bursts.push(createBurst(
          Math.random() * (canvas.width * 0.8) + canvas.width * 0.1,
          Math.random() * (canvas.height * 0.4) + 60
        ));
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (Math.random() < 0.35) {
        particles.push(createParticle(mouseX + (Math.random() - 0.5) * 20, mouseY + (Math.random() - 0.5) * 20));
      }
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render bursts (Soft glowing bokeh blooms)
      bursts.forEach((burst, bIndex) => {
        burst.radius += 0.75;
        burst.alpha -= 0.0035;

        const radialGrad = ctx.createRadialGradient(
          burst.x, burst.y, 0,
          burst.x, burst.y, burst.radius * 1.4
        );
        radialGrad.addColorStop(0, `${burst.color}${Math.max(0, burst.alpha * 0.45)})`);
        radialGrad.addColorStop(0.5, `${burst.color}${Math.max(0, burst.alpha * 0.2)})`);
        radialGrad.addColorStop(1, `${burst.color}0)`);

        ctx.save();
        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, burst.radius * 1.4, 0, Math.PI * 2);
        ctx.fill();

        burst.sparks.forEach((sp) => {
          sp.distance += sp.speed;
          sp.alpha -= 0.006;
          const spX = burst.x + Math.cos(sp.angle) * sp.distance;
          const spY = burst.y + Math.sin(sp.angle) * sp.distance + (sp.distance * 0.12);

          if (sp.alpha > 0) {
            ctx.beginPath();
            ctx.arc(spX, spY, sp.size, 0, Math.PI * 2);
            ctx.fillStyle = `${burst.color}${Math.max(0, sp.alpha)})`;
            ctx.fill();
          }
        });
        ctx.restore();

        if (burst.alpha <= 0 || burst.radius > burst.maxRadius) {
          bursts[bIndex] = createBurst();
        }
      });

      if ((type === "hero" || type === "bursts") && bursts.length < (isMobile ? 2 : 4) && Math.random() < 0.007) {
        bursts.push(createBurst());
      }

      // 2. Render particles & sparkler trails
      particles.forEach((p, pIndex) => {
        p.life += 1;
        p.speedX += p.curve;
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= p.decay;

        if (type === "hero" || type === "trails" || type === "category") {
          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > (isMobile ? 4 : 8)) {
            p.trail.shift();
          }
        }

        const isDead = p.alpha <= 0 || p.y < -40 || p.x < -40 || p.x > canvas.width + 40 || p.life > p.maxLife;

        if (isDead) {
          particles[pIndex] = createParticle(Math.random() * canvas.width, canvas.height + 20);
        } else {
          ctx.save();

          // Draw trailing spark line
          if (p.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let t = 1; t < p.trail.length; t++) {
              ctx.lineTo(p.trail[t].x, p.trail[t].y);
            }
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `${p.color}${Math.max(0, p.alpha * 0.5)})`;
            ctx.lineWidth = p.size * 0.9;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
          }

          // Draw glowing ember head
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
          ctx.fill();

          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [type, density, speed, opacity, colorScheme, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{
        opacity,
      }}
    />
  );
}
