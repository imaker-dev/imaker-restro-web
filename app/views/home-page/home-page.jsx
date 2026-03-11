"use client";
import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Wifi,
  Headphones,
  RefreshCw,
  Lock,
  CloudUpload,
} from "lucide-react";
import HeroSection from "@/app/views/home-page/hero-section";
import FeaturesSection from "@/app/views/home-page/features-section";
import HowItWorksSection from "@/app/views/home-page/how-it-work-section";
import AboutUsSection from "@/app/views/home-page/about-us-section";
import CTABanner from "@/app/views/home-page/cta-banner";
import Testimonials from "@/app/views/home-page/testimonials";
import Pricing from "@/app/views/home-page/pricing";
import ContactUsSection from "@/app/views/home-page/contact-us-section";
import PageWrapper from "@/app/components/page-wrapper";
/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS — single source of truth
───────────────────────────────────────────────────────────────────────────── */
// Light ivory base  #F9F6F1
// Espresso dark     #1A0F00
// Saffron accent    #F59E0B
// Burnt orange      #C2410C

/* ─────────────────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useCountUp(end, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const step = end / 60;
    const t = setInterval(() => {
      v = Math.min(v + step, end);
      setVal(Math.floor(v));
      if (v >= end) clearInterval(t);
    }, 24);
    return () => clearInterval(t);
  }, [active, end]);
  return val;
}

/* ─────────────────────────────────────────────────────────────────────────────
   STATS
───────────────────────────────────────────────────────────────────────────── */
function Stats() {
  const STATS = [
    { end: 14000, suffix: "+", label: "Restaurants" },
    { end: 99, suffix: ".9%", label: "Uptime" },
    { end: 480, suffix: "Cr+", label: "₹ Processed" },
    { end: 4, suffix: ".9★", label: "App Rating" },
  ];
  return (
    <PageWrapper className="bg-white border-y border-[#1A0F00]/8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map(({ end, suffix, label }, i) => {
            const v = useCountUp(end, true);
            return (
              <div
                key={label}
                className={`text-center ${i > 0 ? "lg:border-l lg:border-[#1A0F00]/8" : ""}`}
              >
                <p className="font-display text-4xl sm:text-5xl font-black text-[#1A0F00] tabular-nums">
                  {/* {visible ? ) : "0"} */}
                  {v.toLocaleString("en-IN")}
                  {suffix}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1A0F00]/45 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
    </PageWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TRUST STRIP
───────────────────────────────────────────────────────────────────────────── */
function TrustStrip() {
  const ITEMS = [
    { Icon: Shield, label: "Bank-Grade SSL" },
    { Icon: CloudUpload, label: "Auto Cloud Backup" },
    { Icon: Wifi, label: "Works Offline" },
    { Icon: RefreshCw, label: "Free Updates" },
    { Icon: Lock, label: "Data Privacy" },
    { Icon: Headphones, label: "24 × 7 Support" },
  ];
  return (
    <PageWrapper className="bg-white border-y border-secondary-500/8">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 lg:gap-8">
        {ITEMS.map(({ Icon, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-2.5 group transition-all duration-500`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary-50 border border-secondary-500/8 flex items-center justify-center group-hover:border-primary-300 group-hover:bg-primary-50 transition-all duration-300">
              <Icon
                size={20}
                className="text-[#1A0F00]/35 group-hover:text-primary-600 transition-colors"
                strokeWidth={1.5}
              />
            </div>
            <p className="text-xs font-semibold text-[#1A0F00]/45 text-center group-hover:text-[#1A0F00]/70 transition-colors">
              {label}
            </p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ROOT
───────────────────────────────────────────────────────────────────────────── */
export default function Homepage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustStrip />
      <AboutUsSection />
      <Pricing />
      <Testimonials />
      <CTABanner />
      <ContactUsSection />
    </>
  );
}
