"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, Clock, ShieldAlert, Flame, Sparkles } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";

import FireworkBackground from "../../components/cinematic/firework-background";
import GlowAtmosphere from "../../components/cinematic/glow-atmosphere";
import SmokeLayer from "../../components/cinematic/smoke-layer";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function ContactPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact Desk", item: "/contact" }
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
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block">GET IN TOUCH</span>
          <h1 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl uppercase mt-2">
            Contact Our <span className="text-[#D4AF37] gold-glow-text">Factory Desk</span>
          </h1>
          <p className="mt-4 text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Connect directly with Balakar Sparklers Factory representatives for wholesale pricing, custom packing, or order shipping queries.
          </p>
        </div>
      </section>

      {/* Main Details and Form */}
      <section className="relative overflow-hidden py-20 border-b border-amber-100 bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-black uppercase text-[#0F172A] tracking-wider">
                  Direct Factory Desk
                </h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Available for calls and messages during standard factory working hours. Stockists and bulk buyers are welcome to visit our plant in Alamarathupatti, Sivakasi.
                </p>
              </div>

              {/* Detail list */}
              <div className="flex flex-col gap-6 text-xs">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-[#D4AF37]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#0F172A] block uppercase tracking-wider">Factory Address</span>
                    <span className="text-slate-600 mt-1 block leading-relaxed">
                      Balakar Sparklers Factory
                      <br />
                      Alamarathupatti, Sivakasi,
                      <br />
                      Tamil Nadu, India. PIN: 626130
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-[#D4AF37]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#0F172A] block uppercase tracking-wider">Direct Sales Hotline</span>
                    <div className="text-slate-600 mt-1 flex flex-col gap-1 font-medium">
                      <a href="tel:+919443868706" className="hover:text-[#D4AF37] transition-colors">
                        +91 94438 68706 (Factory Sales & Deals)
                      </a>
                      <a href="tel:+918248268349" className="hover:text-[#D4AF37] transition-colors">
                        +91 82482 68349 (Factory Direct Desk)
                      </a>
                      <a href="tel:+918072431283" className="hover:text-[#D4AF37] transition-colors">
                        +91 80724 31283 (Order Dispatches)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-[#D4AF37]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#0F172A] block uppercase tracking-wider">Email Sales Desk</span>
                    <a
                      href="mailto:balakarsparklersmrsj@gmail.com"
                      className="text-slate-600 mt-1 block hover:text-[#D4AF37] transition-colors"
                    >
                      balakarsparklersmrsj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-[#D4AF37]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#0F172A] block uppercase tracking-wider">Factory Operating Hours</span>
                    <span className="text-slate-600 mt-1 block leading-relaxed">
                      Monday &ndash; Saturday: 09:00 AM &ndash; 06:00 PM (IST)
                      <br />
                      Sunday: Closed (Phone support active)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Chat */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 flex gap-4 items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest block leading-none">Instant WhatsApp</span>
                  <a
                    href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 block mt-1 hover:underline"
                  >
                    Chat directly with factory desk &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-amber-200 p-6 sm:p-10 shadow-md bg-white">
                <h3 className="text-xl font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                  <Flame className="h-5 w-5 text-[#D4AF37] fill-[#D4AF37]" />
                  Submit Wholesale Pricing Request
                </h3>
                <p className="text-xs text-slate-600 mt-1 mb-8 leading-relaxed">
                  Fill out our wholesale inquiry form, and our sales team will reach out with pricing catalogs.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsInquiryOpen(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ramesh Kumar"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-xs text-slate-900 outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-xs text-slate-900 outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                      Business Location (City & State) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bangalore, Karnataka"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-xs text-slate-900 outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                      Inquiry Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your bulk requirements, sizes of interest (e.g. 7cm, 10cm, 30cm), estimated dispatch dates, or queries..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-xs text-slate-900 outline-none focus:border-[#D4AF37] transition-all resize-none"
                    />
                  </div>

                  {/* Warning */}
                  <div className="flex gap-2 rounded-xl bg-amber-50 border border-amber-200 p-3">
                    <ShieldAlert className="h-4.5 w-4.5 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-amber-900 leading-relaxed">
                      We only ship commercial firework consignments through approved carriers in compliance with transport guidelines. Minimum billing values apply.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] py-4 text-xs font-extrabold uppercase tracking-widest text-[#0F172A] shadow-md cursor-pointer hover:scale-[1.01]"
                  >
                    <Sparkles className="h-4 w-4 fill-[#0F172A]" />
                    <span>Request Wholesale Price List</span>
                  </button>
                </form>
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
