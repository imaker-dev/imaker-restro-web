import PageWrapper from "@/app/components/page-wrapper";
import React from "react";
import SectionHeading from "../../layouts/section-heading";

const BlogSection = () => {
  return (
    <PageWrapper>
      <SectionHeading
        eyebrow="FROM OUR BLOG"
        title="Smart Reads for Smarter Restaurant Owners"
        highlight="Restaurant Owners"
      />
    </PageWrapper>
  );
};

export default BlogSection;
