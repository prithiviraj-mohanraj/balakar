"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, MessageSquare, Check, Sparkles } from "lucide-react";
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
      toast.success("Inquiry submitted successfully!");
      
      // Reset form after a delay or just close
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
    }, 1500);
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl border border-zinc-100 sm:p-8"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between border-b border-zinc-100 pb-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-950 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500 fill-amber-50" />
                  Wholesale Price Inquiry
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Get factory direct pricing from Sivakasi
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors"
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
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-zinc-900">Thank You, {formData.name}!</h4>
                <p className="mt-2 text-sm text-zinc-500 max-w-xs">
                  We have received your inquiry. Our team will contact you shortly via phone or WhatsApp with our wholesale price list.
                </p>
                <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
                  <a
                    href="tel:+919443868706"
                    className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Call Factory Direct
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
                {/* Basic Info */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Your Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Kumar Fireworks Shop"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      City & State <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bangalore, Karnataka"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Order Quantity Type
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-400 focus:bg-white transition-all"
                    >
                      <option value="Bulk Orders">Bulk Orders (Wholesale)</option>
                      <option value="Retail Packs">Retail Shop Orders</option>
                      <option value="Festival Orders">Festival Special (Small Box)</option>
                      <option value="Other">Other / Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Buyer Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Wholesaler", "Retailer", "Event Organizer"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, businessType: type })}
                        className={`rounded-xl border py-2 text-xs font-medium transition-all ${
                          formData.businessType === type
                            ? "border-zinc-900 bg-zinc-950 text-white"
                            : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sparkler categories of interest */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                    Sparkler Categories of Interest
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
                              ? "border-amber-500 bg-amber-50/30 text-amber-900"
                              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                          }`}
                        >
                          <span>{cat}</span>
                          <span
                            className={`flex h-4 w-4 items-center justify-center rounded border ${
                              isChecked
                                ? "border-amber-600 bg-amber-500 text-white"
                                : "border-zinc-300 bg-white"
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
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter details like required quantity, dispatch timelines, or custom packaging queries..."
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Form CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] py-3 text-sm font-bold text-white shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all duration-200 disabled:from-zinc-350 disabled:to-zinc-400 cursor-pointer hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Price Inquiry
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
