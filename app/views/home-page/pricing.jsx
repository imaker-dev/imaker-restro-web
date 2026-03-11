import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "../layouts/section-header";
import PageWrapper from "@/app/components/page-wrapper";

/* ─────────────────────────────────────────────────────────────────────────────
   PRICING
───────────────────────────────────────────────────────────────────────────── */
const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "For single-outlet cafes and QSRs just getting started.",
    features: [
      "1 Outlet · 2 Devices",
      "Unlimited Orders",
      "Basic Sales Reports",
      "Cash & UPI Payments",
      "KOT Printing",
      "Basic Menu Management",
      "Cloud Backup",
      "Email Support",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹2,499",
    period: "/mo",
    desc: "For restaurants ready to scale with advanced tools.",
    badge: "Most Popular",
    features: [
      "3 Outlets · Unlimited Devices",
      "Advanced Analytics",
      "Floor & Table Management",
      "All Payment Modes + Split",
      "Inventory Management",
      "Staff Performance Reports",
      "Custom Discounts",
      "Priority Phone Support",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large chains, franchises, and cloud kitchen groups.",
    features: [
      "Unlimited Outlets",
      "White-Label Option",
      "Full API Access",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Advanced Analytics Suite",
      "On-site Training",
      "24×7 Priority Hotline",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <PageWrapper id="pricing" className="bg-white">
      <SectionHeader
        badge="Transparent Pricing"
        title="One Flat Price."
        highlight=" No Surprises."
        description={
          " No per-transaction fees. No hidden setup charges. Switch plans or cancel anytime."
        }
      />

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {PLANS.map(
          (
            { name, price, period, desc, features, cta, highlight, badge },
            i,
          ) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-2xl transition-all duration-700 hover:-translate-y-1 ${
                highlight
                  ? "bg-secondary-500 shadow-2xl shadow-[#1A0F00]/30"
                  : "bg-primary-50 border border-[#1A0F00]/8 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap uppercase tracking-wider">
                  {badge}
                </div>
              )}
              <div className="p-7 flex-1">
                <h3
                  className={`font-display text-xl font-black mb-1 ${highlight ? "text-white" : "text-[#1A0F00]"}`}
                >
                  {name}
                </h3>
                <p
                  className={`text-sm font-medium mb-6 ${highlight ? "text-white/45" : "text-[#1A0F00]/50"}`}
                >
                  {desc}
                </p>
                <div className="flex items-end gap-1.5 mb-7">
                  <span
                    className={`font-display text-5xl font-black tabular-nums ${highlight ? "text-white" : "text-[#1A0F00]"}`}
                  >
                    {price}
                  </span>
                  {period && (
                    <span
                      className={`text-sm font-semibold mb-2 ${highlight ? "text-white/40" : "text-[#1A0F00]/40"}`}
                    >
                      {period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${highlight ? "text-primary-500" : "text-green-600"}`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-sm font-medium ${highlight ? "text-white/65" : "text-[#1A0F00]/60"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-7 pb-7">
                <a
                  href="#"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    highlight
                      ? "bg-primary-500 text-white hover:bg-primary-600  hover:-translate-y-px"
                      : "text-white bg-secondary-500 hover:bg-secondary-600 "
                  }`}
                >
                  {cta}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ),
        )}
      </div>
    </PageWrapper>
  );
}
