"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { useState } from "react";
import Link from "next/link";
import SectionHeading from "../layouts/section-heading";

const DOWNLOADS = [
  {
    id: "ios",
    name: "iOS",
    description: "iPad & iPhone",
    subtitle: "Seamless POS at your fingertips",
    image: "/Images/ios.png",
    version: "1.0.0",
  },
  {
    id: "android",
    name: "Android",
    description: "All Android Devices",
    subtitle: "Full power in your pocket",
    image: "/Images/android.png",
    version: "1.0.0",
  },
  {
    id: "windows",
    name: "Windows",
    description: "Windows 10, 11 & Later",
    subtitle: "Professional desktop control",
    image: "/Images/windows.png",
    version: "1.0.0",
  },
  {
    id: "macos",
    name: "macOS",
    description: "Mac Computers",
    subtitle: "Premium experience for Mac",
    image: "/Images/ios.png",
    version: "1.0.0",
  },
];

export default function DownloadSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <PageWrapper id="download" className="relative bg-white">

      {/* Header */}
      <SectionHeading
        badge={"Multi-Platform Available"}
        title={"Get Our App on Any Device"}
        highlight={"Any Device"}
        description={
          "Download our restaurant management software for iOS, Android, Windows, and macOS. Manage your outlet from anywhere, anytime."
        }
      />

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        {DOWNLOADS.map((platform) => {
          const isHovered = hoveredId === platform.id;

          return (
            <div
              key={platform.id}
              onMouseEnter={() => setHoveredId(platform.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`h-full rounded-2xl border bg-white transition-all duration-300
                ${
                  isHovered
                    ? "shadow-xl -translate-y-2 border-primary-300"
                    : "border-secondary-100 hover:shadow-lg"
                }`}
              >
                <div className="p-5 md:p-8 flex flex-col justify-between h-full">
                  {/* Top */}
                  <div>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 bg-white border border-secondary-200">
                      <img
                        src={platform.image}
                        alt={platform.name}
                        className="w-6 h-6 md:w-7 md:h-7 object-contain"
                      />
                    </div>

                    <h3 className="text-base md:text-xl font-bold text-secondary-500">
                      {platform.name}
                    </h3>

                    <p className="text-xs md:text-sm text-secondary-400 mb-2 md:mb-3">
                      {platform.description}
                    </p>

                    <p className="hidden lg:block text-xs md:text-sm text-secondary-500">
                      {platform.subtitle}
                    </p>
                  </div>

                  {/* Button + Version */}
                  <div className="mt-5 md:mt-8">
                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all
                        ${
                          isHovered
                            ? "bg-primary-600 text-white shadow-md"
                            : "bg-primary-50 text-primary-600 hover:bg-primary-100"
                        }`}
                    >
                      Contact Us
                    </Link>

                    {/* <button
                      className={`w-full py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition-all
                      ${
                        isHovered
                          ? "bg-primary-600 text-white shadow-md"
                          : "bg-primary-50 text-primary-600 hover:bg-primary-100"
                      }`}
                    >
                      <Download size={14} className="inline mr-1.5 md:mr-2" />
                      Download
                    </button> */}

                    {/* Version */}
                    <div className="mt-1 text-xs text-secondary-500/80 text-center font-medium">
                      v{platform.version}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom trust row */}
      <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 md:gap-6 flex-wrap">
        {[
          "Free to download",
          "No credit card required",
          "Lightning-fast billing",
        ].map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-secondary-400 text-xs md:text-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            {text}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
