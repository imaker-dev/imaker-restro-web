import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CtaSection = ({ cta }) => {
  const {
    eyebrow = "Ready to Grow?",
    title = "Let's Build Your Restaurant's Future Together.",
    description =
      "Simplify billing, inventory, customer engagement and operations with one connected platform.",
    primaryButton = {
      text: "Book a Demo",
      link: "/book-a-demo",
    },
    secondaryButton = {
      text: "Talk to Sales",
      link: "/contact",
    },
  } = cta || {};

  return (
    <section className="relative overflow-hidden bg-[#101216]">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Primary Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(var(--color-primary-rgb),0.18),transparent_65%)]" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        {eyebrow && (
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary-400">
            {eyebrow}
          </span>
        )}

        {title && (
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
        )}

        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            {description}
          </p>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {primaryButton && (
            <Link
              href={primaryButton.link}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary-600"
            >
              {primaryButton.text}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          )}

          {secondaryButton && (
            <Link
              href={secondaryButton.link}
              className="rounded-full border border-white/20 bg-transparent px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;