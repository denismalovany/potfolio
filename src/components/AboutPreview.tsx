import Link from "next/link";
import { aboutData } from "@/data/about";

export default function AboutPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{aboutData.bio}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-600 mb-2">Specialization</p>
              <p className="text-gray-700">B2B SaaS, fintech, and workflow experiences</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-600 mb-2">Role</p>
              <p className="text-gray-700">Lead product design, research-informed strategy, and execution</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-600 mb-2">Impact</p>
              <p className="text-gray-700">Faster workflows, clearer decision-making, stronger product adoption</p>
            </div>
          </div>
          <Link
            href="/about"
            className="mt-6 inline-block text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}