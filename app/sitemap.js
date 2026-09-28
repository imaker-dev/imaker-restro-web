import { BASE_URL } from "./const";
import { getAddons } from "./data/addons";
import { blogs } from "./data/blogs";
import { getAllFeatures } from "./data/features";
import { getIndustries } from "./data/industries";
import FranchiseApi from "./store/api/FranchiseApi";

const STATIC_ROUTES = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/industries",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/features",
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
    path: "/franchises",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly",
  },
];

export default async function sitemap() {
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
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.publishedAt ? new Date(blog.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Franchise pages
  let franchisePages = [];

  try {
    const response = await FranchiseApi.getAllFranchisesApi();
    const franchises = response?.data?.data.franchises || [];

    franchisePages = franchises
      .filter((franchise) => franchise?.slug)
      .map((franchise) => ({
        url: `${BASE_URL}/franchises/${franchise.slug}`,
        lastModified: franchise.updated_at
          ? new Date(franchise.updated_at)
          : now,
        changeFrequency: "monthly",
        priority: 0.8,
      }));
  } catch (error) {
    console.error("Failed to generate franchise sitemap:", error);
  }

  return [
    ...staticPages,
    ...featurePages,
    ...addonPages,
    ...industryPages,
    ...blogPages,
    ...franchisePages,
  ];
}
