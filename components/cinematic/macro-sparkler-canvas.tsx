"use client";

import React, { useEffect, useRef } from "react";

export interface MacroSparklerCanvasProps {
  opacity?: number;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  color: string;
  isHotCore: boolean;
  gravity: number;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
}

interface EmberParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

interface BezierLightSweep {
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
  history: { x: number; y: number }[];
}

interface MacroCombustionCluster {
  x: number; // Off-screen or edge position
  y: number;
  active: boolean;
  timer: number;
  duration: number;
  sparks: SparkParticle[];
}

export default function MacroSparklerCanvas({ opacity = 0.95 }: MacroSparklerCanvasProps) {
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

    // Color palettes simulating real high-speed sparkler combustion
    const colors = [
      "rgba(255, 255, 255, ",  // White-hot ignition core
      "rgba(254, 240, 138, ", // Amber-200 bright spark
      "rgba(251, 191, 36, ",  // Amber-400 gold body
      "rgba(245, 158, 11, ",  // Amber-500 warm gold
      "rgba(217, 119, 6, ",   // Amber-600 deep gold
      "rgba(234, 88, 12, ",   // Orange-600 tail spark
    ];

    // Helper: Create a single irregular sparkler particle
    const createSpark = (originX: number, originY: number, spreadMultiplier = 1.0): SparkParticle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 4.2 + 0.8) * spreadMultiplier;
      const isHotCore = Math.random() < 0.2; // 20% white-hot core sparks

      return {
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 0.5),
        size: isHotCore ? Math.random() * 2.8 + 1.8 : Math.random() * 2.0 + 0.8,
        alpha: Math.random() * 0.75 + 0.25,
        maxAlpha: 0.9,
        decay: Math.random() * 0.018 + 0.007,
        color: isHotCore ? colors[0] : colors[Math.floor(Math.random() * (colors.length - 1)) + 1],
        isHotCore,
        gravity: Math.random() * 0.1 + 0.04,
        life: 0,
        maxLife: Math.random() * 50 + 20,
        trail: [],
      };
    };

    // Helper: Create a drifting background ember
    const createEmber = (w: number, h: number): EmberParticle => {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(Math.random() * 0.5 + 0.2),
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
        decay: Math.random() * 0.002 + 0.001,
        color: colors[Math.floor(Math.random() * (colors.length - 1)) + 1],
      };
    };

    // Initialize 20 ambient embers
    let embers: EmberParticle[] = [];
    const emberCount = isMobile ? 10 : 22;
    for (let i = 0; i < emberCount; i++) {
      embers.push(createEmber(canvas.width, canvas.height));
    }

    // Bezier Light Sweep Instance (S-curve trail sweep)
    let lightSweep: BezierLightSweep = {
      startX: -60,
      startY: canvas.height * 0.25,
      cp1X: canvas.width * 0.25,
      cp1Y: canvas.height * 0.1,
      cp2X: canvas.width * 0.45,
      cp2Y: canvas.height * 0.55,
      endX: canvas.width * 0.75,
      endY: canvas.height * 0.2,
      progress: 0,
      speed: 0.0035,
      active: true,
      history: [],
    };

    // Off-screen Macro Sparkler Combustion Cluster near upper right edge
    let macroCluster: MacroCombustionCluster = {
      x: canvas.width * 0.92,
      y: canvas.height * 0.18,
      active: false,
      timer: 0,
      duration: 180,
      sparks: [],
    };

    // Sequence Timer (0..600 frames = 10s loop at 60fps)
    let globalFrameCount = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      globalFrameCount++;

      // -------------------------------------------------------------------
      // LAYER 1: Ambient Floating Golden Embers (Foreground/Background depth)
      // -------------------------------------------------------------------
      embers.forEach((emb, eIdx) => {
        emb.x += emb.vx;
        emb.y += emb.vy;
        emb.alpha -= emb.decay;

        if (emb.alpha <= 0 || emb.y < -20) {
          embers[eIdx] = createEmber(canvas.width, canvas.height);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(emb.x, emb.y, emb.size, 0, Math.PI * 2);
          ctx.fillStyle = `${emb.color}${Math.max(0, emb.alpha)})`;
          ctx.fill();
          ctx.restore();
        }
      });

      // -------------------------------------------------------------------
      // LAYER 2: Organic Bezier Sparkler Light Sweep (Sweeps gracefully from off-screen left)
      // -------------------------------------------------------------------
      if (globalFrameCount % 450 === 180) {
        // Reset Light Sweep with randomized Bezier points
        lightSweep = {
          startX: -60,
          startY: Math.random() * (canvas.height * 0.3) + canvas.height * 0.15,
          cp1X: canvas.width * 0.25,
          cp1Y: Math.random() * (canvas.height * 0.2),
          cp2X: canvas.width * 0.5,
          cp2Y: Math.random() * (canvas.height * 0.4) + canvas.height * 0.3,
          endX: canvas.width * 0.85,
          endY: Math.random() * (canvas.height * 0.3) + canvas.height * 0.2,
          progress: 0,
          speed: isMobile ? 0.005 : 0.0035,
          active: true,
          history: [],
        };
      }

      if (lightSweep.active) {
        lightSweep.progress += lightSweep.speed;
        const t = lightSweep.progress;

        if (t <= 1) {
          // Calculate Cubic Bezier Point: B(t) = (1-t)^3*P0 + 3(1-t)^2*t*P1 + 3(1-t)*t^2*P2 + t^3*P3
          const invT = 1 - t;
          const currentX =
            invT * invT * invT * lightSweep.startX +
            3 * invT * invT * t * lightSweep.cp1X +
            3 * invT * t * t * lightSweep.cp2X +
            t * t * t * lightSweep.endX;
          const currentY =
            invT * invT * invT * lightSweep.startY +
            3 * invT * invT * t * lightSweep.cp1Y +
            3 * invT * t * t * lightSweep.cp2Y +
            t * t * t * lightSweep.endY;

          lightSweep.history.push({ x: currentX, y: currentY });
          if (lightSweep.history.length > (isMobile ? 14 : 24)) {
            lightSweep.history.shift();
          }

          // Emit irregular sparks from the moving sweep tip
          if (Math.random() < 0.65) {
            const spark = createSpark(currentX, currentY, 0.7);
            macroCluster.sparks.push(spark);
          }

          // Draw Light Sweep Trail Line
          if (lightSweep.history.length > 1) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(lightSweep.history[0].x, lightSweep.history[0].y);
            for (let h = 1; h < lightSweep.history.length; h++) {
              ctx.lineTo(lightSweep.history[h].x, lightSweep.history[h].y);
            }
            ctx.strokeStyle = "rgba(245, 158, 11, 0.45)";
            ctx.lineWidth = 3.0;
            ctx.lineCap = "round";
            ctx.stroke();

            // White-hot sweep head
            ctx.beginPath();
            ctx.arc(currentX, currentY, 4.0, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            ctx.shadowColor = "#F59E0B";
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.restore();
          }
        } else {
          lightSweep.active = false;
        }
      }

      // -------------------------------------------------------------------
      // LAYER 3: Off-Screen Macro Sparkler Combustion Cluster (Upper-Right Edge)
      // -------------------------------------------------------------------
      if (globalFrameCount % 500 === 300) {
        macroCluster.active = true;
        macroCluster.timer = 0;
        macroCluster.x = canvas.width * 0.92;
        macroCluster.y = canvas.height * 0.22;
      }

      if (macroCluster.active) {
        macroCluster.timer++;
        
        // Spawn cluster sparks from off-screen/edge source
        if (macroCluster.timer < macroCluster.duration) {
          const spawnPerFrame = isMobile ? 2 : 4;
          for (let s = 0; s < spawnPerFrame; s++) {
            macroCluster.sparks.push(createSpark(macroCluster.x, macroCluster.y, 1.2));
          }

          // Draw white-hot combustion tip bloom at edge
          ctx.save();
          const radialGlow = ctx.createRadialGradient(
            macroCluster.x, macroCluster.y, 0,
            macroCluster.x, macroCluster.y, 35
          );
          radialGlow.addColorStop(0, "rgba(255, 255, 255, 0.95)");
          radialGlow.addColorStop(0.3, "rgba(251, 191, 36, 0.65)");
          radialGlow.addColorStop(1, "rgba(217, 119, 6, 0)");

          ctx.beginPath();
          ctx.arc(macroCluster.x, macroCluster.y, 35, 0, Math.PI * 2);
          ctx.fillStyle = radialGlow;
          ctx.fill();
          ctx.restore();
        } else {
          macroCluster.active = false;
        }
      }

      // Render Active Sparks Array (Irregular high-speed camera physics)
      for (let pIdx = macroCluster.sparks.length - 1; pIdx >= 0; pIdx--) {
        const p = macroCluster.sparks[pIdx];
        p.life++;
        p.vy += p.gravity; // Realistic gravity drop
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) p.trail.shift();

        if (p.alpha <= 0 || p.life > p.maxLife) {
          macroCluster.sparks.splice(pIdx, 1);
        } else {
          ctx.save();

          // High-speed tail line
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

          // Glowing spark head
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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000"
      style={{ opacity }}
    />
  );
}
