import { BASE_URL } from "../const";

const siteName = "iMaker Restro";
const defaultOgImage = "/Images/og-image.png";

export function generateSEO({
  title,
  description,
  keywords = [],
  path = "",
  image = defaultOgImage,
  noIndex = false,
}) {
  const url = new URL(path || "/", BASE_URL).toString();
  const imageUrl = new URL(image, BASE_URL).toString();

  return {
    title,
    description,

    ...(keywords.length > 0 ? { keywords } : {}),

    metadataBase: new URL(BASE_URL),

    applicationName: siteName,

    authors: [
      {
        name: "iMaker Technology Private Limited",
      },
    ],

    creator: "iMaker Technology Private Limited",
    publisher: "iMaker Technology Private Limited",

    alternates: {
      canonical: url,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,

      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}