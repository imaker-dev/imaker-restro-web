"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow } from "../../layouts/section-heading";
import PageWrapper from "@/app/components/page-wrapper";

const heroStates = [
  {
    id: "billing",
    word: "Faster Billing",
    image: "/Images/Pos/billing/hero.webp",
    imageAlt: "iMaker Restro restaurant billing POS interface",
  },
  {
    id: "orders",
    word: "Smarter Orders",
    image: "/Images/Pos/Orders/hero.webp",
    imageAlt: "iMaker Restro restaurant order management interface",
  },
  {
    id: "kitchen",
    word: "Smoother Kitchen",
    image: "/Images/Pos/Kitchen/hero.webp",
    imageAlt: "iMaker Restro kitchen management interface",
  },
  {
    id: "inventory",
    word: "Simpler Inventory",
    image: "/Images/Pos/Inventory/hero.webp",
    imageAlt: "iMaker Restro inventory management interface",
  },
  {
    id: "insights",
    word: "Clearer Insights",
    image: "/Images/Pos/Reports/hero.webp",
    imageAlt: "iMaker Restro restaurant reports and analytics dashboard",
  },
  {
    id: "branches",
    word: "Unified Branches",
    image: "/Images/Pos/Franchises/hero.webp",
    imageAlt: "iMaker Restro multi-branch restaurant management interface",
  },
];

const ROTATE_MS = 2000;

export default function NewHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroStates.length);
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const active = heroStates[activeIndex];

  return (
    <PageWrapper
      containerClassName="pt-16 lg:pt-20"
    >
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — MESSAGING */}
        <div className="text-center lg:text-left">
          <Eyebrow>RESTAURANT POS & MANAGEMENT SOFTWARE</Eyebrow>

          <h1 className="mt-5 text-[1.9rem] font-semibold leading-[1.18] tracking-tight text-ink sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem]">
            <span className="block">Everything Your Restaurant Needs,</span>

            <span className="relative mt-1 block h-[1.3em] overflow-hidden sm:h-[1.2em]">
              {prefersReducedMotion ? (
                <span className="block text-primary-500">{active.word}</span>
              ) : (
                <AnimatePresence initial={false}>
                  <motion.span
                    key={active.id}
                    initial={{
                      y: "100%",
                      opacity: 0,
                      rotateX: -55,
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      rotateX: 0,
                    }}
                    exit={{
                      y: "-100%",
                      opacity: 0,
                      rotateX: 55,
                    }}
                    transition={{
                      duration: 0.95,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      transformPerspective: 800,
                      transformOrigin: "center center",
                    }}
                    className="absolute left-0 top-0 block w-full text-primary-500 lg:left-0 lg:right-auto lg:w-auto"
                  >
                    {active.word}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </h1>

          {/* Accessible announcement */}
          <p className="sr-only" aria-live="polite">
            Currently showing: {active.word}
          </p>

          <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink/65 sm:mt-7 sm:text-[1.0625rem] lg:mx-0">
            Manage billing, orders, tables, kitchen operations, inventory,
            customers, and business performance from one connected POS system.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
            <button
              type="button"
              className="btn btn-lg btn-primary"
              // className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:w-auto"
            >
              Book a Free Demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="btn btn-lg btn-ghost"
              // className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-ink/70 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              See How It Works
            </button>
          </div>
        </div>

        {/* RIGHT — PRODUCT VISUAL */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative aspect-[16/11] w-full max-w-[680px] sm:aspect-[4/3] lg:max-w-[760px]">
            <AnimatePresence>
              {heroStates.map((state, index) => {
                if (index !== activeIndex) return null;

                return (
                  <motion.div
                    key={state.id}
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={state.image}
                      alt={state.imageAlt}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      unoptimized
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-contain"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
