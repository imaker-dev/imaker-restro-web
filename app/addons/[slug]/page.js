// import AddonsDetailsPage from "@/app/views/addons-details/addons-details-page";
// import React from "react";

// const Page = () => {
//   const scanAndOrderAddon = {
//     slug: "scan-and-order",

//     seo: {
//       title: "QR Scan & Order | Restaurant Self Ordering | iMaker Restro",

//       description:
//         "Let customers scan a table QR code, browse your menu, and place orders from their phones with iMaker Restro QR self ordering.",

//       keywords: [
//         "QR ordering system",
//         "restaurant QR ordering",
//         "restaurant self ordering",
//         "QR self ordering",
//         "scan and order restaurant",
//         "restaurant QR menu",
//         "table QR ordering",
//         "self ordering system for restaurants",
//       ],

//       canonical: "/addons/scan-and-order",
//     },

//     hero: {
//       eyebrow: "QR SELF ORDERING",

//       title: "Turn Every Table Into",

//       highlightedTitle: "An Ordering Point",

//       description:
//         "Let customers scan a QR code, browse your menu, and place orders directly from their phones while your team manages every order through iMaker Restro.",

//       primaryCta: {
//         label: "Book a Free Demo",
//         href: "/contact",
//       },

//       secondaryCta: {
//         label: "See How It Works",
//         href: "#how-it-works",
//       },

//       visual: {
//         type: "screenshot",
//         src: "/images/addons/scan-and-order/hero.webp",
//         alt: "iMaker Restro QR self ordering interface showing a digital restaurant menu",
//       },

//       trustLine: "Part of the iMaker Restro restaurant POS ecosystem",
//     },

//     overview: {
//       eyebrow: "QR SELF ORDERING",

//       title: "A Simpler Way to Order From the Table",

//       description:
//         "Give customers a direct way to access your menu and place orders from their phones while keeping your restaurant team connected to the ordering workflow.",

//       visual: {
//         type: "screenshot",
//         src: "/images/addons/scan-and-order/overview.webp",
//         alt: "iMaker Restro QR self ordering experience for restaurant customers",
//       },

//       highlights: [
//         {
//           title: "Table QR Codes",
//           description:
//             "Give every table a simple QR code that customers can scan to start ordering.",
//         },
//         {
//           title: "Customer Self Ordering",
//           description:
//             "Let customers browse the menu and place orders directly from their phones.",
//         },
//         {
//           title: "Flexible Order Acceptance",
//           description:
//             "Choose whether incoming self-orders are accepted automatically or manually.",
//         },
//       ],
//     },

//     workflow: {
//       id: "how-it-works",

//       eyebrow: "HOW IT WORKS",

//       title: "From Table QR to Order",

//       description:
//         "A straightforward self-ordering experience for customers and your restaurant team.",

//       steps: [
//         {
//           number: "01",
//           shortTitle: "Scan",
//           title: "Scan the Table QR",

//           description: "Customers scan the QR code assigned to their table.",

//           visual: {
//             type: "screenshot",
//             src: "/images/addons/scan-and-order/step-scan.webp",
//             alt: "Customer scanning an iMaker Restro table QR code",
//           },
//         },

//         {
//           number: "02",
//           shortTitle: "Browse",
//           title: "Browse the Menu",

//           description: "Customers explore the available menu from their phone.",

//           visual: {
//             type: "screenshot",
//             src: "/images/addons/scan-and-order/step-menu.webp",
//             alt: "Restaurant menu displayed through iMaker Restro QR ordering",
//           },
//         },

//         {
//           number: "03",
//           shortTitle: "Order",
//           title: "Place the Order",

//           description: "Customers select their items and submit the order.",

//           visual: {
//             type: "screenshot",
//             src: "/images/addons/scan-and-order/step-order.webp",
//             alt: "Customer placing an order through iMaker Restro QR self ordering",
//           },
//         },

//         {
//           number: "04",
//           shortTitle: "Accept",
//           title: "Accept the Order",

//           description:
//             "Your restaurant accepts the incoming order automatically or manually.",

//           visual: {
//             type: "screenshot",
//             src: "/images/addons/scan-and-order/step-accept.webp",
//             alt: "iMaker Restro self-order acceptance workflow",
//           },
//         },
//       ],
//     },

//     showcase: {
//       eyebrow: "PRODUCT EXPERIENCE",

//       title: "See QR Self Ordering in Action",

//       description:
//         "Explore the key parts of the iMaker Restro self-ordering experience.",

//       items: [
//         {
//           id: "table-qr",

//           number: "01",

//           eyebrow: "TABLE QR",

//           title: "Every Table Gets Its Own QR",

//           description:
//             "Give customers a simple entry point to your menu with a QR code assigned to their table.",

//           visual: {
//             type: "screenshot",
//             src: "/images/addons/scan-and-order/table-qr.webp",
//             alt: "iMaker Restro table QR code for customer self ordering",
//           },

//           points: [
//             "Table-specific QR codes",
//             "Easy customer access",
//             "Designed for dine-in ordering",
//           ],
//         },

//         {
//           id: "digital-menu",

//           number: "02",

//           eyebrow: "DIGITAL MENU",

//           title: "Let Customers Browse Before They Order",

//           description:
//             "Customers can explore your available menu through their phones before selecting and submitting their order.",

//           visual: {
//             type: "screenshot",
//             src: "/images/addons/scan-and-order/digital-menu.webp",
//             alt: "iMaker Restro digital menu for QR self ordering",
//           },

//           points: [
//             "Mobile-friendly menu experience",
//             "Browse available items",
//             "Customer-led ordering",
//           ],
//         },

//         {
//           id: "order-acceptance",

//           number: "03",

//           eyebrow: "ORDER ACCEPTANCE",

//           title: "Choose How Orders Are Accepted",

//           description:
//             "Control how self-orders enter your operation with automatic or manual order acceptance.",

//           visual: {
//             type: "screenshot",
//             src: "/images/addons/scan-and-order/order-acceptance.webp",
//             alt: "iMaker Restro self-order acceptance settings",
//           },

//           points: [
//             "Automatic order acceptance",
//             "Manual order acceptance",
//             "Connected order workflow",
//           ],
//         },
//       ],
//     },

//     capabilities: {
//       eyebrow: "WHAT YOU GET",

//       title: "Everything You Need for QR Self Ordering",

//       description:
//         "Simple tools that give customers an easier way to order while keeping your team in control.",

//       items: [
//         {
//           title: "Table QR Codes",
//           description:
//             "Assign QR codes to restaurant tables so customers can start ordering from their phones.",
//         },

//         {
//           title: "Customer Self Ordering",
//           description:
//             "Allow customers to browse the menu and place their own orders.",
//         },

//         {
//           title: "Automatic Acceptance",
//           description:
//             "Allow eligible self-orders to be accepted automatically.",
//         },

//         {
//           title: "Manual Acceptance",
//           description:
//             "Review and accept incoming self-orders before they enter the workflow.",
//         },
//       ],
//     },

//     benefits: {
//       eyebrow: "WHY IT MATTERS",

//       title: "Better Ordering for Customers. More Control for Your Team.",

//       description:
//         "QR self ordering creates another ordering channel while keeping your restaurant team connected to the operation.",

//       visual: {
//         type: "screenshot",
//         src: "/images/addons/scan-and-order/benefits.webp",
//         alt: "iMaker Restro QR self ordering connected restaurant workflow",
//       },

//       items: [
//         {
//           title: "Reduce Ordering Waits",
//           description:
//             "Customers can begin exploring the menu as soon as they scan their table QR code.",
//         },

//         {
//           title: "Give Customers More Control",
//           description:
//             "Let customers browse and submit their selections directly from their phones.",
//         },

//         {
//           title: "Support Flexible Acceptance",
//           description:
//             "Choose automatic or manual acceptance based on how your business operates.",
//         },

//         {
//           title: "Keep Ordering Connected",
//           description:
//             "Bring self-orders into the wider iMaker Restro ordering workflow.",
//         },
//       ],
//     },

//     useCases: {
//       eyebrow: "WHERE IT FITS",

//       title: "Built for Different Dine-In Experiences",

//       items: [
//         {
//           title: "Dine-In Service",

//           description:
//             "Give customers a quick way to access the menu and place orders from their tables.",

//           visual: {
//             type: "image",
//             src: "/images/addons/scan-and-order/dine-in.webp",
//             alt: "QR self ordering experience for dine-in customers",
//           },
//         },

//         {
//           title: "Busy Service Hours",

//           description:
//             "Provide another ordering channel when your team is handling a high volume of customers.",

//           visual: {
//             type: "image",
//             src: "/images/addons/scan-and-order/busy-hours.webp",
//             alt: "Restaurant using QR self ordering during busy service",
//           },
//         },

//         {
//           title: "Customer-Led Ordering",

//           description:
//             "Give customers a more independent way to browse and submit their selections.",

//           visual: {
//             type: "image",
//             src: "/images/addons/scan-and-order/customer-ordering.webp",
//             alt: "Customer independently ordering from a restaurant table",
//           },
//         },
//       ],
//     },

//     faq: {
//       eyebrow: "FAQ",

//       title: "Questions About QR Self Ordering",

//       questions: [
//         {
//           question: "What is QR self ordering?",

//           answer:
//             "QR self ordering allows customers to scan a QR code assigned to their table, browse the menu, and place their order directly from their phone.",
//         },

//         {
//           question: "Does every table get a QR code?",

//           answer:
//             "Yes. iMaker Restro supports table QR codes for the self-ordering experience.",
//         },

//         {
//           question: "Can customers place orders themselves?",

//           answer:
//             "Yes. Customers can browse the menu and place orders directly through the QR self-ordering experience.",
//         },

//         {
//           question: "Can we manually accept QR orders?",

//           answer:
//             "Yes. iMaker Restro supports both automatic and manual order acceptance.",
//         },

//         {
//           question: "Does QR self ordering work with iMaker Restro?",

//           answer:
//             "Yes. QR self ordering is part of the iMaker Restro ecosystem and works with its restaurant ordering workflow.",
//         },
//       ],
//     },

//     relatedAddons: {
//       eyebrow: "EXPLORE MORE",

//       title: "Build a More Connected Operation",

//       description:
//         "Combine QR self ordering with other iMaker Restro capabilities to create a more connected restaurant workflow.",

//       items: [
//         {
//           title: "Captain Ordering App",

//           description:
//             "Give your service team a mobile way to take orders, send KOTs, and track order status.",

//           href: "/addons/captain-ordering-app",

//           visual: {
//             type: "image",
//             src: "/images/addons/captain-app/card.webp",
//             alt: "iMaker Restro Captain Ordering App",
//           },
//         },

//         {
//           title: "Kitchen Display System",

//           description:
//             "Keep kitchen teams connected to incoming orders and preparation status.",

//           href: "/addons/kitchen-display-system",

//           visual: {
//             type: "image",
//             src: "/images/addons/kitchen-display-system/card.webp",
//             alt: "iMaker Restro Kitchen Display System",
//           },
//         },

//         {
//           title: "Restaurant Loyalty Program",

//           description:
//             "Create stronger customer relationships with a connected loyalty experience.",

//           href: "/addons/restaurant-loyalty-program",

//           visual: {
//             type: "image",
//             src: "/images/addons/loyalty-program/card.webp",
//             alt: "iMaker Restro restaurant loyalty program",
//           },
//         },
//       ],
//     },

//     finalCta: {
//       eyebrow: "MAKE ORDERING EASIER",

//       title: "Give Customers a Simpler Way to Order",

//       description:
//         "See how iMaker Restro QR Self Ordering can help you create a more convenient table ordering experience while keeping your team connected.",

//       primaryCta: {
//         label: "Book a Free Demo",
//         href: "/contact",
//       },

//       secondaryCta: {
//         label: "Explore iMaker Restro",
//         href: "/pos",
//       },

//       visual: {
//         type: "screenshot",
//         src: "/images/addons/scan-and-order/cta.webp",
//         alt: "iMaker Restro QR self ordering product interface",
//       },
//     },
//   };

//   return <AddonsDetailsPage data={scanAndOrderAddon} />;
// };

// export default Page;


import { getAddonsBySlug } from "@/app/data/addons";
import { generateSEO } from "@/app/lib/seo-config";
import AddonsDetailsPage from "@/app/views/addons-details/addons-details-page";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const addon = await getAddonsBySlug(slug);

  if (!addon) {
    return {};
  }

  return generateSEO(addon.seo);
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = await getAddonsBySlug(slug);

  if (!data) {
    return <div>Addon not found.</div>;
  }

  return <AddonsDetailsPage data={data} />;
};

export default Page;
