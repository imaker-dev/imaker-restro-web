import { ArrowRight, Flame, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroContent = ({ isVisible = false }) => {
  return (
    <div
      className={`text-center lg:text-left transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="inline-flex items-center gap-2 bg-white border border-primary-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
        <Flame size={11} className="text-primary-500" strokeWidth={2.5} />
        <span className="text-[10px] sm:text-xs font-bold text-primary-600 uppercase tracking-widest">
          Smart Restaurant POS
        </span>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-zinc-900 leading-[1.06] tracking-tight mb-5">
        Restaurant POS
        <br />
        Software Built
        <br />
        <span className="text-primary-500">for Growth.</span>
      </h1>

      <p className="mx-auto lg:mx-0 text-sm sm:text-base text-zinc-500 leading-relaxed max-w-md mb-7">
        Built by{" "}
        <span className="text-zinc-800 font-semibold">
          iMaker Technology Pvt. Ltd.
        </span>
        , our all-in-one Restaurant POS Software simplifies billing, orders,
        inventory, kitchen operations, and payments with cloud and offline
        deployment options.
      </p>

      <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10 mb-6 sm:mb-7">
        {" "}
        {[
          { val: "500+", label: "Restaurants" },
          { val: "99.9%", label: "Uptime" },
          { val: "< 2s", label: "Bill Time" },
        ].map(({ val, label }) => (
          <div key={label}>
            <p className="text-xl sm:text-2xl font-black text-zinc-900">
              {val}
            </p>
            <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mt-0.5">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-7">
        {" "}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-primary-300/50"
        >
          <Zap size={15} strokeWidth={2.5} />
          Start Free Trial
        </Link>
        <a
          href="#features"
          className="inline-flex items-center justify-center gap-2 border border-zinc-200 bg-white hover:border-zinc-300 text-zinc-700 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all shadow-sm"
        >
          See How It Works
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>

      <p className="text-xs text-zinc-500">
        Built for restaurants, cafés, and hospitality brands of every size.
      </p>
    </div>
  );
};

export default HeroContent;
