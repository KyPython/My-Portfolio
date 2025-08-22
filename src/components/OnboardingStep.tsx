import React from 'react';
import { Button } from '@headlessui/react';

interface OnboardingStepProps {
  step: {
    id: number;
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    features?: string[];
    cta?: boolean;
  };
  isLast: boolean;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({ step, isLast }) => {
  return (
    <div className="text-center space-y-8">
      {/* Image */}
      {step.image && (
        <div className="flex justify-center">
          <img
            src={step.image}
            alt={step.imageAlt || step.title}
            className="w-full max-w-md h-64 object-cover rounded-lg shadow-md"
            width="400"
            height="256"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-6">
        <h1 className="heading-hero text-(--color-foreground)">
          {step.title}
        </h1>
        
        <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
          {step.description}
        </p>

        {/* Features List */}
        {step.features && (
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mt-8">
            {step.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-(--color-muted) rounded-lg"
              >
                <div className="w-6 h-6 bg-(--color-accent) rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <span className="text-small font-medium text-(--color-foreground)">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        {step.cta && (
          <div className="space-y-4 mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 bg-(--color-accent) text-white rounded-md hover:bg-blue-600 transition-colors">
                View Portfolio
              </Button>
              <Button className="px-8 py-3 border border-(--color-border) rounded-md hover:bg-(--color-muted) transition-colors">
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingStep;