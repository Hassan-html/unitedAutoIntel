import HeroSection from "@/app/components/HeroSection";
import type { Metadata } from "next";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import CompanyLogos from "@/app/components/CompanyLogos";
import Testimonials from "@/app/components/Testimonials";
import BackToTopButton from "@/app/components/BackToTopButton";
import SocialButtons from "@/app/components/SocialButtons";
import FeaturedProducts from "./components/FeaturedProduct";
import products from "@/utils/productData";
import StatsSection from "@/app/components/StateSection";
import FAQSection from "@/app/components/FAQ";
import FlipCardSection from "@/app/components/companies";
import ContactSection from "./components/MapComponent";

export const metadata: Metadata = {
  title: "United Auto Intl - Premium Auto Spare Parts in Dubai",
  description:
    "Your trusted source for premium auto spare parts in Dubai. Explore a wide range of quality parts for all major automotive brands.",
  keywords:
    "Auto Spare Parts, Dubai, Car Parts, United Auto Intl, Honda, Tesla",
  openGraph: {
    title: "United Auto Intl - Premium Auto Spare Parts in Dubai",
    description: "Your trusted source for premium auto spare parts in Dubai.",
    url: "https://www.unitedautointl.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@unitedautointl",
    title: "United Auto Intl - Premium Auto Spare Parts in Dubai",
    description:
      "Explore our wide range of quality auto spare parts for all major brands. Trusted in Dubai.",
    images: "/images/twitter-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.unitedautointl.com/",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts
        products={products.filter((product) => product.featured)}
      />
      <FlipCardSection />

      <WhyChooseUs />
      <StatsSection />
      <CompanyLogos />
      <ContactSection />
      <FAQSection />
      <Testimonials />
      <BackToTopButton />
      <SocialButtons />
    </main>
  );
}
