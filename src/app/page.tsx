"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCard = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  slug: string;
  image: string;
  live?: string;
};

const projects: ProjectCard[] = [
  {
    title: "SupaCRM",
    category: "Web Development",
    description:
      "A full-featured CRM for real estate agents — listing management, automated follow-ups, and analytics.",
    tech: ["React", "Firebase", "Tailwind"],
    slug: "supacrm",
    image: "/images/supacrm.svg",
    live: "https://supacrm.vercel.app/",
  },
  {
    title: "FormFlow",
    category: "Web Development",
    description:
      "SaaS for automating form workflows with secure hosting and CI/CD integration.",
    tech: ["React", "Node.js", "Express", "SCSS"],
    slug: "formflow",
    image: "/images/formflow.svg",
    live: "https://formflow-frontend-phi.vercel.app",
  },
  {
    title: "ReportEngine",
    category: "Web Development",
    description:
      "Automated reporting and dashboards for business analytics; exports, scheduling and insights.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    slug: "report-engine",
    image: "/images/report-engine.svg",
    live: "https://reportengine.vercel.app/",
  },
  {
    title: "SalesBase Frontend",
    category: "Web Development",
    description:
      "Modern CRM frontend with intuitive dashboards and realtime data integrations for enterprise sales teams.",
    tech: ["React", "Tailwind CSS"],
    slug: "salesbase-frontend",
    image: "/images/salesbase-frontend.svg",
    live: "https://salesbase-frontend.vercel.app",
  },
  {
    title: "AlgoClinic",
    category: "Web Development",
    description:
      "Algorithm analysis platform with AI-driven insights, benchmarking and edge-case detection for developers and teams.",
    tech: ["React", "Python", "FastAPI", "Monaco Editor"],
    slug: "algoclinic",
    image: "/images/algoclinic.svg",
    live: "https://algo-clinic.vercel.app",
  },
  {
    title: "SmartScan AI Frontend",
    category: "App Development",
    description:
      "Cross-platform client for AI-powered image captioning — real-time camera, async API and clean UX; deployed as an MVP.",
    tech: ["Expo Router", "React Native Web", "TypeScript"],
    slug: "smartscan-ai-frontend",
    image: "/images/smartscan-ai-frontend.svg",
    live: "https://smartscan-ai-frontend.vercel.app/onboarding",
  },
  {
    title: "Growth Master",
    category: "App Development",
    description:
      "Emotion-forward mobile app for tracking personal growth: daily wins, progress visualisation, and motivating micro-goals (not deployed yet).",
    tech: ["React Native", "TypeScript"],
    slug: "growth-master",
    image: "/images/growth-master.svg",
    live: "",
  },
  {
    title: "StreamEngine",
    category: "Web Development",
    description:
      "Real-time data processing and visualization platform for live dashboards and scalable streaming infrastructure.",
    tech: ["React", "Node.js", "Kafka", "WebSockets"],
    slug: "streamengine",
    image: "/images/streamengine.svg",
    live: "https://stream-engine-silk.vercel.app",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [recommend, setRecommend] = useState<string | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const techs = Array.from(new Set(projects.flatMap((p) => p.tech)));

  let filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);
  if (selectedTech)
    filtered = filtered.filter((p) => p.tech.includes(selectedTech));

  // Personalized recommendation logic (simple session-based)
  const handleCardClick = (project: (typeof projects)[0]) => {
    if (project.category === "Game Development") {
      setRecommend(
        "Since you're interested in game development, you might like my other games!"
      );
    } else if (project.category === "Web Development") {
      setRecommend("Check out more web apps and tools in my portfolio!");
    } else if (project.category === "App Development") {
      setRecommend("Explore more mobile and productivity apps!");
    } else {
      setRecommend(null);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <nav
        aria-label="Project categories"
        className="flex justify-center mb-4 gap-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-semibold ${
              selected === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelected(cat)}
            aria-pressed={selected === cat}
          >
            {cat}
          </button>
        ))}
      </nav>
      <nav
        aria-label="Tech stack filter"
        className="flex justify-center mb-8 gap-2 flex-wrap"
      >
        <button
          className={`px-3 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-xs font-semibold ${
            selectedTech === null
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-blue-700"
          }`}
          onClick={() => setSelectedTech(null)}
          aria-pressed={selectedTech === null}
        >
          All Tech
        </button>
        {techs.map((tech) => (
          <button
            key={tech}
            className={`px-3 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-xs font-semibold ${
              selectedTech === tech
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-blue-700"
            }`}
            onClick={() => setSelectedTech(tech)}
            aria-pressed={selectedTech === tech}
          >
            {tech}
          </button>
        ))}
      </nav>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center focus-within:ring-2 focus-within:ring-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              tabIndex={0}
              aria-label={`${project.title}, ${project.category}`}
              onClick={() => handleCardClick(project)}
            >
              {project.live ? (
                <div className="w-full h-40 mb-4 bg-gray-100 rounded overflow-hidden">
                  <iframe
                    src={project.live}
                    title={project.title}
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={240}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-2 text-gray-700">{project.description}</p>
              <div className="mb-2 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                    aria-label={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-2 w-full">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 text-sm"
                  >
                    Open Live
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      {recommend && (
        <div className="mt-8 flex justify-center">
          <div className="bg-blue-50 border border-blue-200 text-blue-800 px-6 py-4 rounded-lg shadow flex items-center gap-2">
            <span aria-hidden>✨</span>
            <span>{recommend}</span>
            <button
              className="ml-4 px-2 py-1 text-xs bg-blue-200 rounded hover:bg-blue-300"
              onClick={() => setRecommend(null)}
              aria-label="Dismiss recommendation"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </main>
  );
}