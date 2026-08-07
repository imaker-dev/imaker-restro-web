import React from "react";
import {
  ArrowUpRight,
  LayoutDashboard,
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
  Check,
  Feather,
  Lightbulb,
  ShieldCheck,
  Handshake,
  Trophy,
} from "lucide-react";
import SectionHeading, { Eyebrow } from "../layouts/section-heading";
import PageWrapper from "@/app/components/page-wrapper";

/* ------------------------------------------------------------------ */
/* Content — hardcoded from the provided copy, unmodified              */
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

const PLATFORM_FEATURES = [
  { label: "Restaurant POS Billing", icon: CreditCard },
  { label: "Inventory Management", icon: Package },
  { label: "Menu Management", icon: BookOpen },
  { label: "Kitchen Display System (KDS)", icon: ChefHat },
  { label: "Online Ordering", icon: Globe },
  { label: "QR Code Ordering", icon: QrCode },
  { label: "Customer Relationship Management (CRM)", icon: Heart },
  { label: "Loyalty Programs", icon: Award },
  { label: "Business Analytics", icon: BarChart3 },
  { label: "Multi-Outlet Management", icon: Building2 },
  { label: "Staff Management", icon: Users },
  { label: "Reporting & Insights", icon: LineChart },
];

const TRUST_BENEFITS = [
  "Speed up billing operations",
  "Reduce inventory wastage",
  "Improve customer satisfaction",
  "Manage multiple outlets from one dashboard",
  "Access real-time business insights",
  "Automate repetitive operational tasks",
  "Improve staff productivity",
  "Make smarter business decisions",
];

const FEATURED_VALUES = [
  {
    title: "Customer First",
    description:
      "Every feature begins with understanding the real challenges restaurants face every day.",
    icon: Users,
  },
  {
    title: "Simplicity",
    description:
      "Powerful software should always remain easy to learn and effortless to use.",
    icon: Feather,
  },
];

const SUPPORTING_VALUES = [
  {
    title: "Innovation",
    description:
      "We continuously improve our platform to meet the changing needs of the restaurant industry.",
    icon: Lightbulb,
  },
  {
    title: "Reliability",
    description:
      "Restaurants depend on us every day, and we take that responsibility seriously.",
    icon: ShieldCheck,
  },
  {
    title: "Partnership",
    description:
      "We believe long-term success comes from growing alongside our customers.",
    icon: Handshake,
  },
  {
    title: "Excellence",
    description:
      "We're committed to delivering high-quality products, exceptional service, and continuous improvement.",
    icon: Trophy,
  },
];

/* ------------------------------------------------------------------ */
/* Shared building blocks                                              */
/* ------------------------------------------------------------------ */

const SectionHeading1 = ({ eyebrow, title, description, align = "center" }) => (
  <div
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
  >
    {eyebrow && (
      <Eyebrow className={align === "center" ? "justify-center" : ""}>
        {eyebrow}
      </Eyebrow>
    )}
    <h2 className="mt-5 font-serif text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#14181c] sm:text-[34px] md:text-[38px]">
      {title}
    </h2>
    {description && (
      <p className="mt-4 font-sans text-[15px] leading-relaxed text-[#5b6472] sm:text-base">
        {description}
      </p>
    )}
  </div>
);

/**
 * A designed placeholder in place of a real photograph — a quiet dot-grid field on an
 * ink or paper tile with a single oversized, low-opacity icon. Reads as an intentional
 * abstract panel rather than a broken image.
 */
const PlaceholderVisual = ({ icon: Icon, tone = "dark", className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-3xl shadow-2xl shadow-black/[0.1] ${
      tone === "dark" ? "bg-[#14181c]" : "bg-white ring-1 ring-[#e4e4e1]"
    } ${className}`}
  >
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 [background-size:22px_22px] ${
        tone === "dark"
          ? "opacity-[0.05] [background-image:radial-gradient(circle,white_1px,transparent_1px)]"
          : "opacity-[0.06] [background-image:radial-gradient(circle,#14181c_1px,transparent_1px)]"
      }`}
    />
    <div className="relative flex h-full w-full items-center justify-center">
      <Icon
        size={44}
        strokeWidth={1}
        className={tone === "dark" ? "text-white/20" : "text-[#14181c]/10"}
      />
    </div>
  </div>
);

/** One entry in the "Our Journey" editorial sequence — oversized numeral, no vertical line. */
const JourneyChapter = ({ index, title, paragraphs }) => (
  <div
    className={`border-t border-[#e4e4e1] pt-10 sm:pt-12 ${index === 0 ? "" : "mt-14 sm:mt-16"} lg:grid lg:grid-cols-[7rem_1fr] lg:items-start lg:gap-4 ${
      index % 2 === 1 ? "lg:pl-16" : ""
    }`}
  >
    <span className="block  text-[56px] leading-none text-[#d9384a]/[0.12] sm:text-[64px]">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="mt-4 lg:mt-2">
      <span className=" text-[11px] uppercase tracking-[0.22em] text-primary-600">
        Chapter {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3  text-2xl leading-snug text-[#14181c] sm:text-[28px]">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className=" text-[15px] leading-[1.75] text-[#5b6472]">
            {p}
          </p>
        ))}
      </div>
    </div>
  </div>
);

/** A single quiet module tile inside the platform-ecosystem card. */
const ModuleChip = ({ label, icon: Icon }) => (
  <div className="flex flex-col items-center gap-2.5 rounded-2xl bg-[#fbfaf8] px-4 py-6 text-center">
    <Icon size={17} strokeWidth={1.5} className="text-[#d9384a]" />
    <span className="font-sans text-[12.5px] leading-snug text-[#14181c]">
      {label}
    </span>
  </div>
);

const ValueCard = ({ title, description, icon: Icon, featured = false }) =>
  featured ? (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(20,24,28,0.04)] sm:flex-row sm:items-center sm:gap-8 sm:p-10">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d9384a]/8">
        <Icon size={24} strokeWidth={1.5} className="text-[#d9384a]" />
      </span>
      <div>
        <h3 className="font-serif text-xl text-[#14181c]">{title}</h3>
        <p className="mt-1.5 max-w-md font-sans text-[14.5px] leading-relaxed text-[#5b6472]">
          {description}
        </p>
      </div>
    </div>
  ) : (
    <div className="rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(20,24,28,0.04)]">
      <Icon size={18} strokeWidth={1.5} className="text-[#d9384a]" />
      <h3 className="mt-4 font-serif text-base text-[#14181c]">{title}</h3>
      <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-[#5b6472]">
        {description}
      </p>
    </div>
  );

/* ------------------------------------------------------------------ */
/* Main page                                                           */
/* ------------------------------------------------------------------ */

const AboutUsPage = () => {
  return (
    <main className="bg-[#fbfaf8]">
      {/* ============================================================ */}
      {/* HERO — layered composition, not a single flat panel           */}
      {/* ============================================================ */}
      <PageWrapper
        className="relative overflow-hidden bg-[#fbfaf8]"
        containerClassName="pt-16 sm:pt-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,56,74,0.10),transparent)] blur-2xl"
        />
        <div className="relative mx-auto max-w-3xl  text-center">
          <Eyebrow className="justify-center">About iMaker Restro</Eyebrow>
          <h1 className="mt-6 text-[34px] font-normal leading-[1.15] tracking-[-0.01em] text-[#14181c] sm:text-[46px] md:text-[54px]">
            Building Smarter Restaurant Management Software for{" "}
            <span className="text-primary-600">Modern Businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl  text-[16px] leading-[1.75] text-[#5b6472]">
            At iMaker Restro, we&rsquo;re transforming the way restaurants
            operate with powerful, cloud-based restaurant management software
            designed to simplify billing, inventory, online ordering, customer
            engagement, and day-to-day operations. Our mission is to help
            restaurants of every size work smarter, serve faster, and grow
            confidently through intuitive technology built for the hospitality
            industry.
          </p>
        </div>

        <div className="relative mx-auto mt-20">
          <div className="relative">
            <PlaceholderVisual
              icon={LayoutDashboard}
              tone="dark"
              className="relative aspect-[16/9] w-full"
            />
            <div className="absolute -left-4 bottom-8 hidden w-48 rounded-xl bg-white p-4 shadow-2xl shadow-black/[0.14] sm:block">
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#5b6472]">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Live
              </span>
              <p className="mt-1.5 font-serif text-[15px] leading-snug text-[#14181c]">
                Every Order, Synced
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* OUR JOURNEY — editorial chapters, not repeated text+image     */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Our Journey"
          title="How iMaker Restro Came to Be"
          variant="compact"
        />

        <div className="mt-16">
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
      {/* PLATFORM ECOSYSTEM — hub + connected modules                  */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">

          <SectionHeading
            eyebrow="The Platform"
            title="Everything Your Restaurant Needs in One Connected Platform"
            description="iMaker Restro brings every essential restaurant operation together into one centralized platform, eliminating the need for multiple disconnected systems."
            variant="compact"
          />

          <div className="mt-16 rounded-[32px] bg-white p-4 shadow-[0_1px_3px_rgba(20,24,28,0.06),0_28px_64px_-32px_rgba(20,24,28,0.14)] sm:p-6">
            <div className="mx-auto flex max-w-xs flex-col items-center rounded-2xl bg-[#14181c] px-8 py-7 text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                The Core
              </span>
              <p className="mt-2 font-serif text-lg text-white">
                iMaker Restro Platform
              </p>
            </div>

            <div className="mx-auto h-8 w-px bg-[#e4e4e1]" aria-hidden="true" />

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {PLATFORM_FEATURES.map((f) => (
                <ModuleChip key={f.label} label={f.label} icon={f.icon} />
              ))}
            </div>
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center font-sans text-[15px] leading-relaxed text-[#5b6472]">
            By connecting every department, restaurants can improve
            productivity, reduce operational errors, and make better business
            decisions.
          </p>
      </PageWrapper>

      {/* ============================================================ */}
      {/* WHY RESTAURANTS TRUST US — calm, minimal checklist            */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <SectionHeading
          eyebrow="Why Restaurants Choose Us"
          title="Why Restaurants Trust iMaker Restro"
          highlight={"iMaker Restro"}
          description="Restaurants choose iMaker Restro because they need software that's reliable, easy to use, and built for long-term growth. Our platform helps businesses:"
          variant="compact"
        />

        <ul className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {TRUST_BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <Check
                size={14}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#d9384a]"
              />
              <span className="text-[14.5px] leading-relaxed text-[#14181c]">
                {b}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-14 max-w-xl text-center text-[15px] leading-relaxed text-[#5b6472]">
          We&rsquo;re committed to helping restaurants spend less time managing
          technology and more time creating exceptional dining experiences.
        </p>
      </PageWrapper>

      {/* ============================================================ */}
      {/* OUR TECHNOLOGY — offset asymmetric text                      */}
      {/* ============================================================ */}
      <PageWrapper className="bg-[#fbfaf8]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <Eyebrow>Our Technology</Eyebrow>
            <h2 className="mt-5  text-[28px] leading-[1.18] tracking-[-0.01em] text-[#14181c] sm:text-[34px]">
              Built for Performance, Security, and Scalability
            </h2>
          </div>
          <div className="space-y-5 lg:pt-2">
            <p className=" text-[15px] leading-[1.75] text-[#5b6472]">
              Modern restaurants require technology that&rsquo;s reliable every
              day. iMaker Restro is built using secure cloud infrastructure that
              provides fast performance, automatic updates, and reliable access
              from anywhere.
            </p>
            <p className=" text-[15px] leading-[1.75] text-[#5b6472]">
              As your restaurant business grows, our platform grows with
              you—supporting everything from independent restaurants to
              expanding multi-location brands.
            </p>
            <p className=" text-[15px] leading-[1.75] text-[#5b6472]">
              Our focus is on delivering software that&rsquo;s secure, scalable,
              and easy to manage, allowing restaurant owners to concentrate on
              growing their business.
            </p>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* VISION + MISSION — contrasting split panels                  */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#fbfaf8] p-10 sm:p-12">
            <Eyebrow>Our Vision</Eyebrow>
            <p className="mt-6  text-[22px] leading-[1.5] text-[#14181c] sm:text-[25px]">
              To become the most trusted restaurant management software platform
              by helping restaurants simplify operations, embrace digital
              transformation, and create exceptional customer experiences across
              every dining journey.
            </p>
          </div>
          <div className="rounded-3xl bg-[#14181c] p-10 sm:p-12">
            <Eyebrow>Our Mission</Eyebrow>
            <p className="mt-6  text-[22px] leading-[1.5] text-white sm:text-[25px]">
              To build innovative restaurant management solutions that simplify
              business operations, improve efficiency, and empower restaurants
              to achieve sustainable growth through reliable technology.
            </p>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* OUR VALUES — asymmetric hierarchy, not six equal boxes        */}
      {/* ============================================================ */}
      <section className="bg-[#fbfaf8]">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHeading1
            eyebrow="What Drives Us"
            title="The Values That Drive Everything We Build"
          />

          <div className="mt-16 space-y-3">
            {FEATURED_VALUES.map((v) => (
              <ValueCard
                key={v.title}
                title={v.title}
                description={v.description}
                icon={v.icon}
                featured
              />
            ))}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SUPPORTING_VALUES.map((v) => (
                <ValueCard
                  key={v.title}
                  title={v.title}
                  description={v.description}
                  icon={v.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LOOKING AHEAD — closing statement                             */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
          <Eyebrow className="justify-center">Looking Ahead</Eyebrow>
          <h2 className="mx-auto mt-6 font-serif text-[26px] leading-[1.3] tracking-[-0.01em] text-[#14181c] sm:text-[32px]">
            Building the Future of Restaurant Technology
          </h2>
          <div className="mx-auto mt-6 max-w-xl space-y-4">
            <p className="font-sans text-[15px] leading-[1.75] text-[#5b6472]">
              As the restaurant industry embraces digital transformation, iMaker
              Restro remains committed to developing smarter restaurant software
              that helps businesses adapt, innovate, and grow.
            </p>
            <p className="font-sans text-[15px] leading-[1.75] text-[#5b6472]">
              From AI-powered insights to intelligent automation and connected
              restaurant operations, we&rsquo;re continuously investing in the
              future of hospitality technology.
            </p>
            <p className="font-sans text-[15px] leading-[1.75] text-[#5b6472]">
              Our journey has only just begun, and we&rsquo;re excited to help
              restaurants achieve even greater success in the years ahead.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA — the emotional conclusion                          */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[#14181c] py-32 sm:py-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,56,74,0.2),transparent)] blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Eyebrow className="justify-center">Book a Demo</Eyebrow>
          <h2 className="mx-auto mt-7 max-w-xl font-serif text-[34px] leading-[1.15] text-white sm:text-[46px] md:text-[52px]">
            Ready to Transform Your Restaurant Operations?
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-[16px] leading-relaxed text-white/70">
            Discover how iMaker Restro can simplify billing, inventory
            management, customer engagement, and daily restaurant operations
            through one powerful cloud-based platform. Whether you&rsquo;re
            opening your first restaurant or managing multiple outlets,
            we&rsquo;re here to help you grow with confidence.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d9384a] px-8 py-4 font-sans text-sm font-semibold text-white transition-all hover:bg-[#b92b3c] hover:shadow-xl hover:shadow-[#d9384a]/20 sm:w-auto"
            >
              Book a Free Demo
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-sans text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
