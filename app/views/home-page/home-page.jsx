import HeroSection from "@/app/views/home-page/hero-section";
import UseCasesSection from "@/app/views/home-page/use-cases-section";
import FeaturesSection from "@/app/views/home-page/features-section";
import HowItWorksSection from "@/app/views/home-page/how-it-work-section";
import AboutUsSection from "@/app/views/home-page/about-us-section";
import DownloadSection from "@/app/views/home-page/download-section";
import CTABanner from "@/app/views/home-page/cta-banner";
import Testimonials from "@/app/views/home-page/testimonials";
import Pricing from "@/app/views/home-page/pricing";
import FAQSection from "@/app/views/home-page/faq-section";
import ContactUsSection from "@/app/views/home-page/contact-us-section";
import BenefitsSection from "@/app/views/home-page/benefits-section";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <UseCasesSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTABanner />
      <HowItWorksSection />
      <DownloadSection />
      <AboutUsSection />
      <Pricing />
      <FAQSection />
      <Testimonials />
      <ContactUsSection />
    </>
  );
}
