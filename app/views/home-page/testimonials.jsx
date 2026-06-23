"use client";
import React, { useRef, useState } from "react";
import PageWrapper from "@/app/components/page-wrapper";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../layouts/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    name: "The City View",
    role: "Restaurant Partner",
    city: "Rewa, Madhya Pradesh",
    text: "Managing orders, billing, and reports is much easier now. The dashboard gives us a clear picture of daily sales, and our staff adapted to the system very quickly.",
    rating: 5,
    av: "C",
    bg: "bg-orange-500",
  },
  {
    name: "Roller Coaster",
    role: "Restaurant Partner",
    city: "Rewa, Madhya Pradesh",
    text: "The POS has helped us streamline operations during busy hours. Billing is faster, and we no longer have to spend time compiling reports manually.",
    rating: 5,
    av: "R",
    bg: "bg-purple-600",
  },
  // {
  //   name: "Royal Spice",
  //   role: "Restaurant Partner",
  //   city: "Ahmedabad, Gujarat",
  //   text: "From inventory tracking to GST billing, everything is available in one place. It has simplified our day-to-day restaurant management significantly.",
  //   rating: 5,
  //   av: "R",
  //   bg: "bg-sky-600",
  // },
  // {
  //   name: "The Food Court",
  //   role: "Restaurant Partner",
  //   city: "Indore, Madhya Pradesh",
  //   text: "The real-time sales reports and easy order management have made operations much smoother. Our team can focus more on customers and less on paperwork.",
  //   rating: 5,
  //   av: "F",
  //   bg: "bg-green-600",
  // },
  // {
  //   name: "Urban Tadka",
  //   role: "Restaurant Partner",
  //   city: "Ahmedabad, Gujarat",
  //   text: "What impressed us most was how easy the system was to learn. The onboarding was smooth, and the support team was always available whenever we needed help.",
  //   rating: 5,
  //   av: "U",
  //   bg: "bg-red-500",
  // },
];

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <PageWrapper className="bg-primary-50">
      {/* Header with Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <SectionHeader
          badge="Customer Stories"
          title="Don't Take"
          highlight=" Our Word For It"
          align="left"
          className="max-w-2xl"
        />

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 hover:shadow-md transition-all duration-200 ${
              isBeginning
                ? "opacity-40 pointer-events-none cursor-default"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label="Previous testimonial"
            disabled={isBeginning}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 hover:shadow-md transition-all duration-200 ${
              isEnd
                ? "opacity-40 pointer-events-none cursor-default"
                : "opacity-100 cursor-pointer"
            }`}
            aria-label="Next testimonial"
            disabled={isEnd}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onResize={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="!px-1"
        >
          {TESTIMONIALS.map(({ name, role, city, text, rating, av, bg }, i) => (
            <SwiperSlide key={name} className="!h-auto">
              <div
                className={`bg-white border border-[#1A0F00]/6 rounded-2xl p-5 flex flex-col hover:border-amber-300 hover:shadow-md transition-all duration-300 h-full`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <Quote size={18} className="text-amber-300 mb-2" />
                <p className="text-sm font-medium text-[#1A0F00]/60 leading-relaxed flex-1 mb-5">
                  {text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#1A0F00]/6">
                  <div
                    className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center text-white text-sm font-black flex-shrink-0`}
                  >
                    {av}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A0F00]">{name}</p>
                    <p className="text-xs font-medium text-[#1A0F00]/40">
                      {role} · {city}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PageWrapper>
  );
}
