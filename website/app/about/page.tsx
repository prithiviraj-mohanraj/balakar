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
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 sm:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Our Heritage</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl mt-2">
            About Balakar Sparklers Factory
          </h1>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            A trusted and certified manufacturer specializing in premium quality, eco-friendly green sparklers based in Sivakasi, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Corporate Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">Established Manufacturer</span>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl mt-1">
                  Sivakasi Sparklers Direct Factory Supplier
                </h2>
              </div>
              
              <p className="text-sm leading-relaxed text-zinc-600">
                Balakar Sparklers Factory is a premium manufacturing enterprise headquartered in **Alamarathupatti, Sivakasi**, the fireworks capital of India. We design and produce high-performance, sparkling firework products distributed nationwide to wholesale markets, commercial shops, and festival distributors.
              </p>

              <p className="text-sm leading-relaxed text-zinc-600">
                By focusing solely on sparklers, we maintain tight control over chemical compositions, wire structural integrity, packaging durability, and burning consistency. Our trademark **Phoenix Brand** is widely acclaimed for its safety, ease of lighting, and bright emission paths.
              </p>

              <div className="h-px bg-zinc-100 my-2" />

              {/* Focus grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <Building className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-sm font-bold text-zinc-900">Alamarathupatti Plant</span>
                    <p className="text-xs text-zinc-500 mt-0.5">High-capacity production facility meeting all strict regulations.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-sm font-bold text-zinc-900">Green Certified Formulas</span>
                    <p className="text-xs text-zinc-500 mt-0.5">Licensed by CSIR-NEERI for low environmental impact emissions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images / Graphic */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-150 shadow-md bg-zinc-50">
                <Image
                  src="/images/branding/Screenshot 2026-06-19 112211.png"
                  alt="Balakar Sparklers Brand Header"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover"
                  quality={95}
                />
              </div>
              <div className="rounded-2xl border border-zinc-150 p-5 bg-zinc-50/50 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Trademark Registration</span>
                  <span className="text-sm font-bold text-zinc-900 block mt-1">Phoenix Brand Sparklers</span>
                </div>
                <div className="h-8 w-28 relative shrink-0">
                  <Image
                    src="/images/branding/balakar-logo.png"
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
      <section className="py-20 bg-zinc-50/40 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left License Graphic */}
            <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 shadow-[0_15px_40px_rgba(16,185,129,0.06)] max-w-sm w-full transition-all duration-300 hover:scale-[1.03] hover:border-emerald-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
                <div className="relative h-72 w-full bg-zinc-50 flex items-center justify-center rounded-xl overflow-hidden border border-zinc-100">
                  <Image
                    src="/images/certifications/green-fireworks-license.png.jpg"
                    alt="Green Fireworks License Copy CSIR NEERI"
                    fill
                    sizes="(max-w-768px) 100vw, 380px"
                    className="object-contain p-2"
                    quality={95}
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block bg-emerald-50 py-1 rounded-md">Official Certificate</span>
                  <span className="text-sm font-bold text-zinc-900 block mt-2">CSIR-NEERI License: NE/TN/201-01/2019</span>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 mb-4">
                  <Award className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Licensed Green Fireworks</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                  Eco-Friendly Production Standards
                </h2>
              </div>
              
              <p className="text-sm leading-relaxed text-zinc-650">
                Balakar Sparklers is dedicated to producing certified eco-friendly fireworks. In accordance with Supreme Court directives and government rules, our formulas have been fully validated by the **Council of Scientific and Industrial Research - National Environmental Engineering Research Institute (CSIR-NEERI)**.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-150 bg-white p-4">
                  <span className="text-sm font-bold text-zinc-900">Particulate Reduction</span>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Formulations are engineered to reduce particulate matter (PM10 and PM2.5) by up to 30% compared to traditional sparklers.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-150 bg-white p-4">
                  <span className="text-sm font-bold text-zinc-900">Sulphur-Free Profiles</span>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Minimizes chemical smoke odors, making our sparklers safer for family events and close-proximity lighting.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#F5B700] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all cursor-pointer hover:scale-[1.02]"
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
      <section className="py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Our Guarantees</span>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
              Factory Direct Purchase Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-zinc-950">1. Direct Factory Margins</span>
              <p className="text-xs text-zinc-500 leading-relaxed">
                By purchasing sparklers direct from our Sivakasi manufacturing plant, you receive wholesale pricing without distributor commission layers.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-zinc-950">2. Consistent Supply Volume</span>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Our high production capability in Alamarathupatti guarantees that we can ship high-volume bulk orders even during high-demand festival periods.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-zinc-950">3. Safe Transport Support</span>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We coordinate with established container transport services in Sivakasi to deliver bulk consignments safely to your godowns across India.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xs text-zinc-500">
              Ready to collaborate with a certified Sivakasi manufacturer?
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="rounded-xl bg-zinc-950 px-6 py-3 text-xs font-bold text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Inquire wholesale price list
              </button>
              <a
                href="tel:+919443868706"
                className="flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Representative
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
