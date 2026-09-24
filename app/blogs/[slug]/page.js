import React from "react";
import { getBlogBySlug } from "@/app/data/blogs";
import BlogDetailsPage from "@/app/views/blog-details/blog-details-page";
import { generateSEO } from "@/app/lib/seo-config";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | iMaker Restro",
      description: "The requested blog article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return generateSEO({
    title: blog.seo?.title || blog.title,
    description: blog.seo?.description || blog.excerpt,
    keywords: blog.seo?.keywords || blog.tags || [],
    path: `/blogs/${blog.slug}`,
    image: blog.coverImage,
  });
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = getBlogBySlug(slug);

  if (!data) {
    return <div>Blog not found.</div>;
  }

  return <BlogDetailsPage blog={data} />;
};

export default Page;
