"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { milestones, MilestoneType, groupMilestonesByYear, filterMilestonesByType, getMilestoneTypes } from '../milestonesData';

interface KnowledgeTimelineProps {
  showFilters?: boolean;
}

const KnowledgeTimeline: React.FC<KnowledgeTimelineProps> = ({ showFilters = true }) => {
  const [selectedType, setSelectedType] = useState<MilestoneType | 'all'>('all');

  // Filter milestones by type
  const filteredMilestones = useMemo(() => {
    return filterMilestonesByType(milestones, selectedType);
  }, [selectedType]);

  // Group filtered milestones by year
  const groupedMilestones = useMemo(() => {
    return groupMilestonesByYear(filteredMilestones);
  }, [filteredMilestones]);

  // Get sorted years (newest first)
  const sortedYears = useMemo(() => {
    return Object.keys(groupedMilestones).sort((a, b) => parseInt(b) - parseInt(a));
  }, [groupedMilestones]);

  const milestoneTypes = getMilestoneTypes();

  // Get type label and color
  const getTypeLabel = (type: MilestoneType): string => {
    const labels: Record<MilestoneType, string> = {
      project: 'Project',
      course: 'Course',
      job: 'Job',
      learning: 'Learning'
    };
    return labels[type];
  };

  const getTypeColor = (type: MilestoneType): string => {
    const colors: Record<MilestoneType, string> = {
      project: 'bg-(--color-accent) text-(--color-accent-foreground)',
      course: 'bg-(--color-success) text-(--color-success-foreground)',
      job: 'bg-(--color-warning) text-(--color-warning-foreground)',
      learning: 'bg-(--color-secondary) text-(--color-secondary-foreground)'
    };
    return colors[type];
  };

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="w-full">
      {/* Filter Controls */}
      {showFilters && (
        <section className="mb-8">
          <div className="bg-white dark:bg-(--color-muted) rounded-lg shadow-sm border border-(--color-border) p-6">
            <h2 className="heading-card text-(--color-foreground) mb-4">Filter Milestones</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-md text-body font-medium transition-colors ${
                  selectedType === 'all'
                    ? "bg-(--color-accent) text-(--color-accent-foreground)"
                    : "bg-(--color-muted) text-(--color-foreground) hover:bg-(--color-secondary) border border-(--color-border)"
                }`}
                aria-pressed={selectedType === 'all'}
              >
                All
              </button>
              {milestoneTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-md text-body font-medium transition-colors ${
                    selectedType === type
                      ? "bg-(--color-accent) text-(--color-accent-foreground)"
                      : "bg-(--color-muted) text-(--color-foreground) hover:bg-(--color-secondary) border border-(--color-border)"
                  }`}
                  aria-pressed={selectedType === type}
                >
                  {getTypeLabel(type)}
                </button>
              ))}
            </div>
            {selectedType !== 'all' && (
              <button
                onClick={() => setSelectedType('all')}
                className="mt-4 px-4 py-2 bg-(--color-secondary) text-(--color-foreground) rounded-md hover:bg-(--color-muted) transition-colors text-body font-medium border border-(--color-border)"
              >
                Show All Milestones
              </button>
            )}
          </div>
        </section>
      )}

      {/* Timeline */}
      <section>
        {sortedYears.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-body-large text-(--color-muted-foreground)">
              No milestones match your current filter.
            </p>
            {showFilters && (
              <button
                onClick={() => setSelectedType('all')}
                className="mt-4 px-4 py-2 bg-(--color-accent) text-(--color-accent-foreground) rounded-md hover:opacity-90 transition-colors text-body font-medium"
              >
                View All Milestones
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year} className="relative">
                {/* Year Header */}
                <div className="sticky top-20 z-10 mb-6">
                  <h2 className="heading-section text-(--color-foreground) inline-block bg-(--color-background) px-4 py-2 border-b-2 border-(--color-accent)">
                    {year}
                  </h2>
                </div>

                {/* Milestones for this year */}
                <div className="relative pl-8 border-l-2 border-(--color-border) space-y-8">
                  {groupedMilestones[year].map((milestone, index) => (
                    <motion.div
                      key={milestone.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-(--color-accent) border-2 border-(--color-background)"></div>

                      {/* Milestone card */}
                      <article className="bg-white dark:bg-(--color-muted) rounded-lg shadow-sm p-6 border border-(--color-border) hover:shadow-md transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <h3 className="heading-card text-(--color-foreground)">
                                {milestone.title}
                              </h3>
                              <span
                                className={`px-3 py-1 rounded-full text-small font-medium ${getTypeColor(milestone.type)}`}
                                aria-label={`Type: ${getTypeLabel(milestone.type)}`}
                              >
                                {getTypeLabel(milestone.type)}
                              </span>
                            </div>
                            <time
                              dateTime={milestone.date}
                              className="text-body text-(--color-muted-foreground)"
                            >
                              {formatDate(milestone.date)}
                            </time>
                          </div>
                        </div>

                        {milestone.description && (
                          <p className="text-body text-(--color-foreground) mb-4">
                            {milestone.description}
                          </p>
                        )}

                        {milestone.technologies && milestone.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {milestone.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-(--color-muted) text-(--color-foreground) rounded text-small font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {milestone.link && (
                          <div className="pt-2 border-t border-(--color-border)">
                            <Link
                              href={milestone.link}
                              target={milestone.link.startsWith('http') ? '_blank' : undefined}
                              rel={milestone.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-2 text-(--color-accent) hover:text-(--color-primary) text-body font-medium transition-colors"
                            >
                              {milestone.type === 'project' && 'View Project'}
                              {milestone.type === 'course' && 'View Certificate'}
                              {milestone.type === 'learning' && 'Learn More'}
                              {milestone.type === 'job' && 'Learn More'}
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </article>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default KnowledgeTimeline;

