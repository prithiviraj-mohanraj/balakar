"use client";

import React, { useState } from "react";
import { MessageSquare, Flame } from "lucide-react";
import InquiryModal from "./inquiry-modal";

export default function MobileStickyBar() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-200/60 bg-white/95 backdrop-blur-xl px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_25px_rgba(0,0,0,0.08)] rounded-t-3xl md:hidden flex items-center justify-between gap-3">
        {/* WhatsApp Action */}
        <a
          href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 py-3 text-xs font-bold text-emerald-800 active:bg-emerald-100 transition-colors shadow-sm"
        >
          <MessageSquare className="h-4 w-4 text-emerald-600 fill-emerald-100" />
          <span>WhatsApp</span>
        </a>

        {/* Wholesale Enquiry Action */}
        <button
          onClick={() => setIsInquiryOpen(true)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] py-3 text-xs font-extrabold uppercase tracking-wider text-[#0F172A] shadow-md active:scale-[0.98] transition-transform cursor-pointer"
        >
          <Flame className="h-4 w-4 fill-[#0F172A]" />
          <span>Wholesale Enquiry</span>
        </button>
      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}
