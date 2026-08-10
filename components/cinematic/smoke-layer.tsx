"use client";

import React from "react";

export interface SmokeLayerProps {
  opacity?: number;
  speed?: "slow" | "medium";
}

export default function SmokeLayer({
  opacity = 0.15,
  speed = "slow",
}: SmokeLayerProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity }}
    >
      {/* Soft Ambient Haze Blob */}
      <div
        className={`absolute -top-1/4 -left-1/4 w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08)_0%,transparent_60%)] filter blur-3xl ${
          speed === "slow" ? "animate-pulse-slow" : "animate-pulse"
        }`}
      />
    </div>
  );
}
