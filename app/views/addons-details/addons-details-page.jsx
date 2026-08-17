"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight, ChevronDown, CheckCircle } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeading, { Eyebrow } from "../layouts/section-heading";
import CtaSection from "../layouts/cta-section";
import FaqItem from "@/app/components/faq-item";
import Link from "next/link";
import AddonsDetailsHero from "./components/addons-details-hero";
import AddonsDetailsShowcase from "./components/addons-details-showcase";

/* -------------------------------------------------------------------------
 * Design tokens (matches the existing iMaker Restro system)
 * ink:      #14181c
 * brand:    #d9384a
 * offwhite: #fbfaf8
 *
 * This component is intentionally generic — every label, heading, step,
 * and image comes from `data`. It's reused across all iMaker Restro
 * add-ons (Captain App, KDS, Loyalty, Analytics, etc.), so nothing here
 * is specific to any single add-on.
 * -----------------------------------------------------------------------*/

function ScreenshotFrame({
  src,
  alt,
  aspect = "aspect-[16/11]",
  priority = false,
  className = "",
}) {
  if (!src) return null;
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-2xl border border-[#14181c]/10 bg-white shadow-[0_30px_70px_-30px_rgba(20,24,28,0.35)] ${className}`}
    >
      <Image
        src={src}
        alt={alt || ""}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-contain p-2 sm:p-3"
      />
    </div>
  );
}

function PhotoFrame({ src, alt, aspect = "aspect-[4/5]", className = "" }) {
  if (!src) return null;
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-2xl bg-[#14181c]/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt || ""}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Interactive, data-driven workflow — one large screenshot at a time,
 * switched via an accessible tab strip. Works for any step count/labels.
 * -----------------------------------------------------------------------*/

function WorkflowWalkthrough({ workflow }) {
  const steps = workflow.steps || [];
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef([]);

  if (steps.length === 0) return null;

  const current = steps[active];

  function handleKeyDown(e) {
    const total = steps.length;
    let next = null;
    if (e.key === "ArrowRight") next = (active + 1) % total;
    else if (e.key === "ArrowLeft") next = (active - 1 + total) % total;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = total - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="mx-auto mt-12 max-w-5xl">
      <div
        role="tablist"
        aria-label={workflow.title || "Workflow steps"}
        onKeyDown={handleKeyDown}
        className="flex flex-wrap items-center justify-center gap-1 border-b border-[#14181c]/10 sm:gap-2"
      >
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              id={`${workflow.id || "workflow"}-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`${workflow.id || "workflow"}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2 px-3 py-3.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9384a] sm:px-4 ${
                isActive
                  ? "text-[#14181c]"
                  : "text-[#14181c]/40 hover:text-[#14181c]/70"
              }`}
            >
              <span className="font-mono text-xs">{step.number}</span>
              <span>{step.shortTitle || step.title}</span>
              {isActive && (
                <span
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#d9384a]"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        id={`${workflow.id || "workflow"}-panel`}
        role="tabpanel"
        aria-labelledby={`${workflow.id || "workflow"}-tab-${active}`}
        className="mt-8"
      >
        <ScreenshotFrame
          src={current.visual?.src}
          alt={current.visual?.alt}
          aspect="aspect-[16/10]"
        />
        <div className="mx-auto mt-6 max-w-lg text-center">
          <h3 className="text-2xl text-[#14181c]">{current.title}</h3>
          {current.description && (
            <p className="mt-2 text-sm leading-relaxed text-[#14181c]/60">
              {current.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Page
 * -----------------------------------------------------------------------*/

const AddonsDetailsPage = ({ data }) => {
  const [openFaq, setOpenFaq] = useState(0);

  if (!data) return null;

  const {
    hero,
    overview,
    workflow,
    showcase,
    capabilities,
    benefits,
    useCases,
    faq,
    relatedAddons,
    finalCta,
  } = data;
  return (
    <>
      {/* ============================== HERO ============================== */}
      <AddonsDetailsHero hero={hero} />

      {/* ============================ OVERVIEW ============================= */}
      {overview && (
        <PageWrapper>
          <SectionHeading
            eyebrow={overview.eyebrow}
            title={overview.title}
            description={overview.description}
            variant="compact"
          />

          <ScreenshotFrame
            src={overview.visual?.src}
            alt={overview.visual?.alt}
            aspect="aspect-[16/10]"
          />

          {overview.highlights?.length > 0 && (
            <div className="mt-10 grid grid-cols-1 divide-y divide-[#14181c]/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {overview.highlights.map((h, i) => (
                <div key={i} className="px-0 py-5 text-center sm:px-6 sm:py-0">
                  <p className="text-sm font-semibold text-[#14181c]">
                    {h.title}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-[#14181c]/60">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </PageWrapper>
      )}

      {/* ============================ WORKFLOW ============================= */}
      {/* {workflow && (
        <PageWrapper
          id={workflow.id}
          className="border-y border-[#14181c]/8 bg-white"
        >
          <SectionHeading
            eyebrow={workflow.eyebrow}
            title={workflow.title}
            description={workflow.description}
            variant="compact"
          />

          <WorkflowWalkthrough workflow={workflow} />
        </PageWrapper>
      )} */}

      {/* ============================== SHOWCASE ============================== */}
      <AddonsDetailsShowcase showcase={showcase} />

      {/* =========================== CAPABILITIES =========================== */}
      {capabilities && (
        <PageWrapper className="border-y border-[#14181c]/8 bg-white">
          <SectionHeading
            eyebrow={capabilities.eyebrow}
            title={capabilities.title}
            description={capabilities.description}
            variant="compact"
            align="start"
          />

          {capabilities.items?.length > 0 && (
            <div className="mt-10 divide-y divide-[#14181c]/10 border-t border-[#14181c]/10">
              {capabilities.items.map((c, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 py-6 sm:grid-cols-[4.5rem_1fr]"
                >
                  <span className="font-mono text-xs text-primary-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#14181c] sm:text-base">
                      {c.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#14181c]/60">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </PageWrapper>
      )}

      {/* ============================== BENEFITS ============================== */}
      {benefits && (
        <PageWrapper className="bg-[#14181c] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow={benefits.eyebrow}
            title={benefits.title}
            description={benefits.description}
            variant="compact"
          />

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <Image
              src={benefits.visual?.src}
              alt={benefits.visual?.alt || ""}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain p-2 sm:p-3"
            />
          </div>

          {benefits.items?.length > 0 && (
            <div className="mt-8 lg:mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {benefits.items.map((b, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-white">{b.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </PageWrapper>
      )}

      {/* ============================= USE CASES ============================= */}
      {useCases && (
        <PageWrapper>
          <SectionHeading
            eyebrow={useCases.eyebrow}
            title={useCases.title}
            variant="compact"
          />

          {useCases.items?.length > 0 && (
            <div className="grid  grid-cols-1 gap-8 sm:grid-cols-3">
              {useCases.items.map((u, i) => (
                <div key={i}>
                  <PhotoFrame
                    src={u.visual?.src}
                    alt={u.visual?.alt}
                    aspect="aspect-[4/5]"
                  />
                  <h3 className="mt-4 text-base font-semibold text-[#14181c]">
                    {u.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#14181c]/60">
                    {u.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </PageWrapper>
      )}

      {/* =============================== FAQ ================================ */}
      {faq && (
        <PageWrapper
          className="border-t border-[#14181c]/8 bg-white"
          containerWidth="max-w-3xl mx-auto"
        >
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            variant="compact"
          />

          {faq.questions?.length > 0 && (
            <div className="divide-y divide-[#14181c]/10 border-t border-[#14181c]/10">
              {faq.questions.map((q, i) => {
                const open = openFaq === i;
                return (
                  <FaqItem
                    key={i}
                    question={q.question}
                    answer={q.answer}
                    isOpen={open}
                    onToggle={() => setOpenFaq(open ? -1 : i)}
                  />
                );
              })}
            </div>
          )}
        </PageWrapper>
      )}

      {/* ========================== RELATED ADD-ONS ========================== */}
      {relatedAddons && (
        <PageWrapper>
          <SectionHeading
            eyebrow={relatedAddons.eyebrow}
            title={relatedAddons.title}
            description={relatedAddons.description}
            variant="compact"
          />

          {relatedAddons.items?.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {relatedAddons.items.map((addon, i) => (
                <NextLink
                  key={i}
                  href={`/addons/${addon.id}`}
                  className="group block"
                >
                  <PhotoFrame
                    src={addon.image}
                    alt={addon.title}
                    aspect="aspect-[4/3]"
                  />
                  <div className="mt-4 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-[#14181c]">
                        {addon.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#14181c]/60 ">
                        {addon.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#14181c]/40 transition group-hover:text-[#d9384a]"
                      aria-hidden="true"
                    />
                  </div>
                </NextLink>
              ))}
            </div>
          )}
        </PageWrapper>
      )}

      {/* ============================= FINAL CTA ============================= */}
      <CtaSection cta={finalCta} />
    </>
  );
};

export default AddonsDetailsPage;
