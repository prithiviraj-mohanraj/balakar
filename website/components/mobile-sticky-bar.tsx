"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Tag } from "lucide-react";
import InquiryModal from "./inquiry-modal";

export default function MobileStickyBar() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-150 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] backdrop-blur-md md:hidden flex gap-2">
        <a
          href="tel:+919443868706"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white py-2.5 text-xs font-bold text-zinc-800 active:bg-zinc-50 transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span>Call Now</span>
        </a>
        
        <a
          href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white active:bg-emerald-700 transition-colors"
        >
          <MessageSquare className="h-4 w-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setIsInquiryOpen(true)}
          className="flex flex-1.2 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] py-2.5 text-xs font-bold text-white shadow-md hover:shadow-[0_0_10px_rgba(37,99,235,0.25)] transition-all cursor-pointer"
        >
          <Tag className="h-4 w-4" />
          <span>Get Pricing</span>
        </button>
      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}
