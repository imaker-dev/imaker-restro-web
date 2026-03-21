import PageWrapper from "@/app/components/page-wrapper";
import Image from "next/image";
import { ArrowRight, Flame, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <PageWrapper
      className="relative bg-primary-50 min-h-[100dvh] flex items-center justify-center"
      containerClassName="w-full pt-6"
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
          <div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-300 rounded-full px-3 py-1.5 mb-6">
            <Flame size={12} className="text-primary-600" strokeWidth={2.5} />
            <span className="text-[10px] sm:text-xs font-bold text-primary-600 uppercase tracking-widest">
              Smart Restaurant POS
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A0F00] leading-tight sm:leading-[1.05] tracking-tight">
            Run Your Restaurant
            <br />
            <span className="text-primary-500">
              Smarter with iMaker Restro.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-medium text-[#1A0F00]/60 leading-relaxed max-w-lg">
            Built by <strong>iMaker Technology Pvt. Ltd.</strong>, iMaker Restro
            helps restaurants manage billing, orders, KOT, payments, and
            inventory in one powerful system designed to simplify daily
            operations.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl hover:bg-primary-600 transition-all"
            >
              <Zap size={16} strokeWidth={2.5} />
              Get Started
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1A0F00]/15 text-[#1A0F00] font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl hover:border-[#1A0F00]/30 hover:bg-[#1A0F00]/5 transition-all"
            >
              Explore Features
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg lg:max-w-xl">
            {/* Glow */}
            <div
              className="absolute -inset-5 rounded-3xl pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(245,158,11,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Image */}
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