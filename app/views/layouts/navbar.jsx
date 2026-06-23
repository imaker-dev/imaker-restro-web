"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import PageWrapper from "@/app/components/page-wrapper";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

const NAV = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Top Franchise", href: "/franchises" },
  { label: "Download", href: "/#download" },
  { label: "Contact", href: "/#contact" },
];
  return (
    <>
      <PageWrapper
        paddingY="py-0"
        className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        containerClassName="h-18 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Images/imaker-logo.svg"
            alt="logo"
            width={200}
            height={100}
            priority
            className="w-[200px] lg:w-[220px] xl:w-[240px] h-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-4 py-2 text-sm font-semibold text-secondary-500 hover:text-secondary-900 rounded-lg hover:bg-secondary-100 transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-primary-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary-700 transition shadow hover:-translate-y-px"
          >
            Free Trial
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-secondary-200 text-secondary-700 hover:bg-secondary-100 transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </PageWrapper>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-secondary-100">
          <Image
            src="/Images/imaker-logo.svg"
            alt="logo"
            width={120}
            height={80}
          />

          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-secondary-200"
          >
            <X size={18} className="text-secondary-700" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-semibold text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-xl transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-6 border-t border-secondary-100 pt-4">
          <Link
            href="#contact"
            className="block w-full text-center py-3 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 transition"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </>
  );
}
