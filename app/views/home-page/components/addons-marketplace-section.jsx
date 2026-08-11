"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "../../layouts/section-heading";
import PageWrapper from "@/app/components/page-wrapper";
import { getFeaturedAddons } from "@/app/data/addons";

export default function AddonsMarketplaceSection() {
  const addons = getFeaturedAddons();

  const [activeId, setActiveId] = useState(addons[0]?.id);
  const activeItem = addons.find((item) => item.id === activeId) ?? addons[0];

  return (
    <PageWrapper className="bg-[#FBFAF7]">
      <style>{`
        @keyframes addon-image-in {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        .addon-image-in { animation: addon-image-in 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
        @media (prefers-reduced-motion: reduce) {
          .addon-image-in { animation: none; }
        }
      `}</style>

      <div>
        <SectionHeading
          eyebrow={"APP MARKETPLAC"}
          title={"Add-ons that supercharge your restaurant POS."}
          highlight={"supercharge"}
        />

        {/* ===================== DESKTOP: hover rail + single image ===================== */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Product rail — hover to preview, click to navigate */}
          {/* <ul role="list"> */}
          <ul role="list" className="flex flex-col gap-4">
            {addons.map((item) => {
              const isActive = item.id === activeItem.id;
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`border-l-2 pl-4 transition-colors duration-300 ${
                    isActive ? "border-l-primary-500" : "border-l-[#E4E0D6]"
                  }`}
                >
                  <Link
                    href={`/addons/${item.id}`}
                    className="group block py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6432B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBFAF7] rounded-sm"
                  >
                    <span
                      className={`block tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-[20px] font-semibold text-[#12141A]"
                          : "text-[19px] font-medium text-[#8B8677] group-hover:text-[#12141A]"
                      }`}
                    >
                      {item.title}
                    </span>

                    {/* Smooth height reveal for the active row's summary — CSS grid-rows only */}
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <span className="mt-1.5 block pt-0.5 text-[13.5px] leading-relaxed text-[#6B6759]">
                          {item.description}
                        </span>
                        <span className="mt-1.5 inline-flex items-center gap-1 text-[12.5px] font-medium text-primary-500">
                          Explore
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3 w-3"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Single product image — swaps on hover, no stacking, no sticky */}
          <div
            key={activeItem.id}
            className="addon-image-in relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E4E0D6] bg-white shadow-[0_16px_36px_-22px_rgba(18,20,26,0.28)]"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              sizes="45vw"
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* ===================== MOBILE / TABLET: independent accordion with inline images ===================== */}
        <div className="lg:hidden">
          <ul role="list" className="flex flex-col gap-6">
            {addons.map((item) => {
              const isActive = item.id === activeItem.id;
              return (
                <li
                  key={item.id}
                  className={`border-l-2 transition-colors duration-300 ${
                    isActive ? "border-l-primary-500" : "border-l-[#E4E0D6]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(isActive ? null : item.id)}
                    aria-expanded={isActive}
                    className="block w-full pl-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6432B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBFAF7] rounded-sm"
                  >
                    <span
                      className={`block text-[18px] tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "font-semibold text-[#12141A]"
                          : "font-medium text-[#8B8677]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-4 pt-4 pb-1">
                        {/* Product image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E4E0D6] bg-white shadow-[0_10px_24px_-16px_rgba(18,20,26,0.24)]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="100vw"
                            className="object-cover object-top"
                          />
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-[13.5px] leading-relaxed text-[#6B6759]">
                          {item.description}
                        </p>

                        {/* Explore link */}
                        <Link
                          href={`/addons/${item.id}`}
                          className="mt-2.5 inline-flex items-center gap-1 text-[13px] font-medium text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6432B] rounded-sm"
                        >
                          Explore
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3 w-3"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* View all — visually secondary to the products */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <Link href={"/addons"} className="btn btn-primary">
            View all
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
