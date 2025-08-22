"use client";

import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import CreativeProcessSection from '../../components/CreativeProcessSection';
import ProjectShowcaseSection from '../../components/ProjectShowcaseSection';
import InteractiveDemosSection from '../../components/InteractiveDemosSection';
import NewsletterSection from '../../components/NewsletterSection';
import ProjectRecommendationsSection from '../../components/ProjectRecommendationsSection';
import Footer from '../../components/Footer';
import { mockRootProps } from '../../portfolioMockData';

const PortfolioPage: React.FC = () => {
  useEffect(() => {
    // Mark onboarding as completed when user reaches portfolio
    localStorage.setItem('onboarding-completed', 'true');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation links={mockRootProps.navigationLinks} />
      
      <HeroSection 
        title="Transforming Ideas into Innovative Digital Solutions"
        description={mockRootProps.personalInfo.description}
      />
      
      <CreativeProcessSection />
      
      <ProjectShowcaseSection projects={mockRootProps.projects} />
      
      <InteractiveDemosSection />
      
      <NewsletterSection />
      
      <ProjectRecommendationsSection />
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;