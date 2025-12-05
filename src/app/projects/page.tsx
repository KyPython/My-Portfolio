"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@headlessui/react';
import { mockRootProps } from '../../portfolioMockData';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [modalProject, setModalProject] = useState<any>(null);

  const projects = mockRootProps.projects;
  
  // Get featured projects - this was the missing variable causing the error
  const featured = useMemo(() => 
    projects.filter(project => project.featured),
    [projects]
  );

  // Get filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
      const typeMatch = selectedType === "All" || (selectedType === "Featured" ? project.featured : !project.featured);
      return categoryMatch && typeMatch;
    });
  }, [projects, selectedCategory, selectedType]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedType("All");
  };

  // Get unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
    return ["All", ...uniqueCategories];
  }, [projects]);

  return (
    <div className="container mx-auto px-4 py-8 bg-(--color-background)">
      {/* Filter Controls */}
      <section className="mb-8">
        <div className="bg-white dark:bg-(--color-muted) rounded-lg shadow-sm border border-(--color-border) p-6 mb-8">
          <h2 className="heading-card text-(--color-foreground) mb-4">Filter Projects</h2>
          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <label className="block text-body font-medium text-(--color-foreground) mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md text-body font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-(--color-accent) text-(--color-accent-foreground)"
                        : "bg-(--color-muted) text-(--color-foreground) hover:bg-(--color-secondary) border border-(--color-border)"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {/* Type Filter */}
            <div>
              <label className="block text-body font-medium text-(--color-foreground) mb-2">
                Type
              </label>
              <div className="flex flex-wrap gap-2">
                {["All", "Featured", "Regular"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-md text-body font-medium transition-colors ${
                      selectedType === type
                        ? "bg-(--color-accent) text-(--color-accent-foreground)"
                        : "bg-(--color-muted) text-(--color-foreground) hover:bg-(--color-secondary) border border-(--color-border)"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            {/* Reset Button */}
            {(selectedCategory !== "All" || selectedType !== "All") && (
              <div>
                <Button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-(--color-secondary) text-(--color-foreground) rounded-md hover:bg-(--color-muted) transition-colors text-body font-medium border border-(--color-border)"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-8">
        <h2 className="heading-section text-(--color-foreground) mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-(--color-muted) rounded-lg shadow-sm p-4 cursor-pointer border border-(--color-border) hover:shadow-md transition-all"
              onClick={() => setModalProject(project)}
            >
              {project.liveUrl ? (
                <div className="rounded mb-3 overflow-hidden h-40 bg-(--color-muted)">
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="w-full h-full border-0"
                    suppressHydrationWarning
                  />
                </div>
              ) : (
                <div className="h-40 bg-(--color-muted) rounded mb-3 flex items-center justify-center">
                  <span className="text-small text-(--color-muted-foreground)">Preview Not Available</span>
                </div>
              )}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-(--color-muted) text-(--color-foreground) text-small rounded-full font-medium">
                    {project.category}
                  </span>
                  <span className="px-2 py-1 bg-(--color-secondary) text-(--color-foreground) text-small rounded-full font-medium">
                    {project.featured ? 'Featured' : 'Project'}
                  </span>
                </div>
                <h3 className="heading-card text-(--color-foreground)">{project.title}</h3>
                <p className="text-body text-(--color-muted-foreground) line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-(--color-muted) text-(--color-foreground) px-2 py-1 rounded text-small font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech && project.tech.length > 3 && (
                    <span className="text-small text-(--color-muted-foreground) px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-3 pt-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="text-(--color-accent) hover:text-(--color-primary) text-body font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      className="text-(--color-muted-foreground) hover:text-(--color-foreground) text-body font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filtered Projects */}
      <section>
        <h2 className="heading-section text-(--color-foreground) mb-4">
          {selectedCategory === "All" && selectedType === "All" 
            ? "All Projects" 
            : `Filtered Projects (${filteredProjects.length})`}
        </h2>
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-body-large text-(--color-muted-foreground)">No projects match your current filters.</p>
            <Button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-(--color-accent) text-(--color-accent-foreground) rounded-md hover:opacity-90 transition-colors text-body font-medium"
            >
              View All Projects
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-(--color-muted) rounded-lg shadow-sm p-4 cursor-pointer border border-(--color-border) hover:shadow-md transition-all"
                onClick={() => setModalProject(project)}
              >
                {project.liveUrl ? (
                  <div className="rounded mb-3 overflow-hidden h-40 bg-(--color-muted)">
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      suppressHydrationWarning
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-(--color-muted) rounded mb-3 flex items-center justify-center">
                    <span className="text-small text-(--color-muted-foreground)">Preview Not Available</span>
                  </div>
                )}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-(--color-muted) text-(--color-foreground) text-small rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-(--color-secondary) text-(--color-foreground) text-small rounded-full font-medium">
                      {project.featured ? 'Featured' : 'Project'}
                    </span>
                  </div>
                  <h3 className="heading-card text-(--color-foreground)">{project.title}</h3>
                  <p className="text-body text-(--color-muted-foreground) line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-(--color-muted) text-(--color-foreground) px-2 py-1 rounded text-small font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech && project.tech.length > 3 && (
                      <span className="text-small text-(--color-muted-foreground) px-2 py-1">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="text-(--color-accent) hover:text-(--color-primary) text-body font-medium transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        className="text-(--color-muted-foreground) hover:text-(--color-foreground) text-body font-medium transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Source Code
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}