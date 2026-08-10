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
  MapPin,
  Mail,
  HelpCircle,
  ChevronDown,
  Flame,
  Star,
  Zap,
  Leaf
} from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import MobileStickyBar from "../components/mobile-sticky-bar";
import FloatingInquiry from "../components/floating-inquiry";
import InquiryModal from "../components/inquiry-modal";

// Cinematic Background Components
import FireworkBackground from "../components/cinematic/firework-background";
import GlowAtmosphere from "../components/cinematic/glow-atmosphere";
import SmokeLayer from "../components/cinematic/smoke-layer";

import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getFAQSchema
} from "../lib/seo.config";

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
      title: "7 CM Sparklers Collection",
      image: "/products/7cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      colorScheme: "gold" as const,
      slug: "7cm-sparklers",
      keyword: "7 CM Sparklers Manufacturer Sivakasi",
      desc: "Perfect entry-level sparklers for family cake-cutting and Diwali celebrations. Easy to handle, zero sparks fallout, and bright golden embers.",
      useCase: "Birthday cakes, family Diwali evening, wedding entrance pathways.",
      boxPackaging: "10 Pieces per Box | 50 Boxes per Wholesale Carton",
      marginHighlight: "Factory Direct: Save up to 40% over wholesale brokers."
    },
    {
      size: "10 CM",
      title: "10 CM Sparklers Collection",
      image: "/products/10cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Silver"],
      colorScheme: "amber" as const,
      slug: "10cm-sparklers",
      keyword: "10 CM Sparklers Wholesale Sivakasi",
      desc: "All-time favorite length offering an optimal balance between burning duration and radiant light.",
      useCase: "Traditional Diwali night, festive gatherings, outdoor celebration corridors.",
      boxPackaging: "10 Pieces per Box | 40 Boxes per Wholesale Carton",
      marginHighlight: "High Retail Margin: 35%+ direct shop profitability."
    },
    {
      size: "12 CM",
      title: "12 CM Commercial Pack Sparklers",
      image: "/products/12cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Multi-color"],
      colorScheme: "multicolor" as const,
      slug: "12cm-sparklers",
      keyword: "12 CM Sparklers Bulk Supply",
      desc: "Extended burn time with vibrant multicolor flames for commercial events and large family gatherings.",
      useCase: "Grand wedding celebrations, New Year countdowns, corporate galas.",
      boxPackaging: "10 Pieces per Box | 30 Boxes per Wholesale Carton",
      marginHighlight: "Bulk Transport Discount: Direct Sivakasi freight booking."
    },
    {
      size: "15 CM",
      title: "15 CM Grand Event Sparklers",
      image: "/products/15cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Gold Crackling"],
      colorScheme: "gold" as const,
      slug: "15cm-sparklers",
      keyword: "15 CM Event Sparklers Manufacturer",
      desc: "Longer burn duration with dense starburst crackles designed for wedding photography and grand entries.",
      useCase: "VIP wedding receptions, stage lightings, festival processions.",
      boxPackaging: "10 Pieces per Box | 25 Boxes per Wholesale Carton",
      marginHighlight: "Export Quality Coating: Double-dipped steel wire core."
    },
    {
      size: "30 CM",
      title: "30 CM Giant Sparklers Collection",
      image: "/products/30cm-products.jpg",
      variants: ["Electric Gold", "Colour Stars", "Green Eco"],
      colorScheme: "gold" as const,
      slug: "30cm-sparklers",
      keyword: "30 CM Giant Sparklers Sivakasi",
      desc: "Extra long 30 CM giant sparklers producing over 3+ minutes of continuous golden starbursts.",
      useCase: "Photographer bride & groom exits, mega Diwali shows, stage fireworks.",
      boxPackaging: "5 Pieces per Box | 20 Boxes per Wholesale Carton",
      marginHighlight: "High Value SKU: Top seller during peak Diwali season."
    },
    {
      size: "50 CM",
      title: "50 CM Mega Celebration Sparklers",
      image: "/products/50cm-products.jpg",
      variants: ["Electric Super Gold", "Multi Stars", "Emerald Green"],
      colorScheme: "emerald" as const,
      slug: "50cm-sparklers",
      keyword: "50 CM Mega Sparklers Wholesale Factory",
      desc: "Our flagship extra-long 50 CM sparklers delivering majestic 5-minute continuous burn time.",
      useCase: "Stadium celebrations, resort galas, flagship wedding exits.",
      boxPackaging: "5 Pieces per Box | 15 Boxes per Wholesale Carton",
      marginHighlight: "Flagship Product: Highest revenue generator per carton."
    }
  ];

  const currentProduct = productCategories.find(p => p.size === selectedCategory) || productCategories[0];

  const faqs = [
    {
      q: "Are Balakar Sparklers certified under CSIR-NEERI Green Fireworks?",
      a: "Yes, 100%. Balakar Sparklers operates under official CSIR-NEERI Green Fireworks License NE/TN/201-01/2019. Our formulations produce 30% less smoke and zero harmful barium compounds."
    },
    {
      q: "What is the minimum wholesale order quantity from Sivakasi factory?",
      a: "Our minimum wholesale consignment starts at 1 master carton (mixable across 7 CM, 10 CM, 12 CM, 15 CM, 30 CM, and 50 CM sizes). We ship directly to all major transport hubs across India."
    },
    {
      q: "Why choose double-dipped steel wire core sparklers?",
      a: "Double-dipping ensures chemical coating adheres firmly to the A-grade steel core. This guarantees uniform burning, zero sparks fallout on clothes or skin, and longer shelf life."
    },
    {
      q: "How fast can wholesale consignments be dispatched?",
      a: "Orders are dispatched directly from our Alamarathupatti, Sivakasi plant within 24 to 48 hours after payment confirmation via reliable transport logistics."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#05050A] text-slate-100 selection:bg-[#D4AF37] selection:text-black">
      {/* Structural JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))) }}
      />

      <Header />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION - Cinematic Fireworks Night Sky */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20 border-b border-white/10">
        {/* Reusable Canvas Background Engine */}
        <FireworkBackground type="hero" density={48} speed={1.1} opacity={0.7} colorScheme="gold" />
        
        {/* Volumetric Radial Light Glow */}
        <GlowAtmosphere position="hero" color="gold" intensity="medium" />

        {/* Subtle Atmospheric Smoke Haze */}
        <SmokeLayer opacity={0.25} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          {/* Above-headline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 backdrop-blur-md mb-6"
          >
            <Flame className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
              Sivakasi Direct Sparklers Factory • Phoenix Brand
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
          >
            LIGHT UP THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#F59E0B] gold-glow-text">MOMENT</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-xl font-medium text-slate-300 leading-relaxed mb-10"
          >
            Premium Green Certified Sparklers Manufactured in Sivakasi. Double-Dipped Steel Wire Core for Unmatched Brilliance and Zero Fallout Sparks.
          </motion.p>

          {/* Hero Featured Product Image Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/30 via-amber-500/20 to-[#D4AF37]/30 rounded-3xl blur-2xl opacity-60 animate-pulse-slow pointer-events-none" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/60 backdrop-blur-2xl p-4 shadow-2xl">
              <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/products/7cm-products.jpg"
                  alt="Balakar Sparklers Sivakasi Product Packaging Showcase"
                  fill
                  className="object-contain transform hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
                {/* Overlay Sparkle Accent */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-black/80 backdrop-blur-md px-3.5 py-2 border border-white/10">
                  <Star className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    7 CM to 50 CM Collections
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-black shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] transition-all duration-300 cursor-pointer hover:scale-[1.03]"
            >
              <Sparkles className="h-5 w-5 fill-black" />
              <span>EXPLORE OUR SPARKLERS</span>
            </button>

            <Link
              href="/catalog"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <FileText className="h-5 w-5 text-[#D4AF37]" />
              <span>DOWNLOAD CATALOG</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOVE-THE-FOLD CREDENTIALS STRIP */}
      {/* ========================================================================= */}
      <section className="relative z-20 -mt-8 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-[#0A0B12]/90 backdrop-blur-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-4 p-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">A-Grade Steel Core Wire</h3>
              <p className="text-xs text-slate-400 mt-0.5">Double-dipped coating ensuring zero spark fallout on hands or clothing.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">CSIR-NEERI Green License</h3>
              <p className="text-xs text-slate-400 mt-0.5">30% lower smoke eco formulations (License NE/TN/201-01/2019).</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <Building className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">Direct Sivakasi Factory</h3>
              <p className="text-xs text-slate-400 mt-0.5">Direct bulk consignment pricing straight from our Alamarathupatti plant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ATMOSPHERIC PRODUCT SHOWROOM & CATEGORY PORTALS */}
      {/* ========================================================================= */}
      <section className="relative py-24 border-b border-white/10 overflow-hidden">
        {/* Dynamic Category Fireworks Particle Engine */}
        <FireworkBackground
          key={selectedCategory}
          type="category"
          density={35}
          opacity={0.5}
          colorScheme={currentProduct.colorScheme}
        />
        
        <GlowAtmosphere position="center" color={currentProduct.colorScheme} intensity="medium" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
              PRODUCT SHOWROOM & SIZES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              Explore Our <span className="text-[#D4AF37] gold-glow-text">Sparkler Collections</span>
            </h2>
            <p className="text-sm text-slate-300 mt-3">
              Select a size category below to view illuminated catalog sheets, specifications, and wholesale margin highlights.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {productCategories.map((cat) => {
              const isSelected = selectedCategory === cat.size;
              return (
                <button
                  key={cat.size}
                  onClick={() => setSelectedCategory(cat.size)}
                  className={`shrink-0 rounded-2xl px-6 py-3 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-black shadow-[0_0_25px_rgba(212,175,55,0.4)] scale-[1.04]"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat.size}
                </button>
              );
            })}
          </div>

          {/* Active Product Card Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-white/15 bg-[#0A0B12]/80 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
            {/* Catalog Sheet Image Stage (Always object-contain & full resolution) */}
            <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3 shadow-inner">
              <Image
                src={currentProduct.image}
                alt={currentProduct.title}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute top-4 left-4 rounded-xl bg-black/80 backdrop-blur-md px-3.5 py-1.5 border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37]">
                {currentProduct.size} Category
              </div>
            </div>

            {/* Product Specifications & Details */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {currentProduct.title}
                </h3>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-1">
                  {currentProduct.keyword}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  {currentProduct.desc}
                </p>
              </div>

              {/* Variants Badges */}
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Available Color Formulations
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.variants.map((v) => (
                    <span
                      key={v}
                      className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Festival & Event Use
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">
                    {currentProduct.useCase}
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Standard Box Packaging
                  </span>
                  <span className="text-xs font-semibold text-white mt-1 block">
                    {currentProduct.boxPackaging}
                  </span>
                </div>
              </div>

              {/* Margin highlight */}
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-3.5 text-xs font-bold text-[#D4AF37] flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <span>{currentProduct.marginHighlight}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all"
                >
                  <Sparkles className="h-4 w-4 fill-black" />
                  <span>Get Wholesale Quotation</span>
                </button>

                <Link
                  href={`/${currentProduct.slug}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-200 hover:bg-white/10 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BRAND STORY & MANUFACTURING ("From Sivakasi to Celebrations") */}
      {/* ========================================================================= */}
      <section className="relative py-24 border-b border-white/10 overflow-hidden bg-[#030307]">
        <FireworkBackground type="embers" density={30} opacity={0.4} colorScheme="gold" />
        <GlowAtmosphere position="top-left" color="gold" intensity="soft" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
              SIVAKASI CRAFTSMANSHIP & STORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              From Sivakasi to <span className="text-[#D4AF37] gold-glow-text">Celebrations</span>
            </h2>
            <p className="text-sm text-slate-300 mt-3">
              Discover how Balakar Sparklers combines decades of Sivakasi pyrotechnic expertise with modern CSIR-NEERI green technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="rounded-3xl border border-white/10 bg-[#0A0B12]/90 p-6 flex flex-col gap-4 relative group hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] font-black text-lg">
                01
              </div>
              <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">
                Sivakasi Heritage
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Located in Alamarathupatti, Sivakasi, our plant upholds decades of traditional firework craftsmanship paired with rigorous safety controls.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-white/10 bg-[#0A0B12]/90 p-6 flex flex-col gap-4 relative group hover:border-emerald-500/40 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 font-black text-lg">
                02
              </div>
              <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">
                Green Technology
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Formulated under CSIR-NEERI guidelines producing 30% reduced particulate matter and zero toxic heavy metal residue.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-white/10 bg-[#0A0B12]/90 p-6 flex flex-col gap-4 relative group hover:border-amber-500/40 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400 font-black text-lg">
                03
              </div>
              <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">
                Phoenix Brand Seal
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Double-dipped steel wire core technology guaranteeing zero coating flaking and smooth 60s to 300s burn time per sparkler.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl border border-white/10 bg-[#0A0B12]/90 p-6 flex flex-col gap-4 relative group hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] font-black text-lg">
                04
              </div>
              <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">
                Wholesale Freight
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pan-India transport dispatch directly from Sivakasi factory hubs with full insurance and door-step city godown delivery.
              </p>
            </div>
          </div>

          {/* Official Brand Seals Display */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center gap-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white p-2">
                <Image
                  src="/branding/phoenix-trademark.png"
                  alt="Phoenix Trademark Seal"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white uppercase">Phoenix Trademark Brand</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Registered trademark seal guaranteeing authentic double-dipped Sivakasi sparkler quality.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white p-2">
                <Image
                  src="/certifications/green-fireworks-license.png"
                  alt="CSIR NEERI Green License Seal"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-emerald-400 uppercase">CSIR-NEERI Green License</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Official License NE/TN/201-01/2019 issued by Govt of India for eco-friendly green fireworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="relative py-24 border-b border-white/10">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
              FACTORY DESK HELP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-2">
              Frequently Asked <span className="text-[#D4AF37]">Questions</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0A0B12] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white uppercase tracking-wider"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#D4AF37] transition-transform duration-300 ${
                      faqOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen[index] && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT & WHOLESALE INQUIRY BANNER */}
      {/* ========================================================================= */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#05050A] via-[#0D0A03] to-[#05050A]">
        <FireworkBackground type="bursts" density={25} opacity={0.6} colorScheme="gold" />
        <GlowAtmosphere position="center" color="gold" intensity="strong" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Ready to Order <span className="text-[#D4AF37] gold-glow-text">Wholesale Sparklers?</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect directly with our Sivakasi factory sales team for customized bulk pricing, transport logistics, and festival dispatch schedules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.03] transition-all cursor-pointer"
            >
              <Sparkles className="h-4 w-4 fill-black" />
              <span>Request Wholesale Price List</span>
            </button>

            <a
              href="https://wa.me/919443868706?text=Hi%2C%20I%20am%20interested%20in%20ordering%20wholesale%20sparklers%20from%20Balakar%20Sparklers%20Factory.%20Please%20send%20me%20your%20price%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/15 backdrop-blur-md px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-emerald-400 hover:bg-emerald-500/25 transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Instant WhatsApp Chat</span>
            </a>
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
