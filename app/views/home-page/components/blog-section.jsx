import PageWrapper from "@/app/components/page-wrapper";
import React from "react";
import SectionHeading from "../../layouts/section-heading";
import { getFeaturedBlogs } from "@/app/data/blogs";
import BlogCard from "../../blogs-page/components/blog-card";

const BlogSection = () => {
  const featuredBlogs = getFeaturedBlogs();
  console.log(featuredBlogs)
  return (
    <PageWrapper>
      <SectionHeading
        eyebrow="FROM OUR BLOG"
        title="Smart Reads for Smarter Restaurant Owners"
        highlight="Restaurant Owners"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
    </PageWrapper>
  );
};

export default BlogSection;
