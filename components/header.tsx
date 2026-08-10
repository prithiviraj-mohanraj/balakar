"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ChevronDown, Phone, Flame } from "lucide-react";
import InquiryModal from "./inquiry-modal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    { name: "7 CM Sparklers", href: "/7cm-sparklers" },
    { name: "10 CM Sparklers", href: "/10cm-sparklers" },
    { name: "12 CM Sparklers", href: "/12cm-sparklers" },
    { name: "15 CM Sparklers", href: "/15cm-sparklers" },
    { name: "30 CM Sparklers", href: "/30cm-sparklers" },
    { name: "50 CM Sparklers", href: "/50cm-sparklers" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-amber-200/60 shadow-[0_4px_20px_rgba(212,175,55,0.12)]"
            : "bg-white/90 backdrop-blur-md border-b border-amber-100/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <Image
              src="/branding/balakar-logo.png"
              alt="Balakar Sparklers Logo"
              width={220}
              height={66}
              className="h-12 sm:h-16 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navigation.map((item) => {
              if (item.name === "Products") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href="/products"
                      className={`flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-all py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                        isActive("/products") || categories.some((c) => pathname === c.href)
                          ? "text-[#D4AF37] after:scale-x-100"
                          : "text-slate-800 hover:text-[#D4AF37]"
                      }`}
                    >
                      Products
                      <ChevronDown className="h-3.5 w-3.5 text-[#D4AF37]" />
                    </Link>
                    
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 rounded-2xl border border-amber-100 bg-white p-2.5 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <Link
                          href="/products"
                          className="block rounded-xl px-4 py-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest hover:bg-amber-50/60 transition-colors"
                        >
                          All Sparklers
                        </Link>
                        <div className="h-px bg-amber-100 my-1.5" />
                        {categories.map((cat) => (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            className={`block rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                              pathname === cat.href
                                ? "bg-amber-50 text-[#D4AF37] font-bold border border-amber-200"
                                : "text-slate-700 hover:bg-amber-50/50 hover:text-[#D4AF37]"
                            }`}
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs uppercase tracking-widest font-bold transition-all py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive(item.href)
                      ? "text-[#D4AF37] after:scale-x-100"
                      : "text-slate-800 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+919443868706"
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-slate-700 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Direct Sales</span>
            </a>
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="relative overflow-hidden flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] px-5 py-2.5 text-xs uppercase tracking-wider font-extrabold text-[#0F172A] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.03]"
            >
              <Flame className="h-4 w-4 fill-[#0F172A] text-[#0F172A]" />
              <span>Get Wholesale Pricing</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-800 hover:bg-amber-50 md:hidden transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-[#D4AF37]" /> : <Menu className="h-6 w-6 text-[#D4AF37]" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-amber-100 bg-white px-6 py-5 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => {
                if (item.name === "Products") {
                  return (
                    <div key={item.name} className="flex flex-col gap-2">
                      <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm font-bold uppercase tracking-wider ${
                          isActive("/products") ? "text-[#D4AF37]" : "text-slate-800"
                        }`}
                      >
                        Products Showroom
                      </Link>
                      <div className="grid grid-cols-2 gap-2 pl-4 border-l border-amber-100">
                        {categories.map((cat) => (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-xs py-1 font-semibold ${
                              pathname === cat.href ? "text-[#D4AF37]" : "text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive(item.href) ? "text-[#D4AF37]" : "text-slate-800 hover:text-[#D4AF37]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="h-px bg-amber-100 my-2" />
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919443868706"
                  className="flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50/50 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-amber-100/50 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#D4AF37]" /> Call Direct Factory
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsInquiryOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] py-3 text-xs font-extrabold uppercase tracking-wider text-[#0F172A] shadow-md"
                >
                  <Sparkles className="h-4 w-4 fill-[#0F172A]" />
                  <span>Get Wholesale Pricing</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}
