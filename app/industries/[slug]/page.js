import { getIndustryBySlug } from "@/app/data/industries";
import { generateSEO } from "@/app/lib/seo-config";
import IndustryDetailsPage from "@/app/views/industries-details/industries-details-page";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return {};
  }

  return generateSEO(industry.seo);
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = await getIndustryBySlug(slug);

  if (!data) {
    return <div>Industry not found.</div>;
  }

  return <IndustryDetailsPage data={data} />;
};

export default Page;
