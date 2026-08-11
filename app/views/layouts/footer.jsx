"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import { BRAND_LOGO } from "@/app/const";
import { FOOTER_NAVIGATION } from "@/app/config/navigation/footer";

const { pos, addons, outletTypes, company, legal, social } = FOOTER_NAVIGATION;

const SOCIALS = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
];

const SOCIAL_ICONS = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

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
    <PageWrapper className="border-t border-secondary-100 bg-secondary-50">
      <div>
        <div className="grid gap-y-14 gap-x-8 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Image
              src={BRAND_LOGO}
              alt="iMaker Restro"
              width={200}
              height={100}
            />

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-secondary-600">
              The all-in-one restaurant management platform helping modern
              restaurants simplify operations and grow confidently.
            </p>

            <div className="mt-8 flex gap-3">
              {social.map(({ platform, href }) => {
                const Icon = SOCIAL_ICONS[platform];

                if (!Icon) return null;

                return (
                  <a
                    key={platform}
                    href={href}
                    aria-label={platform}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary-200 bg-white text-secondary-500 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav — POS(1) + Add-ons(1) + Outlet Types(2) + Company(1) = 5 tracks, one row */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            <FooterColumn title={pos.title} links={pos.links} />

            <FooterColumn title={addons.title} links={addons.links} />

            <FooterColumn
              title={outletTypes.title}
              links={outletTypes.links}
              columns={outletTypes.columns}
              wide={outletTypes.wide}
            />

            <FooterColumn title={company.title} links={company.links} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-secondary-200 pt-6 text-sm text-secondary-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} iMaker Restro. All rights reserved.
          </p>

          <div className="flex gap-6">
            {legal.map(({ label, href }) => (
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
    </PageWrapper>
  );
}
