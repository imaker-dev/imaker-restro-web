"use client"

import PageWrapper from "@/app/components/page-wrapper";
import { Check, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "../layouts/section-header";
import { CONTACT_INFO } from "../../const";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────────────────────── */

/* ─── Reusable input ─────────────────────────────────────────────────────── */
function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder-white/30 focus:outline-none focus:border-primary-400 transition-all"
      />
    </div>
  );
}

export default function ContactUsSection() {
  // Add inside ContactUsSection()
  const [planOpen, setPlanOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const planRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (planRef.current && !planRef.current.contains(e.target))
        setPlanOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Plan options
  const PLAN_OPTIONS = [
    { value: "starter", label: "Starter — ₹999 / mo" },
    { value: "growth", label: "Growth — ₹2,499 / mo" },
    { value: "enterprise", label: "Enterprise — Custom pricing" },
    { value: "just-looking", label: "Just looking — No pressure" },
  ];
  return (
    <PageWrapper id="contact" className="bg-primary-50 py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">
        {/* LEFT — headline + info */}
        <div className="transition-all duration-700 delay-100">
          <SectionHeader
            badge="Get In Touch"
            title="Let's start"
            highlight=" a conversation."
            description="Whether you're switching from another system or setting up billing for the first time — we're here to help you get it right."
            align="left"
            className="max-w-xl"
          />

          {/* Contact list */}
          <div className="space-y-4">
            {/* Phone Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  label: "India · HQ",
                  value: CONTACT_INFO.phones.india,
                  span: "col-span-2",
                },
                {
                  label: "Canada",
                  value: CONTACT_INFO.phones.canada,
                },
                {
                  label: "USA",
                  value: CONTACT_INFO.phones.usa,
                },
              ].map(({ label, value, span }) => (
                <a
                  key={value}
                  href={`tel:${value}`}
                  className={`group flex items-center gap-4 border border-[#1A0F00]/8 hover:border-primary-400 rounded-2xl px-4 py-3.5 transition-all duration-200 ${span || ""}`}
                >
                  <div className="w-9 h-9 rounded-xl border border-[#1A0F00]/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary-400 transition-all duration-200">
                    <Phone
                      size={15}
                      className="text-[#1A0F00]/40 group-hover:text-primary-500 transition-colors"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold text-[#1A0F00]/30 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-[#1A0F00]/70 mt-0.5 group-hover:text-[#1A0F00] transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Address */}
            <a
              href="#"
              className="group flex items-center gap-4 border border-[#1A0F00]/8 hover:border-primary-400 rounded-2xl px-4 py-3.5 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-xl border border-[#1A0F00]/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary-400 transition-all duration-200">
                <MapPin
                  size={15}
                  className="text-[#1A0F00]/40 group-hover:text-primary-500 transition-colors"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-[10px] font-extrabold text-[#1A0F00]/30 uppercase tracking-widest">
                  Office
                </p>
                <p className="text-sm font-semibold text-[#1A0F00]/70 mt-0.5 group-hover:text-[#1A0F00] transition-colors">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="transition-all duration-700 delay-200">
          <div className="bg-secondary-500 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-[#1A0F00]/30">
            <div className="space-y-5">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Your Name"
                  type="text"
                  placeholder="Rajesh Mehta"
                />

                <InputField
                  label="Restaurant Name"
                  type="text"
                  placeholder="Spice Garden"
                />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                />

                <InputField
                  label="Email"
                  type="email"
                  placeholder="you@restaurant.in"
                />
              </div>

              {/* Plan selector */}
              <div className="relative" ref={planRef}>
                <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
                  Interested In
                </label>
                <button
                  type="button"
                  onClick={() => setPlanOpen((p) => !p)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-left flex items-center justify-between transition-all focus:outline-none focus:border-primary-400 hover:border-white/20"
                >
                  <span
                    className={selectedPlan ? "text-white" : "text-white/30"}
                  >
                    {selectedPlan?.label ?? "Select a plan"}
                  </span>
                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`text-white/40 transition-transform duration-200 ${planOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {planOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#1a1008] border border-white/10 rounded-xl overflow-hidden z-50 shadow-xl shadow-black/40">
                    {PLAN_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setSelectedPlan(opt);
                          setPlanOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 flex items-center justify-between group ${
                          selectedPlan?.value === opt.value
                            ? "bg-white/10 text-white font-semibold"
                            : "text-white/60 hover:bg-white/5 hover:text-white font-medium"
                        }`}
                      >
                        {opt.label}
                        {selectedPlan?.value === opt.value && (
                          <Check
                            size={13}
                            strokeWidth={2.5}
                            className="text-primary-400"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest mb-2">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your setup — type of restaurant, number of tables, current billing system…"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder-white/30 focus:outline-none focus:border-primary-400 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button className="w-full flex items-center justify-center gap-2.5 bg-primary-500 text-white text-sm font-bold py-4 rounded-xl hover:bg-primary-600 shadow hover:-translate-y-px transition-all duration-200">
                <Mail size={15} strokeWidth={2.5} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
