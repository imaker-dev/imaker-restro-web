/* ─────────────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────────────── */

import PageWrapper from "@/app/components/page-wrapper";
import Image from "next/image";
import { ArrowRight, Flame, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <PageWrapper
      className="relative bg-primary-50 min-h-[100dvh] flex items-center justify-center"
      containerClassName="w-full"
      paddingY="py-16"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(245,158,11,0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(194,65,12,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="transition-all duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-300 rounded-full px-4 py-1.5 mb-8">
            <Flame size={13} className="text-primary-600" strokeWidth={2.5} />
            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest">
              Smart Restaurant POS
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl font-black text-[#1A0F00] leading-[1.05] tracking-tight">
            Run Your Restaurant
            <br />
            <span className="text-primary-500">
              Smarter with iMaker Restro.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg font-medium text-[#1A0F00]/60 leading-relaxed max-w-lg">
            Built by <strong>iMaker Technology Pvt. Ltd.</strong>, iMaker Restro
            helps restaurants manage billing, orders, KOT, payments, and
            inventory in one powerful system designed to simplify daily
            operations.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-primary-500 text-white font-bold text-base px-7 py-4 rounded-xl hover:bg-primary-600 hover:-translate-y-0.5 transition-all"
            >
              <Zap size={18} strokeWidth={2.5} />
              Get Started
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1A0F00]/15 text-[#1A0F00] font-semibold text-base px-7 py-4 rounded-xl hover:border-[#1A0F00]/30 hover:bg-[#1A0F00]/5 transition-all"
            >
              Explore Features
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            {/* Glow */}
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(245,158,11,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Optimized Image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl">
              <Image
                src="/Images/hero-image.jpg"
                alt="ServeIQ Restaurant POS Dashboard"
                width={900}
                height={650}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
