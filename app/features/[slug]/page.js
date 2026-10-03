import { getFeatureBySlug } from "@/app/data/features";
import { generateSEO } from "@/app/lib/seo-config";
import FeatureDetailsPage from "@/app/views/feature-details/feature-details-page";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const feature = await getFeatureBySlug(slug);

  if (!feature) {
    return {};
  }

  return generateSEO({
    ...feature.seo,
    path: `/features/${slug}`,
    image: feature.hero?.image,
  });
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = await getFeatureBySlug(slug);

  if (!data) {
    return <div>Addon not found.</div>;
  }

  return <FeatureDetailsPage data={data} />;
};

export default Page;
