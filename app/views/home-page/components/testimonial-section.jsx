// "use client";

// import PageWrapper from "@/app/components/page-wrapper";

// import Image from "next/image";
// import { useState } from "react";
// import SectionHeading from "../../layouts/section-heading";

// export const TESTIMONIALS = [
//   {
//     id: "testimonial-1",
//     quote:
//       "Replace with a real quote from this owner — ideally about one concrete part of running the restaurant that changed.",
//     ownerName: "Owner name",
//     ownerRole: "Owner",
//     restaurantName: "Restaurant name",
//     ownerImage: "/images/testimonials/owner-1.jpg",
//     featured: true,
//   },
//   {
//     id: "testimonial-2",
//     quote:
//       "Replace with a real quote about a specific workflow — billing, kitchen orders, staff scheduling, etc.",
//     ownerName: "Owner name",
//     ownerRole: "Marketing Coordinator",
//     restaurantName: "Restaurant name",
//     ownerImage: "/images/testimonials/owner-2.jpg",
//   },
//   {
//     id: "testimonial-3",
//     quote:
//       "Replace with a real quote. Keep it in the owner's own words rather than paraphrased marketing language.",
//     ownerName: "Owner name",
//     ownerRole: "IT / Operations Manager",
//     restaurantName: "Restaurant name",
//     ownerImage: "/images/testimonials/owner-3.jpg",
//   },
//   {
//     id: "testimonial-4",
//     quote:
//       "Replace with a real quote from the owner's daily use of the product — what got easier, what they no longer worry about.",
//     ownerName: "Owner name",
//     ownerRole: "Founder",
//     restaurantName: "Restaurant name",
//     ownerImage: "/images/testimonials/owner-4.jpg",
//     featured: true,
//   },
//   {
//     id: "testimonial-5",
//     quote:
//       "Replace with a real quote — short, specific quotes read better in a compact card than long ones.",
//     ownerName: "Owner name",
//     ownerRole: "HR / Staff Manager",
//     restaurantName: "Restaurant name",
//     ownerImage: "/images/testimonials/owner-5.jpg",
//     featured: true,
//   },
//   {
//     id: "testimonial-6",
//     quote:
//       "Replace with a real quote from a senior team member or co-owner, distinct in voice from the others above.",
//     ownerName: "Owner name",
//     ownerRole: "Senior Manager",
//     restaurantName: "Restaurant name",
//     ownerImage: "/images/testimonials/owner-6.jpg",
//   },
// ];

// // ---------------------------------------------------------------------------
// // Helpers
// // ---------------------------------------------------------------------------
// function getInitials(name) {
//   return name
//     .trim()
//     .split(/\s+/)
//     .slice(0, 2)
//     .map((part) => part[0]?.toUpperCase() ?? "")
//     .join("");
// }

// // Cycle featured photo headers through a couple of heights so the masonry
// // doesn't feel mechanical.
// const PHOTO_ASPECTS = ["aspect-[4/5]", "aspect-[5/6]", "aspect-square"];

// const QUOTE_MARK = (
//   <svg
//     width="20"
//     height="15"
//     viewBox="0 0 22 16"
//     fill="none"
//     aria-hidden="true"
//   >
//     <path
//       d="M8.5 0C4 1.4 0 5.6 0 10.6 0 13.6 2 16 5 16c2.6 0 4.4-2 4.4-4.4C9.4 9.2 7.8 7.4 5.6 7.2 6.2 4.4 8 2.2 10.4 1L8.5 0Zm11.6 0c-4.5 1.4-8.5 5.6-8.5 10.6 0 3 2 5.4 5 5.4 2.6 0 4.4-2 4.4-4.4 0-2.4-1.6-4.2-3.8-4.4.6-2.8 2.4-5 4.8-6.2L20.1 0Z"
//       fill="currentColor"
//     />
//   </svg>
// );

// // ---------------------------------------------------------------------------
// // Subcomponents
// // ---------------------------------------------------------------------------
// function Avatar({ name, image, size = "h-9 w-9" }) {
//   const [failed, setFailed] = useState(false);

//   if (failed) {
//     return (
//       <div
//         className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-600`}
//         aria-hidden="true"
//       >
//         {getInitials(name)}
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`relative ${size} shrink-0 overflow-hidden rounded-full bg-stone-100`}
//     >
//       <Image
//         src={image}
//         alt={name}
//         fill
//         sizes="40px"
//         className="object-cover"
//         onError={() => setFailed(true)}
//       />
//     </div>
//   );
// }

// function FeaturedCard({ testimonial, index }) {
//   const [failed, setFailed] = useState(false);
//   const aspect = PHOTO_ASPECTS[index % PHOTO_ASPECTS.length];

//   return (
//     <figure className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-stone-100 shadow-sm">
//       <div className={`relative w-full ${aspect}`}>
//         {!failed ? (
//           <Image
//             src={testimonial.ownerImage}
//             alt={`${testimonial.ownerName}, ${testimonial.ownerRole} at ${testimonial.restaurantName}`}
//             fill
//             sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//             onError={() => setFailed(true)}
//           />
//         ) : (
//           <div
//             className="flex h-full w-full items-center justify-center bg-primary-50 text-3xl font-semibold text-primary-500"
//             aria-hidden="true"
//           >
//             {getInitials(testimonial.ownerName)}
//           </div>
//         )}

//         {/* Bottom overlay: quote + name/role */}
//         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-5 pb-4 pt-20">
//           <span className="mb-1.5 block text-white/70">{QUOTE_MARK}</span>
//           <blockquote className="mb-3 text-sm leading-snug text-white/95">
//             “{testimonial.quote}”
//           </blockquote>
//           <figcaption className="text-[15px] font-semibold text-white">
//             {testimonial.ownerName}
//           </figcaption>
//           <p className="text-xs text-white/70">
//             {testimonial.ownerRole}, {testimonial.restaurantName}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// }

// function QuoteCard({ testimonial }) {
//   return (
//     <figure className="mb-6 break-inside-avoid rounded-3xl border border-stone-100 bg-white p-6 shadow-sm">
//       <span className="mb-3 block text-primary-500">{QUOTE_MARK}</span>

//       <blockquote className="text-[15px] leading-relaxed text-stone-800">
//         “{testimonial.quote}”
//       </blockquote>

//       <figcaption className="mt-5 flex items-center gap-3">
//         <Avatar name={testimonial.ownerName} image={testimonial.ownerImage} />
//         <div className="min-w-0">
//           <p className="truncate text-sm font-semibold text-stone-900">
//             {testimonial.ownerName}
//           </p>
//           <p className="truncate text-xs text-stone-500">
//             {testimonial.ownerRole}, {testimonial.restaurantName}
//           </p>
//         </div>
//       </figcaption>
//     </figure>
//   );
// }

// // ---------------------------------------------------------------------------
// // Section
// // ---------------------------------------------------------------------------
// export default function TestimonialGrid({ testimonials = TESTIMONIALS }) {
//   if (testimonials.length === 0) return null;

//   return (
//     <PageWrapper aria-label="What restaurant owners say about iMaker Restro">
//       <SectionHeading
//         eyebrow={"testimonials"}
//         title="What Restaurant Owners Say About Us"
//         description={
//           "See how restaurant owners are saving time, cutting friction, and running their kitchens with iMaker Restro."
//         }
//       />
//       <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
//         {testimonials.map((testimonial, index) =>
//           testimonial.featured ? (
//             <FeaturedCard
//               key={testimonial.id}
//               testimonial={testimonial}
//               index={index}
//             />
//           ) : (
//             <QuoteCard key={testimonial.id} testimonial={testimonial} />
//           ),
//         )}
//       </div>
//     </PageWrapper>
//   );
// }
"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { useState } from "react";
import SectionHeading from "../../layouts/section-heading";
import { ChevronLeft, ChevronRight, QuoteIcon } from "lucide-react";

export const TESTIMONIALS = [
  {
    id: "testimonial-1",
    quote:
      "Managing orders, billing, and reports is much easier now. The dashboard gives us a clear picture of daily sales, and our staff adapted to the system very quickly.",
    ownerName: "The City View",
    ownerRole: "Restaurant Partner",
    restaurantName: "Rewa, Madhya Pradesh",
    ownerImage: "",
    featured: true,
  },
  {
    id: "testimonial-2",
    quote:
      "The POS has helped us streamline operations during busy hours. Billing is faster, and we no longer have to spend time compiling reports manually.",
    ownerName: "Roller Coaster",
    ownerRole: "Restaurant Partner",
    restaurantName: "Vadodara, Gandhinagar",
    ownerImage: "",
    featured: true,
  },
];

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function TestimonialCarousel({
  testimonials = TESTIMONIALS,
}) {
  const [index, setIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];

  function goPrev() {
    setImgFailed(false);
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }

  function goNext() {
    setImgFailed(false);
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }

  const showImage = current.ownerImage && !imgFailed;

  return (
    <PageWrapper aria-label="What our community says">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Left */}
        <div>
          <SectionHeading
            eyebrow="Testimonials"
            title="From our community."
            highlight="community"
            description="Here's what other restaurant owners had to say about iMaker Restro."
            align="start"
          />

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-600 transition hover:border-stone-400 hover:text-stone-900"
            >
              <ChevronLeft
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={1.75}
              />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-600 transition hover:border-stone-400 hover:text-stone-900"
            >
              <ChevronRight
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={1.75}
              />
            </button>
          </div>
        </div>

        {/* Right */}
        <div
          key={current.id}
          className="min-h-[380px] animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          {/* Quote icon */}
          <span className="mb-5 block text-primary-600">
            <QuoteIcon
              className="h-7 w-7"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </span>

          {/* Testimonial */}
          <blockquote className="max-w-2xl text-[21px] font-medium leading-[1.45] text-stone-900 sm:text-2xl lg:text-[32px] lg:leading-[1.4]">
            “{current.quote}”
          </blockquote>

          {/* Customer information */}
          <div className="mt-10 flex items-center gap-4">
            {/* Owner image / initials fallback */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-50 text-primary-600">
              {showImage ? (
                <img
                  src={current.ownerImage}
                  alt={current.ownerName}
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-sm font-semibold tracking-wide">
                  {getInitials(current.ownerName)}
                </span>
              )}
            </div>

            {/* Owner information */}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-stone-900">
                {current.ownerName}
              </p>

              <p className="mt-0.5 text-sm text-stone-500">
                {current.ownerRole}
                {current.restaurantName && ` · ${current.restaurantName}`}
              </p>

              {current.location && (
                <p className="mt-0.5 text-xs text-stone-400">
                  {current.location}
                </p>
              )}
            </div>

            {/* Restaurant brand */}
            {current.restaurantLogo && (
              <div className="ml-auto border-l border-stone-200 pl-6">
                <img
                  src={current.restaurantLogo}
                  alt={`${current.restaurantName} logo`}
                  className="max-h-8 max-w-[110px] object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}