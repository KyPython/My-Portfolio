"use client";

import React, { useState } from 'react';
import { Button } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import OnboardingStep from '../../components/OnboardingStep';
import ProgressIndicator from '../../components/ProgressIndicator';

const onboardingSteps = [
  {
    id: 1,
    title: "Welcome to My Portfolio",
    description: "Hi! I'm a versatile developer who crafts tailored solutions that elevate user experiences and drive business success.",
    image: "https://images.unsplash.com/photo-1652105425180-3cc628d303cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx3ZWxjb21lJTIwbGFwdG9wJTIwY29tcHV0ZXIlMjBwZXJzb258ZW58MHwwfHxibHVlfDE3NTU4MjI3NTd8MA&ixlib=rb-4.1.0&q=85",
    imageAlt: "TheRegisti on Unsplash - Modern welcome illustration with person using laptop"
  },
  {
    id: 2,
    title: "Explore My Projects",
    description: "Discover my portfolio of web applications, mobile apps, and development tools. Each project showcases different technologies and problem-solving approaches.",
    features: ["Web Development", "Mobile Apps", "Full-Stack Solutions", "UI/UX Design"]
  },
  {
    id: 3,
    title: "Ready to Get Started?",
    description: "Let's dive into my work and see how I can help bring your ideas to life through innovative digital solutions.",
    cta: true
  }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Redirect to main portfolio
      router.push('/portfolio');
    }
  };

  const handleSkip = () => {
    router.push('/portfolio');
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-(--color-background) flex flex-col">
      {/* Header with Skip Button */}
      <header className="flex justify-between items-center p-6">
        <div className="text-small text-(--color-muted-foreground)">
          Welcome to KyPython's Portfolio
        </div>
        <Button
          onClick={handleSkip}
          className="text-small text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors"
        >
          Skip Tour
        </Button>
      </header>

      {/* Progress Indicator */}
      <div className="px-6 mb-8">
        <ProgressIndicator 
          currentStep={currentStep + 1} 
          totalSteps={onboardingSteps.length} 
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <OnboardingStep 
            step={onboardingSteps[currentStep]}
            isLast={currentStep === onboardingSteps.length - 1}
          />
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="p-6">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-6 py-3 text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep 
                    ? 'bg-(--color-accent)' 
                    : index < currentStep 
                      ? 'bg-(--color-accent)/50' 
                      : 'bg-(--color-border)'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="px-6 py-3 bg-(--color-accent) text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
          </Button>
        </div>
      </footer>
    </div>
  );
}