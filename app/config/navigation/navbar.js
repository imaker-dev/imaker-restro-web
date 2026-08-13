import { getAddonsMenuItems } from "@/app/data/addons";
import { getPosMenuItems } from "@/app/data/features";
import { getIndustryMenuItems } from "@/app/data/industries";

// navbar.js
export const NAVBAR_MENU = [
  {
    label: "Features",
    href: "/features",
    columns: 2,
    children: getPosMenuItems(),
  },
  {
    label: "Add-ons",
    href: "/addons",
    columns: 2,
    children: getAddonsMenuItems(),
  },
  {
    label: "Outlet Types",
    href: "#",
    columns: 2,
    children: getIndustryMenuItems(),
  },
  // { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About", href: "/about" },
      { label: "Blogs", href: "/blogs" },
      {
        label: "Contact",
        href: "/contact",
      },
      { label: "Find a Franchise", href: "/franchises" },
    ],
  },
];
