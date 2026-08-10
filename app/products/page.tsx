"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Download, Flame } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";

import FireworkBackground from "../../components/cinematic/firework-background";
import GlowAtmosphere from "../../components/cinematic/glow-atmosphere";
import SmokeLayer from "../../components/cinematic/smoke-layer";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function ProductsPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const products = [
    {
      size: "7 CM",
      title: "7 CM Sparklers Collection",
      image: "/products/7cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "7cm-sparklers",
      keyword: "7 CM Sparklers Manufacturer Sivakasi",
      desc: "Perfect entry-level sparklers for family cake-cutting and Diwali celebrations. Easy to handle and bright.",
      app: "Family gatherings, birthday cake-cutting, domestic festivals."
    },
    {
      size: "10 CM",
      title: "10 CM Sparklers Collection",
      image: "/products/10cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Silver"],
      slug: "10cm-sparklers",
      keyword: "10 CM Sparklers Wholesale Sivakasi",
      desc: "All-time favorite length offering an optimal balance between burning duration and radiant light.",
      app: "Diwali night, wedding entrance pathways, outdoor receptions."
    },
    {
      size: "12 CM",
      title: "12 CM Commercial Pack Sparklers",
      image: "/products/12cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Multi-color"],
      slug: "12cm-sparklers",
      keyword: "12 CM Sparklers Factory Direct",
      desc: "Extended burn time with vibrant multicolor flames for commercial events and large family gatherings.",
      app: "Grand wedding celebrations, New Year countdowns, corporate galas."
    },
    {
      size: "15 CM",
      title: "15 CM Grand Event Sparklers",
      image: "/products/15cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Gold Crackling"],
      slug: "15cm-sparklers",
      keyword: "15 CM Event Sparklers Manufacturer",
      desc: "Longer burn duration with dense starburst crackles designed for wedding photography and grand entries.",
      app: "VIP wedding receptions, stage lightings, festival processions."
    },
    {
      size: "30 CM",
      title: "30 CM Giant Sparklers Collection",
      image: "/products/30cm-products.jpg",
      variants: ["Electric Gold", "Colour Stars", "Green Eco"],
      slug: "30cm-sparklers",
      keyword: "30 CM Giant Sparklers Sivakasi",
      desc: "Extra long 30 CM giant sparklers producing over 3+ minutes of continuous golden starbursts.",
      app: "Photographer bride & groom exits, mega Diwali shows, stage fireworks."
    },
    {
      size: "50 CM",
      title: "50 CM Mega Celebration Sparklers",
      image: "/products/50cm-products.jpg",
      variants: ["Electric Super Gold", "Multi Stars", "Emerald Green"],
      slug: "50cm-sparklers",
      keyword: "50 CM Mega Sparklers Wholesale Factory",
      desc: "Our flagship extra-long 50 CM sparklers delivering majestic 5-minute continuous burn time.",
      app: "Stadium celebrations, resort galas, flagship wedding exits."
    }
  ];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Products", item: "/products" }
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
          <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-widest block">SIVAKASI SPARKLERS PLANT</span>
          <h1 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl uppercase mt-2">
            Our Premium <span className="text-[#D4AF37] gold-glow-text">Product Collections</span>
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Discover certified eco-friendly green sparklers manufactured under Phoenix Brand. Available in 7 CM to 50 CM lengths and vibrant color variants for wholesale consignments.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#0F172A] shadow-md"
            >
              <Flame className="h-4 w-4 fill-[#0F172A]" />
              <span>Get Wholesale Price List</span>
            </button>
            <Link
              href="/catalog"
              className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Download className="h-4 w-4 text-[#D4AF37]" />
              <span>Download PDF Catalog</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative overflow-hidden py-20 border-b border-amber-100 bg-[#FAF9F6]">
        <FireworkBackground type="trails" density={30} opacity={0.5} colorScheme="gold" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.slug}
                className="group flex flex-col rounded-3xl border border-amber-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#D4AF37]"
              >
                {/* Image Showcase */}
                <div className="aspect-[4/3] relative bg-amber-50/30 overflow-hidden border-b border-amber-100 p-3">
                  <Image
                    src={p.image}
                    alt={`${p.title} Catalog Page`}
                    fill
                    className="object-contain p-2 rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute top-4 left-4 rounded-xl bg-white/90 backdrop-blur-md px-3 py-1 border border-amber-200 text-xs font-bold text-[#D4AF37] shadow-sm">
                    {p.size} Category
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0F172A] uppercase tracking-wider">{p.title}</h3>
                    <p className="text-xs font-bold text-amber-700 mt-1 uppercase tracking-widest">{p.keyword}</p>
                    
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {p.desc}
                    </p>

                    <p className="text-[11px] text-slate-500 mt-3 italic">
                      <strong className="text-slate-800">Use cases:</strong> {p.app}
                    </p>

                    {/* Variants list */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.variants.map((v) => (
                        <span
                          key={v}
                          className="rounded-lg border border-amber-200 bg-amber-50/50 px-2.5 py-1 text-[10px] font-bold text-slate-800"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-2">
                    <Link
                      href={`/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#D4AF37] hover:text-amber-600 uppercase tracking-wider transition-colors"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    
                    <button
                      onClick={() => {
                        setSelectedProduct(p.title);
                        setIsInquiryOpen(true);
                      }}
                      className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-[#0F172A] hover:bg-amber-400 transition-all cursor-pointer shadow-sm"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Marketing strip */}
          <div className="mt-16 rounded-3xl border border-amber-200 p-8 bg-white flex flex-col gap-6 md:flex-row md:items-center md:justify-between shadow-md">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-extrabold uppercase tracking-widest">
                <ShieldCheck className="h-4.5 w-4.5 text-[#D4AF37]" />
                <span>CSIR-NEERI Certified Manufacturer</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mt-2">Custom Packaging & Branding Available</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                As a direct Sivakasi sparkler factory, we support custom dealer branding and wholesale transport packaging for major stockists across India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-[#0F172A] shadow-md"
              >
                Inquire Custom Order
              </button>
              <a
                href="tel:+919443868706"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Phone className="h-4 w-4 text-[#D4AF37]" /> <span>Call Direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
      <FloatingInquiry />
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultCategory={selectedProduct}
      />
    </div>
  );
}
