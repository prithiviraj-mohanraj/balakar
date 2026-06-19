"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, MessageSquare, ArrowRight, Clock, ShieldAlert } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function ContactPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" }
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
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Get In Touch</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl mt-2">
            Contact Our Factory
          </h1>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Connect directly with Balakar Sparklers Factory representatives for wholesale pricing, custom packing, or order shipping queries.
          </p>
        </div>
      </section>

      {/* Main Details and Form */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950">
                  Direct Factory Connection
                </h2>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  We are available for calls and messages during standard factory working hours. Dealers are welcome to visit our manufacturing facilities in Alamarathupatti, Sivakasi.
                </p>
              </div>

              {/* Detail list */}
              <div className="flex flex-col gap-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-150 text-zinc-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-zinc-900 block leading-tight">Factory Address</span>
                    <span className="text-zinc-500 mt-1 block leading-relaxed">
                      Balakar Sparklers Factory
                      <br />
                      Alamarathupatti, Sivakasi,
                      <br />
                      Tamil Nadu, India. PIN: 626130
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-150 text-zinc-700">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-zinc-900 block leading-tight">Call Numbers</span>
                    <div className="text-zinc-500 mt-1 flex flex-col gap-1.5 font-medium">
                      <a href="tel:+919443868706" className="hover:text-zinc-950 transition-colors">
                        +91 94438 68706 (Factory Sales & Deals)
                      </a>
                      <a href="tel:+918248268349" className="hover:text-zinc-950 transition-colors">
                        +91 82482 68349 (Factory Direct Desk)
                      </a>
                      <a href="tel:+918072431283" className="hover:text-zinc-950 transition-colors">
                        +91 80724 31283 (Order Dispatches)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-150 text-zinc-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-zinc-900 block leading-tight">Email Sales</span>
                    <a
                      href="mailto:balakarsparklersmrsj@gmail.com"
                      className="text-zinc-500 mt-1 block hover:text-zinc-950 transition-colors"
                    >
                      balakarsparklersmrsj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-150 text-zinc-700">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-zinc-900 block leading-tight">Operational Hours</span>
                    <span className="text-zinc-500 mt-1 block leading-relaxed">
                      Monday &ndash; Saturday: 09:00 AM &ndash; 06:00 PM (IST)
                      <br />
                      Sunday: Closed (For phone support)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Chat */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/10 p-5 flex gap-4 items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageSquare className="h-5 w-5 fill-emerald-50" />
                </span>
                <div className="flex-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block leading-none">Instant WhatsApp</span>
                  <a
                    href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-700 block mt-1 hover:underline animate-pulse"
                  >
                    Chat directly with factory desk &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-zinc-150 p-6 sm:p-10 shadow-md bg-zinc-50/30">
                <h3 className="text-xl font-bold text-zinc-950">
                  Submit Wholesale Pricing Request
                </h3>
                <p className="text-xs text-zinc-500 mt-1 mb-8 leading-relaxed">
                  Fill out our wholesale inquiry form, and our sales team will reach out with pricing catalogs.
                </p>

                {/* Form fields integrated */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsInquiryOpen(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ramesh Kumar"
                        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Business Location (City & State) <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bangalore, Karnataka"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Inquiry Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your bulk requirements, sizes of interest (e.g. 7cm, 10cm, 30cm), estimated dispatch dates, or queries..."
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all resize-none"
                    />
                  </div>

                  {/* Warning */}
                  <div className="flex gap-2 rounded-xl bg-amber-50/20 border border-amber-100 p-3">
                    <ShieldAlert className="h-4.5 w-4.5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-amber-700 leading-normal">
                      We only ship commercial firework consignments through approved carriers in compliance with safety transport guidelines. Minimum billing values apply.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] py-3.5 text-sm font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Request Wholesale Catalog</span>
                    <ArrowRight className="h-4 w-4 text-white" />
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
