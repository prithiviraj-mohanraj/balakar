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
  if (!isActive) return "bg-white border border-zinc-200 text-zinc-650 hover:border-zinc-200 hover:text-zinc-900";
  
  switch (size) {
    case "7 CM": return "bg-[#0F172A] text-white shadow-md shadow-slate-500/10";
    case "10 CM": return "bg-[#2563EB] text-white shadow-md shadow-blue-500/20";
    case "12 CM": return "bg-[#7C3AED] text-white shadow-md shadow-purple-500/20";
    case "15 CM": return "bg-[#14B8A6] text-white shadow-md shadow-teal-500/20";
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
      btn: "bg-gradient-to-r from-[#0F172A] to-[#1E293B] hover:shadow-[0_0_20px_rgba(15,23,42,0.25)]",
      borderHover: "hover:border-[#0F172A]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    };
    case "10 CM": return { 
      text: "text-[#2563EB]", 
      bg: "bg-blue-50/50", 
      border: "border-blue-100", 
      btn: "bg-[#2563EB] hover:bg-[#1d4ed8] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]",
      borderHover: "hover:border-[#2563EB]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
    };
    case "12 CM": return { 
      text: "text-[#7C3AED]", 
      bg: "bg-purple-50/50", 
      border: "border-purple-100", 
      btn: "bg-[#7C3AED] hover:bg-[#6d28d9] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]",
      borderHover: "hover:border-[#7C3AED]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(124,58,237,0.08)]"
    };
    case "15 CM": return { 
      text: "text-[#14B8A6]", 
      bg: "bg-teal-50/50", 
      border: "border-teal-100", 
      btn: "bg-[#14B8A6] hover:bg-[#0d9488] hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]",
      borderHover: "hover:border-[#14B8A6]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)]"
    };
    case "30 CM": return { 
      text: "text-[#D4AF37]", 
      bg: "bg-amber-50/50", 
      border: "border-amber-100", 
      btn: "bg-[#D4AF37] hover:bg-[#b5922f] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]",
      borderHover: "hover:border-[#D4AF37]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]"
    };
    case "50 CM": return { 
      text: "text-[#0F172A]", 
      bg: "bg-slate-50/50", 
      border: "border-slate-100", 
      btn: "bg-gradient-to-r from-[#0F172A] to-[#1E293B] hover:shadow-[0_0_20px_rgba(15,23,42,0.25)]",
      borderHover: "hover:border-[#0F172A]/30",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
    };
    default: return { 
      text: "text-zinc-950", 
      bg: "bg-zinc-50", 
      border: "border-zinc-200", 
      btn: "bg-zinc-950 hover:bg-zinc-800",
      borderHover: "hover:border-zinc-350",
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
      desc: "Perfect entry-level sparklers for family celebrations. Highly safe, easy to handle, and bright."
    },
    {
      size: "10 CM",
      title: "10 CM Sparklers",
      image: "/products/10cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Silver"],
      slug: "10cm-sparklers",
      keyword: "10 CM Sparklers Wholesale",
      desc: "An all-time favorite length offering a perfect balance between burning duration and bright embers."
    },
    {
      size: "12 CM",
      title: "12 CM Sparklers",
      image: "/products/12cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "12cm-sparklers",
      keyword: "12 CM Sparklers Factory Direct",
      desc: "Premium grade sparklers featuring long-lasting sparkle effects in multiple colors."
    },
    {
      size: "15 CM",
      title: "15 CM Sparklers",
      image: "/products/15cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "15cm-sparklers",
      keyword: "15 CM Sparklers Supplier India",
      desc: "Ideal choice for large public gatherings, festivals, and parties. Extra bright and highly reliable."
    },
    {
      size: "30 CM",
      title: "30 CM Sparklers",
      image: "/products/30cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "30cm-sparklers",
      keyword: "30 CM Sparklers Manufacturer",
      desc: "Long metal sparklers that provide massive golden crackling sparkles and extended display time."
    },
    {
      size: "50 CM",
      title: "50 CM Sparklers",
      image: "/products/50cm-products.jpg",
      variants: ["Electric", "Colour"],
      slug: "50cm-sparklers",
      keyword: "50 CM Sparklers Wholesale Sivakasi",
      desc: "Our giant sparkler variety, designed for premium weddings, New Year events, and corporate celebrations."
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
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/10 via-white to-white py-20 sm:py-24">
        <SparkEffect />
        {/* Ambient festive firework glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-amber-200/15 via-orange-300/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-5000" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/30 px-3.5 py-1.5 text-xs font-bold text-amber-800 mb-6"
            >
              <Award className="h-3.5 w-3.5 text-amber-600" />
              <span>Green Fireworks Certified CSIR-NEERI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl leading-[1.2] max-w-4xl mx-auto"
            >
              Premium Quality Sparklers
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#14B8A6] font-extrabold drop-shadow-sm">
                Direct From Sivakasi Manufacturer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto"
            >
              Get premium compliance sparklers direct from our Sivakasi manufacturing plant. Wholesale & bulk orders welcome with special pricing on our trusted Phoenix Brand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="h-4.5 w-4.5 text-white fill-white animate-pulse" />
                <span>Get Wholesale Pricing</span>
              </button>
              
              <Link
                href="/catalog"
                className="flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(15,23,42,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FileText className="h-4.5 w-4.5 text-white" />
                <span>Download Product Catalog</span>
              </Link>

              <a
                href="tel:+919443868706"
                className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-bold text-zinc-700 hover:border-[#2563EB] hover:bg-[#2563EB]/5 hover:text-[#2563EB] hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Phone className="h-4.5 w-4.5 text-[#2563EB]" />
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="py-16 border-y border-zinc-100 bg-zinc-50/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                Eco-Friendly Green Sparklers Certified by CSIR-NEERI
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                At Balakar Sparklers, our products are built with environmental responsibility. Our sparklers are certified under license **NE/TN/201-01/2019** issued by the CSIR-NEERI. We reduce smoke emissions while maintaining unmatched brilliance and spark intensity.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-zinc-900">Green Certified Formulas</span>
                    <p className="text-xs text-zinc-500 mt-0.5">Reduced particulate emission and low smoke output.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-zinc-900">Official Phoenix Brand Trademark</span>
                    <p className="text-xs text-zinc-500 mt-0.5">100% genuine products with our registered logo.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  Request Wholesale Pricelist <ArrowRight className="h-4 w-4" />
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
            </div>          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Image grid (Aesthetic cards representing branding) */}
            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-zinc-100 shadow-lg bg-white p-4">
                <Image
                  src="/branding/phoenix-trademark.png"
                  alt="Balakar Sparklers Factory and Logo Branding"
                  fill
                  sizes="(max-w-768px) 100vw, 600px"
                  className="object-contain p-4"
                  quality={95}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-xl max-w-xs">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Building className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block leading-none">Located in</span>
                  <span className="text-sm font-bold text-zinc-900 block mt-1 leading-tight">Alamarathupatti, Sivakasi</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Trusted Sivakasi Manufacturer</span>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mt-1">
                  High Quality Sparklers Manufactured in Sivakasi
                </h2>
              </div>
              <p className="text-base leading-relaxed text-zinc-600">
                Balakar Sparklers Factory is a dedicated fireworks manufacturer specializing in premium quality sparklers. Based in Alamarathupatti, the manufacturing hub of Sivakasi, we provide high-durability, bright, and safe sparklers direct from the plant to dealers.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                We cater to wholesale dealers, retail shops, and bulk purchasers looking for high margins and premium product quality. We strictly adhere to safety standards and eco-friendly manufacturing guidelines.
              </p>

              {/* Micro benefits grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                  <span className="text-lg font-bold text-zinc-950">Factory Direct</span>
                  <p className="text-xs text-zinc-500 mt-1">Eliminating middleware commissions for dealers.</p>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                  <span className="text-lg font-bold text-zinc-950">Phoenix Brand</span>
                  <p className="text-xs text-zinc-500 mt-1">Acclaimed for bright colors and clean ignition.</p>
                </div>
              </div>

              {/* Conversion opportunity */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <span>Connect with Factory</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
                <a
                  href="tel:+919443868706"
                  className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-bold text-zinc-700 hover:bg-zinc-50 hover:scale-[1.02] hover:border-zinc-300 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" /> Call Sales
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

          {/* Interactive tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {productCategories.map((cat) => (
              <button
                key={cat.size}
                onClick={() => setSelectedCategory(cat.size)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-250 ${getTabStyle(cat.size, selectedCategory)}`}
              >
                {cat.size}
              </button>
            ))}
          </div>

          {/* Active Product display card */}
          {(() => {
            const scheme = getScheme(currentCategory.size);
            return (
              <div className={`bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xl transition-all duration-300 hover:scale-[1.005] ${scheme.borderHover} ${scheme.shadowHover}`}>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                  
                  {/* Product graphic column (Showcase landscape catalog layout - col-span-7) */}
                  <div className="lg:col-span-7 flex justify-center w-full">
                    <div className="relative group w-full max-w-2xl aspect-[1599/1132] rounded-2xl overflow-hidden border-2 border-zinc-150 bg-zinc-50 shadow-md p-1 transition-transform duration-300 hover:scale-[1.01]">
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
                      <span className={`text-xs font-bold uppercase tracking-widest block ${scheme.text}`}>
                        Sivakasi Factory Standard
                      </span>
                      <h3 className="text-3xl font-extrabold tracking-tight text-zinc-950 mt-1">
                        {currentCategory.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-650 mt-2">
                        {currentCategory.desc}
                      </p>
                    </div>

                    {/* Available Variants */}
                    <div>
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2.5">
                        Available Variants
                      </span>
                      <div className="flex flex-wrap gap-2">
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

                    {/* Long Tail Keyword Reference Tag */}
                    <div className={`rounded-xl border p-4 ${scheme.bg} ${scheme.border}`}>
                      <div className="flex gap-2">
                        <Info className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${scheme.text}`} />
                        <div>
                          <span className={`text-xs font-bold ${scheme.text}`}>Wholesale Keywords</span>
                          <p className={`text-xs mt-0.5 font-medium italic ${scheme.text}`}>
                            &ldquo;{currentCategory.keyword}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => setIsInquiryOpen(true)}
                        className={`flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer hover:scale-[1.02] ${scheme.btn}`}
                      >
                        <span>Inquire for {currentCategory.size} Sizes</span>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </button>
                      
                      <Link
                        href={`/${currentCategory.slug}`}
                        className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${scheme.text} hover:underline`}
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Business Advantages</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mt-1">
              Why Deal Direct With Our Sivakasi Factory?
            </h2>
            <p className="text-sm text-zinc-600 mt-3">
              We provide maximum reliability, direct cost-efficiency, and premium sparklers that guarantee customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefit 1 */}
            <div className="rounded-2xl border border-zinc-150 p-6 hover:shadow-md transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <TrendingUp className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-zinc-900 mt-4">Factory Direct Pricing</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                By purchasing direct from our Alamarathupatti factory, you eliminate distributor margins, maximizing your retail profits.
              </p>
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
              >
                <span>Get Pricing</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl border border-zinc-150 p-6 hover:shadow-md transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-zinc-900 mt-4">CSIR-NEERI Certified</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                We manufacture Green Certified sparklers that comply with eco-safety laws, ensuring hassle-free stock operations.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
              >
                <span>Read License</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-2xl border border-zinc-150 p-6 hover:shadow-md transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Truck className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-zinc-900 mt-4">Nationwide Shipping</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                We organize seamless transportation logistics from Sivakasi to major states and cities across India.
              </p>
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
              >
                <span>Check Shipping</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Benefit 4 */}
            <div className="rounded-2xl border border-zinc-150 p-6 hover:shadow-md transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-zinc-900 mt-4">Premium Phoenix Brand</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Acclaimed for vibrant colors (Green, Red, Silver, Gold), stable ignition, and long spark trails.
              </p>
              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
              >
                <span>All Products</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 border-t border-zinc-100 bg-zinc-50/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Inquiries & Answers</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = !!faqOpen[index];
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-150 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-zinc-900 hover:bg-zinc-50/50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
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
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              Ask Factory Directly <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section & Lead Capture */}
      <section className="py-24 border-t border-zinc-100 bg-white" id="contact-form">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Connect With Us</span>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mt-1">
                  Start Your Order Today
                </h2>
                <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
                  Have questions about ordering bulk sparklers? Get in touch directly with our Sivakasi manufacturing plant representatives via phone, email, or WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-zinc-900 block leading-tight">Factory Address</span>
                    <span className="text-zinc-500 mt-1 block">
                      Balakar Sparklers Factory, Alamarathupatti, Sivakasi, Tamil Nadu, India. PIN: 626130
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
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
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-bold text-zinc-900 block leading-tight">Call Numbers</span>
                    <div className="text-zinc-500 mt-1 flex flex-col gap-1">
                      <a href="tel:+919443868706" className="hover:text-zinc-950 transition-colors">
                        +91 94438 68706 (Sales & Inquiry)
                      </a>
                      <a href="tel:+918248268349" className="hover:text-zinc-950 transition-colors">
                        +91 82482 68349 (Factory Direct)
                      </a>
                      <a href="tel:+918072431283" className="hover:text-zinc-950 transition-colors">
                        +91 80724 31283 (Order Dispatch)
                      </a>
                    </div>
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
                    className="text-sm font-semibold text-emerald-700 block mt-1 hover:underline"
                  >
                    Chat directly with factory desk &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Form Box Column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-zinc-150 p-6 sm:p-8 shadow-md bg-zinc-50/30">
                <h3 className="text-lg font-bold text-zinc-950 mb-6">
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
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="City & State"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all"
                  />
                  <textarea
                    rows={4}
                    placeholder="Describe your bulk requirements, dispatch location, or questions..."
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-zinc-400 transition-all resize-none"
                  />
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
