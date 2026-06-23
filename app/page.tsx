"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  MessageSquare,
  FileText,
  ShieldCheck,
  CheckCircle,
  Truck,
  Building,
  Award,
  ArrowRight,
  TrendingUp,
  MapPin,
  Mail,
  HelpCircle,
  ChevronDown,
  Info
} from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import SparkEffect from "../components/spark-effect";
import MobileStickyBar from "../components/mobile-sticky-bar";
import FloatingInquiry from "../components/floating-inquiry";
import InquiryModal from "../components/inquiry-modal";

import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getFAQSchema
} from "../lib/seo.config";

const getTabStyle = (size: string, selectedCategory: string) => {
  const isActive = selectedCategory === size;
  if (!isActive) return "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-200 hover:text-zinc-900";
  
  switch (size) {
    case "7 CM": return "bg-[#0F172A] text-white shadow-md shadow-slate-500/10";
    case "10 CM": return "bg-[#2563EB] text-white shadow-md shadow-blue-500/20";
    case "12 CM": return "bg-[#0F172A] text-white shadow-md shadow-slate-500/10";
    case "15 CM": return "bg-[#2563EB] text-white shadow-md shadow-blue-500/20";
    case "30 CM": return "bg-[#D4AF37] text-white shadow-md shadow-amber-500/20";
    case "50 CM": return "bg-[#0F172A] text-white shadow-md shadow-slate-500/10";
    default: return "bg-zinc-950 text-white";
  }
};

const getScheme = (size: string) => {
  switch (size) {
    case "7 CM": return { 
      text: "text-[#0F172A]", 
      bg: "bg-slate-50/50", 
      border: "border-slate-100", 
      btn: "bg-[#0F172A] hover:bg-slate-800 hover:shadow-[0_4px_12px_rgba(15,23,42,0.15)]",
      borderHover: "hover:border-[#0F172A]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    };
    case "10 CM": return { 
      text: "text-[#2563EB]", 
      bg: "bg-blue-50/50", 
      border: "border-blue-100", 
      btn: "bg-[#2563EB] hover:bg-[#1d4ed8] hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)]",
      borderHover: "hover:border-[#2563EB]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
    };
    case "12 CM": return { 
      text: "text-[#0F172A]", 
      bg: "bg-slate-50/50", 
      border: "border-slate-100", 
      btn: "bg-[#0F172A] hover:bg-slate-800 hover:shadow-[0_4px_12px_rgba(15,23,42,0.15)]",
      borderHover: "hover:border-[#0F172A]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    };
    case "15 CM": return { 
      text: "text-[#2563EB]", 
      bg: "bg-blue-50/50", 
      border: "border-blue-100", 
      btn: "bg-[#2563EB] hover:bg-[#1d4ed8] hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)]",
      borderHover: "hover:border-[#2563EB]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
    };
    case "30 CM": return { 
      text: "text-[#D4AF37]", 
      bg: "bg-amber-50/50", 
      border: "border-amber-100", 
      btn: "bg-[#D4AF37] hover:bg-[#b5922f] hover:shadow-[0_4px_12px_rgba(212,175,55,0.3)]",
      borderHover: "hover:border-[#D4AF37]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]"
    };
    case "50 CM": return { 
      text: "text-[#0F172A]", 
      bg: "bg-slate-50/50", 
      border: "border-slate-100", 
      btn: "bg-[#0F172A] hover:bg-slate-800 hover:shadow-[0_4px_12px_rgba(15,23,42,0.15)]",
      borderHover: "hover:border-[#0F172A]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    };
    default: return { 
      text: "text-zinc-900", 
      bg: "bg-zinc-50", 
      border: "border-zinc-200", 
      btn: "bg-zinc-950 hover:bg-zinc-800",
      borderHover: "hover:border-zinc-300",
      shadowHover: "hover:shadow-lg"
    };
  }
};

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("7 CM");
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const productCategories = [
    {
      size: "7 CM",
      title: "7 CM Sparklers",
      image: "/products/7cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "7cm-sparklers",
      keyword: "7 CM Sparklers Manufacturer Sivakasi",
      desc: "Perfect entry-level sparklers for family celebrations. Highly safe, easy to handle, and bright.",
      useCase: "Kids' birthday cake-cutting, compact family gatherings, Diwali home lighting.",
      boxPackaging: "10 Pieces per Box | 50 Boxes per Wholesale Carton",
      marginHighlight: "Factory Direct: Save up to 40% over brokers."
    },
    {
      size: "10 CM",
      title: "10 CM Sparklers",
      image: "/products/10cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Silver"],
      slug: "10cm-sparklers",
      keyword: "10 CM Sparklers Wholesale",
      desc: "An all-time favorite length offering a perfect balance between burning duration and bright embers.",
      useCase: "Traditional Diwali night, wedding entrance pathways, outdoor receptions.",
      boxPackaging: "10 Pieces per Box | 40 Boxes per Wholesale Carton",
      marginHighlight: "Direct margins: High profitability for retail shops."
    },
    {
      size: "12 CM",
      title: "12 CM Sparklers",
      image: "/products/12cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "12cm-sparklers",
      keyword: "12 CM Sparklers Factory Direct",
      desc: "Premium grade sparklers featuring long-lasting sparkle effects in multiple colors.",
      useCase: "Grand corporate stage entries, temple festivals, wedding exit tunnels.",
      boxPackaging: "10 Pieces per Box | 40 Boxes per Wholesale Carton",
      marginHighlight: "Moisture-sealed packaging for stable storage shelf life."
    },
    {
      size: "15 CM",
      title: "15 CM Sparklers",
      image: "/products/15cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "15cm-sparklers",
      keyword: "15 CM Sparklers Supplier India",
      desc: "Ideal choice for large public gatherings, festivals, and parties. Extra bright and highly reliable.",
      useCase: "Public festival events, wedding photography backdrops, New Year countdowns.",
      boxPackaging: "10 Pieces per Box | 30 Boxes per Wholesale Carton",
      marginHighlight: "Made with heavy A-grade steel core wire to prevent bending."
    },
    {
      size: "30 CM",
      title: "30 CM Sparklers",
      image: "/products/30cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "30cm-sparklers",
      keyword: "30 CM Sparklers Manufacturer",
      desc: "Long metal sparklers that provide massive golden crackling sparkles and extended display time.",
      useCase: "Wedding sparks tunnels, New Year main countdown, VIP entries.",
      boxPackaging: "5 Pieces per Box | 20 Boxes per Wholesale Carton",
      marginHighlight: "Double-dipped chemical coating for long-lasting display."
    },
    {
      size: "50 CM",
      title: "50 CM Sparklers",
      image: "/products/50cm-products.jpg",
      variants: ["Electric", "Colour"],
      slug: "50cm-sparklers",
      keyword: "50 CM Sparklers Wholesale Sivakasi",
      desc: "Our giant sparkler variety, designed for premium weddings, New Year events, and corporate celebrations.",
      useCase: "Luxury wedding receptions, large commercial displays, professional photo shoots.",
      boxPackaging: "5 Pieces per Box | 10 Boxes per Wholesale Carton",
      marginHighlight: "Extra-long burning time (up to 3 minutes of bright golden sparkles)."
    }
  ];

  const faqs = [
    {
      question: "What is the minimum order quantity for wholesale pricing?",
      answer: "We support wholesalers, distributors, and retail shop owners across India. For factory direct wholesale pricing, we recommend ordering in bulk packages. Please submit our wholesale inquiry form or contact us on WhatsApp to receive our detailed catalog and box packaging options."
    },
    {
      question: "Are Balakar Sparklers Green Certified?",
      answer: "Yes, Balakar Sparklers is Green Fireworks Certified under CSIR-NEERI (Certificate No: NE/TN/201-01/2019). We manufacture eco-friendly green sparklers that significantly reduce chemical emissions, meeting all governmental safety standards."
    },
    {
      question: "Do you ship bulk orders directly from your Sivakasi factory?",
      answer: "Absolutely. All bulk and wholesale orders are packed and dispatched directly from our manufacturing facility in Alamarathupatti, Sivakasi, Tamil Nadu, to your destination across India through reliable transport services."
    },
    {
      question: "How can I download the product catalog and price list?",
      answer: "You can download our PDF product catalog directly from our /catalog page. For the customized price list based on your order quantity, please use the 'Get Wholesale Pricing' form or message us directly via WhatsApp."
    },
    {
      question: "What variants are available in your product range?",
      answer: "We manufacture sparklers in sizes ranging from 7 cm to 50 cm. Depending on the size, we offer various color profiles including Electric (classic golden crackle), Colour (assorted colors), Green (vibrant eco green), Red (striking crimson), and Silver (brilliant white flash)."
    }
  ];

  // Prepare Schemas
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = getFAQSchema(faqs);

  const currentCategory = productCategories.find((c) => c.size === selectedCategory) || productCategories[0];

  return (
    <div className="flex-1 bg-white font-sans text-zinc-900 overflow-x-hidden pb-16 md:pb-0">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
 
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FAF9F6] py-16 sm:py-20">
        <SparkEffect />
        {/* Soft Ambient glowing background elements (Amber & Warm Gold only) */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-amber-200/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-5000" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/50 px-4 py-1.5 text-xs font-bold text-amber-900 mb-6 shadow-sm"
            >
              <Award className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="tracking-wide uppercase">CSIR-NEERI Green Certified Manufacturer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3.5xl lg:text-4.5xl leading-[1.2] max-w-4xl mx-auto"
            >
              Premium Quality Sparklers
              <span className="block mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-[#D4AF37] to-[#2563EB] font-extrabold drop-shadow-sm">
                Direct From Sivakasi Manufacturer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 max-w-2xl mx-auto"
            >
              Crafting joy, light, and safety for your family moments. Our certified, low-smoke green sparklers deliver dazzling gold and multi-color crackles with wholesale margins straight from our Sivakasi factory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto w-full px-4"
            >
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1d4ed8] hover:shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:scale-[1.01] transition-all duration-250 cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="h-4 w-4 text-white fill-white" />
                <span>Get Wholesale Pricing</span>
              </button>
              
              <Link
                href="/catalog"
                className="flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-slate-800 hover:scale-[1.01] transition-all duration-250 w-full sm:w-auto"
              >
                <FileText className="h-4 w-4 text-white" />
                <span>Download Product Catalog</span>
              </Link>

              <a
                href="tel:+919443868706"
                className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-bold text-zinc-700 hover:border-[#2563EB] hover:bg-[#2563EB]/5 hover:text-[#2563EB] hover:scale-[1.01] transition-all duration-250 w-full sm:w-auto"
              >
                <Phone className="h-4 w-4 text-[#2563EB]" />
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Above-the-fold Credentials Bar (Crisp White Divider) */}
      <section className="bg-white border-y border-zinc-200/60 py-6 relative z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto text-left">
            <div className="flex gap-3.5 items-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[#D4AF37] border border-amber-100 shadow-sm">
                <Sparkles className="h-4.5 w-4.5 fill-[#D4AF37]" />
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">Premium Quality</span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">Made with A-grade steel core wire and high-brilliance compounds.</p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start border-t border-zinc-100 pt-4 sm:border-t-0 sm:pt-0 sm:border-x sm:border-zinc-200/60 sm:px-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#2563EB] border border-blue-100 shadow-sm">
                <ShieldCheck className="h-4.5 w-4.5 text-[#2563EB]" />
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">Factory Direct Pricing</span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">Straight from our Sivakasi plant, maximizing your wholesale profits.</p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start border-t border-zinc-100 pt-4 sm:border-t-0 sm:pt-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                <Award className="h-4.5 w-4.5 text-emerald-600" />
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">Trusted Sivakasi Manufacturer</span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">Established Alamarathupatti factory. CSIR-NEERI Green certified.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials Showcase */}
      <section className="py-20 sm:py-24 border-y border-zinc-150 bg-[#FAF9F6] relative overflow-hidden">
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 bottom-1/4 w-96 h-96 bg-amber-150/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Visual Grid of Credentials */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">Verified Manufacturing Standards</span>
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl leading-tight">
                  Pioneering Safe & Certified Celebrations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  For over a decade, Balakar Sparklers has combined chemical precision with local expertise to manufacture premium sparklers that add warmth, light, and safety to your family moments.
                </p>
              </div>

              {/* Grid of Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-white rounded-2xl border border-zinc-200/60 p-5 shadow-sm transition-all hover:border-[#D4AF37]/40 hover:scale-[1.01] duration-300">
                  <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
                    <Award className="h-4.5 w-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">Phoenix Brand</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">Our official, trademarked sparkler series recognized across India for ignition reliability, brilliant golden sparks, and consistent burning.</p>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-200/60 p-5 shadow-sm transition-all hover:border-[#D4AF37]/40 hover:scale-[1.01] duration-300">
                  <div className="flex items-center gap-2 mb-2 text-emerald-600">
                    <ShieldCheck className="h-4.5 w-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">Green Certified License</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">CSIR-NEERI certified formulation (License NO: NE/TN/201-01/2019) engineered to reduce chemical smoke emissions by 30%.</p>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-200/60 p-5 shadow-sm transition-all hover:border-[#D4AF37]/40 hover:scale-[1.01] duration-300">
                  <div className="flex items-center gap-2 mb-2 text-[#2563EB]">
                    <Building className="h-4.5 w-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">Factory Manufacturer</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">Straight from our Alamarathupatti factory. Eliminates intermediary distributor margins, passing full savings to wholesale buyers.</p>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-200/60 p-5 shadow-sm transition-all hover:border-[#D4AF37]/40 hover:scale-[1.01] duration-300">
                  <div className="flex items-center gap-2 mb-2 text-slate-700">
                    <Truck className="h-4.5 w-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">Wholesale & Logistics</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">We coordinate directly with established Sivakasi transport services to deliver bulk container orders safely across all Indian states.</p>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-200/60 p-5 shadow-sm transition-all hover:border-[#D4AF37]/40 hover:scale-[1.01] duration-300 sm:col-span-2">
                  <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
                    <Sparkles className="h-4.5 w-4.5 fill-[#D4AF37]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">Premium Quality Standards</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">We double-dip our sparklers using high-grade core steel wires that prevent hot ashes from falling. Our products are moisture-protected for superior storage shelf life.</p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors cursor-pointer"
                >
                  Request Wholesale Price Sheet <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Certificate Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-150 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-sm w-full transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
                <div className="relative aspect-square w-48 mx-auto flex items-center justify-center rounded-full bg-zinc-50/50 p-3 border border-zinc-100">
                  <Image
                    src="/certifications/green-fireworks-license.png"
                    alt="Green Fireworks Certification CSIR-NEERI"
                    fill
                    sizes="(max-w-768px) 100vw, 200px"
                    className="object-contain p-2"
                    quality={98}
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Official Certificate
                  </div>
                  <span className="text-base font-bold text-zinc-950 block mt-4">CSIR-NEERI License</span>
                  <span className="text-xs font-semibold text-zinc-500 block mt-1 tracking-wider">NO: NE/TN/201-01/2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section (Heritage & Storytelling) */}
      <section className="relative overflow-hidden bg-[#0F172A] py-24 border-y border-slate-950">
        <SparkEffect />
        {/* Soft glowing ambient radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-5000" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Image grid (Aesthetic cards representing branding) */}
            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900/60 p-4">
                <Image
                  src="/branding/phoenix-trademark.png"
                  alt="Balakar Sparklers Factory and Logo Branding"
                  fill
                  sizes="(max-w-768px) 100vw, 600px"
                  className="object-contain p-4"
                  quality={95}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/95 p-4 shadow-2xl max-w-xs">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-500">
                  <Building className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block leading-none">Located in</span>
                  <span className="text-sm font-bold text-white block mt-1 leading-tight">Alamarathupatti, Sivakasi</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Trusted Sivakasi Manufacturer</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-1.5">
                  Bringing Light & Happiness to Family Celebrations
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                At Balakar Sparklers Factory, we believe that fireworks are more than just sulfur and steel wire—they are the spark of happiness that brings families together. From the excitement of Diwali night to the elegance of wedding exits and private events, our sparklers are crafted to make those special moments unforgettable.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-350">
                Operating from the manufacturing hub of Alamarathupatti, Sivakasi, we are dedicated to safety and environmental standards. Our CSIR-NEERI Green certified formulations ensure 30% lower smoke, so you can focus on making memories with peace of mind.
              </p>

              {/* Micro benefits grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <span className="text-sm font-bold text-white block">Direct Factory Value</span>
                  <p className="text-[11px] text-slate-450 mt-1 leading-normal">Eliminates middleman commissions, offering direct bulk values straight from the plant.</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <span className="text-sm font-bold text-[#D4AF37] block">Phoenix Trademark</span>
                  <p className="text-[11px] text-slate-450 mt-1 leading-normal">Acclaimed across India for clean ignition, stable burning paths, and double-dipped quality.</p>
                </div>
              </div>

              {/* Conversion opportunity */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1d4ed8] hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)] transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <span>Connect with Factory</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
                <a
                  href="tel:+919443868706"
                  className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-6 py-3.5 text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-[#D4AF37]" /> <span>Call Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section (Tabs Showcase) */}
      <section className="py-24 border-t border-zinc-100 bg-zinc-50/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Our Catalog</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mt-1">
              Premium Sparkler Categories
            </h2>
            <p className="text-sm text-zinc-600 mt-3">
              Explore our range of premium sparklers manufactured under the Phoenix Brand. Select a size to inspect the product pack styling and available colors.
            </p>
          </div>

          {/* Interactive tabs (swipeable on mobile viewports) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-2 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible mb-12">
            {productCategories.map((cat) => (
              <button
                key={cat.size}
                onClick={() => setSelectedCategory(cat.size)}
                className={`snap-center shrink-0 rounded-full px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-250 cursor-pointer ${getTabStyle(cat.size, selectedCategory)}`}
              >
                {cat.size}
              </button>
            ))}
          </div>

          {/* Active Product display card */}
          {(() => {
            const scheme = getScheme(currentCategory.size);
            return (
              <div className={`bg-[#FAF9F6] rounded-3xl border border-zinc-200/80 p-6 sm:p-10 shadow-md transition-all duration-300 ${scheme.borderHover} ${scheme.shadowHover}`}>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                  
                  {/* Product graphic column (Landscape catalog layout - col-span-7) */}
                  <div className="lg:col-span-7 flex justify-center w-full">
                    <div className="relative w-full max-w-2xl aspect-[1599/1132] rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm p-2 transition-transform duration-300 hover:scale-[1.01]">
                      <Image
                        src={currentCategory.image}
                        alt={`${currentCategory.title} Product Catalog Page`}
                        fill
                        sizes="(max-w-768px) 100vw, 800px"
                        className="object-contain rounded-xl p-1"
                        quality={98}
                        priority
                      />
                    </div>
                  </div>

                  {/* Product specifications column (col-span-5) */}
                  <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest block ${scheme.text}`}>
                        Premium Sparkler Collection
                      </span>
                      <h3 className="text-2.5xl font-extrabold tracking-tight text-[#0F172A] mt-1">
                        {currentCategory.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mt-2">
                        {currentCategory.desc}
                      </p>
                    </div>

                    {/* Available Variants */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block mb-2">
                        Available Color Variants
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentCategory.variants.map((v) => (
                          <span
                            key={v}
                            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${scheme.bg} ${scheme.border} ${scheme.text}`}
                          >
                            {v} Sparklers
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Enriched Storytelling (Use Cases & Packaging) */}
                    <div className="flex flex-col gap-3.5 border-y border-zinc-200/60 py-4 text-xs">
                      <div className="flex gap-2.5 items-start">
                        <Sparkles className="h-4.5 w-4.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-zinc-900 block">Festival Use Cases</strong>
                          <span className="text-slate-555 leading-normal">{currentCategory.useCase}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2.5 items-start">
                        <Truck className="h-4.5 w-4.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-zinc-900 block">Wholesale Packaging</strong>
                          <span className="text-slate-555 leading-normal">{currentCategory.boxPackaging}</span>
                        </div>
                      </div>

                      <div className="flex gap-2.5 items-start">
                        <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-zinc-900 block">Factory Direct Margins</strong>
                          <span className="text-slate-555 leading-normal">{currentCategory.marginHighlight}</span>
                        </div>
                      </div>
                    </div>

                    {/* Long Tail Keyword Reference Tag */}
                    <div className={`rounded-xl border p-3.5 ${scheme.bg} ${scheme.border}`}>
                      <div className="flex gap-2">
                        <Info className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${scheme.text}`} />
                        <div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${scheme.text}`}>Wholesale Search Keyword</span>
                          <p className={`text-xs mt-0.5 font-medium italic ${scheme.text}`}>
                            &ldquo;{currentCategory.keyword}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        onClick={() => setIsInquiryOpen(true)}
                        className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer hover:scale-[1.02] w-full sm:w-auto ${scheme.btn}`}
                      >
                        <span>Request Wholesale Quotation</span>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </button>
                      
                      <Link
                        href={`/${currentCategory.slug}`}
                        className={`flex items-center justify-center gap-1.5 text-sm font-bold transition-colors w-full sm:w-auto py-2 hover:underline ${scheme.text}`}
                      >
                        <span>View Category Details</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Why Choose Us & Factory Direct Benefits */}
      <section className="py-24 bg-[#FAF9F6] border-t border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Business Advantages</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mt-1.5">
              Why Deal Direct With Our Sivakasi Factory?
            </h2>
            <p className="text-sm text-zinc-650 mt-3">
              We provide maximum reliability, direct cost-efficiency, and premium sparklers that guarantee customer satisfaction and strong business relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                <TrendingUp className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-[#0F172A] mt-4">Factory Direct Pricing</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                By purchasing direct from our Alamarathupatti factory, you eliminate distributor margins, maximizing your retail profits.
              </p>
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors cursor-pointer"
              >
                <span>Get Pricing</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-[#0F172A] mt-4">CSIR-NEERI Certified</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                We manufacture Green Certified sparklers that comply with eco-safety laws, ensuring hassle-free stock operations.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
              >
                <span>Read License</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#D4AF37]">
                <Truck className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-[#0F172A] mt-4">Nationwide Shipping</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                We organize seamless transportation logistics from Sivakasi to major states and cities across India.
              </p>
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors cursor-pointer"
              >
                <span>Check Shipping</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Benefit 4 */}
            <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                <Award className="h-5 w-5 text-[#D4AF37]" />
              </span>
              <h3 className="text-base font-bold text-[#0F172A] mt-4">Premium Phoenix Brand</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Acclaimed for vibrant colors (Green, Red, Silver, Gold), stable ignition, and long spark trails.
              </p>
              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
              >
                <span>All Products</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 border-t border-zinc-200/60 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Inquiries & Answers</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mt-1.5">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = !!faqOpen[index];
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-200/60 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-[#0F172A] hover:bg-zinc-50/50 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-zinc-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section mini CTA */}
          <div className="text-center mt-10">
            <p className="text-xs text-zinc-500">
              Have another question about packaging or dispatch timelines?
            </p>
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors cursor-pointer"
            >
              <span>Ask Factory Directly</span> <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section & Lead Capture */}
      <section className="py-24 border-t border-zinc-200/60 bg-[#FAF9F6]" id="contact-form">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">Connect With Us</span>
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl mt-1.5">
                  Start Your Order Today
                </h2>
                <p className="text-sm text-zinc-650 mt-3 leading-relaxed">
                  Have questions about ordering bulk sparklers? Get in touch directly with our Sivakasi manufacturing plant representatives via phone, email, or WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#D4AF37] border border-amber-100/50 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#0F172A] block leading-tight">Factory Address</span>
                    <span className="text-slate-500 mt-1 block">
                      Balakar Sparklers Factory, Alamarathupatti, Sivakasi, Tamil Nadu, India. PIN: 626130
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100/50 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#0F172A] block leading-tight">Email Sales</span>
                    <a
                      href="mailto:balakarsparklersmrsj@gmail.com"
                      className="text-slate-500 mt-1 block hover:text-[#2563EB] transition-colors"
                    >
                      balakarsparklersmrsj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#D4AF37] border border-amber-100/50 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-[#0F172A] block leading-tight">Call Numbers</span>
                    <div className="text-slate-500 mt-1 flex flex-col gap-1">
                      <a href="tel:+919443868706" className="hover:text-[#2563EB] transition-colors">
                        +91 94438 68706 (Sales & Inquiry)
                      </a>
                      <a href="tel:+918248268349" className="hover:text-[#2563EB] transition-colors">
                        +91 82482 68349 (Factory Direct)
                      </a>
                      <a href="tel:+918072431283" className="hover:text-[#2563EB] transition-colors">
                        +91 80724 31283 (Order Dispatch)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Chat */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-5 flex gap-4 items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageSquare className="h-5 w-5 fill-emerald-50" />
                </span>
                <div className="flex-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block leading-none">Instant WhatsApp</span>
                  <a
                    href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-700 block mt-1 hover:underline"
                  >
                    Chat directly with factory desk &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Form Box Column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-zinc-200/60 p-6 sm:p-8 shadow-sm bg-white">
                <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                  Submit Wholesale Pricing Request
                </h3>
                {/* Form fields integrated */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsInquiryOpen(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="City & State"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                  />
                  <textarea
                    rows={4}
                    placeholder="Describe your bulk requirements, dispatch location, or questions..."
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1d4ed8] hover:shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-all cursor-pointer hover:scale-[1.01]"
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
