"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, FileText, ChevronRight, X, Flame } from "lucide-react";
import InquiryModal from "./inquiry-modal";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingInquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 3.5 seconds on desktop
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3500);

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
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 hidden md:block w-80 rounded-2xl border border-white/10 bg-[#0A0B12]/95 backdrop-blur-xl p-5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] text-slate-100"
          >
            {/* Close */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                  <Flame className="h-4 w-4 fill-[#D4AF37]" />
                </span>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">Wholesale Desk</h4>
                  <p className="text-[11px] text-slate-400 font-semibold">Sivakasi Sparklers Plant</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Planning bulk consignments for festive season? Request direct wholesale price list & dispatch schedule.
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all cursor-pointer hover:scale-[1.01]"
                >
                  <span>Request Factory Price List</span>
                  <ChevronRight className="h-4 w-4 text-black" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="/catalog"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-bold text-slate-300 hover:bg-white/10 transition-colors"
                  >
                    <FileText className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>Catalog</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <InquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
