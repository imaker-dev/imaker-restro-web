// "use client";
// import React, { useState } from "react";
// import {
//   ArrowUpRight,
//   Check,
//   Plus,
//   Minus,
//   X,
//   ShoppingCart,
//   Tag,
//   CreditCard,
//   Receipt,
//   BarChart3,
//   PieChart,
//   TrendingUp,
//   Activity,
//   Image as ImageIcon,
// } from "lucide-react";
// import PageWrapper from "@/app/components/page-wrapper";
// import SectionHeading, { Eyebrow } from "../layouts/section-heading";
// import CtaSection from "../layouts/cta-section";

// /* ------------------------------------------------------------------ */
// /* Icon lookups                                                        */
// /* ------------------------------------------------------------------ */
// const WORKFLOW_ICONS = { ShoppingCart, Tag, CreditCard, Receipt, BarChart3 };
// const ANALYTICS_ICON_ROTATION = [BarChart3, PieChart, TrendingUp, Activity];



// /** Renders a real product image; falls back to a quiet dark tile with an icon if it fails to load. */
// const ProductImage = ({ src, alt = "", className = "" }) => {
//   const [errored, setErrored] = useState(false);

//   if (!src || errored) {
//     return (
//       <div
//         className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#14181c] via-[#1f2430] to-[#14181c] ${className}`}
//       >
//         <ImageIcon size={26} strokeWidth={1.25} className="text-white/25" />
//       </div>
//     );
//   }
//   return (
//     <img
//       src={src}
//       alt={alt}
//       onError={() => setErrored(true)}
//       className={`h-full w-full object-cover ${className}`}
//     />
//   );
// };

// /** A "software window" frame — the recurring product-presentation motif for this page. */
// const WindowFrame = ({
//   src,
//   alt = "",
//   chromeLabel,
//   overlay,
//   elevated = false,
//   className = "",
// }) => (
//   <div
//     className={`overflow-hidden rounded-2xl bg-white ring-1 transition-transform duration-500 ${
//       elevated
//         ? "shadow-[0_60px_120px_-32px_rgba(20,24,28,0.35)] ring-black/[0.06]"
//         : "shadow-2xl shadow-black/[0.12] ring-black/[0.04]"
//     } ${className}`}
//   >
//     <div className="flex items-center gap-1.5 border-b border-[#e4e4e1]/60 bg-[#fbfaf8] px-4 py-3">
//       <span
//         className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
//         aria-hidden="true"
//       />
//       <span
//         className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
//         aria-hidden="true"
//       />
//       <span
//         className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
//         aria-hidden="true"
//       />
//       {chromeLabel && (
//         <span className="ml-3 font-mono text-[10px] tracking-wide text-[#5b6472]">
//           {chromeLabel}
//         </span>
//       )}
//     </div>
//     <div className="relative">
//       <ProductImage src={src} alt={alt} className="aspect-[16/10]" />
//       {overlay}
//     </div>
//   </div>
// );

// /** The stage a screenshot sits on — one soft ambient glow, plus a hairline bezel for framing. */
// const ScreenshotStage = ({ children, className = "" }) => (
//   <div className={`relative ${className}`}>
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute -inset-x-10 -inset-y-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(217,56,74,0.08),transparent)] blur-2xl"
//     />
//     <div className="relative rounded-[19px] bg-gradient-to-b from-black/[0.06] to-transparent p-px">
//       {children}
//     </div>
//   </div>
// );

// /* Approximate hotspots a highlight "points to" on its screenshot — cycled by index.
//    Kept generic (corners, center, edges) since real coordinates aren't in the data. */
// const SPOTLIGHT_POSITIONS = [
//   { x: 24, y: 28 },
//   { x: 76, y: 24 },
//   { x: 50, y: 50 },
//   { x: 22, y: 76 },
//   { x: 78, y: 70 },
//   { x: 50, y: 88 },
// ];

// /** Soft glow positioned over the screenshot, tracking the active highlight. */
// const Spotlight = ({ index }) => {
//   const pos = SPOTLIGHT_POSITIONS[index % SPOTLIGHT_POSITIONS.length];
//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 overflow-hidden"
//     >
//       <div
//         className="absolute h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9384a]/[0.12] blur-3xl transition-all duration-500 ease-out"
//         style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
//       />
//     </div>
//   );
// };

// /**
//  * A single row in the highlights list — hovering it moves the spotlight on the screenshot.
//  * No cards, no borders, no background wash: hierarchy comes entirely from a hairline rail
//  * that shifts from muted to brand-red, and from typography dimming on inactive rows.
//  */
// const HighlightRow = ({ title, description, isActive, onActivate }) => (
//   <li
//     onMouseEnter={onActivate}
//     onFocus={onActivate}
//     tabIndex={0}
//     className="relative cursor-default py-4 pl-5 transition-colors duration-300 focus:outline-none"
//   >
//     <span
//       aria-hidden="true"
//       className={`absolute left-0 top-4 h-[18px] w-[2px] rounded-full transition-colors duration-300 ${
//         isActive ? "bg-[#d9384a]" : "bg-[#e4e4e1]"
//       }`}
//     />
//     <p
//       className={`font-sans text-[14.5px] font-semibold leading-snug tracking-[-0.005em] transition-colors duration-300 ${
//         isActive ? "text-[#14181c]" : "text-[#5b6472]"
//       }`}
//     >
//       {title}
//     </p>
//     <p
//       className={`mt-1 font-sans text-[12.5px] leading-relaxed transition-colors duration-300 ${
//         isActive ? "text-[#5b6472]" : "text-[#5b6472]/45"
//       }`}
//     >
//       {description}
//     </p>
//   </li>
// );

// /**
//  * One screen entry. There is no enclosing card — the screenshot itself, at roughly
//  * 65% of the row and carrying its own deep shadow, is the visual anchor. The caption
//  * sits at 35%, vertically centered against it, so the two read as one composition:
//  * a piece of software with its explanation beside it, not two competing columns.
//  */
// const ProductScreenBlock = ({ screen, imageOnRight }) => {
//   const [active, setActive] = useState(0);

//   const content = (
//     <div>
//       <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-[#d9384a]">
//         {screen.focus}
//       </span>
//       <h3 className="mt-3 font-serif text-[25px] leading-[1.2] tracking-[-0.01em] text-[#14181c] sm:text-[28px]">
//         {screen.title}
//       </h3>
//       <p className="mt-3 max-w-[26rem] font-sans text-[14px] leading-[1.7] text-[#5b6472]">
//         {screen.description}
//       </p>

//       <ul className="mt-10">
//         {screen.highlights.map((h, idx) => (
//           <HighlightRow
//             key={h.title}
//             title={h.title}
//             description={h.description}
//             isActive={active === idx}
//             onActivate={() => setActive(idx)}
//           />
//         ))}
//       </ul>
//     </div>
//   );

//   const shot = (
//     <WindowFrame
//       src={screen.image}
//       alt={screen.title}
//       elevated
//       overlay={<Spotlight index={active} />}
//       className="hover:-translate-y-1.5"
//     />
//   );

//   // The screenshot's track is always 1.3fr and content's is always 0.7fr — which
//   // physical column each sits in swaps with `imageOnRight`, but neither ever
//   // inherits the other's width. (Using `order` here instead would leave the
//   // fr-sizes pinned to column position, shrinking the screenshot on one side.)
//   return (
//     <div
//       className={`grid grid-cols-1 gap-12 lg:items-start lg:gap-16 xl:gap-20 ${
//         imageOnRight
//           ? "lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
//           : "lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]"
//       }`}
//     >
//       {imageOnRight ? (
//         <>
//           {content}
//           {shot}
//         </>
//       ) : (
//         <>
//           {shot}
//           {content}
//         </>
//       )}
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Main component                                                      */
// /* ------------------------------------------------------------------ */

// const FeatureDetailsPage = ({ data }) => {
//   const [openFaq, setOpenFaq] = useState(0);

//   const { hero, problems, screens, workflow, analytics, faq, cta } = data;

//   return (
//     <main className="bg-[#fbfaf8]">
//       {/* ============================================================ */}
//       {/* HERO — the screenshot is the only accent it needs             */}
//       {/* ============================================================ */}
//       <PageWrapper className="relative overflow-hidden bg-[#fbfaf8] pt-28 sm:pt-36" containerClassName=" pt-10 sm:pt-16">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,56,74,0.10),transparent)] blur-2xl"
//         />

//         <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
//           <Eyebrow className="justify-center">{hero.eyebrow}</Eyebrow>
//           <h1 className="mt-6 font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[#14181c] sm:text-[52px] md:text-[60px]">
//             {hero.title}{" "}
//             <span className="italic text-primary-500">
//               {hero.highlightedTitle}
//             </span>
//           </h1>
//           <p className="mx-auto mt-6 max-w-xl font-sans text-[16px] leading-[1.7] text-[#5b6472]">
//             {hero.description}
//           </p>
//           <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <button
//               type="button"
//               className="btn btn-lg btn-primary"
//               // className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d9384a] px-7 py-3.5 font-sans text-sm font-semibold text-white transition-all hover:bg-[#b92b3c] hover:shadow-lg hover:shadow-[#d9384a]/20 sm:w-auto"
//             >
//               {hero.primaryCta}
//               <ArrowUpRight
//                 size={15}
//                 className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </button>
//             <button
//               type="button"
//                className="btn btn-lg btn-secondary"
//               // className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e4e4e1] px-7 py-3.5 font-sans text-sm font-medium text-[#14181c] transition-all hover:border-[#d9384a]/30 hover:bg-[#d9384a]/5 hover:text-[#d9384a] sm:w-auto"
//             >
//               {hero.secondaryCta}
//             </button>
//           </div>
//         </div>

//         <div className="relative mx-auto mt-24 max-w-5xl sm:mt-32">
//           <ScreenshotStage>
//             <WindowFrame
//               src={hero.image}
//               alt={hero.title}
//               chromeLabel="iMaker Restro"
//               className="hover:-translate-y-1"
//             />
//           </ScreenshotStage>
//         </div>
//       </PageWrapper>

//       {/* ============================================================ */}
//       {/* PROBLEMS — friction / fix split                               */}
//       {/* ============================================================ */}
//       <PageWrapper className="bg-white">
//         <div className="mx-auto max-w-5xl ">

//           <SectionHeading
//             eyebrow={problems.eyebrow}
//             title={problems.title}
//             description={problems.description}
//             variant="compact"
//           />

//           <div className="mt-16 grid grid-cols-1 gap-10 rounded-2xl bg-[#fbfaf8] p-8 sm:grid-cols-2 sm:gap-0 sm:p-10 sm:divide-x sm:divide-[#e4e4e1]/70">
//             <div className="sm:pr-10">
//               <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5b6472]">
//                 The Friction
//               </p>
//               <ul className="mt-6 space-y-6">
//                 {problems.items.map((item) => (
//                   <li key={item.problem} className="flex items-start gap-3">
//                     <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50">
//                       <X size={9} strokeWidth={2.5} className="text-red-500" />
//                     </span>
//                     <span className="font-sans text-[14.5px] leading-relaxed text-[#5b6472]">
//                       {item.problem}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="sm:pl-10">
//               <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d9384a]">
//                 The Fix
//               </p>
//               <ul className="mt-6 space-y-6">
//                 {problems.items.map((item) => (
//                   <li key={item.solution} className="flex items-start gap-3">
//                     <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9384a]/10">
//                       <Check
//                         size={9}
//                         strokeWidth={2.5}
//                         className="text-[#d9384a]"
//                       />
//                     </span>
//                     <span className="font-sans text-[14.5px] leading-relaxed text-[#14181c]">
//                       {item.solution}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </PageWrapper>

//       {/* ============================================================ */}
//       {/* PRODUCT EXPERIENCE — screenshot-led, one composition per screen */}
//       {/* ============================================================ */}
//       <section className="bg-[#fbfaf8]">
//         <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
//           <div className="space-y-28 sm:space-y-40">
//             {screens.map((screen) => (
//               <ProductScreenBlock
//                 key={screen.id}
//                 screen={screen}
//                 imageOnRight={screen.layout === "right"}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================================ */}
//       {/* WORKFLOW — a single flow, read in five seconds                */}
//       {/* ============================================================ */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
//           <Eyebrow className="justify-center">{workflow.eyebrow}</Eyebrow>
//           <h2 className="mx-auto mt-5 max-w-2xl font-serif text-[28px] leading-[1.15] text-[#14181c] sm:text-[36px] md:text-[40px]">
//             {workflow.title}
//           </h2>

//           {/* A single connected bar — stages of one pipeline, not separate floating steps */}
//           <div className="mt-16 overflow-hidden rounded-[28px] ring-1 ring-[#e4e4e1]/80">
//             <div className="flex flex-col sm:flex-row">
//               {workflow.steps.map((step, idx) => {
//                 const Icon = WORKFLOW_ICONS[step.icon] || CreditCard;
//                 const isLast = idx === workflow.steps.length - 1;
//                 return (
//                   <div
//                     key={step.title}
//                     className={`group relative flex-1 px-6 py-9 text-center transition-colors duration-300 hover:bg-white ${
//                       isLast
//                         ? ""
//                         : "border-b border-[#e4e4e1]/80 sm:border-b-0 sm:border-r"
//                     }`}
//                   >
//                     <Icon
//                       size={20}
//                       strokeWidth={1.5}
//                       className="mx-auto text-[#14181c]/70 transition-colors duration-300 group-hover:text-[#d9384a]"
//                     />
//                     <p className="mt-4 font-sans text-[13.5px] font-semibold leading-snug text-[#14181c]">
//                       {step.title}
//                     </p>
//                     <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-[#5b6472]">
//                       {step.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================================================ */}
//       {/* ANALYTICS — dashboard-dominant showcase                      */}
//       {/* ============================================================ */}
//       <section className="bg-[#fbfaf8]">
//         <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
//           <SectionHeading
//             eyebrow={analytics.eyebrow}
//             title={analytics.title}
//             description={analytics.description}
//             variant="compact"
//           />

//           <div className="mx-auto mt-16">
//             <ScreenshotStage>
//               <WindowFrame
//                 src={analytics.image}
//                 alt={analytics.title}
//                 chromeLabel="Reports"
//                 className="shadow-[0_50px_100px_-28px_rgba(20,24,28,0.20)] hover:-translate-y-1"
//               />
//             </ScreenshotStage>
//           </div>

//           <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
//             {analytics.insights.map((insight, idx) => {
//               const Icon =
//                 ANALYTICS_ICON_ROTATION[idx % ANALYTICS_ICON_ROTATION.length];
//               return (
//                 <div
//                   key={insight.title}
//                   className="flex flex-col items-center gap-2.5 text-center"
//                 >
//                   <Icon
//                     size={18}
//                     strokeWidth={1.5}
//                     className="text-[#d9384a]"
//                   />
//                   <p className="font-serif text-[15px] text-[#14181c]">
//                     {insight.title}
//                   </p>
//                   <p className="font-sans text-[12px] leading-relaxed text-[#5b6472]">
//                     {insight.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============================================================ */}
//       {/* FAQ                                                           */}
//       {/* ============================================================ */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-2xl px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
//           <SectionHeading eyebrow={faq.eyebrow} title={faq.title} variant="compact"/>

//           <div className="mt-14 divide-y divide-[#e4e4e1]/80 border-t border-b border-[#e4e4e1]/80">
//             {faq.questions.map((f, idx) => {
//               const isOpen = openFaq === idx;
//               return (
//                 <div key={f.question}>
//                   <button
//                     type="button"
//                     onClick={() => setOpenFaq(isOpen ? -1 : idx)}
//                     aria-expanded={isOpen}
//                     className="group flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9384a]/60 rounded-lg"
//                   >
//                     <span className="font-serif text-base leading-snug text-[#14181c] sm:text-lg">
//                       {f.question}
//                     </span>
//                     <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e4e4e1] transition-colors group-hover:border-[#d9384a]/40">
//                       {isOpen ? (
//                         <Minus size={14} className="text-[#d9384a]" />
//                       ) : (
//                         <Plus size={14} className="text-[#d9384a]" />
//                       )}
//                     </span>
//                   </button>
//                   <div
//                     className={`grid overflow-hidden transition-all duration-300 ease-out ${
//                       isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <p className="max-w-xl font-sans text-[14px] leading-relaxed text-[#5b6472]">
//                         {f.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ============================================================ */}
//       {/* CTA — centered, gradient close                                */}
//       {/* ============================================================ */}
//       <CtaSection cta={cta}/>

//     </main>
//   );
// };

// export default FeatureDetailsPage;



"use client";
import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  X,
  ShoppingCart,
  Tag,
  CreditCard,
  Receipt,
  BarChart3,
  PieChart,
  TrendingUp,
  Activity,
  Image as ImageIcon,
} from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeading, { Eyebrow } from "../layouts/section-heading";
import CtaSection from "../layouts/cta-section";

/* ------------------------------------------------------------------ */
/* Icon lookups                                                        */
/* ------------------------------------------------------------------ */
const WORKFLOW_ICONS = { ShoppingCart, Tag, CreditCard, Receipt, BarChart3 };
const ANALYTICS_ICON_ROTATION = [BarChart3, PieChart, TrendingUp, Activity];

/** Renders a real product image; falls back to a quiet dark tile with an icon if it fails to load. */
const ProductImage = ({ src, alt = "", className = "" }) => {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#14181c] via-[#1f2430] to-[#14181c] ${className}`}
      >
        <ImageIcon size={26} strokeWidth={1.25} className="text-white/25" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
};

/** A "software window" frame — the recurring product-presentation motif for this page. */
const WindowFrame = ({
  src,
  alt = "",
  chromeLabel,
  overlay,
  elevated = false,
  className = "",
}) => (
  <div
    className={`overflow-hidden rounded-2xl bg-white ring-1 transition-transform duration-500 ${
      elevated
        ? "shadow-[0_60px_120px_-32px_rgba(20,24,28,0.35)] ring-black/[0.06]"
        : "shadow-2xl shadow-black/[0.12] ring-black/[0.04]"
    } ${className}`}
  >
    <div className="flex items-center gap-1.5 border-b border-[#e4e4e1]/60 bg-[#fbfaf8] px-4 py-3">
      <span
        className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
        aria-hidden="true"
      />
      <span
        className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
        aria-hidden="true"
      />
      <span
        className="h-2.5 w-2.5 rounded-full bg-[#e4e4e1]"
        aria-hidden="true"
      />
      {chromeLabel && (
        <span className="ml-3 font-mono text-[10px] tracking-wide text-[#5b6472]">
          {chromeLabel}
        </span>
      )}
    </div>
    <div className="relative">
      <ProductImage src={src} alt={alt} className="aspect-[16/10]" />
      {overlay}
    </div>
  </div>
);

/** The stage a screenshot sits on — one soft ambient glow, plus a hairline bezel for framing. */
const ScreenshotStage = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-10 -inset-y-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(217,56,74,0.08),transparent)] blur-2xl"
    />
    <div className="relative rounded-[19px] bg-gradient-to-b from-black/[0.06] to-transparent p-px">
      {children}
    </div>
  </div>
);

/* Approximate hotspots a highlight "points to" on its screenshot — cycled by index.
   Kept generic (corners, center, edges) since real coordinates aren't in the data. */
const SPOTLIGHT_POSITIONS = [
  { x: 24, y: 28 },
  { x: 76, y: 24 },
  { x: 50, y: 50 },
  { x: 22, y: 76 },
  { x: 78, y: 70 },
  { x: 50, y: 88 },
];

/** Soft glow positioned over the screenshot, tracking the active highlight. */
const Spotlight = ({ index }) => {
  const pos = SPOTLIGHT_POSITIONS[index % SPOTLIGHT_POSITIONS.length];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9384a]/[0.12] blur-3xl transition-all duration-500 ease-out"
        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      />
    </div>
  );
};

/**
 * One screen entry — screenshot and copy sit in an even two-column split (50/50) so
 * neither side dominates and the eye isn't pulled toward one column over the other.
 * There is no enclosing card: the WindowFrame and the text block are the whole
 * composition. Highlights are rendered directly here (no separate row component) —
 * each is just a string, paired with a hairline rail that turns brand-red when active.
 */
const ProductScreenBlock = ({ screen, imageOnRight }) => {
  const [active, setActive] = useState(0);

  const content = (
    <div>
      <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-[#d9384a]">
        {screen.focus}
      </span>
      <h3 className="mt-3 font-serif text-[26px] leading-[1.2] tracking-[-0.01em] text-[#14181c] sm:text-[30px]">
        {screen.title}
      </h3>
      <p className="mt-3 max-w-md font-sans text-[14px] leading-[1.7] text-[#5b6472]">
        {screen.description}
      </p>

      {screen.highlights?.length > 0 && (
        <ul className="mt-8">
          {screen.highlights.map((highlight, idx) => {
            const isActive = active === idx;
            return (
              <li
                key={highlight}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                tabIndex={0}
                className="relative cursor-default py-3.5 pl-5 transition-colors duration-300 focus:outline-none"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-[#d9384a]" : "bg-[#e4e4e1]"
                  }`}
                />
                <p
                  className={`font-sans text-[14.5px] font-semibold leading-snug tracking-[-0.005em] transition-colors duration-300 ${
                    isActive ? "text-[#14181c]" : "text-[#5b6472]"
                  }`}
                >
                  {highlight}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );

  const shot = (
    <WindowFrame
      src={screen.image}
      alt={screen.title}
      elevated
      overlay={<Spotlight index={active} />}
      className="hover:-translate-y-1.5"
    />
  );

  // A true 50/50 split — both columns share the row equally, and which side holds
  // the screenshot vs. the copy simply swaps with `imageOnRight`. `items-center`
  // keeps the copy vertically centered against the screenshot instead of pinned
  // to the top, so the two halves read as one balanced composition.
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
      {imageOnRight ? (
        <>
          {content}
          {shot}
        </>
      ) : (
        <>
          {shot}
          {content}
        </>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const FeatureDetailsPage = ({ data }) => {
  const [openFaq, setOpenFaq] = useState(0);

  const { hero, problems, screens, workflow, analytics, faq, cta } = data;

  return (
    <main className="bg-[#fbfaf8]">
      {/* ============================================================ */}
      {/* HERO — the screenshot is the only accent it needs             */}
      {/* ============================================================ */}
      <PageWrapper
        className="relative overflow-hidden bg-[#fbfaf8] pt-28 sm:pt-36"
        containerClassName=" pt-10 sm:pt-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,56,74,0.10),transparent)] blur-2xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Eyebrow className="justify-center">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-[#14181c] sm:text-[52px] md:text-[60px]">
            {hero.title}{" "}
            <span className="italic text-primary-500">
              {hero.highlightedTitle}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[16px] leading-[1.7] text-[#5b6472]">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" className="btn btn-lg btn-primary">
              {hero.primaryCta}
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button type="button" className="btn btn-lg btn-secondary">
              {hero.secondaryCta}
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-24 max-w-5xl sm:mt-32">
          <ScreenshotStage>
            <WindowFrame
              src={hero.image}
              alt={hero.title}
              chromeLabel="iMaker Restro"
              className="hover:-translate-y-1"
            />
          </ScreenshotStage>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* PROBLEMS — friction / fix split                               */}
      {/* ============================================================ */}
      <PageWrapper className="bg-white">
        <div className="mx-auto max-w-5xl ">
          <SectionHeading
            eyebrow={problems.eyebrow}
            title={problems.title}
            description={problems.description}
            variant="compact"
          />

          <div className="mt-16 grid grid-cols-1 gap-10 rounded-2xl bg-[#fbfaf8] p-8 sm:grid-cols-2 sm:gap-0 sm:p-10 sm:divide-x sm:divide-[#e4e4e1]/70">
            <div className="sm:pr-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5b6472]">
                The Friction
              </p>
              <ul className="mt-6 space-y-6">
                {problems.items.map((item) => (
                  <li key={item.problem} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50">
                      <X size={9} strokeWidth={2.5} className="text-red-500" />
                    </span>
                    <span className="font-sans text-[14.5px] leading-relaxed text-[#5b6472]">
                      {item.problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:pl-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d9384a]">
                The Fix
              </p>
              <ul className="mt-6 space-y-6">
                {problems.items.map((item) => (
                  <li key={item.solution} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9384a]/10">
                      <Check
                        size={9}
                        strokeWidth={2.5}
                        className="text-[#d9384a]"
                      />
                    </span>
                    <span className="font-sans text-[14.5px] leading-relaxed text-[#14181c]">
                      {item.solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* ============================================================ */}
      {/* PRODUCT EXPERIENCE — screenshot-led, one composition per screen */}
      {/* ============================================================ */}
      <section className="bg-[#fbfaf8]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="space-y-28 sm:space-y-40">
            {screens.map((screen) => (
              <ProductScreenBlock
                key={screen.id}
                screen={screen}
                imageOnRight={screen.layout === "right"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WORKFLOW — a single flow, read in five seconds                */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
          <Eyebrow className="justify-center">{workflow.eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-[28px] leading-[1.15] text-[#14181c] sm:text-[36px] md:text-[40px]">
            {workflow.title}
          </h2>

          {/* A single connected bar — stages of one pipeline, not separate floating steps */}
          <div className="mt-16 overflow-hidden rounded-[28px] ring-1 ring-[#e4e4e1]/80">
            <div className="flex flex-col sm:flex-row">
              {workflow.steps.map((step, idx) => {
                const Icon = WORKFLOW_ICONS[step.icon] || CreditCard;
                const isLast = idx === workflow.steps.length - 1;
                return (
                  <div
                    key={step.title}
                    className={`group relative flex-1 px-6 py-9 text-center transition-colors duration-300 hover:bg-white ${
                      isLast
                        ? ""
                        : "border-b border-[#e4e4e1]/80 sm:border-b-0 sm:border-r"
                    }`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="mx-auto text-[#14181c]/70 transition-colors duration-300 group-hover:text-[#d9384a]"
                    />
                    <p className="mt-4 font-sans text-[13.5px] font-semibold leading-snug text-[#14181c]">
                      {step.title}
                    </p>
                    <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-[#5b6472]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ANALYTICS — dashboard-dominant showcase                      */}
      {/* ============================================================ */}
      <section className="bg-[#fbfaf8]">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <SectionHeading
            eyebrow={analytics.eyebrow}
            title={analytics.title}
            description={analytics.description}
            variant="compact"
          />

          <div className="mx-auto mt-16">
            <ScreenshotStage>
              <WindowFrame
                src={analytics.image}
                alt={analytics.title}
                chromeLabel="Reports"
                className="shadow-[0_50px_100px_-28px_rgba(20,24,28,0.20)] hover:-translate-y-1"
              />
            </ScreenshotStage>
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {analytics.insights.map((insight, idx) => {
              const Icon =
                ANALYTICS_ICON_ROTATION[idx % ANALYTICS_ICON_ROTATION.length];
              return (
                <div
                  key={insight.title}
                  className="flex flex-col items-center gap-2.5 text-center"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#d9384a]"
                  />
                  <p className="font-serif text-[15px] text-[#14181c]">
                    {insight.title}
                  </p>
                  <p className="font-sans text-[12px] leading-relaxed text-[#5b6472]">
                    {insight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            variant="compact"
          />

          <div className="mt-14 divide-y divide-[#e4e4e1]/80 border-t border-b border-[#e4e4e1]/80">
            {faq.questions.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={f.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9384a]/60 rounded-lg"
                  >
                    <span className="font-serif text-base leading-snug text-[#14181c] sm:text-lg">
                      {f.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e4e4e1] transition-colors group-hover:border-[#d9384a]/40">
                      {isOpen ? (
                        <Minus size={14} className="text-[#d9384a]" />
                      ) : (
                        <Plus size={14} className="text-[#d9384a]" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl font-sans text-[14px] leading-relaxed text-[#5b6472]">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA — centered, gradient close                                */}
      {/* ============================================================ */}
      <CtaSection cta={cta} />
    </main>
  );
};

export default FeatureDetailsPage;