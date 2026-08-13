import React from 'react'
import FeaturesPage from '../views/features/features-page'
import { getAllFeatures } from '../data/features';
import { seoPages } from '../lib/seo-pages';

export const metadata = seoPages.pos;

const Page = () => {
  const data = getAllFeatures();
  return <FeaturesPage data={data}/>
}

export default Page
