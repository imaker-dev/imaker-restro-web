import React from 'react'
import { seoPages } from '../lib/seo-pages';
import IndustriesPage from '../views/industries/industries-page';

export const metadata = seoPages.outlets;

const Page = () => {
  return <IndustriesPage />
}

export default Page
