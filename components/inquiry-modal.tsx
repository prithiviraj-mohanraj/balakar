"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, Check, Sparkles, Flame } from "lucide-react";
import { toast } from "sonner";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultCategory = "" }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    location: "",
    businessType: "Wholesaler",
    quantity: "Bulk Orders",
    interests: defaultCategory ? [defaultCategory] : [] as string[],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "7 CM Sparklers",
    "10 CM Sparklers",
    "12 CM Sparklers",
    "15 CM Sparklers",
    "30 CM Sparklers",
    "50 CM Sparklers",
  ];

  const handleCheckboxChange = (category: string) => {
    setFormData((prev) => {
      const interests = prev.interests.includes(category)
        ? prev.interests.filter((item) => item !== category)
        : [...prev.interests, category];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location) {
      toast.error("Please fill in all required fields (Name, Phone, Location)");
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Wholesale inquiry submitted to Sivakasi Factory!");
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          businessName: "",
          phone: "",
          email: "",
          location: "",
          businessType: "Wholesaler",
          quantity: "Bulk Orders",
          interests: [],
          message: "",
        });
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-[#0A0B12] p-6 shadow-2xl border border-white/10 sm:p-8 text-slate-100"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Flame className="h-5 w-5 text-[#D4AF37] fill-[#D4AF37]" />
                  Wholesale Price Inquiry
                </h3>
                <p className="text-xs text-amber-400/80 mt-1 font-semibold tracking-wider uppercase">
                  Direct Factory Pricing • Sivakasi Plant
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received, {formData.name}!</h4>
                <p className="mt-2 text-xs text-slate-400 max-w-xs leading-relaxed">
                  Our Sivakasi sales representatives will contact you shortly via call or WhatsApp with our bulk price sheet.
                </p>
                <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
                  <a
                    href="tel:+919443868706"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-3 text-xs font-extrabold uppercase tracking-wider text-black hover:bg-amber-400 transition-colors"
                  >
                    <Phone className="h-4 w-4 fill-black" /> Call Factory Direct
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
                {/* Basic Info */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Kumar Fireworks Shop"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      Mobile Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      City & State <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bangalore, Karnataka"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      Order Quantity Type
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#0E0F19] px-4 py-2.5 text-xs text-white outline-none focus:border-[#D4AF37] transition-all"
                    >
                      <option value="Bulk Orders">Bulk Orders (Wholesale)</option>
                      <option value="Retail Packs">Retail Shop Orders</option>
                      <option value="Festival Orders">Festival Special (Small Box)</option>
                      <option value="Other">Other / Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                    Buyer Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Wholesaler", "Retailer", "Event Organizer"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, businessType: type })}
                        className={`rounded-xl border py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                          formData.businessType === type
                            ? "border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]"
                            : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sparkler categories */}
                <div>
                  <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-2">
                    Sparkler Sizes Needed
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {categories.map((cat) => {
                      const isChecked = formData.interests.includes(cat);
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => handleCheckboxChange(cat)}
                          className={`flex items-center justify-between rounded-xl border px-3 py-2 text-left text-xs transition-all ${
                            isChecked
                              ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] font-bold"
                              : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20"
                          }`}
                        >
                          <span>{cat}</span>
                          <span
                            className={`flex h-4 w-4 items-center justify-center rounded border ${
                              isChecked
                                ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                                : "border-white/20 bg-transparent"
                            }`}
                          >
                            {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                    Message / Special Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter details like required cartons, target dispatch date, or custom packing requests..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all resize-none"
                  />
                </div>

                {/* Form CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] py-3.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all duration-300 disabled:opacity-50 cursor-pointer hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                      Connecting with Plant...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 fill-black" /> Submit Wholesale Request
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
