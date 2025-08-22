import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  onAction?: () => void;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  icon,
  title,
  description,
  actionText,
  onAction
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        {icon}
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
  );
};

export default ProcessCard;