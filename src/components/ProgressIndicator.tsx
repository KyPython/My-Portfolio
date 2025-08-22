import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-small text-(--color-muted-foreground)">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-small text-(--color-muted-foreground)">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      
      <div className="w-full bg-(--color-border) rounded-full h-2">
        <div 
          className="bg-(--color-accent) h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;