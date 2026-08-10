"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Flame } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";

import FireworkBackground from "../../components/cinematic/firework-background";
import GlowAtmosphere from "../../components/cinematic/glow-atmosphere";
import SmokeLayer from "../../components/cinematic/smoke-layer";

import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getProductSchema,
  getFAQSchema,
  getBreadcrumbSchema
} from "../../lib/seo.config";

export default function SevenCmPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const slug = "7cm-sparklers";
  const description = "Discover premium 7 CM Green Certified sparklers manufactured direct from our Sivakasi plant under Phoenix Brand. Low smoke, high brightness, and wholesale deals.";

  const internalLinks = [
    { name: "10 CM Sparklers", href: "/10cm-sparklers" },
    { name: "12 CM Sparklers", href: "/12cm-sparklers" },
    { name: "15 CM Sparklers", href: "/15cm-sparklers" },
    { name: "30 CM Sparklers", href: "/30cm-sparklers" },
    { name: "50 CM Sparklers", href: "/50cm-sparklers" }
  ];

  const faqs = [
    {
      question: "Are 7 CM sparklers safe for family events?",
      answer: "Yes, our 7 CM sparklers are manufactured for maximum safety with double-dipped steel wire cores that resist bending and eliminate spark fallout."
    },
    {
      question: "What colors are available in 7 CM sparklers?",
      answer: "We manufacture 7 CM sparklers in four major color varieties: Electric (golden crackles), Colour (brilliant rainbow sparks), Green (emerald green sparks), and Red (crimson red sparks)."
    },
    {
      question: "What is the packing quantity in a standard box?",
      answer: "Standard packing contains 10 pieces per inner box and 50 boxes per master wholesale carton."
    }
  ];

  const orgSchema = getOrganizationSchema();
  const bizSchema = getLocalBusinessSchema();
  const prodSchema = getProductSchema("7 CM Sparklers", "/products/7cm-products.jpg", description, "BALAKAR-7CM");
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Products", item: "/products" },
    { name: "7 CM Sparklers", item: `/${slug}` }
  ]);

  return (
    <div className="relative min-h-screen bg-[#FFFDF7] text-slate-900 selection:bg-[#D4AF37] selection:text-[#0F172A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(prodSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <section className="relative overflow-hidden py-20 border-b border-amber-100 bg-gradient-to-b from-[#FFFDF7] via-[#FAF9F6] to-[#FFFDF7]">
        <FireworkBackground type="hero" density={35} opacity={0.7} colorScheme="gold" />
        <GlowAtmosphere position="center" color="gold" intensity="medium" />
        <SmokeLayer opacity={0.15} />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 flex flex-col gap-5 order-last lg:order-first">
              <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block">
                PHOENIX BRAND CATALOG
              </span>
              <h1 className="text-3xl font-black uppercase tracking-tight text-[#0F172A] sm:text-5xl">
                7 CM Sparklers <span className="text-[#D4AF37] gold-glow-text">Manufacturer Sivakasi</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                Buy premium-grade 7 CM sparklers direct from the manufacturer. Engineered with low-smoke chemistry at our Alamarathupatti factory in Sivakasi under Phoenix Brand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#0F172A] shadow-md"
                >
                  <Flame className="h-4 w-4 fill-[#0F172A]" />
                  <span>Get Wholesale Quotation</span>
                </button>
                <a
                  href="tel:+919443868706"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  <span>Call Factory Direct</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center w-full order-first lg:order-last">
              <div className="relative aspect-[4/3] w-full max-w-lg rounded-3xl overflow-hidden border border-amber-200/80 shadow-md bg-white p-2">
                <Image
                  src="/products/7cm-products.jpg"
                  alt="7 CM Sparklers Catalog Packaging Box Mockups"
                  fill
                  className="object-contain p-2 rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 border-b border-amber-100 bg-[#FAF9F6]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10">
            <h2 className="text-xl font-extrabold uppercase text-[#0F172A] tracking-wider border-b border-amber-100 pb-3">Introduction</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-4">
              Welcome to the 7 CM Sparklers product category page of Balakar Sparklers, a premier <strong className="text-[#0F172A]">7 CM Sparklers Manufacturer Sivakasi</strong>. Our 7 CM sparklers represent our most popular entry-level size, engineered for family celebrations, cake-cutting, and festival displays across India.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-extrabold uppercase text-[#0F172A] tracking-wider border-b border-amber-100 pb-3">Product Specifications & Formulations</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-4">
              Our 7 CM sparklers feature double-dipped coating over A-grade steel core wire. Licensed under CSIR-NEERI Green License NE/TN/201-01/2019, they generate 30% lower smoke emissions.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <li><strong className="text-[#D4AF37]">Electric Gold:</strong> Bright golden crackling sparks with zero fallout.</li>
              <li><strong className="text-[#D4AF37]">Colour Sparks:</strong> Brilliant rainbow sparkle emissions.</li>
              <li><strong className="text-[#D4AF37]">Emerald Green:</strong> Rich green spark trails with low smoke.</li>
              <li><strong className="text-[#D4AF37]">Crimson Red:</strong> Deep red festive sparks.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-extrabold uppercase text-[#0F172A] tracking-wider border-b border-amber-100 pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-4">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                  <span className="font-bold text-[#0F172A] text-xs uppercase tracking-wider block">{f.question}</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-amber-100 pt-8">
            <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block mb-4">
              EXPLORE OTHER SPARKLER SIZES
            </span>
            <div className="flex flex-wrap gap-3">
              {internalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-xl bg-white border border-amber-200/80 px-4 py-2 text-xs font-bold text-slate-800 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors shadow-sm"
                >
                  {link.name} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
      <FloatingInquiry />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} defaultCategory="7 CM Sparklers" />
    </div>
  );
}
