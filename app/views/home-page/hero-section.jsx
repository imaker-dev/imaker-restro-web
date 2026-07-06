"use client";

import { useState, useEffect, useRef } from "react";
import PageWrapper from "@/app/components/page-wrapper";
import HeroShowcase from "@/app/views/home-page/components/hero-showcase";
import HeroContent from "@/app/views/home-page/components/hero-content";

// ─── HERO SECTION ────────────────────────────────────────────
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PageWrapper
      className="relative bg-gradient-to-br from-[#FFFBFC] via-white to-[#FFF9F5]"
      containerClassName="w-full pt-16 lg:pt-8"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#fca5a5_0.5px,_transparent_0.5px)] bg-[size:24px_24px] opacity-[0.12]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-gradient-to-br from-primary-100/40 to-primary-200/20 rounded-full opacity-40 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-0 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-gradient-to-tr from-amber-100/30 to-amber-200/20 rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-24 left-10 w-20 h-20 border border-primary-200/30 rounded-full opacity-20 animate-spin-slow" />
      <div
        className="absolute bottom-32 right-10 w-16 h-16 border border-amber-200/30 rounded-full opacity-20 animate-spin-slow"
        style={{ animationDelay: "2s" }}
      />

      <div
        ref={heroRef}
        className="grid lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-16 items-center w-full z-10"
      >
        {/* ── LEFT: COPY ── */}
        <HeroContent isVisible={isVisible} />

        {/* ── RIGHT: TABLET + FLOATING CARDS ── */}
        <HeroShowcase isVisible={isVisible} />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </PageWrapper>
  );
}
