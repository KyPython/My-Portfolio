"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Real Estate CRM Web App",
    category: "Web Development",
    description:
      "A full-stack application that helps real estate agents automate processes and manage client relationships.",
    tech: ["React", "Node.js", "Firebase"],
    slug: "real-estate-crm",
    image: "https://via.placeholder.com/600x240?text=Project+1",
  },
  {
    title: "Indie Puzzle Game",
    category: "Game Development",
    description:
      "A Unity-based puzzle game with multiplayer logic and creative mechanics.",
    tech: ["Unity", "C#"],
    slug: "indie-puzzle-game",
    image: "https://via.placeholder.com/600x240?text=Project+2",
  },
  {
    title: "Mobile Task Manager",
    category: "App Development",
    description:
      "A React Native app for managing daily tasks with cloud sync and notifications.",
    tech: ["React Native", "Supabase"],
    slug: "mobile-task-manager",
    image: "https://via.placeholder.com/600x240?text=Project+3",
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
        "Since you’re interested in game development, you might like my other games!"
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
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={240}
                className="w-full h-40 object-cover rounded mb-4"
              />
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
              <Link
                href={`/projects/${project.slug}`}
                className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                View Details
              </Link>
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
