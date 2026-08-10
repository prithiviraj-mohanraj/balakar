"use client";

import React from "react";

export interface GlowAtmosphereProps {
  color?: "gold" | "amber" | "emerald" | "crimson" | "blue" | "silver" | "multicolor";
  position?: "center" | "top-left" | "top-right" | "bottom-center" | "hero";
  intensity?: "soft" | "medium" | "strong";
  animate?: boolean;
}

export default function GlowAtmosphere({
  color = "gold",
  position = "center",
  intensity = "medium",
  animate = true,
}: GlowAtmosphereProps) {
  const getColorGradient = (c: string) => {
    switch (c) {
      case "emerald":
        return "from-emerald-500/15 via-emerald-400/5 to-transparent";
      case "crimson":
        return "from-red-500/15 via-amber-400/5 to-transparent";
      case "blue":
        return "from-blue-500/15 via-indigo-400/5 to-transparent";
      case "silver":
        return "from-slate-400/15 via-amber-200/5 to-transparent";
      case "amber":
        return "from-amber-400/20 via-amber-300/10 to-transparent";
      case "multicolor":
        return "from-purple-500/15 via-pink-400/5 to-transparent";
      case "gold":
      default:
        return "from-[#D4AF37]/20 via-amber-300/10 to-transparent";
    }
  };

  const getPositionClass = (pos: string) => {
    switch (pos) {
      case "top-left":
        return "-top-32 -left-32 w-[500px] h-[500px]";
      case "top-right":
        return "-top-32 -right-32 w-[500px] h-[500px]";
      case "bottom-center":
        return "-bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px]";
      case "hero":
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px]";
      case "center":
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px]";
    }
  };

  const getOpacityClass = (inst: string) => {
    switch (inst) {
      case "soft":
        return "opacity-50";
      case "strong":
        return "opacity-90";
      case "medium":
      default:
        return "opacity-70";
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Radial Glow Orb for Light Backgrounds */}
      <div
        className={`absolute rounded-full bg-radial ${getColorGradient(
          color
        )} ${getPositionClass(position)} ${getOpacityClass(
          intensity
        )} filter blur-3xl ${animate ? "animate-pulse-slow" : ""}`}
      />

      {/* Subtle Rotating Light Rays */}
      {position === "hero" && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] pointer-events-none -z-10 opacity-20 ${
            animate ? "animate-rotate-slow" : ""
          } bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.2)_20deg,transparent_40deg,rgba(212,175,55,0.2)_60deg,transparent_80deg,rgba(212,175,55,0.2)_100deg,transparent_120deg,rgba(212,175,55,0.2)_140deg,transparent_160deg,rgba(212,175,55,0.2)_180deg,transparent_200deg,rgba(212,175,55,0.2)_220deg,transparent_240deg,rgba(212,175,55,0.2)_260deg,transparent_280deg,rgba(212,175,55,0.2)_300deg,transparent_320deg,rgba(212,175,55,0.2)_340deg,transparent_360deg)]`}
        />
      )}
    </div>
  );
}
