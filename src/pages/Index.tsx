import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProductSection from "@/components/ProductSection";
import TargetSection from "@/components/TargetSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { useEffect } from "react";
import { trackViewContent } from "@/utils/fbPixel";

const Index = () => {
  useEffect(() => {
    // Track page view for the landing page
    trackViewContent("Studio21 Landing Page");
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <ProductSection />
      <TargetSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
