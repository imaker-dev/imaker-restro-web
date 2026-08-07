import FeatureDetailsPage from "@/app/views/feature-details/feature-details-page";
import React from "react";

const data = {
  hero: {
    eyebrow: "Restaurant Billing Software",
    title: "Restaurant Billing Software That",
    highlightedTitle: "Keeps Every Order Moving",
    description:
      "Simplify restaurant billing with a fast, intuitive POS that helps you process dine-in, takeaway, and delivery orders while maintaining accurate pricing, taxes, and payment records.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "Watch Product Tour",
    image: "/images/features/billing/hero.webp",
  },

  problems: {
    eyebrow: "Business Challenges",
    title: "Billing Should Support Service, Not Slow It Down",
    description:
      "A slow billing process affects customer experience and restaurant efficiency. iMaker Restro helps your team complete transactions quickly while keeping billing accurate and organized.",
    items: [
      {
        problem: "Long customer queues during busy hours.",
        solution: "Speed up checkout with a streamlined billing interface.",
      },
      {
        problem: "Manual pricing or tax mistakes.",
        solution: "Manage pricing and GST settings from one place.",
      },
      {
        problem: "Different order types create confusion.",
        solution:
          "Handle dine-in, takeaway, and delivery from one billing screen.",
      },
      {
        problem: "Managers lack sales visibility.",
        solution: "Access real-time billing reports throughout the day.",
      },
    ],
  },

  screens: [
    {
      id: "billing-screen",
      focus: "Billing",
      title: "Fast Restaurant Billing",
      description:
        "Complete dine-in, takeaway, and delivery orders from one streamlined billing interface designed for speed and accuracy.",
      layout: "right",
      image: "/images/features/billing/billing-screen.webp",
      highlights: [
        {
          title: "Quick Item Search",
          description: "Find menu items instantly.",
        },
        {
          title: "Category Navigation",
          description: "Browse menu categories effortlessly.",
        },
        {
          title: "Current Order",
          description: "Review and update orders in real time.",
        },
        {
          title: "Discount Management",
          description: "Apply offers during checkout.",
        },
        {
          title: "GST Billing",
          description: "Generate GST-compliant invoices.",
        },
        {
          title: "Hold & Resume Bills",
          description: "Continue pending orders anytime.",
        },
      ],
    },
    {
      id: "payment-screen",
      focus: "Checkout",
      title: "Flexible Payment Experience",
      description:
        "Accept multiple payment methods while keeping every transaction organized and easy to manage.",
      layout: "left",
      image: "/images/features/billing/payment-screen.webp",
      highlights: [
        {
          title: "Cash Payments",
          description: "Record cash transactions quickly.",
        },
        {
          title: "Card Payments",
          description: "Support card-based payments.",
        },
        {
          title: "UPI & Digital Wallets",
          description: "Accept popular digital payment methods.",
        },
        {
          title: "Split Payments",
          description: "Combine multiple payment methods in one bill.",
        },
        {
          title: "Receipt Preview",
          description: "Review invoices before printing.",
        },
        {
          title: "Customer Details",
          description: "Save customer information with each bill.",
        },
      ],
    },
  ],

  workflow: {
    eyebrow: "Workflow",
    title: "Simple Billing from Order to Payment",
    steps: [
      {
        icon: "ShoppingCart",
        title: "Create Order",
        description: "Add menu items to the bill.",
      },
      {
        icon: "Tag",
        title: "Apply Discounts",
        description: "Add offers or custom pricing.",
      },
      {
        icon: "CreditCard",
        title: "Accept Payment",
        description: "Cash, card, UPI, or split payment.",
      },
      {
        icon: "Receipt",
        title: "Generate Receipt",
        description: "Print or share the invoice instantly.",
      },
      {
        icon: "BarChart3",
        title: "Update Reports",
        description: "Sales reports update automatically.",
      },
    ],
  },

  analytics: {
    eyebrow: "Reports & Analytics",
    title: "Monitor Every Transaction with Confidence",
    description:
      "Track restaurant performance through live dashboards that help you make informed business decisions.",
    image: "/images/features/billing/analytics-dashboard.webp",
    insights: [
      {
        title: "Sales Summary",
        description: "Monitor daily revenue and transactions.",
      },
      {
        title: "Payment Reports",
        description: "Review collections by payment method.",
      },
      {
        title: "Top Selling Items",
        description: "Identify your best-performing menu items.",
      },
      {
        title: "GST Reports",
        description: "Access tax and billing summaries.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions",
    questions: [
      {
        question:
          "Can I manage dine-in, takeaway, and delivery billing together?",
        answer:
          "Yes. iMaker Restro lets you manage multiple order types from one billing interface.",
      },
      {
        question: "Does the software support GST billing?",
        answer:
          "Yes. Configure GST settings and generate GST-compliant invoices.",
      },
      {
        question: "Which payment methods are supported?",
        answer:
          "Cash, cards, UPI, digital wallets, and split payments are supported.",
      },
      {
        question: "Can I track billing reports in real time?",
        answer:
          "Yes. Built-in dashboards provide real-time visibility into sales and billing activity.",
      },
    ],
  },

  cta: {
    title: "Ready to Simplify Restaurant Billing?",
    description:
      "See how iMaker Restro helps restaurants bill faster, improve billing accuracy, and manage daily operations from one unified platform.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "Talk to Our Team",
  },
};
const Page = () => {
  return <FeatureDetailsPage data={data} />;
};

export default Page;
