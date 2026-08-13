// footer.js

import { CONTACT_INFO } from "@/app/const";
import { getAddonsMenuItems } from "@/app/data/addons";
import { getPosMenuItems } from "@/app/data/features";
import { getIndustryMenuItems } from "@/app/data/industries";

export const FOOTER_NAVIGATION = {
  pos: {
    title: "Features",
    columns: 2,
    links: getPosMenuItems(),
  },

  addons: {
    title: "Add-ons",
    columns: 2,
    links: getAddonsMenuItems(),
  },

  outletTypes: {
    title: "Outlet Types",
    columns: 2,
    links: getIndustryMenuItems(),
  },

  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blogs", href: "/blogs" },
    ],
  },

  contact: {
    phone: CONTACT_INFO.phones.india,
    email: CONTACT_INFO.email,
    ctaLabel: "Book a Demo",
    ctaHref: "/contact",
  },

  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookies", href: "/cookies" },
  ],

  social: [
    { platform: "twitter", href: "#" },
    { platform: "linkedin", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "facebook", href: "#" },
  ],
};