"use client";

import React from 'react';
import KnowledgeTimeline from '../../components/KnowledgeTimeline';

export default function KnowledgePage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-(--color-background) min-h-screen">
      {/* Page Header */}
      <section className="mb-12">
        <h1 className="heading-hero text-(--color-foreground) mb-4">
          Knowledge Portfolio
        </h1>
        <p className="text-body-large text-(--color-muted-foreground) max-w-3xl">
          A timeline of my learning journey, projects shipped, courses completed, and career milestones. 
          Inspired by "Your Knowledge Portfolio" from <em>The Pragmatic Programmer</em>, this represents 
          my continuous investment in learning and growth.
        </p>
      </section>

      {/* Knowledge Timeline */}
      <KnowledgeTimeline showFilters={true} />
    </div>
  );
}

