import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import PorfolioSection from "./sections/PorfolioSection";
import BrandsSection from "./sections/BrandsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--primary-blue)] text-white">
      <HeroSection />
      <AboutSection />
      <PorfolioSection />
      <BrandsSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
