"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function SplashScreen({
  isLoading = true,
  logoSrc = "/Images/logo-icon.png",
  onExitComplete,
}) {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!isLoading && mounted && !exiting) {
      setExiting(true);
      const t = setTimeout(() => {
        setMounted(false);
        onExitComplete?.();
      }, 340);
      return () => clearTimeout(t);
    }
  }, [isLoading, mounted, exiting, onExitComplete]);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={isLoading}
      className={[
        "fixed inset-0 z-50 flex items-center justify-center",
        "px-6 transition-opacity duration-[340ms] ease-out",
        exiting ? "opacity-0" : "opacity-100",
      ].join(" ")}
      style={{ backgroundColor: "#F4F6F9" }}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className="imr-icon overflow-hidden rounded-[20%]"
          style={{
            width: "clamp(64px, 14vw, 88px)",
            height: "clamp(64px, 14vw, 88px)",
            boxShadow: "0 10px 24px -14px rgba(28,43,61,0.28)",
          }}
        >
          <Image
            src={logoSrc}
            alt="iMaker Restro"
            width={176}
            height={176}
            priority
            draggable={false}
            className="h-full w-full select-none object-cover"
          />
        </div>

        <h1
          className="imr-text mt-4 font-semibold tracking-tight text-[#1C2B3D]"
          style={{
            fontFamily: "var(--font-sans, ui-sans-serif, system-ui, -apple-system, sans-serif)",
            fontSize: "clamp(1.125rem, 2.6vw, 1.375rem)",
            letterSpacing: "-0.01em",
          }}
        >
          iMaker Restro
        </h1>

        <p
          className="imr-text mt-1.5 text-[#7A8794]"
          style={{
            fontFamily: "var(--font-sans, ui-sans-serif, system-ui, -apple-system, sans-serif)",
            fontSize: "0.8125rem",
          }}
        >
          Preparing your workspace&hellip;
        </p>

        <div
          className="imr-loader relative mt-7 h-[2px] overflow-hidden rounded-full"
          style={{
            width: "clamp(80px, 12vw, 104px)",
            backgroundColor: "rgba(28,43,61,0.08)",
          }}
        >
          <span className="imr-loader-sweep absolute inset-y-0 left-0 w-1/3 rounded-full" />
        </div>
      </div>

      <span className="sr-only">Loading iMaker Restro</span>

      <style jsx>{`
        .imr-icon {
          animation: imr-icon-in 400ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .imr-text {
          animation: imr-text-in 400ms cubic-bezier(0.16, 1, 0.3, 1) 60ms both;
        }
        .imr-loader {
          animation: imr-fade-in 300ms ease-out 140ms both;
        }
        .imr-loader-sweep {
          background: linear-gradient(
            90deg,
            rgba(234, 25, 73, 0) 0%,
            rgba(234, 25, 73, 0.55) 50%,
            rgba(234, 25, 73, 0) 100%
          );
          animation: imr-loader-sweep 1.3s ease-in-out 0.4s infinite;
        }

        @keyframes imr-icon-in {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes imr-text-in {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes imr-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes imr-loader-sweep {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(310%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .imr-icon,
          .imr-text,
          .imr-loader {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .imr-loader-sweep {
            animation: none !important;
            opacity: 0.45 !important;
          }
        }
      `}</style>
    </div>
  );
}