import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  const handleLearnMore = () => {
    const projectsSection = document.querySelector('[data-section="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignUp = () => {
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-16 py-20 bg-white">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8 max-w-4xl text-center">
          <div className="flex flex-col gap-6">
            <h1 className="heading-hero text-(--color-foreground)">
              {title}
            </h1>
            <p className="text-body-large text-(--color-foreground) max-w-3xl">
              {description}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="primary" size="md" onClick={handleLearnMore}>
              Learn More
            </Button>
            <Button variant="outline" size="md" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        </div>
        
        <div className="w-full max-w-6xl">
          <Image
            src="/images/hero-placeholder.png"
            alt="Portfolio showcase"
            width={1280}
            height={720}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;