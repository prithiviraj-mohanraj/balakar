"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Tag } from "lucide-react";
import InquiryModal from "./inquiry-modal";

export default function MobileStickyBar() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-200/60 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl md:hidden flex gap-2">
        <a
          href="tel:+919443868706"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-800 active:bg-slate-100 transition-colors"
        >
          <Phone className="h-4 w-4 text-[#D4AF37]" />
          <span>Call</span>
        </a>
        
        <a
          href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-500 py-2.5 text-xs font-bold text-white active:bg-emerald-600 transition-colors"
        >
          <MessageSquare className="h-4 w-4 text-white fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setIsInquiryOpen(true)}
          className="flex flex-1.2 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0F172A] shadow-md transition-all cursor-pointer"
        >
          <Tag className="h-4 w-4 fill-[#0F172A]" />
          <span>Get Price</span>
        </button>
      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}
