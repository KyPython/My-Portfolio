import React from "react";
import Image from "next/image";
import ArrowRightIcon from "./icons/ArrowRightIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  actionText?: string;
  onAction?: () => void;
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  actionText,
  onAction,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="flex flex-col gap-8">
      {liveUrl ? (
        <div className="w-full h-60 mb-2 bg-(--color-muted) rounded-lg overflow-hidden">
          <iframe
            src={liveUrl}
            title={title}
            className="w-full h-full border-0"
            suppressHydrationWarning
          />
        </div>
      ) : (
        <Image
          src={image}
          alt={title}
          width={395}
          height={240}
          className="w-full h-60 object-cover rounded-lg"
        />
      )}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="heading-card text-(--color-foreground)">{title}</h3>
          <p className="text-body text-(--color-foreground)">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-(--color-accent) text-(--color-accent-foreground) rounded hover:opacity-90 text-small transition-opacity"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-(--color-border) rounded hover:bg-(--color-muted) text-small transition-colors"
            >
              Source Code
            </a>
          )}
          {!liveUrl && !repoUrl && onAction && (
            <button
              onClick={onAction}
              className="flex items-center gap-2 text-body text-(--color-foreground) hover:text-(--color-accent) transition-colors self-start"
            >
              {actionText}
              <ArrowRightIcon width={7} height={12} color="currentColor" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
