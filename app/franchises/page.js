import React from 'react'
import FranchisesPage from '../views/franchises/franchises-page'
import { seoPages } from '../lib/seo-pages';

export const metadata = seoPages.franchise;

const Page = () => {
  return <FranchisesPage />
}

export default Page
