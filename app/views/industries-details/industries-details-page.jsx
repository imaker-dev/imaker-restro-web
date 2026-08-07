"use client";
import React, { useState } from "react";
import {
  CalendarCheck,
  Wine,
  UtensilsCrossed,
  ChefHat,
  GlassWater,
  CreditCard,
  Heart,
  Clock,
  UserCheck,
  ArrowUpRight,
  Plus,
  Minus,
  Users,
  BookOpen,
  Repeat,
  TrendingUp,
  Leaf,
  Package,
  Building2,
  Smartphone,
  MessageCircle,
  Tablet,
  Plug,
  MapPin,
  Check,
  Play,
  ClipboardList,
  Printer,
  Bell,
  BarChart3,
  Zap,
  LayoutGrid,
  Image as ImageIcon,
} from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import Link from "next/link";
import SectionHeading, { Eyebrow } from "../layouts/section-heading";
import CtaSection from "../layouts/cta-section";

/* ------------------------------------------------------------------ */
/* Icon lookups                                                        */
/* ------------------------------------------------------------------ */
const ICONS = {
  CalendarCheck,
  Wine,
  UtensilsCrossed,
  ChefHat,
  Glass: GlassWater,
  CreditCard,
  Heart,
  Clock,
  UserCheck,
  ClipboardList,
  Printer,
  Bell,
  BarChart: BarChart3,
  Zap,
  LayoutGrid,
  Package,
  Building2,
  Smartphone,
  MessageCircle,
  Users,
  BookOpen,
  Repeat,
  TrendingUp,
  Leaf,
  Tablet,
  Plug,
  MapPin,
  Check,
  Play,
};

const ECOSYSTEM_ICON_BY_SLUG = {
  "pos-billing": CreditCard,
  "kitchen-display": ChefHat,
  "kot-management": ClipboardList,
  "inventory-management": Package,
  "multi-outlet": Building2,
  "employee-management": Users,
  "reports-analytics": BarChart3,
  "payment-integrations": Plug,
  "reservation-management": CalendarCheck,
  "crm-loyalty": Heart,
  "private-dining": Users,
  "mobile-pos": Smartphone,
  "whatsapp-marketing": MessageCircle,
};

const ANALYTICS_ICON_ROTATION = [
  BarChart3,
  TrendingUp,
  Clock,
  CreditCard,
  Package,
];
const IMPACT_ICON_ROTATION = [Clock, Check, Package, Repeat];

/** Renders a real product image; falls back to a quiet dark tile with an icon if it fails to load. */
const ProductImage = ({
  src,
  alt = "",
  fallbackIcon: FallbackIcon = ImageIcon,
  className = "",
}) => {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#14181c] via-[#1f2430] to-[#14181c] ${className}`}
      >
        <FallbackIcon size={26} strokeWidth={1.25} className="text-white/25" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
};

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const IndustryDetailsPage = ({ data }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const {
    hero,
    challenges,
    workflow,
    features,
    ecosystem,
    businessImpact,
    analytics,
    hardware,
    integrations,
    whyChooseUs,
    faqs,
    cta,
  } = data;

  const barHeights = [
    "h-[34px]",
    "h-[58px]",
    "h-[42px]",
    "h-[76px]",
    "h-[52px]",
    "h-[66px]",
    "h-[46px]",
  ];
  const barDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const renderHighlightedTitle = (title, highlightedText) => {
    if (!highlightedText || !title.includes(highlightedText)) {
      return title;
    }

    const index = title.indexOf(highlightedText);

    return (
      <>
        {title.slice(0, index)}
        <span className="text-primary-500">{highlightedText}</span>
        {title.slice(index + highlightedText.length)}
      </>
    );
  };

  return (
    <main className="bg-[#fbfaf8]">
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <PageWrapper
        className="relative overflow-hidden bg-white"
        containerClassName="pt-16"
      >
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left column */}
          <div className="max-w-xl">
            <Eyebrow>{hero.badge}</Eyebrow>
            <h1 className="mt-6 text-[34px] font-medium leading-[1.12] tracking-[-0.01em] text-[#14181c] sm:text-[46px] md:text-[54px]">
              {renderHighlightedTitle(hero.title, hero.highlightedTitle)}
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#5b6472] sm:text-base">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href={hero.primaryCTA.link}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d9384a] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#b92b3c] hover:shadow-lg hover:shadow-[#d9384a]/20 sm:w-auto"
              >
                {hero.primaryCTA.text}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href={hero.secondaryCTA.link}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#e4e4e1] px-7 py-3.5 text-sm font-medium text-[#14181c] transition-all hover:border-[#d9384a]/30 hover:bg-[#d9384a]/5 hover:text-[#d9384a] sm:w-auto"
              >
                <Play size={15} />
                {hero.secondaryCTA.text}
              </Link>
            </div>

            {/* <div className="mt-10 flex items-center gap-4 border-t border-dashed border-[#e4e4e1] pt-6">
              <div className="flex -space-x-2.5">
                {[
                  "bg-[#d9384a]",
                  "bg-[#14181c]",
                  "bg-emerald-600",
                  "bg-[#5b6472]",
                ].map((c, i) => (
                  <span
                    key={i}
                    className={`h-8 w-8 rounded-full ${c} border-2 border-[#fbfaf8]`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#5b6472]">
                Trusted by food service operators
              </p>
            </div> */}
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="overflow-hidden ">
              <ProductImage
                src={hero.image}
                alt=""
                fallbackIcon={UtensilsCrossed}
                className="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* CHALLENGES — kept concept, polished                           */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Where Ordinary Systems Fail"
          title={challenges.title}
          description={challenges.description}
          variant="compact"
        />

        <div className="mt-16 divide-y divide-[#e4e4e1] border-t border-[#e4e4e1]">
          {challenges.items.map((item) => (
            <div
              key={item.title}
              className="group grid grid-cols-1 gap-6 py-10 transition-colors hover:bg-[#fbfaf8] md:grid-cols-[minmax(0,280px)_1px_minmax(0,1fr)] md:gap-10 md:px-6 md:-mx-6"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#d9384a]"
                  aria-hidden="true"
                />
                <h3 className=" text-xl leading-snug text-[#14181c] sm:text-2xl">
                  {item.title}
                </h3>
              </div>

              <div
                className="hidden w-px bg-[#e4e4e1] md:block"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className=" text-[10px] font-medium uppercase tracking-[0.22em] text-red-600/90">
                    The Problem
                  </p>
                  <p className="mt-3 text-[14px] italic leading-relaxed text-[#5b6472]">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p className=" text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-600">
                    The iMaker Way
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#14181c]">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* WORKFLOW — spacious process cards, product-first                */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <SectionHeading
          eyebrow="Order Flow"
          title={workflow.title}
          description={workflow.description}
          variant="compact"
        />

        <ol className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {workflow.steps.map((step, idx) => {
            const Icon = ICONS[step.icon] || UtensilsCrossed;
            return (
              <li
                key={step.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 -top-2 select-none  text-[72px] font-normal leading-none text-[#d9384a]/[0.06] transition-colors duration-300 group-hover:text-[#d9384a]/[0.1]"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#d9384a]/8">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#d9384a]"
                  />
                </div>

                <h3 className="relative mt-6 text-lg leading-snug text-[#14181c]">
                  {step.title}
                </h3>
                <p className="relative mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-[#5b6472]">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </PageWrapper>

      {/* ============================================================ */}
      {/* FEATURES — kept alternating layout, real images               */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Capabilities"
          title={features.title}
          description={features.description}
          variant="compact"
        />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {features.items.map((feature, idx) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="text-left">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d9384a]">
                  {String(idx + 1).padStart(2, "0")} /{" "}
                  {String(features.items.length).padStart(2, "0")}
                </span>
                <h3 className="mt-3  text-2xl leading-snug text-[#14181c] sm:text-[28px]">
                  {feature.title}
                </h3>
                <p className="mt-4  text-[14px] leading-relaxed text-[#5b6472] sm:text-[15px]">
                  {feature.description}
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {feature.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5  text-[13px] text-[#14181c]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50">
                        <Check size={11} className="text-primary-500" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/[0.08]">
                <ProductImage
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[4/3]"
                />
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* ECOSYSTEM — larger modules with imagery                       */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <SectionHeading
          eyebrow="The Full Platform"
          title={ecosystem.title}
          description={ecosystem.subtitle}
          variant="compact"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ecosystem.items.map((item) => {
            const Icon = ECOSYSTEM_ICON_BY_SLUG[item.slug] || MapPin;
            return (
              <div
                key={item.slug}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/[0.06]"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <ProductImage
                    src={item.image}
                    alt={item.title}
                    fallbackIcon={Icon}
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9384a]/8">
                    <Icon
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#d9384a]"
                    />
                  </div>
                  <h3 className="mt-4  text-lg text-[#14181c]">{item.title}</h3>
                  <p className="mt-2  text-[13.5px] leading-relaxed text-[#5b6472]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* ANALYTICS — flagship dashboard preview                        */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Analytics"
          title={analytics.title}
          description={analytics.description}
          variant="compact"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="">
            <div className="rounded-2xl bg-[#14181c] p-8 shadow-2xl shadow-black/[0.18] ring-1 ring-white/[0.06] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Live Dashboard
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  Synced
                </span>
              </div>
              <div className="mt-12 flex items-end gap-2.5 sm:gap-3.5">
                {barHeights.map((h, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className={`rounded-t-sm bg-gradient-to-t from-[#d9384a] to-[#d9384a]/60 ${h}`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between border-t-2 border-dashed border-white/10 pt-3 font-mono text-[9px] text-white/40">
                {barDays.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="divide-y divide-[#e4e4e1] ">
            {analytics.items.map((item, idx) => {
              const Icon =
                ANALYTICS_ICON_ROTATION[idx % ANALYTICS_ICON_ROTATION.length];
              return (
                <div key={item.title} className="flex gap-4 py-5 first:pt-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d9384a]/8">
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#d9384a]"
                    />
                  </div>
                  <div>
                    <h3 className=" text-[15px] text-[#14181c]">
                      {item.title}
                    </h3>
                    <p className="mt-1  text-[13px] leading-relaxed text-[#5b6472]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* BUSINESS IMPACT — editorial results list                      */}
      {/* ============================================================ */}
      <section className="bg-[#fbfaf8]">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHeading
            eyebrow="Business Impact"
            title={businessImpact.title}
            description={businessImpact.description}
            variant="compact"
          />

          <div className="mt-16 divide-y divide-[#e4e4e1]">
            {businessImpact.items.map((item, idx) => {
              const Icon =
                IMPACT_ICON_ROTATION[idx % IMPACT_ICON_ROTATION.length];
              return (
                <div
                  key={item.title}
                  className="group grid grid-cols-1 gap-4 py-9 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:items-start sm:gap-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9384a]/8 transition-colors group-hover:bg-[#d9384a]/12">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#d9384a]"
                    />
                  </div>
                  <div>
                    <h3 className=" text-xl text-[#14181c]">{item.title}</h3>
                    <p className="mt-2.5 max-w-xl  text-[14.5px] leading-relaxed text-[#5b6472]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HARDWARE + INTEGRATIONS — merged, connected panel             */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Connected Platform"
          title="Hardware and Software That Work as One System"
          description="Every terminal, printer, and payment integration reports back to the same platform — nothing runs in isolation."
          variant="compact"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 rounded-2xl bg-[#fbfaf8] p-8 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-[#e4e4e1]">
          <div className="lg:pr-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d9384a]">
              Hardware
            </p>
            <h3 className="mt-2  text-xl text-[#14181c]">{hardware.title}</h3>
            <p className="mt-2  text-[13.5px] leading-relaxed text-[#5b6472]">
              {hardware.description}
            </p>
            <ul className="mt-6 space-y-3">
              {hardware.items.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 border-b border-dashed border-[#e4e4e1] pb-3  text-[13.5px] text-[#14181c] last:border-0 last:pb-0"
                >
                  <Tablet size={14} className="text-[#d9384a]" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d9384a]">
              Integrations
            </p>
            <h3 className="mt-2  text-xl text-[#14181c]">
              {integrations.title}
            </h3>
            <p className="mt-2  text-[13.5px] leading-relaxed text-[#5b6472]">
              {integrations.description}
            </p>
            <ul className="mt-6 space-y-3">
              {integrations.items.map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 border-b border-dashed border-[#e4e4e1] pb-3  text-[13.5px] text-[#14181c] last:border-0 last:pb-0"
                >
                  <Plug size={14} className="text-[#d9384a]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* WHY CHOOSE US — kept, polished                                */}
      {/* ============================================================ */}
      <section className="bg-[#fbfaf8]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <SectionHeading
            eyebrow="Why iMaker"
            title={whyChooseUs.title}
            description={whyChooseUs.description}
            variant="compact"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {whyChooseUs.items.map((item) => {
              const Icon = ICONS[item.icon] || Heart;
              return (
                <div
                  key={item.title}
                  className="group flex gap-5 rounded-xl p-2 transition-colors hover:bg-white"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9384a]/8 transition-colors group-hover:bg-[#d9384a]/12">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#d9384a]"
                    />
                  </div>
                  <div>
                    <h3 className=" text-lg text-[#14181c]">{item.title}</h3>
                    <p className="mt-2  text-[14px] leading-relaxed text-[#5b6472]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ — kept accordion, polished                                */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            highlight={"Questions"}
            variant="compact"
          />

          <div className="mt-14 divide-y divide-[#e4e4e1] border-t border-b border-[#e4e4e1]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9384a]/60 rounded-lg"
                  >
                    <span className=" text-base leading-snug text-[#14181c] sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#e4e4e1] transition-colors group-hover:border-[#d9384a]/30">
                      {isOpen ? (
                        <Minus size={14} className="text-[#d9384a]" />
                      ) : (
                        <Plus size={14} className="text-[#d9384a]" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl  text-[14px] leading-relaxed text-[#5b6472]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA — premium dark close                                      */}
      {/* ============================================================ */}
      {/* <section className="relative overflow-hidden bg-[#14181c]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:28px_28px]"
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-12">
          <div className="text-center lg:text-left">
            <Eyebrow className="justify-center lg:justify-start">
              Book a Demo
            </Eyebrow>
            <h2 className="mx-auto mt-6 max-w-md  text-[28px] leading-[1.15] text-white sm:text-[36px] md:text-[42px] lg:mx-0">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-md  text-[15px] leading-relaxed text-white/70 lg:mx-0">
              {cta.description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={cta.primaryButton.link}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d9384a] px-7 py-3.5  text-sm font-semibold text-white transition-all hover:bg-[#b92b3c] hover:shadow-xl hover:shadow-[#d9384a]/20 sm:w-auto"
              >
                {cta.primaryButton.text}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={cta.secondaryButton.link}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 px-7 py-3.5  text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                {cta.secondaryButton.text}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
              <ProductImage
                src={hero.image}
                alt=""
                fallbackIcon={UtensilsCrossed}
                className="aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#1f2430] px-4 py-3 shadow-xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                Now Booking
              </p>
              <p className="mt-1  text-lg text-white">Live Demo Slots</p>
            </div>
          </div>
        </div>
      </section> */}
            <CtaSection cta={cta} />

    </main>
  );
};

export default IndustryDetailsPage;
