import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { caseStudies } from "@/data/caseStudies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}