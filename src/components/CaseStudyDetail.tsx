import Image from "next/image";
import StickyTOC from "./StickyTOC";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyDetailProps {
  study: CaseStudy;
}

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const sections = [
    { id: "tldr", title: "TL;DR" },
    { id: "problem", title: "Problem" },
    { id: "context", title: "Context" },
    { id: "business-goal", title: "Business Goal" },
    { id: "my-role", title: "My Role" },
    { id: "team", title: "Team" },
    { id: "constraints", title: "Constraints" },
    { id: "process", title: "Process" },
    { id: "research-insights", title: "Research & Insights" },
    { id: "key-decisions", title: "Key Decisions" },
    { id: "solution", title: "Solution" },
    { id: "screens", title: "Screens" },
    { id: "outcomes", title: "Outcomes" },
    { id: "learnings", title: "Learnings" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <StickyTOC sections={sections} />
        </div>
        <div className="lg:col-span-3">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-indigo-600 mb-4">{study.product} · {study.platform} · {study.role}</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{study.title}</h1>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-3">Problem</p>
                <p className="text-gray-700">{study.problem}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-3">Impact</p>
                <p className="text-gray-700">{study.impactTeaser}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-2">Timeframe</p>
                <p className="text-gray-700">{study.timeframe}</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-2">Team</p>
                <p className="text-gray-700">{study.team}</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-2">Role</p>
                <p className="text-gray-700">{study.myRole}</p>
              </div>
            </div>
          </div>

          <section id="tldr" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">TL;DR</h2>
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-gray-600">{study.tldr}</p>
            </div>
          </section>

          <section id="problem" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Problem</h2>
            <p className="text-gray-600">{study.problem}</p>
          </section>

          <section id="context" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Context</h2>
            <p className="text-gray-600">{study.context}</p>
          </section>

          <section id="business-goal" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Goal</h2>
            <p className="text-gray-600">{study.businessGoal}</p>
          </section>

          <section id="my-role" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Role</h2>
            <p className="text-gray-600">{study.myRole}</p>
          </section>

          <section id="team" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Team</h2>
            <p className="text-gray-600">{study.team}</p>
          </section>

          <section id="constraints" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Constraints</h2>
            <p className="text-gray-600">{study.constraints}</p>
          </section>

          <section id="process" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Process</h2>
            <p className="text-gray-600">{study.process}</p>
          </section>

          <section id="research-insights" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research & Insights</h2>
            <p className="text-gray-600">{study.researchInsights}</p>
          </section>

          <section id="key-decisions" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Decisions</h2>
            <p className="text-gray-600">{study.keyDecisions}</p>
          </section>

          <section id="solution" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solution</h2>
            <p className="text-gray-600">{study.solution}</p>
          </section>

          <section id="screens" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Screens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.screens.map((screen, index) => (
                <Image
                  key={index}
                  src={screen}
                  alt={`Screen ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>
          </section>

          <section id="outcomes" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Outcomes</h2>
            <p className="text-gray-600">{study.outcomes}</p>
          </section>

          <section id="learnings" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learnings</h2>
            <p className="text-gray-600">{study.learnings}</p>
          </section>
        </div>
      </div>
    </div>
  );
}