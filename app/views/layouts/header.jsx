"use client";

import React from "react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PageWrapper from '../../components/page-wrapper';

export default function Header({
  title,
  backgroundUrl = "/Images/header.jpg",
}) {
  const pathname = usePathname();

  const toTitle = (s) =>
    decodeURIComponent(s)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const breadcrumbs =
    pathname
      ?.split("/")
      .filter(Boolean)
      .map((segment, index, array) => {
        const href = "/" + array.slice(0, index + 1).join("/");
        return { label: toTitle(segment), href };
      }) ?? [];

  return (
    <PageWrapper
      className="relative overflow-hidden bg-primary-50/10"
      paddingY="py-20 lg:py-32"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(120%_120%_at_50%_30%,black,transparent)]"></div>
      </div>

      {/* Soft white overlay (fixed settings) */}
      <div
        className="absolute inset-0 -z-10 bg-white backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(0,0,0,0.04)]"
        style={{ opacity: 0.82 }}
        aria-hidden="true"
      />

      {/* Decorative grid */}
      <div className="absolute inset-0 -z-10 [background:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:28px_28px] sm:bg-[size:48px_48px]"></div>

      {/* Content */}
      <div className="space-y-4 sm:space-y-6 text-center mt-8">
                {breadcrumbs.length > 0 && (
          <nav
            className="flex justify-center items-center gap-2 text-sm"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Home</span>
            </Link>

            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={crumb.href}>
                  <ChevronRight
                    className="w-4 h-4 text-slate-400"
                    aria-hidden="true"
                  />
                  {isLast ? (
                    <span
                      className="text-slate-900 font-medium"
                      aria-current="page"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>


      </div>


    </PageWrapper>
  );
}
