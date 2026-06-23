"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield, CheckCircle } from "lucide-react";
import InquiryModal from "./inquiry-modal";

export default function Footer() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "7 CM Sparklers", href: "/7cm-sparklers" },
    { name: "10 CM Sparklers", href: "/10cm-sparklers" },
    { name: "12 CM Sparklers", href: "/12cm-sparklers" },
    { name: "15 CM Sparklers", href: "/15cm-sparklers" },
    { name: "30 CM Sparklers", href: "/30cm-sparklers" },
    { name: "50 CM Sparklers", href: "/50cm-sparklers" },
  ];

  const companyLinks = [
    { name: "About Factory", href: "/about" },
    { name: "Product Catalog", href: "/products" },
    { name: "Download PDF Catalog", href: "/catalog" },
    { name: "Contact Inquiry", href: "/contact" },
  ];

  return (
    <>
      <footer className="w-full border-t border-zinc-100 bg-zinc-50/50 py-16 text-zinc-600 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 pb-12 border-b border-zinc-150">
            {/* Column 1: Info and Brand */}
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex items-center">
                <Image
                  src="/branding/balakar-logo.png"
                  alt="Balakar Sparklers Logo"
                  width={180}
                  height={54}
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <p className="text-sm leading-relaxed text-zinc-500">
                Premium manufacturer of high-quality sparklers based in Alamarathupatti, Sivakasi. Focused on safety, brightness, and direct wholesale delivery across India.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 mt-2">
                <div className="flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-700">
                  <Shield className="h-3.5 w-3.5 text-zinc-600" />
                  <span>Phoenix Brand Trademark</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Green Certified</span>
                </div>
              </div>
            </div>

            {/* Column 2: Products */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider text-zinc-900 uppercase">
                Product Sizes
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-zinc-950 transition-colors text-zinc-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider text-zinc-900 uppercase">
                Company & Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-zinc-950 transition-colors text-zinc-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Detail */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold tracking-wider text-zinc-900 uppercase">
                Factory Address
              </h4>
              <div className="flex flex-col gap-3.5 text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-zinc-400 mt-0.5" />
                  <span>
                    <strong>Balakar Sparklers Factory</strong>
                    <br />
                    Alamarathupatti, Sivakasi,
                    <br />
                    Tamil Nadu, India.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="h-5 w-5 shrink-0 text-zinc-400 mt-0.5" />
                  <a
                    href="mailto:balakarsparklersmrsj@gmail.com"
                    className="hover:text-zinc-950 transition-colors break-all"
                  >
                    balakarsparklersmrsj@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="h-5 w-5 shrink-0 text-zinc-400 mt-0.5" />
                  <div className="flex flex-col">
                    <a href="tel:+919443868706" className="hover:text-zinc-950 transition-colors">
                      +91 94438 68706
                    </a>
                    <a href="tel:+918248268349" className="hover:text-zinc-950 transition-colors">
                      +91 82482 68349
                    </a>
                    <a href="tel:+918072431283" className="hover:text-zinc-950 transition-colors">
                      +91 80724 31283
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-400">
            <div className="flex flex-col gap-1.5">
              <p>&copy; {currentYear} Balakar Sparklers Factory. All rights reserved.</p>
              <p className="leading-normal">
                Phoenix Brand is a registered trademark of Balakar Sparklers Factory. Green Fireworks Certified by CSIR-NEERI, Govt of India (License NE/TN/201-01/2019).
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="hover:text-zinc-950 transition-colors font-medium cursor-pointer"
              >
                Inquire wholesale price list
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
