"use client";

import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PageWrapper from "@/app/components/page-wrapper";
import Image from "next/image";
import { BRAND_LOGO } from "@/app/const";
import { NAVBAR_MENU } from "@/app/config/navigation/navbar";

/* ------------------------------- Active match ------------------------------ */

const isPathActive = (pathname, href) =>
  !!href &&
  href !== "#" &&
  (pathname === href || pathname.startsWith(`${href}/`));

const isItemActive = (pathname, item) =>
  item.children
    ? item.children.some((child) => isPathActive(pathname, child.href))
    : isPathActive(pathname, item.href);

/* ---------------------------------- Rows --------------------------------- */

function DropdownRow({ label, href, icon, active }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-secondary-50 focus-visible:bg-secondary-50 focus-visible:outline-none"
    >
      <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full bg-primary-600 transition-all duration-150 group-hover:h-5" />
      {icon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          unoptimized
          draggable={false}
          className="shrink-0 object-contain opacity-70"
        />
      )}
      <span
        className={`text-[14px] leading-tight ${
          active
            ? "font-semibold text-secondary-900"
            : "font-medium text-secondary-900"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

function DropdownPanel({ item, align = "left", isOpen, pathname }) {
  const twoCol = item.columns === 2;

  return (
    <div
      className={`absolute top-full z-40 pt-3 transition-all duration-150 ease-out ${
        align === "right" ? "right-0" : "left-0"
      } ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-1 opacity-0"
      }`}
    >
      <div
        className={`rounded-xl border border-secondary-100 bg-white p-2.5 shadow-[0_12px_32px_-8px_rgba(15,15,20,0.14)] ${
          twoCol ? "w-[400px]" : "w-[200px]"
        }`}
      >
        <p className="px-3 pb-2 pt-0.5 text-[12px] font-semibold uppercase tracking-wide text-secondary-400">
          {item.label}
        </p>
        <div
          className={
            twoCol ? "grid grid-cols-2 gap-x-1 gap-y-0.5" : "space-y-0.5"
          }
        >
          {item.children.map((child) => (
            <DropdownRow
              key={child.label}
              {...child}
              active={isPathActive(pathname, child.href)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- Desktop --------------------------------- */

function DesktopNavItem({
  item,
  isOpen,
  onEnter,
  onLeave,
  onToggle,
  align,
  pathname,
}) {
  const active = isItemActive(pathname, item);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={`rounded-lg px-3 py-2 text-[16px] font-medium transition-colors duration-150 focus-visible:outline-none ${
          active
            ? "bg-secondary-50 text-secondary-900"
            : "text-secondary-500 hover:text-secondary-900"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[16px] font-medium transition-colors duration-150 focus-visible:outline-none ${
          isOpen || active
            ? "bg-secondary-50 text-secondary-900"
            : "text-secondary-500 hover:text-secondary-900"
        }`}
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2.25}
          className={`transition-transform duration-150 ${
            isOpen ? "rotate-180 text-secondary-600" : "text-secondary-400"
          }`}
        />
      </button>

      <DropdownPanel
        item={item}
        align={align}
        isOpen={isOpen}
        pathname={pathname}
      />
    </div>
  );
}

/* --------------------------------- Mobile ---------------------------------- */

function MobileRow({ label, href, icon, active, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative flex min-h-[48px] items-center gap-3 rounded-lg px-3 py-2.5 transition-colors active:bg-secondary-50"
    >
      <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full bg-primary-600 transition-all duration-150 group-active:h-5" />
      {icon && (
        <Image
          src={icon}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] shrink-0 object-contain opacity-70"
        />
      )}
      <span
        className={`text-[14.5px] ${
          active
            ? "font-semibold text-secondary-900"
            : "font-medium text-secondary-800"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

function MobileAccordionItem({ item, isOpen, onToggle, onNavigate, pathname }) {
  const active = isItemActive(pathname, item);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`block min-h-[48px] rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors active:bg-secondary-50 ${
          active ? "bg-secondary-50 text-secondary-900" : "text-secondary-900"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex min-h-[48px] w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors active:bg-secondary-50 ${
          active ? "bg-secondary-50 text-secondary-900" : "text-secondary-900"
        }`}
      >
        {item.label}
        <ChevronDown
          size={16}
          strokeWidth={2.25}
          className={`transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180 text-secondary-700" : "text-secondary-400"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* Single column always — desktop's columns:2 flag is ignored here */}
          <div className="space-y-0.5 py-1 pl-2">
            {item.children.map((child) => (
              <MobileRow
                key={child.label}
                {...child}
                active={isPathActive(pathname, child.href)}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- Navbar --------------------------------- */

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const closeTimer = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Reset all open/expanded UI state whenever the route changes, so
  // navigation always starts clean (desktop dropdown, mobile drawer,
  // mobile accordion).
  useEffect(() => {
    setDesktopOpenMenu(null);
    setMobileOpenMenu(null);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopOpenMenu(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setDesktopOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopOpenMenu(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setDesktopOpenMenu(null), 150);
  };

  const toggle = (label) =>
    setDesktopOpenMenu((prev) => (prev === label ? null : label));

  return (
    <>
      <PageWrapper
        paddingY="py-0"
        className={`fixed top-0 inset-x-0 z-30 border-b transition-colors duration-300 ${
          scrolled
            ? "border-secondary-900/[0.06] bg-white/85 backdrop-blur-xl"
            : "border-transparent bg-white"
        }`}
        containerClassName="h-[76px] flex items-center justify-between"
      >
        <div className="flex items-center gap-9" ref={navRef}>
          <Link href="/" className="flex items-center">
            <Image
              src={BRAND_LOGO}
              alt="logo"
              width={200}
              height={100}
              priority
              className="h-auto w-[160px] lg:w-[176px]"
            />
          </Link>

          <span
            className="hidden h-6 w-px bg-secondary-200 lg:block"
            aria-hidden="true"
          />

          <nav className="hidden items-center gap-2 lg:flex">
            {NAVBAR_MENU.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                isOpen={desktopOpenMenu === item.label}
                onEnter={() => handleEnter(item.label)}
                onLeave={handleLeave}
                onToggle={() => toggle(item.label)}
                align="left"
                pathname={pathname}
              />
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/contact"
            className="btn btn-primary"
            // className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-sm transition-all duration-150 hover:bg-primary-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            Book a demo
            <ArrowRight size={14} strokeWidth={2.25} />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-secondary-200 text-secondary-700 transition-colors hover:bg-secondary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </PageWrapper>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-secondary-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-80 max-w-[86vw] transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-secondary-100 px-6">
          <Link href="/" className="flex items-center">
            <Image
              src={BRAND_LOGO}
              alt="logo"
              width={120}
              height={80}
              className="w-[150px]"
            />
          </Link>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary-200 transition-colors hover:bg-secondary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            <X size={18} className="text-secondary-700" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          {NAVBAR_MENU.map((item, i) => (
            <div
              key={item.label}
              className={i !== 0 ? "border-t border-secondary-50 pt-1" : ""}
            >
              <MobileAccordionItem
                item={item}
                isOpen={mobileOpenMenu === item.label}
                onToggle={() =>
                  setMobileOpenMenu((prev) =>
                    prev === item.label ? null : item.label,
                  )
                }
                onNavigate={() => setOpen(false)}
                pathname={pathname}
              />
            </div>
          ))}
        </nav>

        <div className="shrink-0 border-t border-secondary-100 px-4 pb-6 pt-4">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="w-full btn btn-primary"
            // className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
          >
            Book a demo
            <ArrowRight size={14} strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </>
  );
}
