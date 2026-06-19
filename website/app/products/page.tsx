"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, Download, Info } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MobileStickyBar from "../../components/mobile-sticky-bar";
import FloatingInquiry from "../../components/floating-inquiry";
import InquiryModal from "../../components/inquiry-modal";
import { getBreadcrumbSchema } from "../../lib/seo.config";

export default function ProductsPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const getBadgeStyle = (size: string) => {
    switch (size) {
      case "7 CM": return "bg-slate-50 border-slate-200 text-[#0F172A] font-bold";
      case "10 CM": return "bg-blue-50 border-blue-200 text-[#2563EB] font-bold";
      case "12 CM": return "bg-purple-50 border-purple-200 text-[#7C3AED] font-bold";
      case "15 CM": return "bg-teal-50 border-teal-200 text-[#14B8A6] font-bold";
      case "30 CM": return "bg-amber-50 border-amber-300 text-[#D4AF37] font-bold";
      case "50 CM": return "bg-slate-50 border-slate-200 text-[#0F172A] font-bold";
      default: return "bg-zinc-100 text-zinc-850 font-bold";
    }
  };

  const getCardStyle = (size: string) => {
    switch (size) {
      case "7 CM": return "hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] hover:bg-gradient-to-b hover:from-slate-50/10 hover:to-white hover:scale-[1.015]";
      case "10 CM": return "hover:border-blue-250 hover:shadow-[0_20px_45px_rgba(37,99,235,0.06)] hover:bg-gradient-to-b hover:from-blue-50/10 hover:to-white hover:scale-[1.015]";
      case "12 CM": return "hover:border-purple-250 hover:shadow-[0_20px_45px_rgba(124,58,237,0.06)] hover:bg-gradient-to-b hover:from-purple-50/10 hover:to-white hover:scale-[1.015]";
      case "15 CM": return "hover:border-teal-250 hover:shadow-[0_20px_45px_rgba(20,184,166,0.06)] hover:bg-gradient-to-b hover:from-teal-50/10 hover:to-white hover:scale-[1.015]";
      case "30 CM": return "hover:border-amber-350 hover:shadow-[0_20px_45px_rgba(212,175,55,0.06)] hover:bg-gradient-to-b hover:from-amber-50/10 hover:to-white hover:scale-[1.015]";
      case "50 CM": return "hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] hover:bg-gradient-to-b hover:from-slate-50/10 hover:to-white hover:scale-[1.015]";
      default: return "hover:border-zinc-350 hover:shadow-lg hover:scale-[1.015]";
    }
  };

  const products = [
    {
      size: "7 CM",
      title: "7 CM Sparklers",
      image: "/images/products/7cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "7cm-sparklers",
      keyword: "7 CM Sparklers Manufacturer Sivakasi",
      desc: "Perfect entry-level sparklers for family celebrations. Highly safe, easy to handle, and bright.",
      app: "Family gatherings, children's celebrations, domestic festivals."
    },
    {
      size: "10 CM",
      title: "10 CM Sparklers",
      image: "/images/products/10cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red", "Silver"],
      slug: "10cm-sparklers",
      keyword: "10 CM Sparklers Wholesale",
      desc: "An all-time favorite length offering a perfect balance between burning duration and bright embers.",
      app: "Diwali, wedding pathways, outdoor evening parties."
    },
    {
      size: "12 CM",
      title: "12 CM Sparklers",
      image: "/images/products/12cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "12cm-sparklers",
      keyword: "12 CM Sparklers Factory Direct",
      desc: "Premium grade sparklers featuring long-lasting sparkle effects in multiple colors.",
      app: "Grand festivals, corporate stage entrances, private celebrations."
    },
    {
      size: "15 CM",
      title: "15 CM Sparklers",
      image: "/images/products/15cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "15cm-sparklers",
      keyword: "15 CM Sparklers Supplier India",
      desc: "Ideal choice for large public gatherings, festivals, and parties. Extra bright and highly reliable.",
      app: "Large community gatherings, temple festivals, stage decoration."
    },
    {
      size: "30 CM",
      title: "30 CM Sparklers",
      image: "/images/products/30cm-products.jpg",
      variants: ["Electric", "Colour", "Green", "Red"],
      slug: "30cm-sparklers",
      keyword: "30 CM Sparklers Manufacturer",
      desc: "Long metal sparklers that provide massive golden crackling sparkles and extended display time.",
      app: "New Year countdowns, wedding exit tunnels, premium parties."
    },
    {
      size: "50 CM",
      title: "50 CM Sparklers",
      image: "/images/products/50cm-products.jpg",
      variants: ["Electric", "Colour"],
      slug: "50cm-sparklers",
      keyword: "50 CM Sparklers Wholesale Sivakasi",
      desc: "Our giant sparkler variety, designed for premium weddings, New Year events, and corporate celebrations.",
      app: "Luxury wedding receptions, large commercial displays, photography shoots."
    }
  ];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Products", item: "/products" }
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
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Sivakasi Sparklers Plant</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl mt-2">
            Our Complete Product Range
          </h1>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Discover premium quality, Green Certified sparklers manufactured under the Phoenix Brand. Available in multiple lengths and vibrant color variants for wholesale and bulk purchase.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 text-sm font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4 text-white fill-white" />
              <span>Get Wholesale Price List</span>
            </button>
            <Link
              href="/catalog"
              className="flex items-center gap-1.5 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1d4ed8] hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-colors hover:scale-[1.02]"
            >
              <Download className="h-4 w-4 text-white" />
              <span>Download PDF Catalog</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.slug}
                className={`group flex flex-col rounded-3xl border border-zinc-150 bg-white overflow-hidden transition-all duration-300 ${getCardStyle(p.size)}`}
              >
                {/* Image Showcase (A4 Landscape aspect ratio, contain fit) */}
                <div className="aspect-[1599/1132] relative bg-zinc-50 overflow-hidden border-b border-zinc-150 p-2">
                  <Image
                    src={p.image}
                    alt={`${p.title} Catalog Page`}
                    fill
                    sizes="(max-w-768px) 100vw, 380px"
                    className="object-contain p-1 rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    quality={95}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-zinc-950">{p.title}</h3>
                      <span className={`rounded-lg border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getBadgeStyle(p.size)}`}>
                        {p.size} Size
                      </span>
                    </div>
                    
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed line-clamp-3">
                      {p.desc}
                    </p>

                    {/* Applications info */}
                    <p className="text-[11px] text-zinc-400 mt-3 italic leading-normal">
                      <strong>Applications:</strong> {p.app}
                    </p>

                    {/* Variants list */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.variants.map((v) => (
                        <span
                          key={v}
                          className="rounded-md bg-zinc-50 border border-zinc-150 px-2 py-0.5 text-[10px] font-semibold text-zinc-600"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="border-t border-zinc-100 pt-4 flex items-center justify-between gap-2">
                    <Link
                      href={`/${p.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-zinc-700 hover:text-[#2563EB] transition-colors"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    
                    <button
                      onClick={() => {
                        setSelectedProduct(p.title);
                        setIsInquiryOpen(true);
                      }}
                      className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-2 text-xs font-bold text-white hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(37,99,235,0.25)] transition-all cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Marketing strip */}
          <div className="mt-20 rounded-3xl border border-zinc-150 p-8 sm:p-10 bg-gradient-to-r from-amber-50/10 via-white to-zinc-50/30 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
             <div className="flex-1">
              <div className="flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4.5 w-4.5 text-[#14B8A6]" />
                <span>CSIR-NEERI Certified Partner</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mt-2">Interested in Custom Packaging or Logo Printing?</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                As a direct Sivakasi manufacturer, we support custom packaging boxes and co-branded dealer options for qualifying bulk orders. Get in touch with our factory managers to discuss your requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 text-xs font-bold text-white hover:shadow-[0_0_12px_rgba(37,99,235,0.25)] transition-all cursor-pointer hover:scale-[1.02]"
              >
                Request Custom Quotation
              </button>
              <a
                href="tel:+919443868706"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#2563EB]" /> Call Sales
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
