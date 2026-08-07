import { generateSEO } from "./seo-config";

export const seoPages = {
  home: generateSEO({
    title: "Solar Panels, Inverters & Installation Services",

    description:
      "Savior Solar Energy provides complete solar power solutions for residential, commercial, and industrial projects.",

    keywords: [
      "solar panels",
      "solar energy company",
      "solar installation",
      "solar inverter",
      "rooftop solar",
      "solar power solutions",
      "renewable energy",
      "commercial solar",
      "industrial solar",
      "residential solar",
      "solar company India",
    ],

    path: "/",
  }),

  about: generateSEO({
    title: "About Us",

    description:
      "Learn more about Savior Solar Energy and our renewable energy solutions.",

    keywords: [
      "about solar company",
      "solar energy experts",
      "renewable energy company",
      "solar company India",
      "solar panel provider",
      "clean energy solutions",
      "solar EPC company",
    ],

    path: "/about",
  }),

  services: generateSEO({
    title: "Solar Services",

    description:
      "Professional solar panel installation, maintenance, and renewable energy services.",

    keywords: [
      "solar services",
      "solar panel installation",
      "solar maintenance",
      "rooftop solar installation",
      "solar inverter installation",
      "commercial solar services",
      "industrial solar solutions",
      "solar EPC services",
      "renewable energy services",
    ],

    path: "/services",
  }),

  projects: generateSEO({
    title: "Our Projects",

    description:
      "Explore completed solar energy projects delivered by Savior Solar Energy.",

    keywords: [
      "solar projects",
      "completed solar projects",
      "solar installations",
      "commercial solar projects",
      "industrial solar projects",
      "residential solar systems",
      "solar EPC projects",
      "renewable energy projects",
    ],

    path: "/projects",
  }),

  contact: generateSEO({
    title: "Contact Us",

    description:
      "Get in touch with Savior Solar Energy for solar panel installation, rooftop solar systems, and renewable energy solutions.",

    keywords: [
      "contact solar company",
      "solar consultation",
      "solar installation inquiry",
      "solar services India",
      "renewable energy consultation",
      "solar support",
      "solar energy solutions",
    ],

    path: "/contact",
  }),

  schemes: generateSEO({
    title: "Solar Schemes",

    description:
      "Explore solar subsidy programs, government solar schemes, and renewable energy initiatives.",

    keywords: [
      "solar subsidy",
      "government solar schemes",
      "PM solar yojana",
      "solar subsidy India",
      "renewable energy schemes",
      "solar panel subsidy",
      "rooftop solar subsidy",
      "solar government programs",
    ],

    path: "/schemes",
  }),

  blogs: generateSEO({
    title: "Blogs",

    description:
      "Read the latest insights, news, and expert articles on solar panels, renewable energy, rooftop solar systems, solar subsidies, energy savings, and sustainable power solutions.",

    keywords: [
      "solar blog",
      "solar energy articles",
      "renewable energy news",
      "solar panel tips",
      "rooftop solar guide",
      "solar installation blog",
      "solar subsidy updates",
      "clean energy blog",
      "solar power insights",
      "energy saving tips",
    ],

    path: "/blogs",
  }),
};


// restaurant-pos