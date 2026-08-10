"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, CheckCircle, Sparkles, Award } from "lucide-react";
import InquiryModal from "./inquiry-modal";

export default function Footer() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "7 CM Electric & Colors", href: "/7cm-sparklers" },
    { name: "10 CM High Sparklers", href: "/10cm-sparklers" },
    { name: "12 CM Commercial Packs", href: "/12cm-sparklers" },
    { name: "15 CM Event Sparklers", href: "/15cm-sparklers" },
    { name: "30 CM Giant Sparklers", href: "/30cm-sparklers" },
    { name: "50 CM Mega Sparklers", href: "/50cm-sparklers" },
  ];

  const companyLinks = [
    { name: "About Sivakasi Factory", href: "/about" },
    { name: "Product Showroom", href: "/products" },
    { name: "PDF Product Catalog", href: "/catalog" },
    { name: "Wholesale Inquiry", href: "/contact" },
  ];

  return (
    <>
      <footer className="relative overflow-hidden w-full border-t border-white/10 bg-[#030306] py-16 text-slate-300 sm:py-20 z-10">
        {/* Soft Ambient Gold Radial Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 pb-12 border-b border-white/10">
            {/* Column 1: Info and Brand */}
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex items-center">
                <Image
                  src="/branding/balakar-logo.png"
                  alt="Balakar Sparklers Logo"
                  width={190}
                  height={58}
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <p className="text-xs leading-relaxed text-slate-400">
                Direct manufacturer of premium green sparklers based in Alamarathupatti, Sivakasi. Delivering safety, double-dipped steel wire brilliance, and reliable wholesale consignments across India.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 mt-1">
                <div className="flex items-center gap-1.5 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-bold text-[#D4AF37]">
                  <Award className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Phoenix Trademark</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>CSIR-NEERI Green License</span>
                </div>
              </div>
            </div>

            {/* Column 2: Products */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-extrabold tracking-widest text-[#D4AF37] uppercase">
                Product Collections
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#D4AF37] transition-colors text-slate-400 font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-extrabold tracking-widest text-[#D4AF37] uppercase">
                Company & Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#D4AF37] transition-colors text-slate-400 font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Detail */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-extrabold tracking-widest text-[#D4AF37] uppercase">
                Sivakasi Factory Desk
              </h4>
              <div className="flex flex-col gap-3.5 text-xs leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4.5 w-4.5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <span className="text-slate-300">
                    <strong className="text-white">Balakar Sparklers Factory</strong>
                    <br />
                    Alamarathupatti, Sivakasi,
                    <br />
                    Tamil Nadu, India. PIN: 626130
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4.5 w-4.5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <a
                    href="mailto:balakarsparklersmrsj@gmail.com"
                    className="hover:text-[#D4AF37] transition-colors break-all text-slate-300"
                  >
                    balakarsparklersmrsj@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="h-4.5 w-4.5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <div className="flex flex-col gap-1 text-slate-300">
                    <a href="tel:+919443868706" className="hover:text-[#D4AF37] transition-colors">
                      +91 94438 68706 (Sales & Inquiry)
                    </a>
                    <a href="tel:+918248268349" className="hover:text-[#D4AF37] transition-colors">
                      +91 82482 68349 (Factory Direct)
                    </a>
                    <a href="tel:+918072431283" className="hover:text-[#D4AF37] transition-colors">
                      +91 80724 31283 (Dispatch Desk)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
            <div className="flex flex-col gap-1.5 max-w-3xl">
              <p>&copy; {currentYear} Balakar Sparklers Factory, Sivakasi. All rights reserved.</p>
              <p className="leading-relaxed text-[11px] text-slate-500">
                Phoenix Brand is an official registered trademark of Balakar Sparklers Factory. CSIR-NEERI Green Fireworks Certified under License NE/TN/201-01/2019. Manufactured in Alamarathupatti, Sivakasi.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Get Factory Quotation &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}
