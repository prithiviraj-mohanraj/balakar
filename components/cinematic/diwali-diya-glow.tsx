"use client";

import React from "react";

export interface DiwaliDiyaGlowProps {
  className?: string;
}

export default function DiwaliDiyaGlow({ className = "" }: DiwaliDiyaGlowProps) {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Warm Ambient Diya Light Hearth beneath Product Showroom */}
      <div className="relative w-full h-44 flex items-end justify-center">
        {/* Soft Golden Rangoli-inspired Geometric Radial Glow */}
        <div
          className="absolute bottom-[-20px] w-[600px] sm:w-[900px] h-[160px] rounded-[100%] blur-3xl opacity-40 animate-pulse-slow"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.45) 0%, rgba(245, 158, 11, 0.25) 45%, rgba(217, 119, 6, 0) 75%)",
          }}
        />

        {/* Delicate Golden Diya Silhouettes with Flickering Flame Glow */}
        <div className="relative z-20 flex items-center justify-center gap-12 sm:gap-24 pb-3 opacity-75">
          {/* Left Diya */}
          <div className="flex flex-col items-center">
            {/* Flickering Flame Aura */}
            <div className="h-4 w-2.5 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_16px_rgba(251,191,36,0.9)] animate-pulse" />
            {/* Elegant Diya Silhouette */}
            <svg
              width="28"
              height="12"
              viewBox="0 0 28 12"
              fill="none"
              className="text-amber-300/80 -mt-0.5"
            >
              <path
                d="M1 4C4 10 24 10 27 4C23 11 5 11 1 4Z"
                fill="currentColor"
                stroke="rgba(245,158,11,0.6)"
                strokeWidth="1"
              />
              <path
                d="M10 10H18L17 12H11L10 10Z"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Center Diya Hearth */}
          <div className="flex flex-col items-center scale-110">
            {/* Flickering Flame Aura */}
            <div className="h-5 w-3 rounded-full bg-gradient-to-t from-amber-500 via-yellow-200 to-white shadow-[0_0_22px_rgba(251,191,36,1)] animate-pulse" />
            <svg
              width="34"
              height="14"
              viewBox="0 0 34 14"
              fill="none"
              className="text-[#D4AF37] -mt-0.5"
            >
              <path
                d="M1 5C5 12 29 12 33 5C28 13 6 13 1 5Z"
                fill="currentColor"
                stroke="rgba(212,175,55,0.7)"
                strokeWidth="1.2"
              />
              <path
                d="M12 12H22L21 14H13L12 12Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Right Diya */}
          <div className="flex flex-col items-center">
            {/* Flickering Flame Aura */}
            <div className="h-4 w-2.5 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_16px_rgba(251,191,36,0.9)] animate-pulse" />
            <svg
              width="28"
              height="12"
              viewBox="0 0 28 12"
              fill="none"
              className="text-amber-300/80 -mt-0.5"
            >
              <path
                d="M1 4C4 10 24 10 27 4C23 11 5 11 1 4Z"
                fill="currentColor"
                stroke="rgba(245,158,11,0.6)"
                strokeWidth="1"
              />
              <path
                d="M10 10H18L17 12H11L10 10Z"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
