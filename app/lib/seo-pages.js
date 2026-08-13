import { generateSEO } from "./seo-config";

export const seoPages = {
  home: generateSEO({
    title: "iMaker Restro | Restaurant POS & Management Software",
    description:
      "Run your restaurant, café, hotel, food court, or multi-outlet business with iMaker Restro. Manage billing, orders, kitchen, inventory, customers, reports, and more.",
    keywords: [
      "restaurant POS software",
      "restaurant management software",
      "restaurant POS system",
      "restaurant billing software",
      "restaurant point of sale software",
    ],
    path: "/",
  }),

  about: generateSEO({
    title: "About iMaker Restro | Restaurant POS & Management Platform",
    description:
      "Discover iMaker Restro, a complete POS and management platform built to help food and hospitality businesses simplify daily operations and manage their business from one system.",
    keywords: [
      "iMaker Restro",
      "restaurant POS company",
      "restaurant management platform",
      "restaurant technology",
      "food business management software",
    ],
    path: "/about",
  }),

  pos: generateSEO({
    title: "Restaurant POS Software | Billing, Orders & Management",
    description:
      "iMaker Restro restaurant POS software brings billing, orders, tables, kitchen operations, inventory, payments, customers, reporting, and multi-branch management into one connected platform.",
    keywords: [
      "restaurant POS software",
      "restaurant POS system",
      "restaurant point of sale software",
      "restaurant billing software",
      "POS software for restaurants",
      "restaurant management software",
      "restaurant order management software",
      "restaurant inventory software",
      "restaurant reporting software",
      "multi outlet restaurant POS",
    ],
    path: "/pos",
  }),

  addons: generateSEO({
    title: "Restaurant POS Add-ons | Extend Your iMaker Restro POS",
    description:
      "Extend iMaker Restro with restaurant POS add-ons for captain ordering, kitchen display, QR self ordering, loyalty, customer feedback, SMS, analytics, and more.",
    keywords: [
      "restaurant POS add-ons",
      "restaurant software add-ons",
      "restaurant POS extensions",
      "captain ordering app",
      "kitchen display system",
      "QR self ordering",
      "restaurant loyalty program",
      "restaurant customer feedback",
      "restaurant analytics",
    ],
    path: "/addons",
  }),

  outlets: generateSEO({
    title: "Restaurant POS Solutions for Every Business Type",
    description:
      "Explore iMaker Restro POS solutions for restaurants, cafés, hotels, food courts, franchises, and multi-outlet businesses with tools built around their operational needs.",
    keywords: [
      "restaurant POS solutions",
      "cafe POS software",
      "hotel restaurant POS",
      "food court POS software",
      "franchise POS software",
      "multi outlet restaurant software",
      "restaurant management solutions",
    ],
    path: "/outlets",
  }),

  contact: generateSEO({
    title: "Contact iMaker Restro | Book a Restaurant POS Demo",
    description:
      "Talk to the iMaker Restro team about restaurant POS software, billing, kitchen operations, inventory, reporting, and multi-outlet management. Request a demo today.",
    keywords: [
      "iMaker Restro contact",
      "restaurant POS demo",
      "restaurant POS software demo",
      "restaurant management software demo",
      "restaurant POS consultation",
      "restaurant software contact",
    ],
    path: "/contact",
  }),

  blogs: generateSEO({
    title: "Restaurant POS & Management Resources | iMaker Restro",
    description:
      "Explore insights and practical guides on restaurant POS, billing, kitchen operations, inventory, restaurant technology, reporting, and business management.",
    keywords: [
      "restaurant POS blog",
      "restaurant management blog",
      "restaurant technology blog",
      "restaurant POS guides",
      "restaurant billing tips",
      "restaurant inventory management",
      "restaurant operations",
      "restaurant management tips",
    ],
    path: "/blogs",
  }),

  franchise: generateSEO({
    title: "Restaurant Franchise Opportunities | Find the Right Franchise",
    description:
      "Explore restaurant and food franchise opportunities in India. Discover suitable franchise brands, compare business options, and find a restaurant franchise that fits your investment and business goals.",
    keywords: [
      "restaurant franchise opportunities",
      "restaurant franchise in India",
      "food franchise opportunities",
      "restaurant franchise business",
      "food business franchise",
      "franchise opportunities in India",
      "restaurant franchise investment",
      "best restaurant franchises",
      "franchise business opportunities",
      "find a restaurant franchise",
    ],
    path: "/franchise",
  }),
};
