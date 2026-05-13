import Image from "next/image";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-600 mb-8">{aboutData.bio}</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Philosophy</h2>
          <p className="text-gray-600 mb-8">{aboutData.philosophy}</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Tools</h2>
          <ul className="text-gray-600 mb-8">
            {aboutData.skills.map((skill) => (
              <li key={skill} className="mb-2">• {skill}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Domains & Strengths</h2>
          <p className="text-gray-600 mb-4"><strong>Domains:</strong> {aboutData.domains.join(", ")}</p>
          <p className="text-gray-600"><strong>Strengths:</strong> {aboutData.strengths.join(", ")}</p>
        </div>
        <div>
          <Image
            src={aboutData.portrait}
            alt="Portrait"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Career Timeline</h2>
        <div className="space-y-4">
          {aboutData.timeline.map((item) => (
            <div key={item.year} className="flex">
              <div className="w-24 text-gray-500 font-medium">{item.year}</div>
              <div>
                <div className="font-semibold text-gray-900">{item.role}</div>
                <div className="text-gray-600">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}