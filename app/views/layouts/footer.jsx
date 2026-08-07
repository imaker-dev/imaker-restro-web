"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const POS = [
  { label: "Billing", href: "/pos/billing" },
  { label: "Inventory", href: "/pos/inventory" },
  { label: "Reporting", href: "/pos/reporting" },
  { label: "Online Ordering", href: "/pos/online-ordering" },
  { label: "CRM", href: "/pos/crm" },
  { label: "Menu", href: "/pos/menu" },
  { label: "Pricing", href: "/pricing" },
];

const ADDONS = [
  { label: "Captain Ordering App", href: "/add-ons/captain-ordering-app" },
  { label: "Scan & Order", href: "/add-ons/scan-and-order" },
  { label: "Restaurant Website", href: "/add-ons/restaurant-website" },
  { label: "Kitchen Display System", href: "/add-ons/kitchen-display-system" },
  { label: "Loyalty Program", href: "/add-ons/loyalty-program" },
  { label: "SMS Service", href: "/add-ons/sms-service" },
  { label: "Analytics & Insights", href: "/add-ons/analytics-insights" },
];

const OUTLET_TYPES = [
  { label: "Fine Dine", href: "/solutions/fine-dine" },
  { label: "Cafe", href: "/solutions/cafe" },
  { label: "Cloud Kitchen", href: "/solutions/cloud-kitchen" },
  { label: "Bakery", href: "/solutions/bakery" },
  { label: "Pizzeria", href: "/solutions/pizzeria" },
  { label: "QSR", href: "/solutions/qsr" },
  { label: "Food Court", href: "/solutions/food-court" },
  { label: "Ice Cream", href: "/solutions/ice-cream" },
  { label: "Bar & Brewery", href: "/solutions/bar-brewery" },
  { label: "Large Chains", href: "/solutions/large-chains" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Reseller", href: "/reseller" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

const SOCIALS = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
];

function FooterColumn({ title, links, columns = 1, wide = false }) {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <div className="mb-6">
        <div className="text-[15px] font-semibold text-secondary-900">
          {title}
        </div>
        <div className="relative mt-3 h-px w-full bg-secondary-200">
          <span className="absolute left-0 top-0 h-px w-8 bg-primary-500" />
        </div>
      </div>

      <ul
        className={clsx(
          "gap-x-8 gap-y-3.5",
          columns === 2 ? "grid grid-cols-2" : "space-y-3.5",
        )}
      >
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="inline-flex items-center text-[14px] text-secondary-400 transition-all duration-200 hover:translate-x-0.5 hover:text-primary-600"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-secondary-100 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-y-14 gap-x-8 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Image
              src="/Images/imaker-logo.svg"
              alt="iMaker Restro"
              width={180}
              height={48}
            />

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary-600">
              The all-in-one restaurant management platform helping modern
              restaurants simplify operations and grow confidently.
            </p>

            <div className="mt-8 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary-200 bg-white text-secondary-500 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav — POS(1) + Add-ons(1) + Outlet Types(2) + Company(1) = 5 tracks, one row */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            <FooterColumn title="POS" links={POS} />
            <FooterColumn title="Add-ons" links={ADDONS} />
            <FooterColumn title="Outlet Types" links={OUTLET_TYPES} columns={2} wide />
            <FooterColumn title="Company" links={COMPANY} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-secondary-200 pt-6 text-sm text-secondary-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} iMaker Restro. All rights reserved.</p>

          <div className="flex gap-6">
            {LEGAL.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition hover:text-primary-600"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}