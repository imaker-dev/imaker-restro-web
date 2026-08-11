import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AddonCard from "./components/addon-card";
import CtaSection from "../layouts/cta-section";
import PageWrapper from "@/app/components/page-wrapper";
import { Eyebrow } from "../layouts/section-heading";

// This is a server component — the page has no client-side state, so no
// "use client" directive is needed anywhere in this file.

export default function AddonsPage({ data }) {
  const cta = {
    title: "Need Help Choosing the Right Add-ons?",
    description:
      "Talk to our team and find the right combination of tools for your restaurant.",
    primaryButton: {
      text: "Talk to Our Team",
      link: "/contact",
    },
    secondaryButton: {
      text: "Book a Free Demo",
      link: "/demo",
    },
  };
  return (
    <>
      {/* ===================== HERO ===================== */}
      <PageWrapper
        className="relative overflow-hidden bg-[#FBFAF7]"
        containerClassName="pt-16 lg:pt-20"
      >
        {/* Decorative background glow — sits behind everything, never competes with copy */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#d9384a]/[0.06] blur-[110px]"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Eyebrow>Extend Your POS</Eyebrow>

          <h1 className="mx-auto mt-5 max-w-2xl text-[34px] font-semibold leading-[1.15] tracking-tight text-[#14181c] sm:text-[42px] lg:text-[48px]">
            More Tools.{" "}
            <span className="text-primary-500">
              One Connected Restaurant Platform.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[#5b6472] sm:text-[17px]">
            Extend iMaker Restro with powerful tools for ordering, kitchen
            operations, customer engagement, analytics and purchasing.
          </p>
        </div>

        {/* Smooth transition into the white listing section below */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
        />
      </PageWrapper>

      {/* ===================== ADDON LISTING ===================== */}
      <PageWrapper className="bg-white">
        <ul
          role="list"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((addon) => (
            <li key={addon.id} className="h-full">
              <AddonCard addon={addon} />
            </li>
          ))}
        </ul>
      </PageWrapper>

      {/* ===================== FINAL CTA ===================== */}
      <CtaSection cta={cta} />
    </>
  );
}
