import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/app/components/client-providers";
import { BASE_URL } from "./const";
import Script from "next/script";

import { DM_Sans, Poppins } from "next/font/google";
import { seoPages } from "./lib/seo-pages";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = seoPages.home;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${poppins.variable} antialiased`}>
        {/* SOFTWARE SCHEMA (VERY IMPORTANT) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  name: "iMaker Restro",
                  alternateName: "iMaker",
                  url: BASE_URL,
                },

                {
                  "@type": "Organization",
                  "@id": `${BASE_URL}/#organization`,
                  name: "iMaker Technology Private Limited",
                  url: BASE_URL,
                  logo: `${BASE_URL}/Images/logo-icon.png`,
                },

                {
                  "@type": "SoftwareApplication",
                  "@id": `${BASE_URL}/#software`,
                  name: "iMaker Restro",
                  operatingSystem: "Android, iOS, Windows, macOS",
                  applicationCategory: "BusinessApplication",
                  description:
                    "iMaker Restro is restaurant POS and management software for billing, orders, tables, kitchen operations, inventory, customers, reporting, and multi-outlet management.",
                  url: BASE_URL,
                  publisher: {
                    "@id": `${BASE_URL}/#organization`,
                  },
                },
              ],
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
          src="https://office.imaker.technology/im_livechat/loader/3"
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

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-85BKEX4SMD');

            gtag('config', 'AW-18235414628');
          `}
        </Script>
      </body>
    </html>
  );
}
