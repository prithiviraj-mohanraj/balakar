"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, Download, Award, CheckCircle } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";

import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getProductSchema,
  getFAQSchema,
  getBreadcrumbSchema
} from "../../lib/seo.config";

export default function SevenCmPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const targetKeyword = "7 CM Sparklers Manufacturer Sivakasi";
  const slug = "7cm-sparklers";
  const title = "7 CM Sparklers | Premium Sivakasi Manufacturer";
  const description = "Discover premium 7 CM Green Certified sparklers manufactured direct from our Sivakasi plant under Phoenix Brand. Low smoke, high brightness, and wholesale deals.";

  // Internal Links
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
      answer: "Yes, our 7 CM sparklers are specially manufactured for high safety. They are designed with a sturdy steel core wire that resists bending, ensuring safe handling for families under adult supervision."
    },
    {
      question: "What colors are available in 7 CM sparklers?",
      answer: "We manufacture 7 CM sparklers in four major color varieties: Electric (golden crackles), Colour (brilliant rainbow colors), Green (rich emerald green sparks), and Red (crimson red sparks)."
    },
    {
      question: "What is the packing quantity in a standard box?",
      answer: "As an official manufacturer, we supply bulk dealer boxes. A typical commercial box contains multiple small packs. Please inquire with our sales representatives for standard packing quantities and configurations."
    }
  ];

  // Schemas
  const orgSchema = getOrganizationSchema();
  const bizSchema = getLocalBusinessSchema();
  const prodSchema = getProductSchema(
    "7 CM Sparklers",
    "/images/products/7cm-products.jpg",
    description,
    "BALAKAR-7CM"
  );
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Products", item: "/products" },
    { name: "7 CM Sparklers", item: `/${slug}` }
  ]);

  return (
    <div className="flex-1 bg-white font-sans text-zinc-900 overflow-x-hidden pb-16 md:pb-0">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(prodSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-amber-50/15 via-white to-white py-16 sm:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                Phoenix Brand Catalog
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                7 CM Sparklers Manufacturer Sivakasi
              </h1>
              <p className="text-base text-zinc-600 leading-relaxed">
                Buy premium-grade 7 CM sparklers direct from the source. Engineered with low-smoke chemistry at our Alamarathupatti factory in Sivakasi, these sparklers offer the ideal entry point for festive dealer orders.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-xs font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4 text-white fill-white" />
                  <span>Get Wholesale Quotation</span>
                </button>
                <a
                  href="tel:+919443868706"
                  className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-6 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 hover:scale-[1.02] hover:border-zinc-350 transition-all"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" />
                  <span>Call Factory Sales</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative aspect-[1599/1132] w-full max-w-lg rounded-2xl overflow-hidden border-2 border-zinc-150 shadow-md bg-zinc-50 p-1 transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/images/products/7cm-products.jpg"
                  alt="7 CM Sparklers Catalog Packaging Box Mockups"
                  fill
                  sizes="(max-w-768px) 100vw, 500px"
                  className="object-contain p-1 rounded-xl"
                  quality={98}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich content (>500 words) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Introduction</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              Welcome to the premium product category page of Balakar Sparklers, a leading <strong>7 CM Sparklers Manufacturer Sivakasi</strong>. Sivakasi has long been recognized as the manufacturing hub of fireworks in India, and at our Alamarathupatti production plant, we continue this legacy by offering the highest quality sparklers in the country. Our 7 CM sparklers represent our most popular standard-length option, widely favored by consumers for their excellent handling properties, reliability, and safe flame path. We manufacture sparklers under our registered trademark, the **Phoenix Brand**, using formulas that prioritize a rich display of sparks and safe operations.
            </p>
          </div>

          {/* Section 2: Product Overview */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Product Overview & Color Variants</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              Our 7 CM sparklers are built using premium-grade raw materials. The foundation of each sparkler is a high-tensile steel wire core that remains rigid during ignition and burning, preventing hot chemical slurry from falling off. The chemical coating consists of precise, tested mixtures that produce vibrant sparks. In our effort to meet modern standards, we produce Green Certified sparklers that comply with eco-friendly manufacturing directives under CSIR-NEERI license NE/TN/201-01/2019. 
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              We offer these sparklers in four major color variants to provide diversity in your festive inventory:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-zinc-600 pl-4">
              <li><strong>Electric Sparklers:</strong> Features the classic bright golden crackling sparks that emit a nostalgic crackling sound.</li>
              <li><strong>Colour Sparklers:</strong> Emits bright, assorted multi-color sparkles, perfect for children and holiday events.</li>
              <li><strong>Green Sparklers:</strong> Generates highly vibrant, deep emerald green spark trails with low smoke profiles.</li>
              <li><strong>Red Sparklers:</strong> Produces a striking crimson red flame effect that creates a spectacular visual display in evening settings.</li>
            </ul>
          </div>

          {/* Section 3: Applications */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Applications & Usage Scenarios</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              Due to their safe, compact length, our 7 CM sparklers are highly versatile and recommended for a wide array of celebratory occasions. They serve as the perfect addition to family gatherings during traditional festivals such as Diwali, Christmas, and New Year. Additionally, they are increasingly popular as cake-cutting decorative items for birthdays and anniversaries, providing a brief, beautiful spark presentation. Their short ignition time and manageable heat dispersion make them comfortable for users of all ages, provided young children are supervised by adults.
            </p>
          </div>

          {/* Section 4: Wholesale Information */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Wholesale & Bulk Ordering Information</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              Balakar Sparklers Factory welcomes inquiries from wholesale dealers, retail distributors, and bulk buying organizations across all states in India. We supply directly from our Sivakasi manufacturing plant, which eliminates middleman commissions and ensures that you get the best competitive pricing. We pack our 7 CM sparklers in high-durability, moisture-resistant packaging boxes featuring the Phoenix Brand trademark. We provide transport coordination from Sivakasi to your location. For custom packaging requests or bulk box inquiries, feel free to contact our sales desk directly.
            </p>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-4">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-xl border border-zinc-150 p-5 bg-zinc-50/30">
                  <span className="font-bold text-zinc-900 text-sm block">{f.question}</span>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal linking segment */}
          <div className="border-t border-zinc-150 pt-8">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-4">
              Explore Other Sizes
            </span>
            <div className="flex flex-wrap gap-2">
              {internalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg bg-zinc-50 border border-zinc-150 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
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
