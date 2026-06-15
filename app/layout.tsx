import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/app/components/client-providers";
import { BASE_URL } from "./const";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title:
    "Restaurant POS Software in India | Billing & KOT System | iMaker Restro",

  description:
    "iMaker Restro POS is a powerful restaurant billing software with GST, KOT, table management, and inventory. Works offline and helps restaurants run faster and smarter.",

  keywords: [
    "restaurant POS software India",
    "restaurant billing software with GST",
    "restaurant management system",
    "KOT system restaurant",
    "table management restaurant software",
    "offline restaurant POS",
    "fast billing POS system",
    "best POS for restaurant India",
    "restaurant POS with inventory",
    "iMaker Restro POS",
  ],

  authors: [{ name: "iMaker Technology Pvt. Ltd." }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "iMaker Restro POS | Restaurant Billing & Management System",
    description:
      "Manage billing, tables, kitchen orders, and reports with iMaker Restro POS — built for modern restaurants.",
    url: BASE_URL,
    siteName: "iMaker Restro POS",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/Images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "iMaker Restro POS Dashboard Preview",
      },
    ],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#1A0F00]">
        {/* SOFTWARE SCHEMA (VERY IMPORTANT) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "iMaker Restro POS",
              operatingSystem: "Windows",
              applicationCategory: "BusinessApplication",
              description:
                "Restaurant POS software for billing, KOT, table and inventory management.",
              url: BASE_URL,
              publisher: {
                "@type": "Organization",
                name: "iMaker Technology Private Limited",
              },
            }),
          }}
        />

        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "iMaker Technology Private Limited",
              url: BASE_URL,
              logo: `${BASE_URL}/Images/logo-icon.png`,
            }),
          }}
        />

        <ClientProviders>{children}</ClientProviders>

        {/* CookieYes */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/e051748bf16101cfa7f0d75d/script.js"
          strategy="beforeInteractive"
        />

        {/* Live Chat Scripts */}
        <Script
          src="https://office.imaker.technology/im_livechat/loader/1"
          strategy="afterInteractive"
        />

        <Script
          src="https://office.imaker.technology/im_livechat/assets_embed.js"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-85BKEX4SMD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-85BKEX4SMD');
          `}
        </Script>
      </body>
    </html>
  );
}
