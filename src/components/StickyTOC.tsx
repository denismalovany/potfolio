interface StickyTOCProps {
  sections: { id: string; title: string }[];
}

export default function StickyTOC({ sections }: StickyTOCProps) {
  return (
    <div className="sticky top-4 bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-indigo-600 hover:text-indigo-500 text-sm"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}