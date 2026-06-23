"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, Award, Building, Landmark } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";
import SparkEffect from "../../components/spark-effect";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function AboutPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" }
  ]);

  return (
    <div className="flex-1 bg-white font-sans text-zinc-900 overflow-x-hidden pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Header />

      {/* Header Info */}
      <section className="bg-[#FAF9F6] py-16 sm:py-20 border-b border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Our Heritage</span>
          <h1 className="text-2.5xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl mt-2">
            About Balakar Sparklers Factory
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-650 max-w-2xl mx-auto leading-relaxed">
            A trusted Sivakasi manufacturer specializing in premium quality, certified eco-friendly green sparklers, crafted to light up family celebrations nationwide.
          </p>
        </div>
      </section>

      {/* Corporate Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Established Manufacturer</span>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl mt-1.5">
                  Sivakasi Sparklers Direct Factory Supplier
                </h2>
              </div>
              
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                Balakar Sparklers Factory is a premium manufacturing enterprise headquartered in **Alamarathupatti, Sivakasi**, the fireworks capital of India. We design and produce high-performance, sparkling firework products distributed nationwide to wholesale markets, commercial shops, and festival distributors.
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                By focusing solely on sparklers, we maintain tight control over chemical compositions, wire structural integrity, packaging durability, and burning consistency. Our trademark **Phoenix Brand** is widely acclaimed for its safety, ease of lighting, and bright emission paths.
              </p>

              <div className="h-px bg-zinc-100 my-2" />

              {/* Focus grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm">
                    <Building className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A]">Alamarathupatti Plant</span>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">High-capacity production facility meeting all strict safety regulations.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100/50 shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A]">Green Certified Formulas</span>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">Licensed by CSIR-NEERI for low environmental impact emissions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images / Graphic */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md bg-zinc-50 flex items-center justify-center p-4">
                <Image
                  src="/branding/phoenix-trademark.png"
                  alt="Balakar Sparklers Brand Header"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-contain p-4 animate-in fade-in zoom-in duration-500"
                  quality={95}
                />
              </div>
              <div className="rounded-2xl border border-zinc-200/60 p-5 bg-[#FAF9F6] flex items-center justify-between gap-4 shadow-sm">
                <div>
                  <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">Trademark Registration</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A] block mt-1">Phoenix Brand Sparklers</span>
                </div>
                <div className="h-8 w-28 relative shrink-0">
                  <Image
                    src="/branding/balakar-logo.png"
                    alt="Phoenix Brand Trademark"
                    fill
                    className="object-contain"
                    quality={95}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSIR-NEERI License Validation */}
      <section className="relative overflow-hidden py-20 bg-white border-y border-zinc-200/60 text-zinc-900">
        <SparkEffect type="sparkle" density={20} opacity={0.25} colorScheme="gold" />
        
        {/* Soft glowing ambient radial gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left License Graphic */}
            <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm max-w-sm w-full transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <div className="relative aspect-square w-48 mx-auto flex items-center justify-center rounded-full bg-white p-3 border border-zinc-150">
                  <Image
                    src="/certifications/green-fireworks-license.png"
                    alt="Green Fireworks License Copy CSIR NEERI"
                    fill
                    sizes="(max-w-768px) 100vw, 200px"
                    className="object-contain p-2"
                    quality={95}
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Official Certificate
                  </div>
                  <span className="text-base font-bold text-[#0F172A] block mt-4">CSIR-NEERI License</span>
                  <span className="text-xs font-semibold text-slate-500 block mt-1 tracking-wider">NO: NE/TN/201-01/2019</span>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-4">
                  <Award className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Licensed Green Fireworks</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                  Eco-Friendly Production Standards
                </h2>
              </div>
              
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                Balakar Sparklers is dedicated to producing certified eco-friendly fireworks. In accordance with Supreme Court directives and government rules, our formulas have been fully validated by the **Council of Scientific and Industrial Research - National Environmental Engineering Research Institute (CSIR-NEERI)**.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-[#D4AF37]/40 hover:-translate-y-0.5 duration-300">
                  <span className="text-sm font-bold text-[#0F172A] block">Particulate Reduction</span>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Formulations are engineered to reduce particulate matter (PM10 and PM2.5) by up to 30% compared to traditional sparklers.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-[#D4AF37]/40 hover:-translate-y-0.5 duration-300">
                  <span className="text-sm font-bold text-[#0F172A] block">Sulphur-Free Profiles</span>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Minimizes chemical smoke odors, making our sparklers safer for family events and close-proximity lighting.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="relative overflow-hidden flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1d4ed8] hover:shadow-[0_0_20px_rgba(37,99,235,0.45)] transition-all duration-300 cursor-pointer hover:scale-[1.02] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 before:ease-out"
                >
                  <span>Request Wholesale Catalog</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-[#FAF9F6] border-t border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Our Guarantees</span>
            <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl mt-1">
              Factory Direct Purchase Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-[#0F172A]">1. Direct Factory Margins</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                By purchasing sparklers direct from our Sivakasi manufacturing plant, you receive wholesale pricing without distributor commission layers.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-[#0F172A]">2. Consistent Supply Volume</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our high production capability in Alamarathupatti guarantees that we can ship high-volume bulk orders even during high-demand festival periods.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-[#0F172A]">3. Safe Transport Support</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                We coordinate with established container transport services in Sivakasi to deliver bulk consignments safely to your godowns across India.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xs text-slate-500">
              Ready to collaborate with a certified Sivakasi manufacturer?
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 w-full max-w-md sm:max-w-none mx-auto px-4">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="rounded-full bg-[#0F172A] px-6 py-3 text-xs font-bold text-white hover:bg-slate-800 transition-all cursor-pointer w-full sm:w-auto hover:scale-[1.01]"
              >
                Inquire wholesale price list
              </button>
              <a
                href="tel:+919443868706"
                className="flex items-center justify-center gap-1.5 rounded-full border border-zinc-300 bg-white px-6 py-3 text-xs font-bold text-zinc-700 hover:border-[#2563EB] hover:bg-[#2563EB]/5 hover:text-[#2563EB] transition-all cursor-pointer w-full sm:w-auto hover:scale-[1.01]"
              >
                <Phone className="h-4 w-4 text-[#2563EB]" /> <span>Call Representative</span>
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
