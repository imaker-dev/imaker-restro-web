"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { useState } from "react";
import SectionHeader from "../layouts/section-header";
import {
  UtensilsCrossed,
  Coffee,
  Zap,
  ChefHat,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const USE_CASES = [
  {
    id: "restaurants",
    label: "Restaurants & Fine Dining",
    icon: UtensilsCrossed,
    tagline: "Complete control of your floor",
    description:
      "Manage floors, sections, and tables with ease. Handle dine-in orders, KOT, and billing smoothly even during peak hours.",
    features: [
      "Floor, section & table management",
      "Dine-in billing with KOT",
      "Split bills & multiple payments",
      "Real-time order tracking",
    ],
    image: "/Images/restaurant.png",
    stat: "Faster service during rush hours",
  },
  {
    id: "cafes",
    label: "Cafes & Coffee Shops",
    icon: Coffee,
    tagline: "Quick billing, zero delay",
    description:
      "Designed for fast-moving counters. Manage menu items, quick orders, and customers without slowing down your service.",
    features: [
      "Quick order & fast billing",
      "Menu categories & item management",
      "Customer tracking",
      "Simple and easy interface",
    ],
    image: "/Images/cafe.png",
    stat: "Serve more customers, faster",
  },
  {
    id: "fastfood",
    label: "Fast Food & Takeaways",
    icon: Zap,
    tagline: "Speed up every order",
    description:
      "Handle takeaway and high-volume orders efficiently. Keep queues short and operations smooth.",
    features: [
      "Takeaway order management",
      "Fast billing system",
      "Combo & item customization",
      "Live order handling",
    ],
    image: "/Images/fastfood.png",
    stat: "Handle peak hours easily",
  },
  {
    id: "cloud",
    label: "Cloud Kitchens",
    icon: ChefHat,
    tagline: "All orders in one place",
    description:
      "Manage multiple orders and kitchen operations from a single dashboard with complete control.",
    features: [
      "Centralized order management",
      "Menu & item control",
      "Inventory tracking",
      "Order status monitoring",
    ],
    image: "/Images/cloud.png",
    stat: "Run operations efficiently",
  },
  {
    id: "trucks",
    label: "Food Trucks & Small Outlets",
    icon: Truck,
    tagline: "Simple, fast & reliable",
    description:
      "Lightweight POS that works anywhere. Perfect for small setups with quick billing and easy management.",
    features: [
      "Works offline",
      "Quick billing setup",
      "Simple menu management",
      "Daily sales tracking",
    ],
    image: "/Images/truck.png",
    stat: "Run your business anywhere",
  },
];

export default function UseCasesSection() {
  const [activeId, setActiveId] = useState("restaurants");

  const active = USE_CASES.find((u) => u.id === activeId);
  const Icon = active.icon;

  return (
    <PageWrapper className="relative bg-white overflow-hidden">
      <SectionHeader
        badge={"Built For Every Format"}
        title={"Designed for Every "}
        highlight={"Food Business"}
        description={
          "Whether you run a fine-dining restaurant or a roadside food truck, our POS adapts to how you work — not the other way around."
        }
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left — Tab list */}
        <div className="lg:w-[340px] flex-shrink-0 flex flex-col gap-2">
          {USE_CASES.map((item) => {
            const ItemIcon = item.icon;
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`
                    group w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left
                    transition-all duration-250 border
                    ${
                      isActive
                        ? "bg-primary-600 border-primary-600 shadow-lg shadow-primary-100"
                        : "bg-white border-secondary-100 hover:border-primary-200 hover:bg-primary-50"
                    }
                  `}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200
                      ${
                        isActive
                          ? "bg-white/20"
                          : "bg-secondary-50 group-hover:bg-primary-100"
                      }`}
                >
                  <ItemIcon
                    size={18}
                    className={isActive ? "text-white" : "text-primary-600"}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold leading-tight truncate transition-colors
                        ${isActive ? "text-white" : "text-secondary-500"}`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 truncate transition-colors
                        ${isActive ? "text-primary-200" : "text-secondary-300"}`}
                  >
                    {item.tagline}
                  </p>
                </div>
                <ArrowRight
                  size={15}
                  className={`flex-shrink-0 transition-all duration-200
                      ${isActive ? "text-white opacity-100" : "text-secondary-300 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"}`}
                />
              </button>
            );
          })}
        </div>

        {/* Right — Detail panel */}
        <div className="flex-1 rounded-3xl border border-secondary-100 bg-secondary-50 overflow-hidden flex flex-col lg:flex-row">
          {/* Content side */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center shadow-md shadow-primary-200">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest">
                    Use Case
                  </p>
                  <h3 className="text-lg font-bold text-secondary-500 leading-tight">
                    {active.label}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary-400 text-sm leading-relaxed mb-8 max-w-md">
                {active.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-3">
                {active.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-primary-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-secondary-500 font-medium">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            {/* <div className="mt-10">
                <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md shadow-primary-200 hover:shadow-lg hover:shadow-primary-200 hover:-translate-y-0.5">
                  Explore this use case
                  <ArrowRight size={15} />
                </button>
              </div> */}
          </div>

          {/* Stat / visual side */}
          <div className="lg:w-[240px] bg-primary-600 flex flex-col items-center justify-center p-8 gap-6 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500 rounded-full opacity-50" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-700 rounded-full opacity-50" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
                <Icon size={30} className="text-white" />
              </div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
                Key Result
              </p>
              <p className="text-white text-2xl font-bold leading-tight">
                {active.stat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
