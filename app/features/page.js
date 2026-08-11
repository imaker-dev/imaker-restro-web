import React from 'react'
import FeaturesPage from '../views/features/features-page'
import { getAllFeatures } from '../data/features';

const Page = () => {
  const data = getAllFeatures();
  return <FeaturesPage data={data}/>
}

export default Page
