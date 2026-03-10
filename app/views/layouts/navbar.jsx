"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import PageWrapper from "@/app/components/page-wrapper";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const NAV = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <PageWrapper
        paddingY="py-0"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        containerClassName="h-18 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={"/Images/logo.svg"} alt="logo" width={150} height={100} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-4 py-2 text-sm font-semibold text-[#1A0F00]/60 hover:text-[#1A0F00] rounded-lg hover:bg-[#1A0F00]/6 transition-all"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">

          <Link
            href="/signup"
            className="flex items-center gap-2 bg-[#1A0F00] text-amber-400 text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#2a1a00] transition-all shadow shadow-[#1A0F00]/20 hover:-translate-y-px"
          >
            Free Trial
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[#1A0F00]/12 text-[#1A0F00] hover:bg-[#1A0F00]/6 transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </PageWrapper>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-72 bg-[#F9F6F1] shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#1A0F00]/8">
              <span className="font-display text-xl font-black text-[#1A0F00]">
                Serve<span className="text-amber-500">IQ</span>
              </span>

              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#1A0F00]/12"
              >
                <X size={18} className="text-[#1A0F00]" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
              {NAV.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-[#1A0F00]/70 hover:text-[#1A0F00] hover:bg-[#1A0F00]/6 rounded-xl transition-all"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="px-4 pb-6 space-y-3 border-t border-[#1A0F00]/8 pt-4">


              <Link
                href="/signup"
                className="block w-full text-center py-3 bg-[#1A0F00] text-amber-400 rounded-xl text-sm font-bold"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
