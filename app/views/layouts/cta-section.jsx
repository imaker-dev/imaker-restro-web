// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import { Eyebrow } from "./section-heading";
// import PageWrapper from "@/app/components/page-wrapper";

// const CtaSection = ({ cta }) => {
//   const {
//     eyebrow = "Ready to Grow?",
//     title = "Let's Build Your Restaurant's Future Together.",
//     description =
//       "Simplify billing, inventory, customer engagement and operations with one connected platform.",
//     primaryButton = {
//       text: "Book a Demo",
//       link: "/book-a-demo",
//     },
//     secondaryButton = {
//       text: "Talk to Sales",
//       link: "/contact",
//     },
//   } = cta || {};

//   return (
//     <PageWrapper className="relative overflow-hidden bg-[#101216]">
//       {/* Dot Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
//           backgroundSize: "18px 18px",
//         }}
//       />

//       {/* Primary Gradient Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(var(--color-primary-rgb),0.18),transparent_65%)]" />

//       {/* Bottom Fade */}
//       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

//       <div className="relative px-4 text-center sm:px-6">
//         <Eyebrow>{eyebrow}</Eyebrow>

//         {title && (
//           <h2 className="mx-auto mt-5 max-w-md text-balance text-2xl font-medium leading-[1.25] tracking-tight text-white sm:mt-6 sm:max-w-lg sm:text-3xl md:max-w-2xl md:text-4xl md:leading-[1.2] lg:max-w-3xl lg:text-[2.75rem]">
//             {title}
//           </h2>
//         )}

//         {description && (
//           <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/55 sm:mt-6 sm:max-w-xl sm:text-base md:max-w-2xl">
//             {description}
//           </p>
//         )}

//         <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
//           {primaryButton && (
//             <Link
//               href={primaryButton.link}
//               className="btn btn-lg btn-primary"
//               // className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-600 sm:px-6 sm:py-3 sm:text-base"
//             >
//               {primaryButton.text}
//               <ArrowUpRight
//                 size={16}
//                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-[18px]"
//               />
//             </Link>
//           )}

//           {secondaryButton && (
//             <Link
//               href={secondaryButton.link}
//               className="btn btn-lg btn-secondary"
//               // className="rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
//             >
//               {secondaryButton.text}
//             </Link>
//           )}
//         </div>
//       </div>
//     </PageWrapper>
//   );
// };

// export default CtaSection;

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Eyebrow } from "./section-heading";
import PageWrapper from "@/app/components/page-wrapper";

const CtaSection = ({ cta }) => {
  const {
    eyebrow = "Ready to Grow?",
    title = "Let's Build Your Restaurant's Future Together.",
    description = "Simplify billing, inventory, customer engagement and operations with one connected platform.",
    primaryButton = {
      text: "Book a Demo",
      link: "/book-a-demo",
    },
    secondaryButton = {
      text: "Talk to Sales",
      link: "/contact",
    },
  } = cta || {};

  return (
    <PageWrapper>
      <div className="relative overflow-hidden rounded-3xl bg-[#101216] px-4 py-8 text-center sm:px-8 sm:py-10 md:py-16">
        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Primary Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(var(--color-primary-rgb),0.18),transparent_65%)]" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative">
          <Eyebrow>{eyebrow}</Eyebrow>

          {title && (
            <h2 className="mx-auto mt-4 max-w-xs text-balance text-xl font-medium leading-[1.25] tracking-tight text-white sm:mt-5 sm:max-w-md sm:text-2xl md:max-w-xl md:text-3xl md:leading-[1.2] lg:max-w-2xl lg:text-[2.25rem]">
              {title}
            </h2>
          )}

          {description && (
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/55 sm:mt-5 sm:max-w-lg sm:text-base md:max-w-xl">
              {description}
            </p>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            {primaryButton && (
              <Link
                href={primaryButton.link}
                className="group btn btn-lg btn-primary"
              >
                {primaryButton.text}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-[18px]"
                />
              </Link>
            )}

            {secondaryButton && (
              <Link
                href={secondaryButton.link}
                className="btn btn-lg btn-secondary"
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CtaSection;
