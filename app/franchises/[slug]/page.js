import React from "react";
import FranchiseDetailsPage from "@/app/views/franchise-details/franchise-details-page";
import { generateSEO } from "@/app/lib/seo-config";
import FranchiseApi from "@/app/store/api/FranchiseApi";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const response = await FranchiseApi.getFranchiseByIdApi(slug);
    const franchise = response?.data?.data;

    if (!franchise) {
      return {
        title: "Franchise Not Found | iMaker Restro",
        description:
          "The requested franchise opportunity could not be found on iMaker Restro.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const keywords = [
      `${franchise.name} franchise`,
      `${franchise.name} franchise opportunity`,
      "restaurant franchise",
      "restaurant franchise opportunity",
      "food franchise",
      "food franchise opportunity",
      "restaurant business opportunity",
      "iMaker Restro franchise",
      ...(franchise.tags || []).map((tag) => tag.replace(/_/g, " ")),
    ];

    return generateSEO({
      title: `${franchise.name} Franchise | iMaker Restro`,
      description: franchise.short_description,
      keywords,
      path: `/franchises/${franchise.slug}`,
      image: franchise.cover_image_url,
    });
  } catch (error) {
    console.error("Failed to fetch franchise metadata:", error);

    return {
      title: "Franchise | iMaker Restro",
      description:
        "Explore restaurant franchise opportunities with iMaker Restro.",
    };
  }
}

const Page = async ({ params }) => {
  const { slug } = await params;

  return <FranchiseDetailsPage slug={slug} />;
};

export default Page;
