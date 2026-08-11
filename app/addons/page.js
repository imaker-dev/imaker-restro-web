import React from 'react'
import AddonsPage from '../views/addons/addons-page'
import { getAddons } from '../data/addons'

const Page = () => {
    const addons = getAddons();
  return <AddonsPage data={addons}/>
}

export default Page
