"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Star,
  Pause,
  Play
} from "lucide-react";

export interface ShowcaseProduct {
  id: string;
  name: string;
  category: string;
  badge: string;
  image: string;
  link: string;
  desc: string;
  colorAccent: string;
}

const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  {
    id: "7cm-electric",
    name: "7 CM Electric Sparklers",
    category: "7 CM Standard Series",
    badge: "Popular Choice",
    image: "/products/7cm-electric.jpg",
    link: "/7cm-sparklers",
    desc: "Double-dipped steel wire core producing vibrant golden crackling sparks with zero fallout.",
    colorAccent: "#38BDF8",
  },
  {
    id: "7cm-colour",
    name: "7 CM Colour Sparklers",
    category: "7 CM Standard Series",
    badge: "Vibrant Stars",
    image: "/products/7cm-colour.jpg",
    link: "/7cm-sparklers",
    desc: "Multi-colour starbursts designed for joyful family celebrations and festive evenings.",
    colorAccent: "#A855F7",
  },
  {
    id: "7cm-green",
    name: "7 CM Green Sparklers",
    category: "7 CM Standard Series",
    badge: "Emerald Glow",
    image: "/products/7cm-green.jpg",
    link: "/7cm-sparklers",
    desc: "Vivid emerald green illumination formulated with eco-friendly CSIR-NEERI green technology.",
    colorAccent: "#22C55E",
  },
  {
    id: "7cm-red",
    name: "7 CM Red Sparklers",
    category: "7 CM Standard Series",
    badge: "Ruby Crimson",
    image: "/products/7cm-red.jpg",
    link: "/7cm-sparklers",
    desc: "Deep crimson and fiery ruby sparks creating an authentic festive Diwali atmosphere.",
    colorAccent: "#EF4444",
  },
  {
    id: "10cm-collection",
    name: "10 CM Sparklers Collection",
    category: "10 CM High Sparklers",
    badge: "5 Color Variants",
    image: "/products/10cm-products.jpg",
    link: "/10cm-sparklers",
    desc: "Popular 10 CM lineup: Electric, Colour, Green, Red, and Silver Drops formulations.",
    colorAccent: "#F59E0B",
  },
  {
    id: "12cm-collection",
    name: "12 CM Sparklers Collection",
    category: "12 CM Commercial Series",
    badge: "Event Grade",
    image: "/products/12cm-products.jpg",
    link: "/12cm-sparklers",
    desc: "Commercial event series featuring rich Electric, Colour, Green, and Red formulations.",
    colorAccent: "#EC4899",
  },
  {
    id: "15cm-collection",
    name: "15 CM Sparklers Collection",
    category: "15 CM Grand Event",
    badge: "Dense Crackle",
    image: "/products/15cm-products.jpg",
    link: "/15cm-sparklers",
    desc: "Heavy-gauge steel wire with dense starburst crackles and high-intensity radiance.",
    colorAccent: "#D4AF37",
  },
  {
    id: "30cm-collection",
    name: "30 CM Giant Sparklers",
    category: "30 CM Giant Series",
    badge: "Giant Format",
    image: "/products/30cm-products.jpg",
    link: "/30cm-sparklers",
    desc: "Extra long 30 CM format manufactured for festive displays and major public celebrations.",
    colorAccent: "#FBBF24",
  },
  {
    id: "50cm-collection",
    name: "50 CM Mega Sparklers",
    category: "50 CM Mega Series",
    badge: "Flagship Mega",
    image: "/products/50cm-products.jpg",
    link: "/50cm-sparklers",
    desc: "Flagship extra-long 50 CM mega sparklers delivering extended radiant golden spark illumination.",
    colorAccent: "#10B981",
  },
];

const AUTOPLAY_INTERVAL = 2800; // 2.8 seconds per slide

export default function ProductShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length);
    setProgressKey((prev) => prev + 1);
  }, []);

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  // Autoplay management
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, goToNext, currentIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "ArrowLeft") {
      goToPrev();
    } else if (e.key === " ") {
      e.preventDefault();
      setIsPaused((prev) => !prev);
    }
  };

  // Touch Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      const minSwipeDistance = 45;
      if (distance > minSwipeDistance) {
        goToNext();
      } else if (distance < -minSwipeDistance) {
        goToPrev();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
    setIsPaused(false);
  };

  const currentProduct = SHOWCASE_PRODUCTS[currentIndex];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5, ease: "easeOut" },
        scale: { duration: 0.5, ease: "easeOut" },
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Balakar Sparklers Product Showcase Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative max-w-4xl mx-auto mb-10 outline-none select-none group"
    >
      {/* Soft Ambient Golden Halo behind packaging showcase */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/25 via-[#D4AF37]/35 to-amber-500/25 rounded-3xl blur-2xl opacity-70 animate-pulse-slow pointer-events-none" />

      {/* Main Glass Showroom Card */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-white/95 backdrop-blur-2xl p-4 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300">
        
        {/* Top Header Row inside Showcase */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-amber-100/80 mb-3">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-50 border border-amber-200 text-[#D4AF37]">
              <Star className="h-3.5 w-3.5 fill-[#D4AF37]" />
            </span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0F172A]">
              Official Balakar Packaging Showroom
            </span>
          </div>

          {/* Product Counter & Autoplay status */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Play product carousel autoplay" : "Pause product carousel autoplay"}
              className="flex items-center justify-center h-6 w-6 rounded-full bg-amber-50 border border-amber-200 text-slate-700 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              {isPaused ? <Play className="h-3 w-3 fill-slate-700" /> : <Pause className="h-3 w-3 fill-slate-700" />}
            </button>

            <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#D4AF37] bg-amber-50/80 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
              {String(currentIndex + 1).padStart(2, "0")} / {String(SHOWCASE_PRODUCTS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Carousel Visual Area */}
        <div className="relative aspect-[21/11] sm:aspect-[2.3/1] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 p-2 sm:p-4 flex items-center justify-center">
          
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentProduct.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
            >
              <Link
                href={currentProduct.link}
                className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer"
              >
                {/* Product Image Stage */}
                <div className="relative w-full sm:w-1/2 h-[160px] sm:h-full flex items-center justify-center">
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    fill
                    className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] transform hover:scale-[1.03] transition-transform duration-500 p-1 sm:p-2"
                    priority={currentIndex === 0}
                  />
                </div>

                {/* Product Details & Variant Information */}
                <div className="w-full sm:w-1/2 flex flex-col justify-center text-left pl-1 sm:pl-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-sm"
                      style={{ backgroundColor: currentProduct.colorAccent }}
                    >
                      {currentProduct.badge}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {currentProduct.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-black text-[#0F172A] uppercase tracking-tight leading-tight">
                    {currentProduct.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 sm:mt-2 leading-relaxed">
                    {currentProduct.desc}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-extrabold text-[#D4AF37] hover:text-amber-600 transition-colors">
                    <span>View Size Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous product"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-amber-300 text-slate-800 shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 text-slate-800" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next product"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-amber-300 text-slate-800 shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 text-slate-800" />
          </button>
        </div>

        {/* Bottom Segmented Progress Indicator Bar (All 9 items) */}
        <div className="pt-3">
          <div className="grid grid-cols-9 gap-1 sm:gap-2">
            {SHOWCASE_PRODUCTS.map((prod, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={prod.id}
                  onClick={() => goToIndex(idx)}
                  aria-label={`Show ${prod.name}`}
                  className="group relative h-2.5 sm:h-3 rounded-full bg-slate-200/80 overflow-hidden transition-all duration-300 hover:bg-slate-300 cursor-pointer"
                >
                  {isActive ? (
                    <motion.div
                      key={`progress-${progressKey}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{
                        duration: isPaused ? 0.3 : AUTOPLAY_INTERVAL / 1000,
                        ease: "linear",
                      }}
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B]"
                    />
                  ) : (
                    <div
                      className={`h-full transition-all duration-300 ${
                        idx < currentIndex ? "bg-amber-300/80" : "bg-transparent"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Indicator Text Row */}
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-2 px-1">
            <span className="hidden sm:inline">← Click or swipe to explore variants →</span>
            <span className="sm:hidden">Swipe to explore</span>
            <span className="text-[#D4AF37] font-black">{currentProduct.name}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
