"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import { BRAND_LOGO } from "@/app/const";
import { FOOTER_NAVIGATION } from "@/app/config/navigation/footer";

const { pos, addons, outletTypes, company, legal, social, contact } = FOOTER_NAVIGATION;

const SOCIAL_ICONS = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

function FooterColumn({ title, links, columns = 1 }) {
  return (
    <div>
      <div className="mb-4">
        <div className="font-semibold text-secondary-900">
          {title}
        </div>
        <div className="relative mt-2 h-px w-full bg-secondary-200">
          <span className="absolute left-0 top-0 h-px w-6 lg:w-10 bg-primary-500" />
        </div>
      </div>

      <ul
        className={clsx(
          "gap-x-6 gap-y-2.5",
          columns === 2 ? "grid grid-cols-2" : "space-y-2.5",
        )}
      >
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="inline-flex items-center text-[13.5px] text-secondary-400 transition-all duration-200 hover:translate-x-0.5 hover:text-primary-600"
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
        {/* Nav — fixed 7-track grid: Features(2) + Add-ons(2) + Outlet Types(2)
            + Company(1). Same span ratios collapse cleanly at each breakpoint
            instead of columns resizing to their content. */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-8">
          <div className="col-span-2">
            <FooterColumn title={pos.title} links={pos.links} columns={pos.columns} />
          </div>
          <div className="col-span-2">
            <FooterColumn title={addons.title} links={addons.links} columns={addons.columns} />
          </div>
          <div className="col-span-2">
            <FooterColumn
              title={outletTypes.title}
              links={outletTypes.links}
              columns={outletTypes.columns}
            />
          </div>
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <FooterColumn title={company.title} links={company.links} />
          </div>
        </div>

        {/* Company / contact strip */}
        <div className="mt-12 flex flex-col gap-8 border-t border-secondary-200 pt-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Image src={BRAND_LOGO} alt="iMaker Restro" width={160} height={40} />

            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-secondary-500">
              The all-in-one restaurant management platform for modern
              restaurants.
            </p>

            <div className="mt-5 flex gap-2.5">
              {social.map(({ platform, href }) => {
                const Icon = SOCIAL_ICONS[platform];
                if (!Icon) return null;

                return (
                  <a
                    key={platform}
                    href={href}
                    aria-label={platform}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary-200 bg-white text-secondary-500 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:items-end">
            <div className="space-y-2.5">
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 text-[13.5px] text-secondary-600 transition hover:text-primary-600"
              >
                <Phone size={15} className="shrink-0 text-secondary-400" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-[13.5px] text-secondary-600 transition hover:text-primary-600"
              >
                <Mail size={15} className="shrink-0 text-secondary-400" />
                {contact.email}
              </a>
              <Link
              href={contact.ctaHref}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-secondary-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary-800"
            >
              {contact.ctaLabel}
            </Link>
            </div>

            
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-secondary-200 pt-5 text-[13px] text-secondary-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} iMaker Restro. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map(({ label, href }) => (
              <Link key={label} href={href} className="transition hover:text-primary-600">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}