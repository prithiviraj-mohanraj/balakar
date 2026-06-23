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

export default function TenCmPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const targetKeyword = "10 CM Sparklers Wholesale";
  const slug = "10cm-sparklers";
  const title = "10 CM Sparklers | Premium Sivakasi Wholesale Supply";
  const description = "Buy 10 CM green certified sparklers wholesale from Balakar Sparklers factory in Sivakasi. High brightness, five color variants, secure nationwide delivery.";

  // Internal Links
  const internalLinks = [
    { name: "7 CM Sparklers", href: "/7cm-sparklers" },
    { name: "12 CM Sparklers", href: "/12cm-sparklers" },
    { name: "15 CM Sparklers", href: "/15cm-sparklers" },
    { name: "30 CM Sparklers", href: "/30cm-sparklers" },
    { name: "50 CM Sparklers", href: "/50cm-sparklers" }
  ];

  const faqs = [
    {
      question: "What is the key benefit of ordering 10 CM sparklers wholesale?",
      answer: "The 10 CM length is one of our highest-selling items nationwide, representing a major staple for festive retail shops. By ordering wholesale, you secure direct-from-factory pricing with high profit margins."
    },
    {
      question: "What colors are available in the 10 CM category?",
      answer: "We manufacture 10 CM sparklers in five color options: Electric (classic gold crackle), Colour (assorted color sparks), Green (vivid eco green), Red (crimson red), and Silver (brilliant white flash)."
    },
    {
      question: "Are these sparklers compliant with CSIR-NEERI green rules?",
      answer: "Yes, our entire production line, including the 10 CM sparkler range, is certified by CSIR-NEERI under license NE/TN/201-01/2019, ensuring they are low-smoke eco-friendly fireworks."
    }
  ];

  // Schemas
  const orgSchema = getOrganizationSchema();
  const bizSchema = getLocalBusinessSchema();
  const prodSchema = getProductSchema(
    "10 CM Sparklers",
    "/products/10cm-products.jpg",
    description,
    "BALAKAR-10CM"
  );
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Products", item: "/products" },
    { name: "10 CM Sparklers", item: `/${slug}` }
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
      <section className="bg-[#FAF9F6] py-16 sm:py-20 border-b border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Text Column - order-last on mobile, order-first on desktop */}
            <div className="lg:col-span-7 flex flex-col gap-5 order-last lg:order-first">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                Wholesale Distribution Center
              </span>
              <h1 className="text-2.5xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
                10 CM Sparklers Wholesale Sivakasi
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-650 leading-relaxed">
                Order 10 CM premium sparklers in bulk directly from our Sivakasi manufacturing plant. Designed under the Phoenix Brand, these sparklers offer five variant options and long-lasting sparkles, making them a top choice for distributors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-[#2563EB] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#1d4ed8] hover:shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-all cursor-pointer hover:scale-[1.02] w-full sm:w-auto"
                >
                  <Sparkles className="h-4 w-4 text-white fill-white" />
                  <span>Request Wholesale Pricing</span>
                </button>
                <a
                  href="tel:+919443868706"
                  className="flex items-center justify-center gap-1.5 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-xs font-bold text-zinc-700 hover:border-[#2563EB] hover:bg-[#2563EB]/5 hover:text-[#2563EB] hover:scale-[1.02] transition-all cursor-pointer w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" />
                  <span>Call Sales Office</span>
                </a>
              </div>
            </div>
            
            {/* Image Column - order-first on mobile, order-last on desktop */}
            <div className="lg:col-span-5 flex justify-center w-full order-first lg:order-last">
              <div className="relative aspect-[1599/1132] w-full max-w-lg rounded-2xl overflow-hidden border border-zinc-200/60 shadow-md bg-white p-1 transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/products/10cm-products.jpg"
                  alt="10 CM Sparklers Pack Mockups Catalog Sheet"
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
              Welcome to the premium catalog overview of Balakar Sparklers, your trusted source for **10 CM Sparklers Wholesale**. Established in Alamarathupatti, Sivakasi, our factory specializes in producing top-tier, long-burning sparklers that are highly sought after by commercial retailers, seasonal store owners, and bulk festival buyers. The 10 CM sparkler size is universally recognized as the standard festive length. It offers an extended burn profile and a comfortable size, making it a reliable choice for families celebrating key traditional and cultural festivals.
            </p>
          </div>

          {/* Section 2: Product Overview */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Product Overview & Key Features</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              Our 10 CM sparkler range features a thick chemical coating applied uniformly on a straight, rigid iron core. This ensures that the ignition is quick, the burn is smooth, and the spark emission remains stable throughout the duration. In line with the Supreme Court directives, we have implemented environmental formulations developed by CSIR-NEERI under certificate NE/TN/201-01/2019. These formulations reduce the presence of particulate matter and toxic chemical vapors by up to 30%, making them eco-friendly green fireworks.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              We offer the 10 CM sparklers in five color options to fit diverse market preferences:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-zinc-600 pl-4">
              <li><strong>Electric:</strong> Golden sparkles with classic crackling sounds, a holiday tradition.</li>
              <li><strong>Colour:</strong> Vibrant multi-colored sparkles that light up the night in rainbow hues.</li>
              <li><strong>Green:</strong> Rich, brilliant green light trails with a high spark density.</li>
              <li><strong>Red:</strong> Intense crimson flame trails, providing a beautiful backdrop.</li>
              <li><strong>Silver:</strong> Bright metallic white sparks that flash brilliantly, exclusive to our 10 CM range.</li>
            </ul>
          </div>

          {/* Section 3: Applications */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Applications & Usage Scenarios</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              The 10 CM sparklers are highly popular across various events. Their medium-length size is perfect for creating sparkler tunnels at weddings, lighting up backyards during Diwali celebrations, celebrating Christmas, and decorating birthday events. They are easy to hold and light, providing an excellent background for evening photography.
            </p>
          </div>

          {/* Section 4: Wholesale Information */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Wholesale & Factory Direct Supply</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              As a direct manufacturer, Balakar Sparklers Factory supplies 10 CM sparklers in bulk at wholesale rates. Buying directly from our Alamarathupatti factory in Sivakasi helps you secure better profit margins by bypassing intermediaries. We use high-quality packaging boxes featuring the Phoenix Brand trademark. We provide transport coordination to deliver bulk consignments safely to dealers throughout India.
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
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} defaultCategory="10 CM Sparklers" />
    </div>
  );
}
