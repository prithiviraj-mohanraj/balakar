"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, X, Flame } from "lucide-react";
import InquiryModal from "./inquiry-modal";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingInquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-30 hidden lg:flex items-center gap-3 rounded-full border border-amber-200/80 bg-white/95 backdrop-blur-xl px-4 py-2.5 shadow-xl text-slate-900"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 border border-amber-200 text-[#D4AF37]">
                <Flame className="h-3.5 w-3.5 fill-[#D4AF37]" />
              </span>
              <span className="text-xs font-bold text-slate-800">
                Sivakasi Plant Wholesale Quotes
              </span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#0F172A] shadow-sm hover:scale-[1.03] transition-transform cursor-pointer"
            >
              <span>Get Price</span>
              <ChevronRight className="h-3 w-3 text-[#0F172A]" />
            </button>

            <button
              onClick={handleDismiss}
              className="rounded-full p-1 text-slate-400 hover:bg-amber-50 hover:text-slate-700 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <InquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
