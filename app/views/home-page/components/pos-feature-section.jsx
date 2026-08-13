"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeading from "../../layouts/section-heading";
import { getFeaturedPosFeatures } from "@/app/data/features";
import FeatureRow from "../../features/components/feature-row";

const PosFeaturesSection = () => {
  const features = getFeaturedPosFeatures();
  if (features.length === 0) return null;

  return (
    <PageWrapper className="bg-white">
      <SectionHeading
        eyebrow={"CORE POS FEATURES"}
        title={"Everything You Need to Run Your Restaurant."}
        highlight={"Run Your Restaurant."}
      />

      <div>
        {features.map((item, idx) => (
          <FeatureRow key={idx} index={idx} feature={item} />
        ))}
      </div>

      <div className="flex justify-center  pt-14 sm:pt-16">
        <Link
          href={"/features"}
          className="btn btn-primary"
        >
          View All Features
          <ArrowRight
            size={15}
            className="transition-transform motion-reduce:transition-none group-hover:translate-x-1"
          />
        </Link>
      </div>
    </PageWrapper>
  );
};

export default PosFeaturesSection;
