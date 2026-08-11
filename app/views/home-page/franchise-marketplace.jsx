"use client";
import React, { useEffect, useRef, useState } from "react";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchFranchises } from "@/app/store/slices/franchiseSlice";
import FranchiseCard from "@/app/views/franchises/components/franchise-card";
import FranchiseCardSkeleton from "@/app/views/franchises/components/franchise-card-skeleton";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../layouts/section-heading";

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function FranchiseMarketplace() {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    dispatch(fetchFranchises({}));
  }, []);

  const { allFranchisesData, isFetchingFranchises } = useSelector(
    (state) => state.franchise,
  );

  const { franchises } = allFranchisesData || {};

  // Determine if arrows should be shown based on number of slides
  const shouldShowArrows = franchises?.length > 3;

  return (
    <PageWrapper containerClassName="space-y-6">
      <SectionHeading
        eyebrow="Trusted Franchise Opportunities"
        title="Start Your Franchise Journey"
        highlight={"Franchise"}
        description="Explore proven brands, clear investment details, and the support you need to grow."
      />

      {/* Content Area */}
      {isFetchingFranchises ? (
        // Loading State
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <FranchiseCardSkeleton key={i} />
          ))}
        </div>
      ) : franchises?.length === 0 ? (
        // Empty State
        <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-20 text-center shadow-[0_2px_24px_-8px_rgba(15,23,42,0.08)]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <p className="mt-5 text-[15px] font-medium text-slate-900">
            No franchises available at the moment
          </p>
          <p className="mt-1.5 text-[13.5px] text-slate-500">
            Check back later for new franchise opportunities.
          </p>
        </div>
      ) : (
        // Franchises Slider
        <div>
          {/* Slider with Navigation */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
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
                  spaceBetween: 24,
                },
              }}
            >
              {franchises?.map((franchise) => (
                <SwiperSlide key={franchise.id} className="py-4">
                  <FranchiseCard franchise={franchise} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            {shouldShowArrows && (
              <>
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg hover:bg-slate-50 hover:text-slate-900 hover:shadow-xl transition-all duration-200 ${
                    isBeginning
                      ? "opacity-0 pointer-events-none cursor-default"
                      : "opacity-100 cursor-pointer"
                  }`}
                  aria-label="Previous slide"
                  disabled={isBeginning}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg hover:bg-slate-50 hover:text-slate-900 hover:shadow-xl transition-all duration-200 ${
                    isEnd
                      ? "opacity-0 pointer-events-none cursor-default"
                      : "opacity-100 cursor-pointer"
                  }`}
                  aria-label="Next slide"
                  disabled={isEnd}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* View All Button - Centered below slider */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/franchises"
              className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-white bg-secondary-500 rounded-xl hover:bg-secondary-600 transition-all duration-200 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.2)] hover:shadow-[0_8px_24px_-6px_rgba(15,23,42,0.3)] hover:-translate-y-0.5"
            >
              View All Franchises
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
