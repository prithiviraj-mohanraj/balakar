"use client";

import React, { useEffect, useRef } from "react";

export default function SparkEffect() {
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
      history: Array<{ x: number; y: number }>;
    }> = [];

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = [
      "rgba(251, 191, 36, ",  // amber-400
      "rgba(245, 158, 11, ",  // amber-500
      "rgba(217, 119, 6, ",   // amber-600
      "rgba(253, 224, 71, ",  // yellow-300
    ];

    const createParticle = (x: number, y: number) => {
      const size = Math.random() * 2 + 0.8;
      const speedX = (Math.random() - 0.5) * 1.5;
      const speedY = -(Math.random() * 1.8 + 0.6);
      const alpha = Math.random() * 0.8 + 0.2;
      const decay = Math.random() * 0.006 + 0.003;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const history: Array<{ x: number; y: number }> = [];

      return { x, y, size, speedX, speedY, alpha, decay, color, history };
    };

    // Pre-populate particles
    for (let i = 0; i < 30; i++) {
      particles.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn a new particle occasionally
      if (particles.length < 50 && Math.random() < 0.2) {
        // Spawn near the bottom
        particles.push(
          createParticle(
            Math.random() * canvas.width,
            canvas.height - Math.random() * 50
          )
        );
      }

      particles.forEach((p, index) => {
        // Add current position to history for trailing effect
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > 6) {
          p.history.shift();
        }

        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.y < 0 || p.x < 0 || p.x > canvas.width) {
          particles[index] = createParticle(
            Math.random() * canvas.width,
            canvas.height + 10
          );
        } else {
          ctx.save();
          
          // Draw trail
          if (p.history.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.history[0].x, p.history[0].y);
            for (let i = 1; i < p.history.length; i++) {
              ctx.lineTo(p.history[i].x, p.history[i].y);
            }
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `${p.color}${p.alpha * 0.25})`;
            ctx.lineWidth = p.size * 0.8;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
          }

          // Draw head glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.shadowBlur = p.size * 4;
          ctx.shadowColor = "rgba(251, 191, 36, 0.6)";
          ctx.fill();
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
      style={{ filter: "blur(0.5px)" }}
    />
  );
}
