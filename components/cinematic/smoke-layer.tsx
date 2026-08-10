"use client";

import React from "react";

export interface SmokeLayerProps {
  opacity?: number;
  speed?: "slow" | "medium";
}

export default function SmokeLayer({
  opacity = 0.2,
  speed = "slow",
}: SmokeLayerProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen"
      style={{ opacity }}
    >
      {/* Animated Smoke Haze Blob 1 */}
      <div
        className={`absolute -top-1/4 -left-1/4 w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06)_0%,transparent_60%)] filter blur-3xl ${
          speed === "slow" ? "animate-pulse-slow" : "animate-pulse"
        }`}
      />
      {/* Animated Smoke Haze Blob 2 */}
      <div
        className={`absolute -bottom-1/4 -right-1/4 w-[120%] h-[120%] bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.05)_0%,transparent_65%)] filter blur-3xl ${
          speed === "slow" ? "animate-float-slow" : "animate-bounce"
        }`}
      />
    </div>
  );
}
