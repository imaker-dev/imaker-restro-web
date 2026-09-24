import React from "react";
import BlogsPage from "../views/blogs-page/blogs-page";
import { seoPages } from "../lib/seo-pages";

export const metadata = seoPages.blogs;

const Page = () => {
  return <BlogsPage />;
};

export default Page;
