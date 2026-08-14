"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import { BRAND_LOGO, CONTACT_INFO } from "@/app/const";
import { FOOTER_NAVIGATION } from "@/app/config/navigation/footer";

const { pos, addons, outletTypes, company, legal, social, contact } =
  FOOTER_NAVIGATION;

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
        <div className="text-lg font-semibold text-secondary-900">{title}</div>
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
              className="inline-flex items-center text-base text-secondary-400 transition-all duration-200 hover:translate-x-0.5 hover:text-primary-600"
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
        {/* Footer Navigation */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-8">
          <div className="col-span-2">
            <FooterColumn
              title={pos.title}
              links={pos.links}
              columns={pos.columns}
            />
          </div>

          <div className="col-span-2">
            <FooterColumn
              title={addons.title}
              links={addons.links}
              columns={addons.columns}
            />
          </div>

          <div className="col-span-2">
            <FooterColumn
              title={outletTypes.title}
              links={outletTypes.links}
              columns={outletTypes.columns}
            />
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <FooterColumn
              title={company.title}
              links={company.links}
            />
          </div>
        </div>

        {/* Brand + Contact */}
        <div className="mt-12 border-t border-secondary-200 pt-9">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Brand */}
            <div className="flex-1">
              <Image
                src={BRAND_LOGO}
                alt="iMaker Restro"
                width={180}
                height={45}
                className="h-auto w-[180px]"
              />

              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-secondary-500">
                iMaker Restro is an all-in-one restaurant POS and management
                platform that helps businesses manage billing, orders, tables,
                kitchen, inventory, customers, reports, and multiple outlets
                from one system.
              </p>

              {/* Social Links */}
              <div className="mt-5 flex gap-2.5">
                {social.map(({ platform, href }) => {
                  const Icon = SOCIAL_ICONS[platform];

                  if (!Icon) return null;

                  return (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-secondary-200 bg-white text-secondary-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact */}
            <div className="lg:w-[320px] lg:shrink-0">
              <div className="space-y-4">
                {/* Address */}
                <a
                  href={CONTACT_INFO.mapDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get directions to ${CONTACT_INFO.name}`}
                  className="group block"
                >
                  <p className="text-base font-semibold text-secondary-900 transition-colors duration-200 group-hover:text-primary-600">
                    {CONTACT_INFO.name}
                  </p>

                  <p className="mt-1 max-w-sm text-[14px] leading-relaxed text-secondary-500 transition-colors duration-200 group-hover:text-secondary-700">
                    {CONTACT_INFO.address}
                  </p>
                </a>

                {/* Phone + Email */}
                <div className="space-y-2.5">
                  <a
                    href={`tel:${CONTACT_INFO.phones.india.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-[14px] text-secondary-600 transition-colors duration-200 hover:text-primary-600"
                  >
                    <Phone
                      size={15}
                      className="shrink-0 text-secondary-400"
                    />
                    {CONTACT_INFO.phones.india}
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2.5 text-[14px] text-secondary-600 transition-colors duration-200 hover:text-primary-600"
                  >
                    <Mail
                      size={15}
                      className="shrink-0 text-secondary-400"
                    />
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* CTA */}
                <div className="pt-1">
                  <Link href={contact.ctaHref} className="btn btn-primary">
                    {contact.ctaLabel}
                    <ArrowRight size={15} className="shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-secondary-200 pt-5 text-[13px] text-secondary-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} iMaker Restro. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors duration-200 hover:text-primary-600"
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
