import Hero from "@/components/Hero";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import ImpactMetrics from "@/components/ImpactMetrics";
import AboutPreview from "@/components/AboutPreview";

export default function Home() {
  return (
    <>
      {/* Mobile: Only show About page */}
      <div className="block sm:hidden">
        <Hero />
        <AboutPreview />
      </div>

      {/* Desktop: Show full homepage */}
      <div className="hidden sm:block">
        <Hero />
        <FeaturedCaseStudies />
        <ImpactMetrics />
        <AboutPreview />
      </div>
    </>
  );
}
