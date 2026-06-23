"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ChevronDown, Phone } from "lucide-react";
import InquiryModal from "./inquiry-modal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Factory", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact Us", href: "/contact" },
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
      <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/branding/balakar-logo.png"
              alt="Balakar Sparklers Logo"
              width={220}
              height={66}
              className="h-14 w-auto object-contain sm:h-20"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
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
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                        isActive("/products") || categories.some((c) => pathname === c.href)
                          ? "text-[#2563EB]"
                          : "text-zinc-650 hover:text-[#2563EB]"
                      }`}
                    >
                      Products
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 rounded-xl border border-zinc-100 bg-white p-2 shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <Link
                          href="/products"
                          className="block rounded-lg px-4 py-2 text-xs font-bold text-zinc-400 uppercase tracking-wider hover:bg-zinc-50 transition-colors"
                        >
                          All Categories
                        </Link>
                        <div className="h-px bg-zinc-100 my-1" />
                        {categories.map((cat) => (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                              pathname === cat.href
                                ? "bg-blue-50/50 text-[#2563EB] font-semibold"
                                : "text-zinc-600 hover:bg-zinc-50/70 hover:text-[#2563EB]"
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
                  className={`text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-[#2563EB]"
                      : "text-zinc-655 hover:text-[#2563EB]"
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
              className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-[#2563EB] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#2563EB]" />
              <span>Call Us</span>
            </a>
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all duration-200 cursor-pointer hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4 text-white fill-white" />
              <span>Get Wholesale Pricing</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 md:hidden transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-zinc-100 bg-white px-6 py-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => {
                if (item.name === "Products") {
                  return (
                    <div key={item.name} className="flex flex-col gap-2">
                      <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-semibold ${
                          isActive("/products") ? "text-[#2563EB]" : "text-zinc-600"
                        }`}
                      >
                        Products
                      </Link>
                      <div className="grid grid-cols-2 gap-2 pl-4 border-l border-zinc-100">
                        {categories.map((cat) => (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-sm py-1 font-medium ${
                              pathname === cat.href ? "text-[#2563EB] font-semibold" : "text-zinc-500"
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
                    className={`text-base font-semibold transition-colors ${
                      isActive(item.href) ? "text-[#2563EB]" : "text-zinc-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="h-px bg-zinc-100 my-2" />
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919443868706"
                  className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#2563EB]" /> Call Factory
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsInquiryOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] py-3 text-sm font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all duration-200 cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-white fill-white" />
                  Get Wholesale Pricing
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
