"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Utensils,
  Coffee,
  Zap,
  CloudCog,
  Truck,
  ChevronDown,
} from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import { getAllSolutionsList } from "@/app/data/solutions";
import SectionHeader from "../layouts/section-header";

const ICON_MAP = {
  "restaurant-pos-software": Utensils,
  "cafe-pos-software": Coffee,
  "fast-food-pos-software": Zap,
  "cloud-kitchen-pos-software": CloudCog,
  "food-truck-pos-software": Truck,
};

// Alternates primary / secondary per card. Add more entries if you
// want a longer alternating pattern.
const TONE_CLASSES = [
  {
    card: "bg-primary-500",
    text: "text-white",
    sub: "text-primary-100/80",
    chip: "bg-white/15 text-white",
    glow: "bg-white/25",
    number: "text-primary-100",
  },
  {
    card: "bg-secondary-500",
    text: "text-white",
    sub: "text-white/50",
    chip: "bg-white/10 text-white",
    glow: "bg-black/30",
    number: "text-white/40",
  },
];

/* ---------- Desktop: hover-reveal rail ---------- */

function DesktopPanel({ item, index, active, onEnter, onSelect }) {
  const tone = TONE_CLASSES[index % TONE_CLASSES.length];

  return (
    <div
      onMouseEnter={() => onEnter(index)}
      onFocus={() => onEnter(index)}
      onClick={active ? () => onSelect(item) : () => onEnter(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          active ? onSelect(item) : onEnter(index);
        }
      }}
      style={{
        flex: active ? "5 1 0%" : "1 1 0%",
        transition: "flex 550ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`group relative h-[440px] min-w-[64px] cursor-pointer overflow-hidden rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${tone.card}`}
    >
      <span
        className={`absolute left-5 top-5 z-10 font-mono text-[11px] font-medium uppercase tracking-widest ${tone.number}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className="absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-300"
        style={{
          opacity: active ? 0 : 1,
          pointerEvents: active ? "none" : "auto",
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
          className={`font-serif text-base font-bold tracking-tight ${tone.text}`}
        >
          {item.title}
        </span>
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-end p-9 transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          transitionDelay: active ? "150ms" : "0ms",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center">
          <div
            className={`absolute h-6 w-28 rounded-full blur-lg opacity-60 ${tone.glow}`}
            aria-hidden="true"
          />
          <img
            src={item.image}
            alt=""
            className="relative z-10 h-32 w-32 object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out"
            style={{
              transform: active
                ? "translateY(0) scale(1)"
                : "translateY(12px) scale(0.9)",
            }}
          />
        </div>

        <h3 className={`font-serif text-2xl font-bold leading-tight ${tone.text}`}>
          {item.title}
        </h3>
        <p className={`mt-2 max-w-xs text-sm leading-relaxed ${tone.sub}`}>
          {item.description}
        </p>

        <span
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          className={`mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-transform hover:translate-x-0.5 ${tone.chip}`}
        >
          Explore setup
          <ArrowRight size={13} />
        </span>
      </div>
    </div>
  );
}

function DesktopRail({ solutions, onSelect }) {
  const [active, setActive] = useState(0);
  const enterTimeout = useRef(null);

  const handleEnter = (index) => {
    clearTimeout(enterTimeout.current);
    enterTimeout.current = setTimeout(() => setActive(index), 130);
  };

  useEffect(() => {
    return () => clearTimeout(enterTimeout.current);
  }, []);

  return (
    <div className="hidden gap-4 sm:flex">
      {solutions.map((item, i) => (
        <DesktopPanel
          key={item.id}
          item={item}
          index={i}
          active={active === i}
          onEnter={handleEnter}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

/* ---------- Mobile: tap accordion ---------- */

function MobileRow({ item, index, open, onToggle, onSelect }) {
  const tone = TONE_CLASSES[index % TONE_CLASSES.length];
  const Icon = ICON_MAP[item.id] ?? Utensils;

  return (
    <div className={`overflow-hidden rounded-[22px] ${tone.card}`}>
      <button
        onClick={() => onToggle(index)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left"
      >
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${tone.chip}`}
        >
          <Icon size={17} strokeWidth={1.8} />
        </span>
        <span className={`flex-1 font-serif text-base font-bold ${tone.text}`}>
          {item.title}
        </span>
        <ChevronDown
          size={18}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          className={`shrink-0 transition-transform duration-300 ${tone.sub}`}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-350 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="flex items-center gap-4 px-5 pb-5 pt-1">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
              <div
                className={`absolute h-4 w-14 rounded-full blur-md opacity-60 bottom-1 ${tone.glow}`}
                aria-hidden="true"
              />
              <img
                src={item.image}
                alt=""
                className="relative z-10 h-16 w-16 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className={`text-xs leading-relaxed ${tone.sub}`}>
                {item.description}
              </p>
              <span
                onClick={() => onSelect(item)}
                className={`mt-2.5 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${tone.chip}`}
              >
                Explore setup
                <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({ solutions, onSelect }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3 sm:hidden">
      {solutions.map((item, i) => (
        <MobileRow
          key={item.id}
          item={item}
          index={i}
          open={open === i}
          onToggle={(idx) => setOpen((prev) => (prev === idx ? null : idx))}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

/* ---------- Shared wrapper ---------- */

export default function SolutionsSections({
  heading = "Explore what makes us special",
  subheading = "Handpicked favorites, made fresh every day",
  onSelect = (item) => console.log("navigate to details:", item),
  onViewAll = () => console.log("navigate to full category list"),
}) {
  const solutions = getAllSolutionsList();

  return (
    <PageWrapper>
      <SectionHeader badge={"Built for every setup"} title={heading} actions={        <button
          onClick={onViewAll}
          className="group inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-secondary-500/20 transition-all hover:bg-secondary-600 hover:shadow-md active:scale-95"
        >
          View all
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>}/>
      <div className="mx-auto mb-8 flex  flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="mb-2 inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-500">
            Built for every setup
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-secondary-500 sm:text-3xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-1.5 text-sm text-stone-500 sm:text-base">
              {subheading}
            </p>
          )}
        </div>

        <button
          onClick={onViewAll}
          className="group inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-secondary-500/20 transition-all hover:bg-secondary-600 hover:shadow-md active:scale-95"
        >
          View all
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>

      <div>
        <DesktopRail solutions={solutions} onSelect={onSelect} />
        <MobileAccordion solutions={solutions} onSelect={onSelect} />
      </div>
    </PageWrapper>
  );
}