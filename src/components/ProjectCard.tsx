import React from 'react';
import Image from 'next/image';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  actionText: string;
  onAction?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  actionText,
  onAction
}) => {
  return (
    <div className="flex flex-col gap-8">
      <Image
        src={image}
        alt={title}
        width={395}
        height={240}
        className="w-full h-60 object-cover rounded-lg"
      />
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="heading-card text-(--color-foreground)">
            {title}
          </h3>
          <p className="text-body text-(--color-foreground)">
            {description}
          </p>
        </div>
        
        <button
          onClick={onAction}
          className="flex items-center gap-2 text-body text-(--color-foreground) hover:text-(--color-accent) transition-colors self-start"
        >
          {actionText}
          <ArrowRightIcon width={7} height={12} color="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;