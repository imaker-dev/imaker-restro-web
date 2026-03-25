import { BarChart3, ChefHat, Printer, UtensilsCrossed } from "lucide-react";
import SectionHeader from "../layouts/section-header";
import PageWrapper from "@/app/components/page-wrapper";

/* ─────────────────────────────────────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────────────────────────────────────── */
const STEPS = [
  {
    n: "01",
    Icon: ChefHat,
    title: "Set Up Your Restaurant",
    desc: "Add your menu, create table layouts, configure taxes, and connect printers. Our guided setup helps your outlet go live in under 30 minutes.",
  },
  {
    n: "02",
    Icon: UtensilsCrossed,
    title: "Start Taking Orders",
    desc: "Your staff can instantly begin billing for dine-in, takeaway, and delivery. The POS interface is simple, fast, and designed for busy service hours.",
  },
  {
    n: "03",
    Icon: Printer,
    title: "Automatic Kitchen Routing",
    desc: "Orders are instantly sent to the correct kitchen station with KOT printing. Chefs receive clear tickets without confusion or missed orders.",
  },
  {
    n: "04",
    Icon: BarChart3,
    title: "Track Sales & Close the Day",
    desc: "Monitor sales, taxes, discounts, and payments in real time. Generate accurate day-end reports with a single click.",
  },
];

export default function HowItWorksSection() {
  return (
    <PageWrapper id="how-it-works" className="relative bg-secondary-500">
      {/* Header */}
      <SectionHeader
        badge="Simple Onboarding"
        title="You're Live in"
        highlight=" 30 Minutes"
        description="Onboarding so simple your cashier can handle it alone — no IT team, no 3-day training sessions."
        align="left"
        light
        className="max-w-xl"
      />

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map(({ n, Icon, title, desc }, i) => (
          <div
            key={n}
            className="relative bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-primary-500/30 transition-all duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Step number + icon */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary-500/15 border border-primary-500/30 flex items-center justify-center">
                <Icon size={20} className="text-primary-500" strokeWidth={2} />
              </div>

              {/* Step number (more visible but still subtle) */}
              <h3 className="text-3xl font-extrabold text-white/20 leading-none">
                {n}
              </h3>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-white mb-2">{title}</h3>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
