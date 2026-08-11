'use client'
const questions = [
  {
    question: "What is iMaker Restro?",
    answer:
      "iMaker Restro is a restaurant management platform that brings billing, orders, kitchen operations, inventory, reporting, and other restaurant tools together in one connected system.",
  },
  {
    question: "Is iMaker Restro suitable for my restaurant?",
    answer:
      "Yes. iMaker Restro is designed to support different types of food businesses, including restaurants, cafes, QSRs, cloud kitchens, and multi-outlet operations.",
  },
  {
    question: "Can I manage dine-in, takeaway, and delivery orders?",
    answer:
      "Yes. You can manage different order types from a connected POS workflow, helping your team keep orders, billing, and kitchen operations organized.",
  },
  {
    question: "Does iMaker Restro support GST billing?",
    answer:
      "Yes. Configure your applicable GST settings and generate GST-compliant bills and invoices as part of your restaurant billing workflow.",
  },
  {
    question: "Can I manage inventory and purchases from the same platform?",
    answer:
      "Yes. Inventory, purchase, recipe, ingredient consumption, and food-cost management can be connected with your restaurant's daily operations.",
  },
  {
    question: "Can I add more tools to my POS as my restaurant grows?",
    answer:
      "Yes. iMaker Restro can be extended with additional tools such as Captain Ordering, Kitchen Display System, QR Self-Ordering, Loyalty, Analytics, Event & Catering, and Purchase & Recipe Management.",
  },
  {
    question: "Can I manage multiple restaurant outlets?",
    answer:
      "Yes. Multi-outlet capabilities give you a connected view of your locations, helping you monitor operations and business performance across outlets.",
  },
  {
    question: "Can I see my restaurant's performance and reports?",
    answer:
      "Yes. iMaker Restro provides reporting and analytics to help you understand sales, item performance, payments, and other operational information.",
  },
];

import React, { useState } from "react";
import SectionHeading from "../layouts/section-heading";
import PageWrapper from "@/app/components/page-wrapper";
import FaqItem from "@/app/components/faq-item";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <PageWrapper className="bg-white">
      <div className="lg:flex lg:items-start lg:gap-16">
        {/* Left column */}
        <div className="lg:sticky lg:top-28 lg:w-[40%] lg:shrink-0">
          <SectionHeading
            eyebrow={"FAQs"}
            title={"Questions? We Have Answers."}
            highlight={"We Have Answers."}
            description={
              "Everything you need to know about iMaker Restro, restaurant billing, and managing your daily operations."
            }
            align="start"
          />
        </div>

        {/* Right column */}
        <div className="mt-10 lg:mt-0 lg:w-[60%]">
          <ul className="border-t border-[#e4e4e1]">
            {questions.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <li key={item.question} className="border-b border-[#e4e4e1]">
                  <FaqItem
                    question={item.question}
                    answer={item.answer}
                    isOpen={isOpen}
                    onToggle={() => toggle(index)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FAQSection;
