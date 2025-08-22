import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

interface ProjectShowcaseSectionProps {
  projects: Project[];
}

const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const handleProjectAction = (project: Project, actionType: string) => {
    setSelectedProject(project);

    if (actionType === "View" && project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else if (actionType === "Explore") {
      // Could open a detailed modal or navigate to project page
      console.log(`Exploring project: ${project.title}`);
    } else if (actionType === "Play" && project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      // Fallback - could show more details or navigate to projects page
      console.log(`${actionType} clicked for project: ${project.title}`);
    }
  };

  const projectActions = [
    {
      text: "View",
      action: (project: Project) => handleProjectAction(project, "View"),
    },
    {
      text: "Explore",
      action: (project: Project) => handleProjectAction(project, "Explore"),
    },
    {
      text: "Play",
      action: (project: Project) => handleProjectAction(project, "Play"),
    },
  ];

  return (
    <section className="px-16 py-20 bg-white" data-section="projects">
      <div className="flex flex-col gap-20">
        <h2 className="heading-section text-(--color-foreground) text-center max-w-4xl mx-auto">
          Explore My Top Projects That Showcase My Development Versatility
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image || "/images/project-placeholder.png"}
              actionText={projectActions[index]?.text || "View"}
              onAction={() => projectActions[index]?.action(project)}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>

        {selectedProject && (
          <div className="mt-8 p-6 bg-(--color-muted) rounded-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">
              Project Selected: {selectedProject.title}
            </h3>
            <p className="text-sm text-(--color-muted-foreground) mb-4">
              {selectedProject.description}
            </p>
            <div className="flex gap-4">
              {selectedProject.liveUrl && (
                <button
                  onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                  className="px-4 py-2 bg-(--color-accent) text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  View Live
                </button>
              )}
              {selectedProject.repoUrl && (
                <button
                  onClick={() => window.open(selectedProject.repoUrl, "_blank")}
                  className="px-4 py-2 border border-(--color-border) rounded-md hover:bg-(--color-muted) transition-colors"
                >
                  View Code
                </button>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
