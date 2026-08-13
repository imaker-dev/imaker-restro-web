import React from 'react'
import AboutUsPage from '../views/about/about-us-page'
import { seoPages } from '../lib/seo-pages';

export const metadata = seoPages.about;

const Page = () => {
  return <AboutUsPage />
}

export default Page
