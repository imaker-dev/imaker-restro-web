"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  X,
  ShoppingCart,
  Tag,
  CreditCard,
  Receipt,
  BarChart3,
  PieChart,
  TrendingUp,
  Activity,
  Image as ImageIcon,
} from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeading, { Eyebrow } from "../layouts/section-heading";
import CtaSection from "../layouts/cta-section";
import FaqItem from "@/app/components/faq-item";

/* ------------------------------------------------------------------ */
/* Icon lookups                                                        */
/* ------------------------------------------------------------------ */
const WORKFLOW_ICONS = { ShoppingCart, Tag, CreditCard, Receipt, BarChart3 };
const ANALYTICS_ICON_ROTATION = [BarChart3, PieChart, TrendingUp, Activity];

/** Renders a real product image; falls back to a quiet dark tile with an icon if it fails to load. */
const ProductImage = ({ src, alt = "", className = "" }) => {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#14181c] via-[#1f2430] to-[#14181c] ${className}`}
      >
        <ImageIcon size={26} strokeWidth={1.25} className="text-white/25" />
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

/** A "software window" frame — the recurring product-presentation motif for this page. */
const WindowFrame = ({
  src,
  alt = "",
  chromeLabel,
  overlay,
  elevated = false,
  className = "",
}) => (
  <div
    className={`overflow-hidden rounded-2xl bg-white ring-1 transition-transform duration-500 ${
      elevated
        ? "shadow-[0_60px_120px_-32px_rgba(20,24,28,0.35)] ring-black/[0.06]"
        : "shadow-2xl shadow-black/[0.12] ring-black/[0.04]"
    } ${className}`}
  >
    <div className="flex items-center gap-1.5 border-b border-[#e4e4e1]/60 bg-[#fbfaf8] px-4 py-3">
      <span
        className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
        aria-hidden="true"
      />
      <span
        className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
        aria-hidden="true"
      />
      <span
        className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
        aria-hidden="true"
      />
      {chromeLabel && (
        <span className="ml-3 font-mono text-[10px] tracking-wide text-[#5b6472]">
          {chromeLabel}
        </span>
      )}
    </div>
    <div className="relative">
      <ProductImage src={src} alt={alt} className="aspect-[16/10]" />
      {overlay}
    </div>
  </div>
);

/** The stage a screenshot sits on — one soft ambient glow, plus a hairline bezel for framing. */
const ScreenshotStage = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-10 -inset-y-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(217,56,74,0.08),transparent)] blur-2xl"
    />
    <div className="relative rounded-[19px] bg-gradient-to-b from-black/[0.06] to-transparent p-px">
      {children}
    </div>
  </div>
);

/* Approximate hotspots a highlight "points to" on its screenshot — cycled by index.
   Kept generic (corners, center, edges) since real coordinates aren't in the data. */
const SPOTLIGHT_POSITIONS = [
  { x: 24, y: 28 },
  { x: 76, y: 24 },
  { x: 50, y: 50 },
  { x: 22, y: 76 },
  { x: 78, y: 70 },
  { x: 50, y: 88 },
];

/** Soft glow positioned over the screenshot, tracking the active highlight. */
const Spotlight = ({ index }) => {
  const pos = SPOTLIGHT_POSITIONS[index % SPOTLIGHT_POSITIONS.length];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9384a]/[0.12] blur-3xl transition-all duration-500 ease-out"
        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      />
    </div>
  );
};

/**
 * One screen entry — screenshot and copy sit in an even two-column split (50/50) so
 * neither side dominates and the eye isn't pulled toward one column over the other.
 * There is no enclosing card: the WindowFrame and the text block are the whole
 * composition. Highlights are rendered directly here (no separate row component) —
 * each is just a string, paired with a hairline rail that turns brand-red when active.
 */
const ProductScreenBlock = ({ screen, imageOnRight }) => {
  const [active, setActive] = useState(0);

  const content = (
    <div>
      <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-primary-500">
        {screen.focus}
      </span>
      <h3 className="mt-3 text-[26px] leading-[1.2] tracking-[-0.01em] text-[#14181c] sm:text-[30px]">
        {screen.title}
      </h3>
      <p className="mt-3 max-w-md text-[14px] leading-[1.7] text-[#5b6472]">
        {screen.description}
      </p>

      {screen.highlights?.length > 0 && (
        <ul className="mt-8 space-y-1">
          {screen.highlights.map((highlight, idx) => {
            const isActive = active === idx;
            return (
              <li
                key={highlight}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                tabIndex={0}
                className={`group flex cursor-default items-start gap-3 rounded-xl py-2.5 pl-3 pr-3 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9384a]/30 ${
                  isActive ? "bg-[#faf7f3]" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary-500"
                      : "border border-[#e4e4e1] bg-white"
                  }`}
                >
                  <Check
                    strokeWidth={3}
                    className={`h-3 w-3 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#c4c9cf]"
                    }`}
                  />
                </span>
                <p
                  className={`text-[14.5px] font-semibold leading-snug tracking-[-0.005em] transition-colors duration-300 ${
                    isActive ? "text-[#14181c]" : "text-[#5b6472]"
                  }`}
                >
                  {highlight}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );

  const shot = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#e4e4e1] bg-[#f7f6f3] shadow-[0_1px_2px_rgba(20,24,28,0.04)]">
      <img
        src={screen.image}
        alt={screen.title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform hover:scale-[1.015]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.04]" />
    </div>
  );

  // A true 50/50 split — both columns share the row equally, and which side holds
  // the screenshot vs. the copy simply swaps with `imageOnRight`. `items-center`
  // keeps the copy vertically centered against the screenshot instead of pinned
  // to the top, so the two halves read as one balanced composition.
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
      {imageOnRight ? (
        <>
          {content}
          {shot}
        </>
      ) : (
        <>
          {shot}
          {content}
        </>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const FeatureDetailsPage = ({ data }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const { hero, problems, screens, workflow, analytics, faq, cta } = data;

  return (
    <main>
      {/* ============================================================ */}
      {/* HERO — the screenshot is the only accent it needs             */}
      {/* ============================================================ */}
      <PageWrapper
        className="relative overflow-hidden bg-[#fbfaf8] pt-28 sm:pt-36"
        containerClassName=" pt-10 sm:pt-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,56,74,0.10),transparent)] blur-2xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Eyebrow className="justify-center">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[#14181c] sm:text-[52px] md:text-[60px]">
            {hero.title}{" "}
            <span className="text-primary-500">{hero.highlightedTitle}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.7] text-[#5b6472]">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" className="btn btn-lg btn-primary">
              {hero.primaryCta}
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button type="button" className="btn btn-lg btn-secondary">
              {hero.secondaryCta}
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <ScreenshotStage>
            <WindowFrame
              src={hero.image}
              alt={hero.title}
              chromeLabel="iMaker Restro"
              className="hover:-translate-y-1"
            />
          </ScreenshotStage>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* PROBLEMS — friction / fix split                               */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow={problems.eyebrow}
          title={problems.title}
          description={problems.description}
          variant="compact"
        />

        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-[#fbfaf8] p-8 sm:grid-cols-2 sm:gap-0 sm:p-10 sm:divide-x sm:divide-[#e4e4e1]/70">
          <div className="sm:pr-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5b6472]">
              The Friction
            </p>
            <ul className="mt-6 space-y-6">
              {problems.items.map((item) => (
                <li key={item.problem} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <X size={9} strokeWidth={2.5} className="text-red-500" />
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-[#5b6472]">
                    {item.problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:pl-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d9384a]">
              The Fix
            </p>
            <ul className="mt-6 space-y-6">
              {problems.items.map((item) => (
                <li key={item.solution} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9384a]/10">
                    <Check
                      size={9}
                      strokeWidth={2.5}
                      className="text-[#d9384a]"
                    />
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-[#14181c]">
                    {item.solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* PRODUCT EXPERIENCE — screenshot-led, one composition per screen */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <div className="space-y-28 sm:space-y-40">
          {screens.map((screen) => (
            <ProductScreenBlock
              key={screen.id}
              screen={screen}
              imageOnRight={screen.layout === "right"}
            />
          ))}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* WORKFLOW — a single flow, read in five seconds                */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow={workflow.eyebrow}
          title={workflow.title}
          variant="compact"
        />

        {/* A single connected bar — stages of one pipeline, not separate floating steps */}
        <div className="overflow-hidden rounded-[28px] ring-1 ring-[#e4e4e1]/80">
          <div className="flex flex-col sm:flex-row">
            {workflow.steps.map((step, idx) => {
              const Icon = WORKFLOW_ICONS[step.icon] || CreditCard;
              const isLast = idx === workflow.steps.length - 1;
              return (
                <div
                  key={step.title}
                  className={`group relative flex-1 px-6 py-9 text-center transition-colors duration-300 hover:bg-white ${
                    isLast
                      ? ""
                      : "border-b border-[#e4e4e1]/80 sm:border-b-0 sm:border-r"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="mx-auto text-[#14181c]/70 transition-colors duration-300 group-hover:text-[#d9384a]"
                  />
                  <p className="mt-4 text-[13.5px] font-semibold leading-snug text-[#14181c]">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-[#5b6472]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* ANALYTICS — dashboard-dominant showcase                      */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]" containerWidth="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow={analytics.eyebrow}
          title={analytics.title}
          description={analytics.description}
          variant="compact"
        />

        <div className="mx-auto">
          <ScreenshotStage>
            <WindowFrame
              src={analytics.image}
              alt={analytics.title}
              chromeLabel="Reports"
              className="shadow-[0_50px_100px_-28px_rgba(20,24,28,0.20)] hover:-translate-y-1"
            />
          </ScreenshotStage>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {analytics.insights.map((insight, idx) => {
            const Icon =
              ANALYTICS_ICON_ROTATION[idx % ANALYTICS_ICON_ROTATION.length];
            return (
              <div
                key={insight.title}
                className="flex flex-col items-center gap-2.5 text-center"
              >
                <Icon size={18} strokeWidth={1.5} className="text-[#d9384a]" />
                <p className="text-[15px] text-[#14181c]">{insight.title}</p>
                <p className="text-[12px] leading-relaxed text-[#5b6472]">
                  {insight.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white" containerWidth="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          variant="compact"
        />

        <div className="divide-y divide-[#e4e4e1]/80 border-t border-b border-[#e4e4e1]/80">
          {faq.questions.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <FaqItem
                key={idx}
                question={f.question}
                answer={f.answer}
                isOpen={isOpen}
                onToggle={() => setOpenFaq(isOpen ? -1 : idx)}
              />
            );
          })}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* CTA — centered, gradient close                                */}
      {/* ============================================================ */}
      <CtaSection cta={cta} />
    </main>
  );
};

export default FeatureDetailsPage;
