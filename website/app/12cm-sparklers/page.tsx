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

export default function TwelveCmPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const targetKeyword = "12 CM Sparklers Factory Direct";
  const slug = "12cm-sparklers";
  const title = "12 CM Sparklers | Premium Sivakasi Factory Direct Deals";
  const description = "Purchase 12 CM green sparklers factory direct from Balakar Sparklers in Sivakasi. Low smoke, CSIR-NEERI certified formulas, and direct nationwide dispatch.";

  // Internal Links
  const internalLinks = [
    { name: "7 CM Sparklers", href: "/7cm-sparklers" },
    { name: "10 CM Sparklers", href: "/10cm-sparklers" },
    { name: "15 CM Sparklers", href: "/15cm-sparklers" },
    { name: "30 CM Sparklers", href: "/30cm-sparklers" },
    { name: "50 CM Sparklers", href: "/50cm-sparklers" }
  ];

  const faqs = [
    {
      question: "Why buy 12 CM sparklers factory direct?",
      answer: "Buying factory direct from our Alamarathupatti Sivakasi plant ensures you bypass intermediary distributors, securing fresh stock at competitive rates."
    },
    {
      question: "What colors are manufactured in the 12 CM category?",
      answer: "We offer four distinct color variants for the 12 CM range: Electric (classic gold crackle), Colour (assorted colors), Green (vibrant emerald green), and Red (crimson red)."
    },
    {
      question: "Are these sparklers compliant with national safety standards?",
      answer: "Yes, all our products, including the 12 CM line, are CSIR-NEERI certified (License No: NE/TN/201-01/2019), meeting eco-friendly standards."
    }
  ];

  // Schemas
  const orgSchema = getOrganizationSchema();
  const bizSchema = getLocalBusinessSchema();
  const prodSchema = getProductSchema(
    "12 CM Sparklers",
    "/images/products/12cm-products.jpg",
    description,
    "BALAKAR-12CM"
  );
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Products", item: "/products" },
    { name: "12 CM Sparklers", item: `/${slug}` }
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
                Direct-From-Plant Orders
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
                12 CM Sparklers Factory Direct Sivakasi
              </h1>
              <p className="text-base text-zinc-600 leading-relaxed">
                Purchase premium-grade 12 CM sparklers directly from our Alamarathupatti plant in Sivakasi. Our eco-friendly formulas offer low smoke and bright embers, ensuring safe celebrations.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-xs font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4 text-white fill-white" />
                  <span>Request Price List</span>
                </button>
                <a
                  href="tel:+919443868706"
                  className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-6 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 hover:scale-[1.02] hover:border-zinc-350 transition-all"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" />
                  <span>Call Direct Sales</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative aspect-[1599/1132] w-full max-w-lg rounded-2xl overflow-hidden border-2 border-zinc-150 shadow-md bg-zinc-50 p-1 transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/images/products/12cm-products.jpg"
                  alt="12 CM Sparklers Pack Mockups Catalog Sheet"
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
              Welcome to the premium catalog overview of Balakar Sparklers, your trusted source for **12 CM Sparklers Factory Direct**. Established in Alamarathupatti, Sivakasi, our factory specializes in producing top-tier, long-burning sparklers that are highly sought after by commercial retailers, seasonal store owners, and bulk festival buyers. The 12 CM sparkler size is universally recognized as the premium festive length. It offers an extended burn profile and a comfortable size, making it a reliable choice for families celebrating key traditional and cultural festivals.
            </p>
          </div>

          {/* Section 2: Product Overview */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Product Overview & Key Features</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              Our 12 CM sparkler range features a thick chemical coating applied uniformly on a straight, rigid iron core. This ensures that the ignition is quick, the burn is smooth, and the spark emission remains stable throughout the duration. In line with the Supreme Court directives, we have implemented environmental formulations developed by CSIR-NEERI under certificate NE/TN/201-01/2019. These formulations reduce the presence of particulate matter and toxic chemical vapors by up to 30%, making them eco-friendly green fireworks.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              We offer the 12 CM sparklers in four color options to fit diverse market preferences:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-zinc-600 pl-4">
              <li><strong>Electric:</strong> Golden sparkles with classic crackling sounds, a holiday tradition.</li>
              <li><strong>Colour:</strong> Vibrant multi-colored sparkles that light up the night in rainbow hues.</li>
              <li><strong>Green:</strong> Rich, brilliant green light trails with a high spark density.</li>
              <li><strong>Red:</strong> Intense crimson flame trails, providing a beautiful backdrop.</li>
            </ul>
          </div>

          {/* Section 3: Applications */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Applications & Usage Scenarios</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              The 12 CM sparklers are highly popular across various events. Their medium-length size is perfect for creating sparkler tunnels at weddings, lighting up backyards during Diwali celebrations, celebrating Christmas, and decorating birthday events. They are easy to hold and light, providing an excellent background for evening photography.
            </p>
          </div>

          {/* Section 4: Wholesale Information */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">Wholesale & Factory Direct Supply</h2>
            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              As a direct manufacturer, Balakar Sparklers Factory supplies 12 CM sparklers in bulk at wholesale rates. Buying directly from our Alamarathupatti factory in Sivakasi helps you secure better profit margins by bypassing intermediaries. We use high-quality packaging boxes featuring the Phoenix Brand trademark. We provide transport coordination to deliver bulk consignments safely to dealers throughout India.
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
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} defaultCategory="12 CM Sparklers" />
    </div>
  );
}
