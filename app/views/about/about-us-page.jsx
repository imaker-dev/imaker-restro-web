import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  CreditCard,
  Package,
  BookOpen,
  ChefHat,
  Globe,
  QrCode,
  Heart,
  Award,
  BarChart3,
  Users,
  LineChart,
  ClipboardList,
  Receipt,
  Coffee,
  Cloud,
  UtensilsCrossed,
  Sparkles,
  Layers,
  RefreshCw,
  Compass,
} from "lucide-react";
import SectionHeading, { Eyebrow } from "../layouts/section-heading";
import PageWrapper from "@/app/components/page-wrapper";
import CtaSection from "../layouts/cta-section";

/* ------------------------------------------------------------------ */
/* Content — sourced from the existing About page copy. Nothing below  */
/* introduces a fact, figure, date, name, or claim that wasn't already */
/* present in the original implementation or explicitly supplied.      */
/* ------------------------------------------------------------------ */

const JOURNEY = [
  {
    title: "Our Journey Began with One Simple Idea",
    paragraphs: [
      "Running a restaurant is about much more than serving great food. Behind every successful dining experience is a complex network of billing, inventory management, kitchen coordination, staff operations, and customer service.",
      "We founded iMaker Restro with a clear vision—to create restaurant management software that simplifies these everyday challenges while giving restaurant owners complete control over their business.",
      "Instead of relying on multiple disconnected tools, restaurants deserve one intelligent platform that connects every aspect of their operations. From the first customer order to end-of-day business reports, our technology helps restaurants operate more efficiently and deliver better experiences.",
    ],
  },
  {
    title: "Designed Around the Real Needs of Restaurant Owners",
    paragraphs: [
      "Every restaurant operates differently, but the challenges are often the same—faster billing, accurate inventory, better customer service, and smarter business decisions.",
      "That's why every feature inside iMaker Restro is built by understanding real restaurant workflows. We continuously work alongside restaurant owners, managers, and hospitality professionals to develop practical solutions that improve efficiency without increasing complexity.",
      "Whether you're managing a single café, a cloud kitchen, a fine dining restaurant, or a growing multi-outlet business, our platform adapts to your operational needs.",
    ],
  },
  {
    title: "Continuous Innovation for a Changing Restaurant Industry",
    paragraphs: [
      "The restaurant industry continues to evolve, and technology must evolve with it.",
      "Our product team continuously enhances iMaker Restro by listening to customer feedback, studying hospitality trends, and building features that solve real operational challenges.",
      "From faster billing experiences to smarter reporting and cloud-based restaurant management, every improvement is designed to help restaurants stay competitive in an increasingly digital world.",
    ],
  },
];

/* Same 12 modules as the original platform section — reused for both the
   ecosystem visualization and the capability groupings below. */
const PLATFORM_FEATURES = [
  { label: "Restaurant POS Billing", icon: CreditCard, group: "Run the floor" },
  { label: "Menu Management", icon: BookOpen, group: "Run the floor" },
  { label: "Kitchen Display System (KDS)", icon: ChefHat, group: "Run the floor" },
  { label: "Inventory Management", icon: Package, group: "Stay stocked" },
  { label: "Multi-Outlet Management", icon: Building2, group: "Stay stocked" },
  { label: "Staff Management", icon: Users, group: "Stay stocked" },
  { label: "Online Ordering", icon: Globe, group: "Reach guests" },
  { label: "QR Code Ordering", icon: QrCode, group: "Reach guests" },
  { label: "Customer Relationship Management (CRM)", icon: Heart, group: "Reach guests" },
  { label: "Loyalty Programs", icon: Award, group: "Grow smarter" },
  { label: "Business Analytics", icon: BarChart3, group: "Grow smarter" },
  { label: "Reporting & Insights", icon: LineChart, group: "Grow smarter" },
];

const CAPABILITY_GROUPS = [
  "Run the floor",
  "Stay stocked",
  "Reach guests",
  "Grow smarter",
].map((group) => ({
  group,
  items: PLATFORM_FEATURES.filter((f) => f.group === group),
}));

/* The four operational moments referenced in the source copy: an order
   moving from the guest to the kitchen, to billing, to the report that
   informs tomorrow's decisions. */
const WORKFLOW_STEPS = [
  { label: "Order placed", icon: ClipboardList },
  { label: "Kitchen prepares", icon: ChefHat },
  { label: "Bill settled", icon: Receipt },
  { label: "Report updates", icon: BarChart3 },
];

/* The four restaurant formats named explicitly in the source copy. */
const FORMATS = [
  {
    label: "Café",
    icon: Coffee,
    description: "Quick counter service, fast tables, and steady turnover.",
  },
  {
    label: "Cloud Kitchen",
    icon: Cloud,
    description: "Delivery-first operations with no dine-in floor to manage.",
  },
  {
    label: "Fine Dining",
    icon: UtensilsCrossed,
    description: "Course-paced service where timing and detail matter.",
  },
  {
    label: "Multi-Outlet Business",
    icon: Building2,
    description: "Several locations that still need to run as one business.",
  },
];

const BELIEFS = [
  {
    title: "Simple by Default",
    icon: Sparkles,
    description:
      "Restaurant teams shouldn't need extra training or extra steps to get through a shift. Software should simplify the work, not add to it.",
  },
  {
    title: "Connected by Design",
    icon: Layers,
    description:
      "Billing, kitchen, inventory, customers, and reporting were built to inform each other from day one — not bolted together after the fact.",
  },
  {
    title: "Built for Real Work",
    icon: Compass,
    description:
      "Every feature starts from an actual restaurant workflow, developed alongside owners, managers, and hospitality professionals.",
  },
  {
    title: "Always Improving",
    icon: RefreshCw,
    description:
      "We listen to feedback, study hospitality trends, and keep refining the platform as the industry keeps changing.",
  },
];

const LOOKING_AHEAD = [
  "As the restaurant industry embraces digital transformation, iMaker Restro remains committed to developing smarter restaurant software that helps businesses adapt, innovate, and grow.",
  "From AI-powered insights to intelligent automation and connected restaurant operations, we're continuously investing in the future of hospitality technology.",
  "Our journey has only just begun, and we're excited to help restaurants achieve even greater success in the years ahead.",
];

const CTA = {
  eyebrow: "Ready to Grow?",
  title: "Let's Build Your Restaurant's Future Together.",
  description:
    "Simplify billing, inventory, customer engagement and operations with one connected platform.",
  primaryButton: {
    text: "Book a Demo",
    link: "/book-a-demo",
  },
  secondaryButton: {
    text: "Talk to Sales",
    link: "/contact",
  },
};

/* ------------------------------------------------------------------ */
/* Shared visual primitives                                            */
/* ------------------------------------------------------------------ */

/** Thin uppercase field label used ahead of standalone statements. */
const FieldLabel = ({ children }) => (
  <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-[#5b6472]">
    {children}
  </span>
);

/** Large numeral used for the story chapters — the only place in the page
 *  where a sequence marker is appropriate, since the section is a real
 *  chronological narrative. */
const JourneyChapter = ({ index, title, paragraphs }) => (
  <div
    className={`border-t border-[#e4e4e1] pt-10 sm:pt-12 ${
      index === 0 ? "" : "mt-14 sm:mt-16"
    } lg:grid lg:grid-cols-[7rem_1fr] lg:items-start lg:gap-4 ${
      index % 2 === 1 ? "lg:pl-16" : ""
    }`}
  >
    <span className="block text-[56px] leading-none text-[#d9384a]/[0.12] sm:text-[64px]">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="mt-4 lg:mt-2">
      <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-primary-600">
        Chapter {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-2xl leading-snug text-[#14181c] sm:text-[28px]">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-[1.75] text-[#5b6472]">
            {p}
          </p>
        ))}
      </div>
    </div>
  </div>
);

/** Positions n items evenly around a circle for the ecosystem diagram. */
const ringPosition = (index, total, radius = 40) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    left: `${50 + radius * Math.cos(angle)}%`,
    top: `${50 + radius * Math.sin(angle)}%`,
  };
};

/* ------------------------------------------------------------------ */
/* Main page                                                           */
/* ------------------------------------------------------------------ */

const AboutUsPage = () => {
  return (
    <main className="bg-[#fbfaf8]">
      {/* ============================================================ */}
      {/* 01 — HERO                                                     */}
      {/* ============================================================ */}
      <PageWrapper
        className="relative overflow-hidden bg-[#fbfaf8]"
        containerClassName="pt-16 sm:pt-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,56,74,0.10),transparent)] blur-2xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">About iMaker Restro</Eyebrow>
          <h1 className="mt-6 text-[34px] font-normal leading-[1.15] tracking-[-0.01em] text-[#14181c] sm:text-[46px] md:text-[54px]">
            Technology Built Around the Way{" "}
            <span className="text-primary-600">Restaurants Actually Work.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#5b6472]">
            We build cloud-based restaurant management software designed to
            simplify billing, inventory, online ordering, customer engagement,
            and day-to-day operations — so restaurant teams can work smarter,
            serve faster, and grow with confidence.
          </p>
        </div>

        {/* Abstract product-led composition — layered UI fragments rather
            than a single flat panel or invented photography. */}
        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl sm:aspect-[16/8]">
            {/* base panel */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl bg-[#14181c] shadow-2xl shadow-black/[0.12]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]"
              />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Today's Orders
                  </span>
                  <span className="h-2 w-2 rounded-full bg-primary-600" />
                </div>
                <div className="flex items-end gap-1.5 sm:gap-2">
                  {[38, 62, 44, 78, 52, 90, 66, 48, 74, 58, 82, 40].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-full rounded-sm bg-white/10"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* order card, floating */}
            <div className="absolute -left-3 top-6 w-40 -rotate-3 rounded-2xl bg-white p-4 shadow-xl shadow-black/[0.1] ring-1 ring-[#e4e4e1] sm:-left-8 sm:top-10 sm:w-48">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5b6472]">
                Table 04
              </span>
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-[80%] rounded-full bg-[#e4e4e1]" />
                <div className="h-2 w-[60%] rounded-full bg-[#e4e4e1]" />
                <div className="h-2 w-[70%] rounded-full bg-[#e4e4e1]" />
              </div>
            </div>

            {/* bill total card, floating */}
            <div className="absolute -right-3 bottom-6 w-36 rotate-2 rounded-2xl bg-white p-4 shadow-xl shadow-black/[0.1] ring-1 ring-[#e4e4e1] sm:-right-8 sm:bottom-10 sm:w-44">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5b6472]">
                Bill Settled
              </span>
              <div className="mt-2 flex items-center gap-2">
                <Receipt size={16} strokeWidth={1.5} className="text-primary-600" />
                <div className="h-2 w-[50%] rounded-full bg-[#e4e4e1]" />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 02 — WHY WE EXIST                                             */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Why We Exist</Eyebrow>
            <h2 className="mt-5 max-w-xl text-[28px] leading-[1.25] text-[#14181c] sm:text-[36px]">
              Restaurants don't run in a straight line.{" "}
              <span className="text-[#5b6472]">
                Software should understand that.
              </span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4">
              <p className="text-[15px] leading-[1.75] text-[#5b6472]">
                Running a restaurant is about much more than serving great
                food. Behind every successful dining experience is a complex
                network of billing, inventory, kitchen coordination, staff
                operations, and customer service.
              </p>
              <p className="text-[15px] leading-[1.75] text-[#5b6472]">
                When those workflows are handled by disconnected tools, small
                gaps turn into everyday friction. iMaker Restro exists to
                close them — one platform connecting every part of the
                operation, from the first order to the end-of-day report.
              </p>
            </div>
          </div>

          {/* connected-workflow diagram: how one order moves through the platform */}
          <div className="rounded-3xl bg-[#fbfaf8] p-6 sm:p-8">
            <FieldLabel>How one order moves through the platform</FieldLabel>
            <div className="mt-8 flex flex-col gap-0 sm:flex-row sm:items-center sm:justify-between">
              {WORKFLOW_STEPS.map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-3 sm:text-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[#e4e4e1]">
                      <step.icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-primary-600"
                      />
                    </div>
                    <span className="font-sans text-[13px] text-[#14181c] sm:mt-1">
                      {step.label}
                    </span>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="my-3 h-6 w-px self-start bg-[#e4e4e1] sm:my-0 sm:h-px sm:w-full sm:flex-1 sm:self-center"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 03 — OUR STORY                                                */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <SectionHeading
          eyebrow="Our Story"
          title="How iMaker Restro Came to Be"
          variant="compact"
        />

        <div className="mt-16 rounded-[32px] bg-white p-6 sm:p-10 lg:p-14">
          {JOURNEY.map((chapter, idx) => (
            <JourneyChapter
              key={chapter.title}
              index={idx}
              title={chapter.title}
              paragraphs={chapter.paragraphs}
            />
          ))}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 04 — BUILT AROUND REAL RESTAURANT WORK                        */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl bg-[#14181c] p-8 sm:p-10">
            <Eyebrow className="text-white/50">How We Build</Eyebrow>
            <h2 className="mt-5 text-[26px] leading-[1.3] text-white sm:text-[30px]">
              We build around restaurant work, not around a roadmap.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Orders affect the kitchen.",
                "Kitchen timing affects service.",
                "Billing affects checkout.",
                "Inventory affects what's on the menu.",
                "Customer history affects the relationship.",
                "Every report affects tomorrow's decisions.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary-600"
                  />
                  <span className="font-sans text-[14.5px] leading-relaxed text-white/80">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[15px] leading-[1.75] text-[#5b6472]">
              Every restaurant operates differently, but the challenges are
              often the same — faster billing, accurate inventory, better
              customer service, and smarter business decisions.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#5b6472]">
              That's why every feature inside iMaker Restro is built by
              understanding real restaurant workflows. We continuously work
              alongside restaurant owners, managers, and hospitality
              professionals to develop practical solutions that improve
              efficiency without increasing complexity.
            </p>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 05 — THE PLATFORM ECOSYSTEM                                   */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <SectionHeading
          eyebrow="The Platform"
          title="Everything Your Restaurant Needs, Working as One System"
          description="iMaker Restro brings every essential restaurant operation together into one centralized platform, eliminating the need for multiple disconnected systems."
          variant="compact"
        />

        {/* desktop: radial ecosystem */}
        <div className="relative mx-auto mt-16 hidden aspect-square w-full max-w-2xl lg:block">
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {PLATFORM_FEATURES.map((f, i) => {
              const pos = ringPosition(i, PLATFORM_FEATURES.length, 40);
              return (
                <line
                  key={f.label}
                  x1="50"
                  y1="50"
                  x2={parseFloat(pos.left)}
                  y2={parseFloat(pos.top)}
                  stroke="#e4e4e1"
                  strokeWidth="0.4"
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#14181c] text-center shadow-xl shadow-black/[0.15]">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
              The Core
            </span>
            <p className="mt-1 text-[15px] leading-tight text-white">
              iMaker
              <br />
              Restro
            </p>
          </div>

          {PLATFORM_FEATURES.map((f, i) => {
            const pos = ringPosition(i, PLATFORM_FEATURES.length, 40);
            return (
              <div
                key={f.label}
                style={{ left: pos.left, top: pos.top }}
                className="group absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-[#e4e4e1] transition-colors motion-reduce:transition-none group-hover:ring-primary-600">
                  <f.icon
                    size={17}
                    strokeWidth={1.5}
                    className="text-primary-600"
                  />
                </div>
                <span className="font-sans text-[11px] leading-snug text-[#14181c]">
                  {f.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* mobile / tablet: grouped list fallback */}
        <div className="mt-14 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:hidden">
          {PLATFORM_FEATURES.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2.5 rounded-2xl bg-white px-4 py-6 text-center ring-1 ring-[#e4e4e1]"
            >
              <f.icon size={17} strokeWidth={1.5} className="text-primary-600" />
              <span className="font-sans text-[12.5px] leading-snug text-[#14181c]">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-sans text-[15px] leading-relaxed text-[#5b6472]">
          By connecting every department, restaurants can improve
          productivity, reduce operational errors, and make better business
          decisions.
        </p>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 06 — BUILT FOR DIFFERENT RESTAURANT FORMATS                   */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>Built to Adapt</Eyebrow>
            <h2 className="mt-5 text-[26px] leading-[1.3] text-[#14181c] sm:text-[30px]">
              One platform. Every kind of restaurant floor.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#5b6472]">
              Whether you're managing a single café, a cloud kitchen, a fine
              dining restaurant, or a growing multi-outlet business, our
              platform adapts to your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FORMATS.map((f) => (
              <div
                key={f.label}
                className="group rounded-2xl bg-[#fbfaf8] p-6 transition-colors motion-reduce:transition-none hover:bg-[#14181c]"
              >
                <f.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary-600"
                />
                <p className="mt-4 text-[16px] text-[#14181c] transition-colors motion-reduce:transition-none group-hover:text-white">
                  {f.label}
                </p>
                <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-[#5b6472] transition-colors motion-reduce:transition-none group-hover:text-white/60">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 07 — THE PEOPLE BEHIND iMAKER RESTRO                          */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">The People</Eyebrow>
          <h2 className="mt-5 text-[26px] leading-[1.35] text-[#14181c] sm:text-[32px]">
            Built by people who understand restaurants.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-[#5b6472]">
            We continuously work alongside restaurant owners, managers, and
            hospitality professionals to develop practical solutions — and our
            product team keeps refining the platform by listening to
            feedback and studying how hospitality actually changes.
          </p>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 08 — WHAT WE BELIEVE                                          */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="What We Believe"
          title="Principles Behind the Platform"
          variant="compact"
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-[#e4e4e1] sm:grid-cols-2">
          {BELIEFS.map((b) => (
            <div key={b.title} className="bg-white p-8 sm:p-10">
              <b.icon size={20} strokeWidth={1.5} className="text-primary-600" />
              <h3 className="mt-5 text-[19px] text-[#14181c]">{b.title}</h3>
              <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-[#5b6472]">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* original vision / mission, preserved as pull statements */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#fbfaf8] p-10 sm:p-12">
            <Eyebrow>Our Vision</Eyebrow>
            <p className="mt-6 text-[20px] leading-[1.5] text-[#14181c] sm:text-[23px]">
              To become the most trusted restaurant management software
              platform by helping restaurants simplify operations, embrace
              digital transformation, and create exceptional customer
              experiences across every dining journey.
            </p>
          </div>
          <div className="rounded-3xl bg-[#14181c] p-10 sm:p-12">
            <Eyebrow className="text-white/50">Our Mission</Eyebrow>
            <p className="mt-6 text-[20px] leading-[1.5] text-white sm:text-[23px]">
              To build innovative restaurant management solutions that
              simplify business operations, improve efficiency, and empower
              restaurants to achieve sustainable growth through reliable
              technology.
            </p>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 09 — WHAT'S INSIDE (capability-based trust, no invented stats) */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <SectionHeading
          eyebrow="What's Inside"
          title="A Platform Built to Cover the Whole Operation"
          variant="compact"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITY_GROUPS.map((g) => (
            <div key={g.group} className="rounded-3xl bg-white p-7 ring-1 ring-[#e4e4e1]">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-600">
                {g.group}
              </span>
              <ul className="mt-5 space-y-3">
                {g.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5">
                    <item.icon
                      size={15}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-[#14181c]/40"
                    />
                    <span className="font-sans text-[13.5px] leading-snug text-[#14181c]">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 10 — LOOKING AHEAD                                            */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
          <SectionHeading
            eyebrow="Looking Ahead"
            title="We're Just Getting Started"
            variant="compact"
          />

          <div className="mx-auto mt-6 max-w-xl space-y-4">
            {LOOKING_AHEAD.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[15px] leading-[1.75] text-[#5b6472]"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-[13px] font-sans uppercase tracking-[0.18em] text-primary-600">
            <span>See what's next</span>
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* 11 — FINAL CTA                                                */}
      {/* ============================================================ */}
      <CtaSection cta={CTA} />
    </main>
  );
};

export default AboutUsPage;