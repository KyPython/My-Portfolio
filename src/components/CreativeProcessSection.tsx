"use client";

import React, { useState } from 'react';
import ProcessCard from './ProcessCard';
import IdeaIcon from './icons/IdeaIcon';
import SketchIcon from './icons/SketchIcon';
import ResearchIcon from './icons/ResearchIcon';

const CreativeProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const processSteps = [
    {
      icon: <IdeaIcon width={41} height={41} color="#000000" />,
      title: "From Ideas to Reality: The Research and Hypotheses That Drive Innovation",
      description: "Dive into the messy yet fascinating journey of project development.",
      actionText: "Learn",
      details: "I start every project with thorough research and hypothesis formation. This involves understanding user needs, market gaps, and technical constraints to build a solid foundation for innovation."
    },
    {
      icon: <SketchIcon width={37} height={37} color="#000000" />,
      title: "Visualizing Concepts: Rough Sketches and Scribbles That Sparked Ideas",
      description: "See how initial sketches evolve into fully realized projects.",
      actionText: "View",
      details: "Through wireframes, mockups, and prototypes, I transform abstract ideas into tangible designs. This iterative process helps refine the user experience and technical architecture."
    },
    {
      icon: <ResearchIcon width={40} height={40} color="#000000" />,
      title: "Research Insights: Understanding User Needs and Market Gaps",
      description: "Discover the insights that shaped my project hypotheses and solutions.",
      actionText: "Explore",
      details: "Deep user research and market analysis inform every decision. I use surveys, interviews, and competitive analysis to ensure solutions address real problems effectively."
    }
  ];

  const handleStepAction = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="px-16 py-20 bg-(--color-background)" data-section="process">
      <div className="flex flex-col gap-20">
        <h2 className="heading-section text-(--color-foreground) max-w-3xl">
          Exploring the Creative Process Behind Each Project: A Journey of Discovery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <ProcessCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                actionText={step.actionText}
                onAction={() => handleStepAction(index)}
              />
              
              {activeStep === index && (
                <div className="mt-6 p-4 bg-(--color-muted) rounded-lg border-l-4 border-(--color-accent)">
                  <p className="text-sm text-(--color-foreground)">
                    {step.details}
                  </p>
                  <button
                    onClick={() => setActiveStep(null)}
                    className="mt-2 text-xs text-(--color-accent) hover:underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeProcessSection;