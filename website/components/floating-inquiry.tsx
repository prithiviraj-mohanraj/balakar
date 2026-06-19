"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, FileText, ChevronRight, X, Sparkles } from "lucide-react";
import InquiryModal from "./inquiry-modal";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingInquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 3 seconds on desktop
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
            className="fixed bottom-6 right-6 z-40 hidden md:block w-80 rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          >
            {/* Close */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 rounded-full p-1 text-zinc-400 hover:bg-zinc-50 hover:text-zinc-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Sparkles className="h-4 w-4 fill-amber-50" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Wholesale Factory Pricing</h4>
                  <p className="text-xs text-zinc-500">Balakar Sparklers Sivakasi</p>
                </div>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                Planning bulk purchases for the festive season? Get wholesale catalog direct from our Sivakasi manufacturing plant.
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:shadow-[0_0_12px_rgba(37,99,235,0.3)] transition-all cursor-pointer hover:scale-[1.01]"
                >
                  <span>Request Factory Price List</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="/catalog"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors"
                  >
                    <FileText className="h-3.5 w-3.5 text-amber-500" />
                    <span>PDF Catalog</span>
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
