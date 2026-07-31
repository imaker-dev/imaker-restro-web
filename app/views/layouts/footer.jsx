import PageWrapper from "@/app/components/page-wrapper";
import { CONTACT_INFO } from "@/app/const";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const COLS = {
    Product: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/contact" },
      { label: "Request Demo", href: "/contact" },
    ],

    Solutions: [
      { label: "Restaurants", href: "/?type=restaurants#use-cases" },
      { label: "Cafes", href: "/?type=cafes#use-cases" },
      { label: "Cloud Kitchens", href: "/?type=cloud#use-cases" },
    ],

    Company: [
      { label: "About Us", href: "/#about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/#faq" },
    ],

    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  };

  return (
    <PageWrapper
      as="footer"
      id="footer"
      className="bg-gradient-to-b from-[#1A0F00] to-[#120900] relative overflow-hidden"
    >
      {/* Main Footer Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <div className="mb-4">
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
          </div>

          <p className="text-sm font-medium text-white/70 leading-relaxed mb-6 max-w-[260px]">
            The complete restaurant POS platform built for modern Indian food
            businesses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400/30 transition-all group"
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="text-white/70 group-hover:text-amber-400 transition-colors"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {Object.entries(COLS).map(([section, links]) => (
          <div key={section}>
            <h5 className="text-xs font-bold text-white/60 uppercase tracking-[0.14em] mb-4">
              {section}
            </h5>

            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="https://imaker.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white/60 text-center sm:text-left hover:text-white transition-colors"
        >
          © {new Date().getFullYear()} {CONTACT_INFO.name}
        </a>

        <p className="text-sm font-medium text-white/50">
          Made with ♥ in India
        </p>
      </div>
    </PageWrapper>
  );
}
