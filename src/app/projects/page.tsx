"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Real Estate CRM Web App",
    category: "Web Development",
    description:
      "A full-stack application that helps real estate agents automate processes and manage client relationships.",
    tech: ["React", "Node.js", "Firebase"],
    slug: "real-estate-crm",
    image: "/project1.jpg",
  },
  {
    title: "Indie Puzzle Game",
    category: "Game Development",
    description:
      "A Unity-based puzzle game with multiplayer logic and creative mechanics.",
    tech: ["Unity", "C#"],
    slug: "indie-puzzle-game",
    image: "/project2.jpg",
  },
  {
    title: "Mobile Task Manager",
    category: "App Development",
    description:
      "A React Native app for managing daily tasks with cloud sync and notifications.",
    tech: ["React Native", "Supabase"],
    slug: "mobile-task-manager",
    image: "/project3.jpg",
  },
];

  const [selected, setSelected] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [viewed, setViewed] = useState<string[]>([]);

  useEffect(() => {
    // Track viewed categories in localStorage
    if (selected !== "All") {
      setViewed((prev) => {
        const updated = prev.includes(selected) ? prev : [...prev, selected];
        localStorage.setItem("viewedCategories", JSON.stringify(updated));
        return updated;
      });
    }
  }, [selected]);

  useEffect(() => {
    // Load viewed categories from localStorage
    const stored = localStorage.getItem("viewedCategories");
    if (stored) setViewed(JSON.parse(stored));
  }, []);

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

  // Personalized recommendations: show projects from categories user viewed but not currently selected
  const recommended = projects.filter(
    (p) => viewed.includes(p.category) && p.category !== selected
  );

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
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
              aria-label={`${project.title}, ${project.category}`}
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

      {recommended.length > 0 && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">You might also like:</h3>
          <div className="grid gap-6">
            {recommended.map((project) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-lg shadow p-4"
              >
                <h4 className="font-bold mb-1">{project.title}</h4>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs mb-1">{project.category}</span>
                <p className="mb-1">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
