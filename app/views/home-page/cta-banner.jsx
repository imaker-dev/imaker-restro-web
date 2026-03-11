import PageWrapper from "@/app/components/page-wrapper";
import { Zap } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────────────────────────────────────────── */
export default function CTABanner() {
  return (
    <PageWrapper className="bg-white">
      <div
        className={`relative bg-secondary-500 rounded-2xl overflow-hidden p-12 lg:p-16 text-center shadow transition-all duration-700 `}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />

        <div className="relative">
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
            Ready to Transform Your
            <span className="text-primary-500"> Restaurant?</span>
          </h2>
          <p className="mt-4 text-base font-medium text-white/50 max-w-md mx-auto">
            Start free for 14 days. No credit card. No contracts. Just results
            from day one.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-primary-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-600 hover:-translate-y-0.5 transition-all"
            >
              {/* <Sparkles size={17} strokeWidth={2.5} /> */}
              Start Free Trial
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/8 hover:border-white/25 transition-all"
            >
              {/* <Headphones size={16} strokeWidth={2} /> */}
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
