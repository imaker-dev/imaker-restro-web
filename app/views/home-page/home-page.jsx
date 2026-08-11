import HeroSection from "@/app/views/home-page/hero-section";
import AboutUsSection from "@/app/views/home-page/about-us-section";
import DownloadSection from "@/app/views/home-page/download-section";
import Testimonials from "@/app/views/home-page/testimonials";
import FAQSection from "@/app/views/home-page/faq-section";
import ContactUsSection from "@/app/views/home-page/contact-us-section";
import FranchiseMarketplace from "@/app/views/home-page/franchise-marketplace";
import OutletTypesSection from "./components/outlet-type-section";
import NewHero from "./components/new-hero";
import PosFeaturesSection from "./components/pos-feature-section";
import AddonsMarketplaceSection from "./components/addons-marketplace-section";

export default function Homepage() {
  return (
    <>
      {/* <HeroSection /> */}
      <NewHero />
      <OutletTypesSection />
      <PosFeaturesSection />
      <AddonsMarketplaceSection />
      <DownloadSection />
      <FranchiseMarketplace />
      {/* <AboutUsSection /> */}
      {/* <Pricing /> */}
      <FAQSection />
      {/* <Testimonials /> */}
      <ContactUsSection />
    </>
  );
}
