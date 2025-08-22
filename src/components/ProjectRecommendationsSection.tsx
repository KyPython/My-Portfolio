import React from 'react';
import Image from 'next/image';

const ProjectRecommendationsSection: React.FC = () => {
  return (
    <section className="px-16 py-20 bg-white">
      <div className="flex items-center gap-20">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="heading-section text-(--color-foreground)">
            Discover tailored project recommendations just for you based on your interests.
          </h2>
          <p className="text-body-large text-(--color-foreground)">
            Explore projects that align with your preferences and browsing history. 
            Our personalized suggestions help you find the most relevant work that 
            showcases my versatility as a developer.
          </p>
        </div>
        
        <div className="flex-1">
          <Image
            src="/images/demo-placeholder.png"
            alt="Project recommendations"
            width={600}
            height={640}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectRecommendationsSection;