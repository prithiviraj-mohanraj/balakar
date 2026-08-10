"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, Award, Building, Flame } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";

import FireworkBackground from "../../components/cinematic/firework-background";
import GlowAtmosphere from "../../components/cinematic/glow-atmosphere";
import SmokeLayer from "../../components/cinematic/smoke-layer";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function AboutPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About Factory", item: "/about" }
  ]);

  return (
    <div className="relative min-h-screen bg-[#05050A] text-slate-100 selection:bg-[#D4AF37] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Header />

      {/* Header Hero */}
      <section className="relative overflow-hidden py-20 border-b border-white/10">
        <FireworkBackground type="hero" density={40} opacity={0.6} colorScheme="gold" />
        <GlowAtmosphere position="center" color="gold" intensity="medium" />
        <SmokeLayer opacity={0.2} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block">SIVAKASI HERITAGE</span>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl uppercase mt-2">
            About Balakar <span className="text-[#D4AF37] gold-glow-text">Sparklers Factory</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A trusted Sivakasi manufacturer specializing in premium quality, double-dipped steel wire, certified eco-friendly green sparklers.
          </p>
        </div>
      </section>

      {/* Corporate Info */}
      <section className="relative py-20 border-b border-white/10 bg-[#08080C]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block">ESTABLISHED MANUFACTURER</span>
                <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-4xl mt-1.5">
                  Sivakasi Sparklers Direct Supplier
                </h2>
              </div>
              
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Balakar Sparklers Factory is a high-capacity manufacturing enterprise headquartered in <strong className="text-white">Alamarathupatti, Sivakasi</strong>, the fireworks capital of India. We design and produce high-performance, sparkling firework products distributed nationwide to wholesale markets, commercial shops, and festival distributors.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                By focusing solely on sparklers, we maintain tight control over chemical compositions, wire structural integrity, packaging durability, and burning consistency. Our trademark <strong className="text-[#D4AF37]">Phoenix Brand</strong> is widely acclaimed for its safety, ease of lighting, and bright emission paths.
              </p>

              <div className="h-px bg-white/10 my-2" />

              {/* Focus grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex gap-3.5 p-3 rounded-2xl border border-white/10 bg-white/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Building className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block">Alamarathupatti Plant</span>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">Modern production facility adhering strictly to safety regulations.</p>
                  </div>
                </div>
                
                <div className="flex gap-3.5 p-3 rounded-2xl border border-white/10 bg-white/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block">Green Certified Formulas</span>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">Licensed by CSIR-NEERI for low environmental impact emissions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images / Graphic */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/60 flex items-center justify-center p-4">
                <Image
                  src="/branding/phoenix-trademark.png"
                  alt="Balakar Sparklers Brand Header"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-[#0A0B12] flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Trademark Registration</span>
                  <span className="text-xs sm:text-sm font-bold text-white block mt-1">Phoenix Brand Sparklers</span>
                </div>
                <div className="h-8 w-28 relative shrink-0">
                  <Image
                    src="/branding/balakar-logo.png"
                    alt="Phoenix Brand Trademark"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSIR-NEERI License Validation */}
      <section className="relative overflow-hidden py-20 border-b border-white/10 bg-[#05050A]">
        <FireworkBackground type="bursts" density={25} opacity={0.4} colorScheme="gold" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left License Graphic */}
            <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0A0B12] p-8 shadow-2xl max-w-sm w-full">
                <div className="relative aspect-square w-48 mx-auto flex items-center justify-center rounded-2xl bg-white p-3 border border-white/10">
                  <Image
                    src="/certifications/green-fireworks-license.png"
                    alt="Green Fireworks License Copy CSIR NEERI"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Official Certificate
                  </div>
                  <span className="text-base font-bold text-white block mt-4 uppercase tracking-wider">CSIR-NEERI License</span>
                  <span className="text-xs font-semibold text-[#D4AF37] block mt-1 tracking-widest">NO: NE/TN/201-01/2019</span>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400 mb-4">
                  <Award className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Licensed Green Fireworks</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-white uppercase sm:text-4xl">
                  Eco-Friendly Production Standards
                </h2>
              </div>
              
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Balakar Sparklers is dedicated to producing certified eco-friendly fireworks. In accordance with Supreme Court directives and government rules, our formulas have been fully validated by the <strong className="text-white">Council of Scientific and Industrial Research - National Environmental Engineering Research Institute (CSIR-NEERI)</strong>.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">Particulate Reduction</span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Formulations engineered to reduce particulate matter (PM10 and PM2.5) by up to 30% compared to traditional sparklers.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">Sulphur-Free Profiles</span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Minimizes chemical smoke odors, making our sparklers safer for family events and close-proximity lighting.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all"
                >
                  <Flame className="h-4 w-4 fill-black" />
                  <span>Request Wholesale Catalog</span>
                </button>
              </div>
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
