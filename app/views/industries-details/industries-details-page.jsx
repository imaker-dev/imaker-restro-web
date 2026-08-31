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
  ArrowRight,
  ChevronRight,
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
import FaqItem from "@/app/components/faq-item";

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
    <>
      {/* ============================================================ */}
      {/* HERO — 50/50 messaging vs. product, premium framed visual     */}
      {/* ============================================================ */}
      <PageWrapper
        className="relative overflow-hidden bg-white"
        containerClassName="pt-16"
      >
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
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
                className="btn btn-lg btn-primary"
              >
                {hero.primaryCTA.text}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href={hero.secondaryCTA.link}
                className="btn btn-lg btn-secondary"
              >
                <Play size={15} />
                {hero.secondaryCTA.text}
              </Link>
            </div>
          </div>

          {/* Right column — the product, large and clearly framed */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-[28px] border border-[#e4e4e1] bg-[#fbfaf8] shadow-2xl shadow-black/[0.08]">
              <ProductImage
                src={hero.image}
                alt={hero.title}
                fallbackIcon={UtensilsCrossed}
                className="aspect-[4/3.3]"
              />
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* CHALLENGES — problem/solution, scannable in seconds           */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Where Ordinary Systems Fail"
          title={challenges.title}
          description={challenges.description}
          variant="compact"
        />

        <div className="mt-16 divide-y divide-[#e4e4e1] border-t border-[#e4e4e1]">
          {challenges.items.map((item, idx) => (
            <div
              key={item.title}
              className="group grid grid-cols-1 gap-6 py-10 transition-colors hover:bg-[#fbfaf8] md:grid-cols-[minmax(0,280px)_1px_minmax(0,1fr)] md:gap-10 md:px-6 md:-mx-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 font-mono text-xs text-primary-600/50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl leading-snug text-[#14181c] sm:text-2xl">
                  {item.title}
                </h3>
              </div>

              <div
                className="hidden w-px bg-[#e4e4e1] md:block"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-red-600/90">
                    The Problem
                  </p>
                  <p className="mt-3 text-[14px] italic leading-relaxed text-[#5b6472]">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-600">
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
      {/* WORKFLOW — a connected operational sequence, not a card grid   */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <SectionHeading
          eyebrow="Order Flow"
          title={workflow.title}
          description={workflow.description}
          variant="compact"
        />

        <ol className="relative mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-3">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[22px] hidden h-px bg-[#e4e4e1] lg:block"
          />
          {workflow.steps.map((step, idx) => {
            const Icon = ICONS[step.icon] || UtensilsCrossed;
            return (
              <li
                key={step.title}
                className="relative flex flex-col items-start text-left"
              >
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-[#e4e4e1]">
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                    className="text-primary-500"
                  />
                </div>
                <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-500/70">
                  Step {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 text-sm font-medium leading-snug text-[#14181c]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#5b6472] line-clamp-2">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </PageWrapper>

      {/* ============================================================ */}
      {/* FEATURES — screenshot-dominant, alternating, ~65/35           */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Capabilities"
          title={features.title}
          description={features.description}
          variant="compact"
        />

        <div className="space-y-16 sm:space-y-24">
          {features.items.map((feature, idx) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="text-left">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-500">
                  {String(idx + 1).padStart(2, "0")} /{" "}
                  {String(features.items.length).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl leading-snug text-[#14181c] sm:text-[28px]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-[#5b6472] sm:text-[15px]">
                  {feature.description}
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {feature.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-[13px] text-[#14181c]"
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
                  className="aspect-[16/11]"
                />
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* ECOSYSTEM — flagship module + connected module grid           */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <SectionHeading
          eyebrow="The Full Platform"
          title={ecosystem.title}
          description={ecosystem.subtitle}
          variant="compact"
        />

        {ecosystem.items.length > 1 && (
          <>
            <div
              aria-hidden="true"
              className="mx-auto hidden h-8 w-px bg-[#e4e4e1] lg:block"
            />
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#e4e4e1] sm:grid-cols-3 lg:mt-2 lg:grid-cols-4">
              {ecosystem.items.map((item) => {
                const Icon = ECOSYSTEM_ICON_BY_SLUG[item.slug] || MapPin;
                return (
                  <div
                    key={item.slug}
                    className="group flex flex-col gap-3 bg-white p-6 transition-colors hover:bg-[#fbfaf8] sm:p-7"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/8">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="text-primary-500"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-[#14181c]">
                      {item.title}
                    </h3>
                    <p className="text-[12.5px] leading-relaxed text-[#5b6472] line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PageWrapper>

      {/* ============================================================ */}
      {/* ANALYTICS — what you can understand about your business       */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Analytics"
          title={analytics.title}
          description={analytics.description}
          variant="compact"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative overflow-hidden rounded-2xl bg-[#14181c] shadow-2xl shadow-black/[0.18] ring-1 ring-white/[0.06] aspect-[4/3]">
            <ProductImage
              src={analytics.image}
              alt={analytics.title}
              fallbackIcon={BarChart3}
            />
            <span className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 drop-shadow-sm sm:left-8 sm:top-8">
              {analytics.title}
            </span>
          </div>
          <div className="divide-y divide-[#e4e4e1]">
            {analytics.items.map((item, idx) => {
              const Icon =
                ANALYTICS_ICON_ROTATION[idx % ANALYTICS_ICON_ROTATION.length];
              return (
                <div key={item.title} className="flex gap-4 py-5 first:pt-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500/8">
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className="text-primary-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] text-[#14181c]">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#5b6472]">
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
      {/* BUSINESS IMPACT — outcomes, editorial numbered list           */}
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
            {businessImpact.items.map((item, idx) => (
              <div
                key={item.title}
                className="group grid grid-cols-1 gap-3 py-9 first:pt-0 last:pb-0 sm:grid-cols-[4rem_1fr] sm:items-start sm:gap-8"
              >
                <span className="text-3xl font-light leading-none text-primary-500/25 transition-colors group-hover:text-primary-500/40 sm:text-4xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl text-[#14181c]">{item.title}</h3>
                  <p className="mt-2.5 max-w-xl text-[14.5px] leading-relaxed text-[#5b6472]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HARDWARE + INTEGRATIONS — quiet, connected two-column panel    */}
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
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-500">
              Hardware
            </p>
            <h3 className="mt-2 text-xl text-[#14181c]">{hardware.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#5b6472]">
              {hardware.description}
            </p>
            <ul className="mt-6 space-y-3">
              {hardware.items.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 border-b border-dashed border-[#e4e4e1] pb-3 text-[13.5px] text-[#14181c] last:border-0 last:pb-0"
                >
                  <Tablet size={14} className="text-primary-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-500">
              Integrations
            </p>
            <h3 className="mt-2 text-xl text-[#14181c]">
              {integrations.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#5b6472]">
              {integrations.description}
            </p>
            <ul className="mt-6 space-y-3">
              {integrations.items.map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 border-b border-dashed border-[#e4e4e1] pb-3 text-[13.5px] text-[#14181c] last:border-0 last:pb-0"
                >
                  <Plug size={14} className="text-primary-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* WHY CHOOSE US                                                  */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/8 transition-colors group-hover:bg-primary-500/12">
                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="text-primary-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg text-[#14181c]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5b6472]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* FAQ — accessible accordion                                     */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white" containerWidth="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
          highlight={"Questions"}
          variant="compact"
        />

        <div className="divide-y divide-[#e4e4e1] border-t border-b border-[#e4e4e1]">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={isOpen}
                onToggle={() => setOpenFaq(isOpen ? -1 : idx)}
              />
            );
          })}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* CTA                                                            */}
      {/* ============================================================ */}
      <CtaSection cta={cta} />
    </>
  );
};

export default IndustryDetailsPage;
