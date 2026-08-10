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
    <div className="relative min-h-screen bg-[#FFFDF7] text-slate-900 selection:bg-[#D4AF37] selection:text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Header />

      {/* Header Info */}
      <section className="relative overflow-hidden py-20 border-b border-amber-100 bg-gradient-to-b from-[#FFFDF7] via-[#FAF9F6] to-[#FFFDF7]">
        <FireworkBackground type="hero" density={35} opacity={0.7} colorScheme="gold" />
        <GlowAtmosphere position="center" color="gold" intensity="medium" />
        <SmokeLayer opacity={0.15} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block">OFFICIAL BROCHURES & MEDIA</span>
          <h1 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl uppercase mt-2">
            Download <span className="text-[#D4AF37] gold-glow-text">Product Catalog</span>
          </h1>
          <p className="mt-4 text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Get instant access to our official Balakar Sparklers catalog and pack specifications for all sizes (7cm, 10cm, 12cm, 15cm, 30cm, 50cm).
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative overflow-hidden py-20 border-b border-amber-100 bg-[#FAF9F6]">
        <FireworkBackground type="bursts" density={25} opacity={0.5} colorScheme="gold" />
        
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Card: PDF Download */}
            <div className="rounded-3xl border border-amber-200 p-8 shadow-md bg-white flex flex-col justify-between gap-6">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-[#D4AF37] mb-6">
                  <FileText className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-extrabold text-[#0F172A] uppercase tracking-wider">Official PDF Product Catalog</h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Contains high-resolution images of our packaging boxes (Phoenix Brand), official certification listings (CSIR-NEERI License), size charts, and variety lists.
                </p>
                
                <ul className="mt-6 flex flex-col gap-3 text-xs text-slate-700">
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

              {/* Direct Trigger */}
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] py-4 text-xs font-extrabold uppercase tracking-widest text-[#0F172A] shadow-md cursor-pointer hover:scale-[1.01]"
              >
                <Download className="h-4 w-4 fill-[#0F172A]" />
                <span>Request Download & Price List</span>
              </button>
            </div>

            {/* Right Card: Custom WhatsApp Catalog */}
            <div className="rounded-3xl border border-emerald-200 p-8 shadow-md bg-white flex flex-col justify-between gap-6">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mb-6">
                  <MessageSquare className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-extrabold text-[#0F172A] uppercase tracking-wider">Get Catalog on WhatsApp</h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Would you prefer to receive the product catalog and custom wholesale price list directly on your mobile phone? Connect with our WhatsApp desk.
                </p>
                
                <ul className="mt-6 flex flex-col gap-3 text-xs text-slate-700">
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
                className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300 bg-emerald-500 py-4 text-xs font-extrabold uppercase tracking-widest text-white hover:bg-emerald-600 transition-colors shadow-sm"
              >
                <MessageSquare className="h-4 w-4 text-white fill-white" />
                <span>Message Catalog Desk</span>
              </a>
            </div>
          </div>

          {/* Catalog references strip */}
          <div className="mt-16 text-center">
            <p className="text-xs text-slate-600">
              Need immediate clarification on pricing configurations?
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="tel:+919443868706"
                className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
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
