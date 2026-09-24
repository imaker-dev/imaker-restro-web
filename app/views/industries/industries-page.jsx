import React from "react";
import PageWrapper from "@/app/components/page-wrapper";
import { Eyebrow } from "../layouts/section-heading";
import { getIndustries } from "@/app/data/industries";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const IndustriesPage = () => {
  const industries = getIndustries();

  return (
    <>
      {/* ===================== HERO ===================== */}
      <PageWrapper
        className="relative overflow-hidden bg-[#FBFAF7]"
        containerClassName="pt-16 lg:pt-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#d9384a]/[0.06] blur-[110px]"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Eyebrow>Industries We Serve</Eyebrow>

          <h1 className="mx-auto mt-5 max-w-2xl text-[34px] font-semibold leading-[1.15] tracking-tight text-[#14181c] sm:text-[42px] lg:text-[48px]">
            One powerful POS for{" "}
            <span className="text-primary-500">every food business.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[#5b6472] sm:text-[17px]">
            From busy restaurants and cafés to hotels, food courts, and growing
            multi-outlet businesses, iMaker Restro gives you the tools to manage
            daily operations with confidence.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
        />
      </PageWrapper>

      <PageWrapper>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              href={`/industries/${industry.slug}`}
              key={industry.slug}
              className="group relative flex flex-col rounded-3xl bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]"
            >
              {/* icon badge */}
              <span className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-900/5 transition-colors duration-300 group-hover:bg-primary-50">
                <img
                  src={industry.icon}
                  alt=""
                  className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </span>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {industry.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                {industry.description}
              </p>

              {/* arrow affordance, no icon library — plain inline svg */}
              <span className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </PageWrapper>
    </>
  );
};

export default IndustriesPage;
