import { getAddonsBySlug } from "@/app/data/addons";
import { generateSEO } from "@/app/lib/seo-config";
import AddonsDetailsPage from "@/app/views/addons-details/addons-details-page";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const addon = await getAddonsBySlug(slug);

  if (!addon) {
    return {};
  }

  return generateSEO({
    ...addon.seo,
    path: `/addons/${slug}`,
    image: addon.hero?.visual?.src,
  });
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
