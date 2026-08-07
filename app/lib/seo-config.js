const siteName = "Savior Solar Energy";
import {BASE_URL} from '../const.js';

export function generateSEO({
  title,
  description,
  keywords = [],
  path = "",
  image = "/Images/og-image.png",
}) {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,

    keywords,

    creator: "iMaker Technology Pvt. Ltd.",
    publisher: "iMaker Technology Pvt. Ltd.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],

      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
