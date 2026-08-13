import { BASE_URL } from "./const";
import { getAddons } from "./data/addons";
import { getAllFeatures } from "./data/features";
import { getIndustries } from "./data/industries";

const STATIC_ROUTES = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/pos",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/addons",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/outlets",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/pricing",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/blogs",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/franchise",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly",
  },
];

export default function sitemap() {
  const now = new Date();

  const staticPages = STATIC_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );

  const featurePages = getAllFeatures().map((feature) => ({
    url: `${BASE_URL}/features/${feature.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const addonPages = getAddons().map((addon) => ({
    url: `${BASE_URL}/addons/${addon.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryPages = getIndustries().map((industry) => ({
    url: `${BASE_URL}/outlets/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...featurePages, ...addonPages, ...industryPages];
}
