import PageWrapper from "@/app/components/page-wrapper";
import { ArrowRight, MessageSquare } from "lucide-react";

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
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-primary-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary-500/20 hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300"
            >
              <MessageSquare size={20} />
              <span>Talk to Sales</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
