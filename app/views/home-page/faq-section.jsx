"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { useState } from "react";
import SectionHeader from "../layouts/section-header";
import { Plus, Minus } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    id: "general",
    label: "General",
  },
  //   {
  //     id: "pricing",
  //     label: "Pricing",
  //   },
  {
    id: "features",
    label: "Features",
  },
  {
    id: "support",
    label: "Support",
  },
];
const FAQS = [
  // General
  {
    id: "g1",
    category: "general",
    question: "What is iMaker Restro POS and who is it for?",
    answer:
      "iMaker Restro POS is a complete restaurant billing and management system built for restaurants, cafes, cloud kitchens, and takeaway businesses. It helps you manage tables, orders, billing, inventory, and customers from one simple dashboard.",
  },
  {
    id: "g2",
    category: "general",
    question: "Do I need any special hardware to use it?",
    answer:
      "No, you can run the POS on any Windows system. You can also connect printers or other devices if needed, but you can start billing with just a single system.",
  },
  {
    id: "g3",
    category: "general",
    question: "Does it work without internet?",
    answer:
      "Yes, the system works completely offline. You can continue billing, managing orders, and running your restaurant without any internet connection.",
  },
  {
    id: "g4",
    category: "general",
    question: "Is it easy for staff to use?",
    answer:
      "Yes, the interface is designed to be simple and fast. Your staff can learn and start using it within minutes without any technical knowledge.",
  },

  // Pricing
  {
    id: "p1",
    category: "pricing",
    question: "Is there any monthly fee or hidden charges?",
    answer:
      "No hidden charges. Our pricing is simple and transparent. You only pay for what you choose, with no surprise costs.",
  },
  {
    id: "p2",
    category: "pricing",
    question: "Do I need to renew it every month?",
    answer:
      "Depending on your plan, you can choose flexible options. We keep pricing simple so you can focus on your business.",
  },

  // Features
  {
    id: "f1",
    category: "features",
    question: "Can I manage tables, floors, and sections?",
    answer:
      "Yes, you can easily manage multiple floors, sections, and tables. Perfect for restaurants with dine-in setups.",
  },
  {
    id: "f2",
    category: "features",
    question: "Does it support takeaway and fast billing?",
    answer:
      "Yes, the system is optimized for fast billing and takeaway orders, helping you serve customers quickly during rush hours.",
  },
  {
    id: "f3",
    category: "features",
    question: "Can I manage menu items and categories?",
    answer:
      "Yes, you can create and manage menu categories, items, restaurant items, and bar items with full flexibility.",
  },
  {
    id: "f4",
    category: "features",
    question: "Is inventory management included?",
    answer:
      "Yes, you can track stock, manage inventory, and monitor usage to avoid shortages and improve control.",
  },
  {
    id: "f5",
    category: "features",
    question: "Can I manage customers and track history?",
    answer:
      "Yes, the system allows you to store customer details and track their order history for better service.",
  },

  // Support
  {
    id: "s1",
    category: "support",
    question: "How quickly can I start using the software?",
    answer:
      "You can set up and start using the system within minutes. It’s designed for quick and easy onboarding.",
  },
  {
    id: "s2",
    category: "support",
    question: "Will I get support if I face any issues?",
    answer:
      "Yes, we provide support to help you with setup, usage, and any issues so your business runs smoothly.",
  },
  {
    id: "s3",
    category: "support",
    question: "Is my data safe?",
    answer:
      "Yes, your data is stored securely and remains under your control. We ensure reliability and safety for your business data.",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openId, setOpenId] = useState("g1");

  const filtered = FAQS.filter((f) => f.category === activeCategory);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <PageWrapper
      className="relative bg-white"
      containerWidth="max-w-4xl mx-auto"
    >
      <div className="relative z-10">
        <SectionHeader
          badge={"Got Questions?"}
          title={"Frequently Asked "}
          highlight={"Questions"}
          description={
            "Everything you need to know before getting started. Can't find your answer? Our support team is just a message away."
          }
        />

        {/* Category tabs */}
        <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = FAQS.filter((f) => f.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenId(null);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-100"
                        : "bg-white text-secondary-400 border-secondary-200 hover:border-primary-300 hover:text-primary-600"
                    }`}
              >
                {cat.label}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md transition-colors
                      ${isActive ? "bg-white/20 text-white" : "bg-secondary-100 text-secondary-400"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {filtered.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300
                    ${
                      isOpen
                        ? "border-primary-200 shadow-md shadow-primary-50"
                        : "border-secondary-100 hover:border-secondary-200 hover:shadow-sm"
                    }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  {/* Number + Question */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors
                          ${
                            isOpen
                              ? "bg-primary-600 text-white"
                              : "bg-secondary-50 text-secondary-300 group-hover:bg-primary-50 group-hover:text-primary-500"
                          }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm font-semibold leading-snug transition-colors
                          ${isOpen ? "text-primary-600" : "text-secondary-500 group-hover:text-secondary-500"}`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200
                        ${
                          isOpen
                            ? "bg-primary-600 text-white rotate-0"
                            : "bg-secondary-50 text-secondary-400 group-hover:bg-primary-50 group-hover:text-primary-500"
                        }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 flex gap-4">
                    {/* Left accent line */}
                    <div className="w-[2px] flex-shrink-0 rounded-full bg-primary-500 ml-[13px]" />
                    <p className="text-sm text-secondary-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-primary-600 p-8 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-36 h-36 bg-primary-500 rounded-full opacity-50 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-700 rounded-full opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-white font-bold text-lg leading-tight mb-1">
              Still have questions?
            </p>
            <p className="text-primary-200 text-sm">
              Our support team replies in under 2 hours on business days.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 flex-shrink-0 bg-white text-primary-600 hover:bg-primary-50 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
