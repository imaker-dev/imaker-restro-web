"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "../layouts/section-header";
import {
  Zap,
  BarChart3,
  ShieldCheck,
  RefreshCcw,
  Headphones,
  Layers,
  Shield,
  CloudUpload,
  Wifi,
  RefreshCw,
  Lock,
} from "lucide-react";

/* ─── Benefits ───────────────────────── */
const BENEFITS = [
  {
    id: "billing",
    icon: Zap,
    title: "Fast & Simple Billing",
    description:
      "Create bills in seconds with a smooth interface. Perfect for handling rush hours without delays.",
  },
  {
    id: "table",
    icon: Layers,
    title: "Floor & Table Management",
    description:
      "Manage floors, sections, and tables easily. Track orders and serve customers without confusion.",
  },
  {
    id: "menu",
    icon: BarChart3,
    title: "Menu & Item Control",
    description:
      "Create categories, manage restaurant and bar items, and update your menu anytime.",
  },
  {
    id: "inventory",
    icon: RefreshCcw,
    title: "Inventory Management",
    description:
      "Track stock, manage usage, and avoid shortages with simple inventory control.",
  },
  {
    id: "customer",
    icon: ShieldCheck,
    title: "Customer Management",
    description:
      "Store customer details and track order history to provide better service.",
  },
  {
    id: "takeaway",
    icon: Headphones,
    title: "Takeaway & Quick Orders",
    description:
      "Handle takeaway orders and fast billing smoothly during peak hours.",
  },
];

/* ─── Trust items ───────────────────── */
const TRUST_ITEMS = [
  { icon: Shield, label: "Secure & Reliable" },
  { icon: CloudUpload, label: "Auto Backup" },
  { icon: Wifi, label: "Works Offline" },
  { icon: RefreshCw, label: "Free Updates" },
  { icon: Lock, label: "Data Privacy" },
  { icon: Headphones, label: "Quick Support" },
];

/* ─── Main Section ───────────────────── */
export default function BenefitsSection() {
  return (
    <PageWrapper className="bg-white">
      <SectionHeader
        badge={"Why Choose Us"}
        title={"Everything You Need to "}
        highlight={"Run Your Restaurant"}
        description={
          "From billing to inventory and customer management — everything is designed to make your daily operations simple, fast, and reliable."
        }
      />

      {/* Benefits Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BENEFITS.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>

      {/* Trust Row */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary-500/10 bg-white"
          >
            <Icon size={16} className="text-primary-500" />
            <span className="text-xs font-medium text-secondary-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

/* ─── Card ─────────────────────────── */
function BenefitCard({ benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="group rounded-2xl p-6 border border-secondary-500/10 bg-white hover:border-primary-500/30 hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition">
        <Icon size={20} className="text-primary-500" />
      </div>

      <h3 className="text-base font-bold text-secondary-500 mb-2">
        {benefit.title}
      </h3>

      <p className="text-sm text-secondary-500/70 leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
}
