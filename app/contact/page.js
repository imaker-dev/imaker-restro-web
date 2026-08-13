import React from "react";
import ContactPage from "../views/contact/contact-page";
import { seoPages } from "../lib/seo-pages";

export const metadata = seoPages.contact;

const Page = () => {
  return <ContactPage />;
};

export default Page;
