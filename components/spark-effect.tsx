"use client";

import React, { useEffect, useRef } from "react";

interface SparkEffectProps {
  type?: "sparkle" | "trails" | "orbs" | "drift";
  density?: number;
  speed?: number;
  opacity?: number;
  colorScheme?: "gold" | "amber" | "royal-blue" | "warm-white";
}

export default function SparkEffect({
  type = "drift",
  density = 30,
  speed = 1,
  opacity = 0.4,
  colorScheme = "gold",
}: SparkEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      decay: number;
      color: string;
      twinkleSpeed?: number;
      twinkleDir?: number;
      history: Array<{ x: number; y: number }>;
    }> = [];

    // Safely check for mobile viewports
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    // Scale density & features down on mobile for Lighthouse and FPS budget
    const activeDensity = isMobile ? Math.ceil(density * 0.4) : density;
    const enableTrails = type === "trails" && !isMobile;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dynamic color lists based on scheme
    let colors: string[] = [];
    if (colorScheme === "gold") {
      colors = [
        "rgba(251, 191, 36, ",  // amber-400
        "rgba(245, 158, 11, ",  // amber-500
        "rgba(253, 224, 71, ",  // yellow-300
        "rgba(255, 244, 219, ", // warm white
      ];
    } else if (colorScheme === "amber") {
      colors = [
        "rgba(245, 158, 11, ",  // amber-500
        "rgba(217, 119, 6, ",   // amber-600
        "rgba(251, 191, 36, ",  // amber-400
      ];
    } else if (colorScheme === "royal-blue") {
      colors = [
        "rgba(37, 99, 235, ",   // blue-600
        "rgba(59, 130, 246, ",  // blue-500
        "rgba(99, 102, 241, ",  // indigo-500
      ];
    } else if (colorScheme === "warm-white") {
      colors = [
        "rgba(255, 255, 255, ",
        "rgba(254, 243, 199, ", // amber-50
        "rgba(253, 224, 71, ",  // yellow-300
      ];
    }

    const createParticle = (x: number, y: number, isInitial = false) => {
      let size = Math.random() * 1.5 + 0.6;
      let speedX = (Math.random() - 0.5) * 0.4 * speed;
      let speedY = -(Math.random() * 0.4 + 0.15) * speed;
      let alpha = Math.random() * 0.6 + 0.2;
      let decay = Math.random() * 0.002 + 0.001 * speed;
      const history: Array<{ x: number; y: number }> = [];

      if (type === "orbs") {
        size = Math.random() * 18 + 8; // large faint floating spheres
        speedX = (Math.random() - 0.5) * 0.12 * speed;
        speedY = -(Math.random() * 0.12 + 0.04) * speed;
        alpha = Math.random() * 0.12 + 0.04;
        decay = Math.random() * 0.0004 + 0.0002;
      } else if (type === "trails") {
        size = Math.random() * 1.8 + 0.8;
        speedX = (Math.random() - 0.5) * 0.7 * speed;
        speedY = -(Math.random() * 0.7 + 0.3) * speed;
        alpha = Math.random() * 0.8 + 0.2;
        decay = Math.random() * 0.004 + 0.002 * speed;
      } else if (type === "sparkle") {
        size = Math.random() * 1.3 + 0.5;
        speedX = (Math.random() - 0.5) * 0.25 * speed;
        speedY = -(Math.random() * 0.25 + 0.05) * speed;
        alpha = Math.random() * 0.7 + 0.1;
        decay = Math.random() * 0.001 + 0.0005 * speed;
      }

      const posY = isInitial ? Math.random() * canvas.height : y;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const twinkleSpeed = Math.random() * 0.015 + 0.005;
      const twinkleDir = Math.random() > 0.5 ? 1 : -1;

      return { x, y: posY, size, speedX, speedY, alpha, decay, color, twinkleSpeed, twinkleDir, history };
    };

    // Pre-populate particles
    for (let i = 0; i < activeDensity; i++) {
      particles.push(
        createParticle(
          Math.random() * canvas.width,
          canvas.height,
          true
        )
      );
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < activeDensity && Math.random() < 0.25) {
        particles.push(
          createParticle(
            Math.random() * canvas.width,
            canvas.height + 10
          )
        );
      }

      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (type === "sparkle") {
          if (p.twinkleSpeed && p.twinkleDir) {
            p.alpha += p.twinkleSpeed * p.twinkleDir;
            if (p.alpha >= 0.8) p.twinkleDir = -1;
            if (p.alpha <= 0.15) p.twinkleDir = 1;
          }
          p.alpha -= p.decay * 0.3;
        } else {
          p.alpha -= p.decay;
        }

        if (enableTrails) {
          p.history.push({ x: p.x, y: p.y });
          if (p.history.length > 7) {
            p.history.shift();
          }
        }

        const isOffscreen = p.alpha <= 0 || p.y < -30 || p.x < -30 || p.x > canvas.width + 30;

        if (isOffscreen) {
          particles[index] = createParticle(
            Math.random() * canvas.width,
            canvas.height + 10
          );
        } else {
          ctx.save();
          
          if (type === "orbs") {
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
            grad.addColorStop(0, `${p.color}${p.alpha})`);
            grad.addColorStop(0.3, `${p.color}${p.alpha * 0.5})`);
            grad.addColorStop(1, `${p.color}0)`);
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            if (enableTrails && p.history.length > 1) {
              ctx.beginPath();
              ctx.moveTo(p.history[0].x, p.history[0].y);
              for (let i = 1; i < p.history.length; i++) {
                ctx.lineTo(p.history[i].x, p.history[i].y);
              }
              ctx.lineTo(p.x, p.y);
              ctx.strokeStyle = `${p.color}${p.alpha * 0.2})`;
              ctx.lineWidth = p.size * 0.7;
              ctx.lineCap = "round";
              ctx.lineJoin = "round";
              ctx.stroke();
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${p.alpha})`;
            if (!isMobile) {
              ctx.shadowBlur = p.size * (type === "trails" ? 5 : 3);
              ctx.shadowColor = "rgba(251, 191, 36, 0.35)";
            }
            ctx.fill();
          }
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type, density, speed, opacity, colorScheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
      style={{
        opacity: opacity,
        filter: type === "orbs" ? "none" : "blur(0.2px)",
      }}
    />
  );
}
