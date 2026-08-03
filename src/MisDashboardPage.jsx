import { useState } from "react";
import Project1Page from "./Project1Page";
import Project2Page from "./Project2Page";
import Project3Page from "./Project3Page";
import Project4Page from "./Project4Page";
import Project5Page from "./Project5Page";
import Project6Page from "./Project6Page";
import Project7Page from "./Project7Page";
import Project8Page from "./Project8Page";
import Project9Page from "./Project9Page";
import Project10Page from "./Project10Page";

const projects = [
  { id: 1, name: "IKI Project", title: "Project 1", logo: "/slides/logo1.svg" },
  { id: 2, name: "Srijon", title: "Project 2", logo: "/slides/logo2.svg" },
  {
    id: 3,
    name: "Ashash Project",
    title: "Project 3",
    logo: "/slides/logo3.svg",
  },
  { id: 4, name: "SIRRM", title: "Project 4", logo: "/slides/logo4.svg" },
  { id: 5, name: "FSTIP", title: "Project 5", logo: "/slides/logo5.svg" },
  { id: 6, name: "Grow School", title: "Project 6", logo: "/slides/logo6.svg" },
  {
    id: 7,
    name: "BNF Bangladesh",
    title: "Project 7",
    logo: "/slides/logo7.svg",
  },
  {
    id: 8,
    name: "Sapath Project",
    title: "Project 8",
    logo: "/slides/logo8.svg",
  },
  { id: 9, name: "ARC", title: "Project 9", logo: "/slides/logo9.svg" },
  {
    id: 10,
    name: "Nagorikota",
    title: "Project 10",
    logo: "/slides/logo10.svg",
  },
];

const projectAccents = [
  {
    border: "border-t-4 border-green-500",
    title: "text-green-600",
    badge: "bg-green-100 text-green-700",
  },
  {
    border: "border-t-4 border-sky-500",
    title: "text-sky-600",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    border: "border-t-4 border-amber-500",
    title: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    border: "border-t-4 border-violet-500",
    title: "text-violet-600",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    border: "border-t-4 border-rose-500",
    title: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    border: "border-t-4 border-cyan-500",
    title: "text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    border: "border-t-4 border-indigo-500",
    title: "text-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    border: "border-t-4 border-pink-500",
    title: "text-pink-600",
    badge: "bg-pink-100 text-pink-700",
  },
  {
    border: "border-t-4 border-teal-500",
    title: "text-teal-600",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    border: "border-t-4 border-orange-500",
    title: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
  },
];

function MisDashboardPage({ onBack }) {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const projectPages = {
    1: <Project1Page onBack={() => setActiveProjectId(null)} />,
    2: <Project2Page onBack={() => setActiveProjectId(null)} />,
    3: <Project3Page onBack={() => setActiveProjectId(null)} />,
    4: <Project4Page onBack={() => setActiveProjectId(null)} />,
    5: <Project5Page onBack={() => setActiveProjectId(null)} />,
    6: <Project6Page onBack={() => setActiveProjectId(null)} />,
    7: <Project7Page onBack={() => setActiveProjectId(null)} />,
    8: <Project8Page onBack={() => setActiveProjectId(null)} />,
    9: <Project9Page onBack={() => setActiveProjectId(null)} />,
    10: <Project10Page onBack={() => setActiveProjectId(null)} />,
  };

  if (activeProjectId) {
    return projectPages[activeProjectId];
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 px-6 py-8 text-white shadow-lg sm:px-4 sm:py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
              Agrogoti Sangstha
            </p>
            <h1 className="text-3xl font-bold sm:text-2xl">MIS Dashboard</h1>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14 sm:px-4 sm:py-10">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 max-lg:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`flex flex-col items-center overflow-hidden rounded-xl bg-white p-5 pb-6 text-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl ${projectAccents[index].border}`}
            >
              <span
                className={`mb-3 rounded-full px-3 py-1 text-xs font-semibold ${projectAccents[index].badge}`}
              >
                {project.title}
              </span>
              <img
                src={project.logo}
                alt={project.name}
                className="mb-4 h-[140px] w-[140px] rounded-lg object-cover ring-2 ring-white"
              />
              <h3
                className={`mb-3 text-lg font-bold leading-snug ${projectAccents[index].title}`}
              >
                {project.name}
              </h3>
              <button
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-1.5 text-[13px] font-bold tracking-wide text-white transition-opacity hover:opacity-85"
              >
                Dashboard
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MisDashboardPage;
