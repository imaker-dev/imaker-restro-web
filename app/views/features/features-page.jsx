import PageWrapper from "@/app/components/page-wrapper";
import FeatureRow from "./components/feature-row";
import { Eyebrow } from "../layouts/section-heading";
import CtaSection from "../layouts/cta-section";

// Server component — no client-side state needed here either.

export default function FeaturesPage({ data }) {
  const cta = {
    title: "Ready to Streamline Your Restaurant Operations?",
    description:
      "Get everything you need to run your restaurant smoothly—billing, inventory, reporting, and more. All built in, no add-ons required.",
    primaryButton: {
      text: "Start Free Trial",
      link: "/signup",
    },
    secondaryButton: {
      text: "Book a Demo",
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#d9384a]/[0.06] blur-[110px]"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Eyebrow>Core Features</Eyebrow>

          <h1 className="mx-auto mt-5 max-w-2xl text-[34px] font-semibold leading-[1.15] tracking-tight text-[#14181c] sm:text-[42px] lg:text-[48px]">
            Everything your restaurant POS{" "}
            <span className="text-primary-500">needs, built in.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[#5b6472] sm:text-[17px]">
            No add-ons required. These are the core tools every iMaker Restro
            plan comes with, ready from day one.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
        />
      </PageWrapper>

      {/* ===================== FEATURES ===================== */}
      <PageWrapper className="bg-white py-4 sm:py-6 lg:py-8">
        {data.map((feature, index) => (
          <FeatureRow key={feature.id} feature={feature} index={index} />
        ))}
      </PageWrapper>

      {/* ===================== CTA ===================== */}
      <CtaSection cta={cta} />
    </>
  );
}
