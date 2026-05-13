import Link from "next/link";
import { siteData } from "@/data/site";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h1>
        <p className="text-lg text-gray-600 mb-8">{siteData.cta}</p>
        <div className="space-y-4">
          <div>
            <a
              href={`mailto:${siteData.email}`}
              className="text-indigo-600 hover:text-indigo-500 text-lg font-medium"
            >
              {siteData.email}
            </a>
          </div>
          <div>
            <Link
              href={siteData.linkedin}
              className="text-indigo-600 hover:text-indigo-500 text-lg font-medium"
            >
              LinkedIn Profile
            </Link>
          </div>
          <div>
            <Link
              href={siteData.resumePdf}
              className="text-indigo-600 hover:text-indigo-500 text-lg font-medium"
            >
              Download Resume PDF
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}