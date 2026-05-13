import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group block bg-white rounded-lg shadow-md overflow-hidden transition ring-1 ring-slate-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <Image
        src={study.thumbnail}
        alt={study.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-sm text-slate-500 mb-4">
          <span className="rounded-full bg-slate-100 px-3 py-1">{study.product}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">{study.platform}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
        <p className="text-gray-600 mt-3">{study.summary}</p>
        <div className="mt-5 grid gap-2 text-sm text-gray-500">
          <p><strong>Role:</strong> {study.role}</p>
          <p><strong>Timeframe:</strong> {study.timeframe}</p>
          <p><strong>Impact:</strong> {study.impactTeaser}</p>
        </div>
        <p className="mt-6 inline-flex items-center text-indigo-600 group-hover:text-indigo-500 font-medium">
          View Case Study →
        </p>
      </div>
    </Link>
  );
}