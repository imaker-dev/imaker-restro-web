// footer.js

import { getAddonsMenuItems } from "@/app/data/addons";
import { getPosMenuItems } from "@/app/data/features";
import { getIndustryMenuItems } from "@/app/data/industries";

export const FOOTER_NAVIGATION = {
  pos: {
    title: "Features",
    links: getPosMenuItems(),
  },

  addons: {
    title: "Add-ons",
    links: getAddonsMenuItems(),
  },

  outletTypes: {
    title: "Outlet Types",
    columns: 2,
    wide: true,
    links: getIndustryMenuItems(),
  },

  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blogs", href: "/blogs" },
    ],
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
