import Link from "next/link";
import Image from "next/image";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function FeaturedCaseStudies() {
  const featured = caseStudies.slice(0, 3); // Top 3

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}