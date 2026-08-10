"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Download, FileText, CheckCircle, Flame } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";

import FireworkBackground from "../../components/cinematic/firework-background";
import GlowAtmosphere from "../../components/cinematic/glow-atmosphere";
import SmokeLayer from "../../components/cinematic/smoke-layer";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function CatalogPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Catalog", item: "/catalog" }
  ]);

  return (
    <div className="relative min-h-screen bg-[#05050A] text-slate-100 selection:bg-[#D4AF37] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Header />

      {/* Header Info */}
      <section className="relative overflow-hidden py-20 border-b border-white/10">
        <FireworkBackground type="hero" density={40} opacity={0.6} colorScheme="gold" />
        <GlowAtmosphere position="center" color="gold" intensity="medium" />
        <SmokeLayer opacity={0.2} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block">OFFICIAL BROCHURES & MEDIA</span>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl uppercase mt-2">
            Download <span className="text-[#D4AF37] gold-glow-text">Product Catalog</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get instant access to our official Balakar Sparklers catalog and pack specifications for all sizes (7cm, 10cm, 12cm, 15cm, 30cm, 50cm).
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative overflow-hidden py-20 border-b border-white/10 bg-[#08080C]">
        <FireworkBackground type="bursts" density={25} opacity={0.4} colorScheme="gold" />
        
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Card: PDF Download */}
            <div className="rounded-3xl border border-white/15 p-8 shadow-2xl bg-[#0A0B12] flex flex-col justify-between gap-6">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] mb-6">
                  <FileText className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">Official PDF Product Catalog</h2>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Contains high-resolution images of our packaging boxes (Phoenix Brand), official certification listings (CSIR-NEERI License), size charts, and variety lists.
                </p>
                
                <ul className="mt-6 flex flex-col gap-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Includes 7cm, 10cm, 12cm, 15cm, 30cm, 50cm Sparklers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Contains official trademark license markings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>File size: ~2.4 MB (High-Quality Print PDF)</span>
                  </li>
                </ul>
              </div>

              {/* Direct Trigger */}
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] py-4 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer hover:scale-[1.01]"
              >
                <Download className="h-4 w-4 fill-black" />
                <span>Request Download & Price List</span>
              </button>
            </div>

            {/* Right Card: Custom WhatsApp Catalog */}
            <div className="rounded-3xl border border-white/15 p-8 shadow-2xl bg-[#0A0B12] flex flex-col justify-between gap-6">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mb-6">
                  <MessageSquare className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">Get Catalog on WhatsApp</h2>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Would you prefer to receive the product catalog and custom wholesale price list directly on your mobile phone? Connect with our WhatsApp desk.
                </p>
                
                <ul className="mt-6 flex flex-col gap-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Instant dispatch of PDF sheet via chat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Quick response for packaging customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Direct chats with factory sales desk</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 py-4 text-xs font-extrabold uppercase tracking-widest text-emerald-400 hover:bg-emerald-500/25 transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>Message Catalog Desk</span>
              </a>
            </div>
          </div>

          {/* Catalog references strip */}
          <div className="mt-16 text-center">
            <p className="text-xs text-slate-400">
              Need immediate clarification on pricing configurations?
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="tel:+919443868706"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4 text-[#D4AF37]" /> Call Sales Representative
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
