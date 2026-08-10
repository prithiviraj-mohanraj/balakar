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
  opacity = 0.6,
  colorScheme = "gold",
  interactive = true,
}: FireworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;

    const isMobile = window.innerWidth < 768;
    const activeDensity = isMobile ? Math.max(12, Math.floor(density * 0.4)) : density;

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Color palettes (RGBA format prefix)
    const getColorPalette = (scheme: string) => {
      switch (scheme) {
        case "emerald":
          return [
            "rgba(16, 185, 129, ",
            "rgba(52, 211, 153, ",
            "rgba(110, 231, 183, ",
            "rgba(251, 191, 36, ",
          ];
        case "crimson":
          return [
            "rgba(239, 68, 68, ",
            "rgba(248, 113, 113, ",
            "rgba(245, 158, 11, ",
            "rgba(252, 211, 77, ",
          ];
        case "silver":
          return [
            "rgba(226, 232, 240, ",
            "rgba(203, 213, 225, ",
            "rgba(248, 250, 252, ",
            "rgba(253, 224, 71, ",
          ];
        case "multicolor":
          return [
            "rgba(251, 191, 36, ",
            "rgba(236, 72, 153, ",
            "rgba(59, 130, 246, ",
            "rgba(16, 185, 129, ",
            "rgba(168, 85, 247, ",
          ];
        case "amber":
          return [
            "rgba(245, 158, 11, ",
            "rgba(217, 119, 6, ",
            "rgba(251, 191, 36, ",
            "rgba(254, 243, 199, ",
          ];
        case "gold":
        default:
          return [
            "rgba(251, 191, 36, ",  // amber-400
            "rgba(245, 158, 11, ",  // amber-500
            "rgba(253, 224, 71, ",  // yellow-300
            "rgba(255, 248, 225, ", // white warm glow
            "rgba(217, 119, 6, ",   // amber-600
          ];
      }
    };

    const colors = getColorPalette(colorScheme);

    // Particle structure
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
        maxDistance: number;
        speed: number;
        size: number;
        alpha: number;
      }>;
    }

    let particles: Particle[] = [];
    let bursts: Burst[] = [];

    // Spawn a spark particle
    const createParticle = (customX?: number, customY?: number, isInitial = false): Particle => {
      const x = customX !== undefined ? customX : Math.random() * canvas.width;
      const y = customY !== undefined ? customY : (isInitial ? Math.random() * canvas.height : canvas.height + 20);
      
      const size = Math.random() * 2 + 0.8;
      const speedX = (Math.random() - 0.5) * 0.8 * speed;
      const speedY = -(Math.random() * 0.9 + 0.3) * speed;
      const maxAlpha = Math.random() * 0.7 + 0.25;
      const decay = (Math.random() * 0.003 + 0.001) * speed;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const curve = (Math.random() - 0.5) * 0.03;
      const maxLife = Math.random() * 200 + 100;

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

    // Spawn background fireworks burst
    const createBurst = (customX?: number, customY?: number): Burst => {
      const x = customX !== undefined ? customX : Math.random() * canvas.width;
      const y = customY !== undefined ? customY : Math.random() * (canvas.height * 0.5) + 50;
      const maxRadius = Math.random() * 120 + 80;
      const color = colors[Math.floor(Math.random() * colors.length)];

      const sparkCount = Math.floor(Math.random() * 16) + 12;
      const sparks = [];
      for (let i = 0; i < sparkCount; i++) {
        sparks.push({
          angle: Math.random() * Math.PI * 2,
          distance: 0,
          maxDistance: Math.random() * maxRadius * 0.8 + 20,
          speed: Math.random() * 1.5 + 0.5,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.8 + 0.2,
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

    // Initialize particles
    for (let i = 0; i < activeDensity; i++) {
      particles.push(createParticle(undefined, undefined, true));
    }

    // Occasional initial bursts for hero & bursts types
    if (type === "hero" || type === "bursts") {
      const initialBurstCount = isMobile ? 1 : 2;
      for (let b = 0; b < initialBurstCount; b++) {
        bursts.push(createBurst(
          Math.random() * (canvas.width * 0.8) + canvas.width * 0.1,
          Math.random() * (canvas.height * 0.4) + 80
        ));
      }
    }

    // Mouse interactive trail tracker
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (Math.random() < 0.3) {
        particles.push(createParticle(mouseX + (Math.random() - 0.5) * 20, mouseY + (Math.random() - 0.5) * 20));
      }
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Render loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render bursts (bokeh out-of-focus background blooms)
      bursts.forEach((burst, bIndex) => {
        burst.radius += 0.8;
        burst.alpha -= 0.003;

        // Draw soft ambient radial light halo
        const radialGrad = ctx.createRadialGradient(
          burst.x, burst.y, 0,
          burst.x, burst.y, burst.radius * 1.5
        );
        radialGrad.addColorStop(0, `${burst.color}${Math.max(0, burst.alpha * 0.35)})`);
        radialGrad.addColorStop(0.5, `${burst.color}${Math.max(0, burst.alpha * 0.15)})`);
        radialGrad.addColorStop(1, `${burst.color}0)`);

        ctx.save();
        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, burst.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw individual spark radial expansion
        burst.sparks.forEach((sp) => {
          sp.distance += sp.speed;
          sp.alpha -= 0.006;
          const spX = burst.x + Math.cos(sp.angle) * sp.distance;
          const spY = burst.y + Math.sin(sp.angle) * sp.distance + (sp.distance * 0.15); // gravity drop

          if (sp.alpha > 0) {
            ctx.beginPath();
            ctx.arc(spX, spY, sp.size, 0, Math.PI * 2);
            ctx.fillStyle = `${burst.color}${Math.max(0, sp.alpha)})`;
            ctx.shadowBlur = isMobile ? 0 : 8;
            ctx.shadowColor = "rgba(251, 191, 36, 0.5)";
            ctx.fill();
          }
        });
        ctx.restore();

        if (burst.alpha <= 0 || burst.radius > burst.maxRadius) {
          bursts[bIndex] = createBurst();
        }
      });

      // Periodically trigger ambient background bursts for hero
      if ((type === "hero" || type === "bursts") && bursts.length < (isMobile ? 2 : 4) && Math.random() < 0.008) {
        bursts.push(createBurst());
      }

      // 2. Render particles & sparkler trails
      particles.forEach((p, pIndex) => {
        p.life += 1;
        p.speedX += p.curve;
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= p.decay;

        // Record history for long exposure trails
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

          // Draw trailing line curve
          if (p.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let t = 1; t < p.trail.length; t++) {
              ctx.lineTo(p.trail[t].x, p.trail[t].y);
            }
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `${p.color}${Math.max(0, p.alpha * 0.35)})`;
            ctx.lineWidth = p.size * 0.8;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
          }

          // Draw head glow ember
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;

          if (!isMobile) {
            ctx.shadowBlur = p.size * 4;
            ctx.shadowColor = "rgba(251, 191, 36, 0.6)";
          }
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
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen transition-opacity duration-1000"
      style={{
        opacity,
        filter: "blur(0.3px)",
      }}
    />
  );
}
