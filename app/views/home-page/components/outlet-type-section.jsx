import React from "react";
import Link from "next/link";
import PageWrapper from "@/app/components/page-wrapper";
import { getIndustries } from "@/app/data/industries";
import SectionHeading from "../../layouts/section-heading";

function OutletCard({ title, icon, slug }) {
  return (
    <Link
      href={`/industries/${slug}`}
      className="group relative block w-full"
    >
      {/* Animated gradient border glow */}
      <div className="absolute -inset-[1px] rounded-[18px] bg-gradient-to-br from-primary-400 via-primary-300 to-transparent opacity-0 blur-[6px] transition-all duration-700 group-hover:opacity-70 sm:rounded-[24px]" />

      <div
        className="
          relative
          flex
          min-h-[160px]
          cursor-pointer
          flex-col
          items-center
          justify-center
          gap-3
          overflow-hidden
          rounded-[18px]
          border
          border-black/[0.06]
          bg-white
          px-3
          py-5
          shadow-[0_1px_2px_rgba(15,23,42,.04),0_8px_18px_-6px_rgba(15,23,42,.08)]
          transition-all
          duration-500
          ease-out
          group-hover:-translate-y-[6px]
          group-hover:border-primary-200
          group-hover:shadow-[0_1px_2px_rgba(197,32,49,.06),0_30px_50px_-12px_rgba(197,32,49,.22)]
          sm:min-h-[220px]
          sm:justify-between
          sm:gap-0
          sm:rounded-[28px]
          sm:px-7
          sm:py-8
        "
      >
        {/* Top sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary-50/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Subtle corner glow */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-100/0 transition-all duration-700 group-hover:bg-primary-100/50 group-hover:blur-2xl" />

        {/* Icon */}
        <div className="relative flex h-[92px] w-[92px] items-center justify-center sm:h-[132px] sm:w-[132px]">
          {/* Floating shadow under icon */}
          <div className="absolute bottom-0 h-3 w-16 rounded-full bg-black/[0.1] blur-lg transition-all duration-500 group-hover:w-20 group-hover:bg-primary-500/10 sm:bottom-2 sm:h-4 sm:w-20" />

          <img
            src={icon}
            alt={title}
            draggable={false}
            className="
              relative
              h-[88px]
              w-[88px]
              object-contain
              select-none
              drop-shadow-[0_6px_10px_rgba(15,23,42,.15)]
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.08]
              sm:h-[115px]
              sm:w-[115px]
              sm:drop-shadow-[0_4px_6px_rgba(15,23,42,.08)]
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            relative
            text-center
            text-[13px]
            font-semibold
            leading-5
            tracking-[-0.01em]
            text-ink
            transition-colors
            duration-300
            group-hover:text-primary-600
            sm:text-[16px]
            sm:leading-6
          "
        >
          {title}
        </h3>

        {/* Underline accent on hover */}
        <div className="relative mt-1 hidden h-[3px] w-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-500 ease-out group-hover:w-10 sm:mt-2.5 sm:block" />
      </div>
    </Link>
  );
}

export default function OutletTypesPremiumGlass() {
  const outlets = getIndustries();
  return (
    <PageWrapper className="relative overflow-hidden bg-[#FBFBFA]">
    
      {/* Header */}
      <SectionHeading
        eyebrow={"Outlet Types"}
        title={"Built for every kind of food business"}
        highlight={"food business"}
      />

      {/* Responsive Grid Layout */}
      <div className="mx-auto grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-7">
        {outlets.map((item) => (
          <div
            key={item.slug}
            className="sm:flex-[0_1_210px] sm:min-w-[185px] sm:max-w-[220px]"
          >
            <OutletCard {...item} />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
