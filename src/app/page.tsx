import React from 'react';
import HeroSection from '../components/HeroSection';
import CreativeProcessSection from '../components/CreativeProcessSection';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection';
import InteractiveDemosSection from '../components/InteractiveDemosSection';
import NewsletterSection from '../components/NewsletterSection';
import ProjectRecommendationsSection from '../components/ProjectRecommendationsSection';
import { mockRootProps } from '../portfolioMockData';

export default function HomePage() {
  return (
    <>
      <HeroSection 
        title="Transforming Ideas into Innovative Digital Solutions"
        description={mockRootProps.personalInfo.description}
      />
      
      <CreativeProcessSection />
      
      <ProjectShowcaseSection projects={mockRootProps.projects} />
      
      <InteractiveDemosSection />
      
      <NewsletterSection />
      
      <ProjectRecommendationsSection />
    </>
  );
}