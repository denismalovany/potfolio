import Link from "next/link";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2024 {siteData.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href={siteData.linkedin} className="text-gray-400 hover:text-gray-500">
              LinkedIn
            </Link>
            <Link href={`mailto:${siteData.email}`} className="text-gray-400 hover:text-gray-500">
              Email
            </Link>
            <Link href={siteData.resumePdf} className="text-gray-400 hover:text-gray-500">
              Resume PDF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}