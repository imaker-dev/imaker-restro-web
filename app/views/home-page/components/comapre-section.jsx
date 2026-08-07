import React from "react";
import { Check, X } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "../../layouts/section-header";

/* ---------------------------------------------------------------
   Pure Tailwind, no custom fonts, no inline styles. Ribbon-tab
   comparison rebuilt to match the reference exactly: flush
   corner ribbon with a folded-paper notch, dark icon circles,
   plain divider list.
--------------------------------------------------------------- */

function Row({ text, tone, last }) {
  const isCon = tone === "con";
  const Icon = isCon ? X : Check;

  return (
    <li
      className={`flex items-start gap-4 py-5 ${
        !last
          ? isCon
            ? "border-b border-[#E8D8D5]"
            : "border-b border-[#D8E6D8]"
          : ""
      }`}
    >
      <div
        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          isCon ? "bg-[#641010]" : "bg-[#0D5E24]"
        }`}
      >
        <Icon size={13} strokeWidth={3.3} className="text-white" />
      </div>

      <p className="text-[16px] leading-7 text-[#1E293B] font-medium">{text}</p>
    </li>
  );
}

function CompareCard({ ribbon, tone, align, items }) {
  const isCon = tone === "con";

  const bg = isCon ? "bg-[#F8ECEB]" : "bg-[#EEF6EE]";

  const border = isCon ? "border-[#EFD2CF]" : "border-[#D8E7D8]";

  const ribbonBg = isCon ? "bg-[#E62F43]" : "bg-[#169B33]";

  const fold = isCon ? "border-t-[#8D1A22]" : "border-t-[#0D6622]";

  return (
    <div className="relative h-full">
      {/* Ribbon */}
      <div
        className={`absolute top-6 z-20 ${
          align === "left" ? "left-0" : "right-0"
        }`}
      >
        <div
          className={`
            relative
            flex
            h-16
            w-[240px]
            items-center
            px-9
            text-[20px]
            font-bold
            text-white
            ${ribbonBg}
            ${
              align === "left" ? "rounded-tr-2xl" : "rounded-tl-2xl justify-end"
            }
          `}
        >
          {ribbon}

          <span
            className={`
              absolute
              -bottom-[18px]
              ${align === "left" ? "left-0" : "right-0"}
              h-0
              w-0
              ${
                align === "left"
                  ? "border-r-[18px] border-r-transparent"
                  : "border-l-[18px] border-l-transparent"
              }
              border-t-[18px]
              ${fold}
            `}
          />
        </div>
      </div>

      {/* Card */}
      <div
        className={`
          h-full
          rounded-[20px]
          border
          ${border}
          ${bg}
          px-8
          pt-24
          pb-8
          shadow-[0_10px_30px_rgba(0,0,0,.05)]
        `}
      >
        <ul>
          {items.map((item, index) => (
            <Row
              key={index}
              text={item}
              tone={tone}
              last={index === items.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CompareSection() {
  const cons = [
    "Limited hardware compatibility and dependence on specific printers or devices.",
    "Separate systems for billing, QR ordering, kitchen operations, and customer management.",
    "Manual inventory tracking with limited business insights and reporting.",
    "No built-in customer loyalty or repeat customer engagement features.",
    "Internet-dependent operations that can interrupt billing and restaurant workflows.",
    "Difficult to scale and manage multiple outlets from a single platform.",
  ];

  const pros = [
    "Works with USB, Bluetooth, IP, and mobile printers for maximum flexibility.",
    "Complete restaurant ecosystem with Billing, Live Kitchen Display, QR Self Ordering, and POS in one platform.",
    "Smart inventory management with powerful real-time reports and business analytics.",
    "Built-in customer loyalty program, customer history, and repeat order tracking.",
    "Reliable offline billing keeps your restaurant running even without internet.",
    "Centralized multi-outlet management with synchronized menus, users, and settings.",
  ];

  return (
    <PageWrapper>
      <div>
        <SectionHeader
          badge={"A fair comparison"}
          title={"Why restaurants are switching to "}
          highlight={"iMaker Restro"}
          description={
            "Same jobs you already expect from restaurant software — billing, printing, kitchens, stock — done without the workarounds."
          }
        />

        <div className="grid grid-cols-1 gap-12 pt-16 lg:grid-cols-2">
          <CompareCard
            ribbon="Other Software"
            align="left"
            tone="con"
            items={cons}
          />
          <CompareCard
            ribbon="iMaker Restro"
            align="right"
            tone="pro"
            items={pros}
          />
        </div>
      </div>
    </PageWrapper>
  );
}
