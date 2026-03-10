import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/app/components/client-providers";

export const metadata: Metadata = {
  title: "iMaker Restro POS | Smart Restaurant Billing & POS Software",
  description:
    "iMaker Restro POS helps restaurants manage billing, tables, kitchen orders, and reports from one powerful POS system. Simple setup, fast billing, and real-time insights for modern restaurants.",

  keywords: [
    "restaurant POS",
    "restaurant billing software",
    "restaurant management system",
    "POS for restaurant India",
    "GST billing POS",
    "restaurant billing software India",
    "iMaker Restro POS",
  ],

  authors: [{ name: "iMaker Technology Pvt. Ltd." }],

  openGraph: {
    title: "iMaker Restro POS | Restaurant Billing & Management System",
    description:
      "Manage billing, tables, kitchen orders, and reports with iMaker Restro POS — built for modern restaurants.",
    type: "website",
    locale: "en_IN",
    siteName: "iMaker Restro POS",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#1A0F00]">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}