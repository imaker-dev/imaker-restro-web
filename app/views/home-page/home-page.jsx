import HeroSection from "@/app/views/home-page/hero-section";
import DownloadSection from "@/app/views/home-page/download-section";
import FAQSection from "@/app/views/home-page/faq-section";
import FranchiseMarketplace from "@/app/views/home-page/franchise-marketplace";
import OutletTypesSection from "./components/outlet-type-section";
import NewHero from "./components/new-hero";
import PosFeaturesSection from "./components/pos-feature-section";
import AddonsMarketplaceSection from "./components/addons-marketplace-section";
import CtaSection from "../layouts/cta-section";
import TestimonialSlider from "./components/testimonial-section";
import PlatformCompatibility from "./components/platform-compatibility";

export default function Homepage() {
  return (
    <>
      {/* Hero */}
      {/* <HeroSection /> */}
      <NewHero />

      {/* Restaurant Types */}
      <OutletTypesSection />

      {/* Core POS Features */}
      <PosFeaturesSection />

      {/* Add-ons */}
      <AddonsMarketplaceSection />

      {/* Platform Compatibility */}
      <PlatformCompatibility />


      {/* FAQ */}
      <FAQSection />

      {/* Franchise / Marketplace */}
      <FranchiseMarketplace />

      {/* <DownloadSection /> */}

      {/* Customer Testimonials */}
      <TestimonialSlider />


      <CtaSection
        eyebrow="READY WHEN YOU ARE"
        title="Run Your Restaurant With One Connected Platform."
        description="Bring billing, orders, kitchen, inventory, insights, and every part of your restaurant operation together with iMaker Restro."
        primaryCta="Book a Free Demo"
        secondaryCta="Talk to Our Team"
      />
    </>
  );
}
