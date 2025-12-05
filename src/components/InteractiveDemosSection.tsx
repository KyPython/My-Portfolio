"use client";

import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';

const InteractiveDemosSection: React.FC = () => {
  const handleDemoClick = () => {
    // Could open a demo modal or navigate to demos page
    const projectsSection = document.querySelector('[data-section="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Navigate to about page or show more information
    window.location.href = '/about';
  };

  return (
    <section className="px-16 py-20 bg-(--color-background)" data-section="demos">
      <div className="flex items-center gap-20">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <p className="text-body font-semibold text-(--color-foreground)">
                Explore
              </p>
              <div className="flex flex-col gap-6">
                <h2 className="heading-subsection text-(--color-foreground)">
                  Experience Interactive Demos of My Projects
                </h2>
                <p className="text-body-large text-(--color-foreground)">
                  Dive into the world of my projects through engaging interactive demos. 
                  Experience firsthand the innovative solutions I've crafted for real-world challenges.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium text-(--color-foreground)">
                  Try Now
                </h3>
                <p className="text-body text-(--color-foreground)">
                  Engage with my indie games and web applications through live demos.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium text-(--color-foreground)">
                  Get Started
                </h3>
                <p className="text-body text-(--color-foreground)">
                  Join the fun and see my projects in action!
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="md" onClick={handleDemoClick}>
              Demo
            </Button>
            <button 
              onClick={handleLearnMore}
              className="flex items-center gap-2 text-body text-(--color-foreground) hover:text-(--color-accent) transition-colors"
            >
              Learn More
              <ArrowRightIcon width={7} height={12} color="currentColor" />
            </button>
          </div>
        </div>
        
        <div className="flex-1">
          <Image
            src="/images/demo-placeholder.png"
            alt="Interactive demos showcase"
            width={600}
            height={640}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemosSection;