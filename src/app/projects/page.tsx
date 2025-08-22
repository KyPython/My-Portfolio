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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Recommendations */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer border border-gray-200 hover:shadow-lg transition-all"
              onClick={() => setModalProject(project)}
            >
              {project.liveUrl ? (
                <div className="rounded mb-3 overflow-hidden h-40 bg-gray-100">
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Preview Not Available</span>
                </div>
              )}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    {project.featured ? 'Featured' : 'Project'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech && project.tech.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-3 pt-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      className="text-gray-600 hover:text-gray-800 text-sm font-medium"
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
        <h2 className="text-xl font-semibold mb-4">
          {selectedCategory === "All" && selectedType === "All" 
            ? "All Projects" 
            : `Filtered Projects (${filteredProjects.length})`}
        </h2>
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects match your current filters.</p>
            <Button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
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
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer border border-gray-200 hover:shadow-lg transition-all"
                onClick={() => setModalProject(project)}
              >
                {project.liveUrl ? (
                  <div className="rounded mb-3 overflow-hidden h-40 bg-gray-100">
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Preview Not Available</span>
                  </div>
                )}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                      {project.featured ? 'Featured' : 'Project'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech && project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        className="text-gray-600 hover:text-gray-800 text-sm font-medium"
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