import Link from "next/link";
import Button from "./Button";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          {siteData.name}
        </h1>
        <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl">
          {siteData.title}
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          {siteData.positioning}
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500">
          {siteData.valueProp}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 text-sm font-medium">
            B2B SaaS & fintech
          </span>
          <span className="rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium">
            Product-led growth
          </span>
          <span className="rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium">
            UX strategy & execution
          </span>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="hidden sm:block">
            <Button href="/portfolio" variant="primary">
              View Case Studies
            </Button>
          </div>
          <Button
            href="/contact"
            variant="secondary"
            className="bg-indigo-600 text-white hover:bg-indigo-700 sm:bg-white sm:text-indigo-600 sm:border-indigo-600 sm:hover:bg-indigo-50"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}