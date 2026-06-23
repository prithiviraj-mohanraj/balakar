"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, MessageSquare, ArrowRight, Download, FileText, CheckCircle } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function CatalogPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Catalog", item: "/catalog" }
  ]);

  return (
    <div className="flex-1 bg-white font-sans text-zinc-900 overflow-x-hidden pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Header />

      {/* Header Info */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 sm:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Brochures & Media</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl mt-2">
            Download Product Catalog
          </h1>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Get instant access to our official Balakar Sparklers catalog and pack details for all sizes (7cm, 10cm, 12cm, 15cm, 30cm, 50cm).
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Card: PDF Download */}
            <div className="rounded-3xl border border-zinc-150 p-8 shadow-sm bg-white flex flex-col justify-between gap-6">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-6">
                  <FileText className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-bold text-zinc-950">Official PDF Product Catalog</h2>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  Contains high-resolution images of our packaging boxes (Phoenix Brand), official certification listings (CSIR-NEERI License), size charts, and variety lists.
                </p>
                
                <ul className="mt-6 flex flex-col gap-3 text-xs text-zinc-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Includes 7cm, 10cm, 12cm, 15cm, 30cm, 50cm Sparklers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Contains official trademark license markings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>File size: ~2.4 MB (High-Quality Print PDF)</span>
                  </li>
                </ul>
              </div>

              {/* Direct Simulated Trigger */}
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] py-3.5 text-xs font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all cursor-pointer hover:scale-[1.01]"
              >
                <Download className="h-4 w-4 text-white" />
                <span>Request Download & Price List</span>
              </button>
            </div>

            {/* Right Card: Custom WhatsApp Catalog */}
            <div className="rounded-3xl border border-zinc-150 p-8 shadow-sm bg-zinc-50/30 flex flex-col justify-between gap-6">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-6">
                  <MessageSquare className="h-5 w-5 fill-emerald-50" />
                </span>
                <h2 className="text-xl font-bold text-zinc-950">Get Catalog on WhatsApp</h2>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  Would you prefer to receive the product catalog and custom wholesale price list directly on your phone? Contact our WhatsApp desk.
                </p>
                
                <ul className="mt-6 flex flex-col gap-3 text-xs text-zinc-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Instant dispatch of PDF sheet via chat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Quick response for packaging customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Direct chats with factory sales desk</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="h-4 w-4 fill-white" />
                <span>Message Catalog Desk</span>
              </a>
            </div>
          </div>

          {/* Catalog references strip */}
          <div className="mt-16 text-center">
            <p className="text-xs text-zinc-500">
              Need immediate clarification on pricing configurations?
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919443868706"
                className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-zinc-500" /> Call representative
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
      <FloatingInquiry />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
}
