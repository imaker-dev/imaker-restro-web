"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeading from "../../layouts/section-heading";
import Image from "next/image";
import { BRAND_ICON } from "@/app/const";

// ---------------------------------------------------------------------------
// Data — swap iconSrc for your real asset paths. Keep icons as clean
// single-color-on-transparent SVGs/PNGs if possible; the grayscale→color
// hover treatment works best on assets without a baked-in background.
// ---------------------------------------------------------------------------
const PLATFORMS = [
  {
    id: "android",
    name: "Android",
    description: "Phones · Tablets · POS",
    iconSrc: "/Images/Platforms/android.webp",
  },
  {
    id: "ios",
    name: "iOS",
    description: "iPhone · iPad",
    iconSrc: "/Images/Platforms/ios.webp",
  },
  {
    id: "windows",
    name: "Windows",
    description: "Desktop · Laptop · POS",
    iconSrc: "/Images/Platforms/windows.webp",
  },
  {
    id: "macos",
    name: "macOS",
    description: "Mac · MacBook",
    iconSrc: "/Images/Platforms/macos.webp",
  },
];

// ---------------------------------------------------------------------------
// Core node — real product icon + wordmark, the single identity everything
// branches from
// ---------------------------------------------------------------------------
function CoreNode() {
  return (
    <div className="flex items-center gap-2.5 rounded-full bg-stone-900 py-2.5 pl-2.5 pr-6 text-white shadow-sm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
        <Image
          src={BRAND_ICON}
          alt="logo"
          unoptimized
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      </span>
      <span className="text-sm font-semibold tracking-tight">
        iMaker Restro
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// One platform node: stem + icon + name + description, self-contained hover
// ---------------------------------------------------------------------------
function PlatformNode({ platform }) {
  const { name, description, iconSrc } = platform;

  return (
    <div className="group flex flex-col items-center">
      {/* Stem */}
      <div
        className="hidden h-6 w-px bg-stone-200 sm:block"
        aria-hidden="true"
      />

      {/* Icon tile */}
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-stone-300 group-hover:shadow-md">
        <Image
          src={iconSrc}
          alt={`${name} platform`}
          width={56}
          height={56}
          unoptimized
          className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Label */}
      <p className="mt-3 text-sm font-semibold text-stone-800">{name}</p>

      <p className="mt-0.5 text-xs text-stone-400">{description}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export default function PlatformCompatibility() {
  return (
    <PageWrapper aria-label="Platforms iMaker Restro is available on">
      <SectionHeading
        eyebrow="multi-platform"
        title="One Platform. Every Screen."
        highlight="Every Screen."
        description="Manage your restaurant from the devices that fit your workflow. iMaker Restro runs on Android, iOS, Windows, and macOS."
      />

      <div className="mt-4 flex flex-col items-center">
        {/* Core identity */}
        <CoreNode />

        {/* Vertical stem from core down to the rail */}
        <div className="h-8 w-px bg-stone-200 sm:h-10" aria-hidden="true" />

        {/* Desktop */}
        <div className="relative hidden w-full sm:block">
          {/* Horizontal rail */}
          <div
            className="absolute top-0 h-px bg-stone-200"
            style={{
              left: "calc(12.5% - 6px)",
              right: "calc(12.5% - 6px)",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-4">
            {PLATFORMS.map((platform) => (
              <PlatformNode key={platform.id} platform={platform} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="grid w-full max-w-sm grid-cols-2 gap-x-6 gap-y-8 sm:hidden">
          {PLATFORMS.map((platform) => {
            const { name, description, iconSrc } = platform;

            return (
              <div key={platform.id} className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white shadow-sm">
                  <Image
                    src={iconSrc}
                    alt={`${name} platform`}
                    width={40}
                    height={40}
                    unoptimized
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-stone-800">{name}</p>

                  <p className="truncate text-xs text-stone-400">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing tagline */}
        <p className="mt-12 text-sm text-stone-400 sm:mt-14">
          Designed to fit the way your restaurant works.
        </p>
      </div>
    </PageWrapper>
  );
}
