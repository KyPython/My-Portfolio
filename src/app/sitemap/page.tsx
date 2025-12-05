'use client';

import React from 'react';
import Link from 'next/link';

interface SitemapSection {
  title: string;
  links: { label: string; href: string; description?: string }[];
}

const SitemapPage: React.FC = () => {

  const sitemapSections: SitemapSection[] = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", href: "/", description: "Welcome page and portfolio overview" },
        { label: "About", href: "/about", description: "Learn about my background and experience" },
        { label: "Projects", href: "/projects", description: "Showcase of my work and case studies" },
        { label: "Knowledge", href: "/knowledge", description: "Learning journey, milestones, and career timeline" },
        { label: "Contact", href: "/contact", description: "Get in touch for collaborations" },
        { label: "Services", href: "/services", description: "Web development services offered" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog", description: "Articles and insights on web development" },
        { label: "FAQ", href: "/faq", description: "Frequently asked questions" },
        { label: "Support", href: "/support", description: "Help center and support resources" },
        { label: "Sitemap", href: "/sitemap", description: "Complete site navigation map" }
      ]
    },
    {
      title: "Legal & Policies",
      links: [
        { label: "Privacy Policy", href: "/privacy", description: "How I handle your personal information" },
        { label: "Terms of Service", href: "/terms", description: "Terms and conditions of use" },
        { label: "Legal Information", href: "/legal", description: "Legal notices and disclaimers" },
        { label: "Cookie Policy", href: "/cookies", description: "Information about cookie usage" },
        { label: "User Agreement", href: "/user-agreement", description: "User terms and agreements" }
      ]
    },
    {
      title: "Additional Pages",
      links: [
        { label: "Accessibility", href: "/accessibility", description: "Accessibility statement and features" },
        { label: "Contact Info", href: "/contact-info", description: "Detailed contact information" },
        { label: "Location", href: "/location", description: "Office location and directions" },
        { label: "Feedback", href: "/feedback", description: "Share your feedback and suggestions" },
        { label: "Help Center", href: "/help", description: "Comprehensive help documentation" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-(--color-background)">
      {/* Hero Section */}
      <section className="relative px-16 py-24 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-6">
            Site Map
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
            Navigate through all pages and sections of the website. Find exactly what you're looking for.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="px-16 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Navigation */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-16">
            <h2 className="heading-card text-(--color-foreground) mb-6 text-center">
              Quick Navigation
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sitemapSections.map((section) => (
                <a 
                  key={section.title}
                  href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-center p-4 bg-white rounded-lg border border-(--color-border) hover:shadow-md transition-shadow"
                >
                  <div className="text-body font-medium text-(--color-foreground)">
                    {section.title}
                  </div>
                  <div className="text-small text-(--color-muted-foreground) mt-1">
                    {section.links.length} pages
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Sections */}
          <div className="space-y-16">
            {sitemapSections.map((section, sectionIndex) => (
              <div 
                key={section.title}
                id={section.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-24"
              >
                <h2 className="heading-section text-(--color-foreground) mb-8">
                  {section.title}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group bg-white rounded-lg shadow-sm border border-(--color-border) p-6 hover:shadow-lg transition-all duration-200 hover:border-(--color-accent)"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="heading-card text-(--color-foreground) group-hover:text-(--color-accent) transition-colors mb-2">
                            {link.label}
                          </h3>
                          {link.description && (
                            <p className="text-body text-(--color-muted-foreground) mb-3">
                              {link.description}
                            </p>
                          )}
                          <div className="text-small text-(--color-muted-foreground) font-mono">
                            {link.href}
                          </div>
                        </div>
                        <div className="ml-4 text-(--color-muted-foreground) group-hover:text-(--color-accent) transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-20 bg-white rounded-lg shadow-sm border border-(--color-border) p-8">
            <h2 className="heading-card text-(--color-foreground) mb-6 text-center">
              Site Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-(--color-accent) mb-2">
                  {sitemapSections.reduce((total, section) => total + section.links.length, 0)}
                </div>
                <div className="text-body text-(--color-muted-foreground)">
                  Total Pages
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--color-accent) mb-2">
                  {sitemapSections.length}
                </div>
                <div className="text-body text-(--color-muted-foreground)">
                  Main Sections
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--color-accent) mb-2">
                  5
                </div>
                <div className="text-body text-(--color-muted-foreground)">
                  Legal Pages
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--color-accent) mb-2">
                  100%
                </div>
                <div className="text-body text-(--color-muted-foreground)">
                  Mobile Friendly
                </div>
              </div>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-12">
            <h3 className="heading-card text-(--color-foreground) mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-body text-(--color-muted-foreground) mb-6 max-w-2xl mx-auto">
              If you can't find the page you're looking for, try using the search function or contact me directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-(--color-primary) text-(--color-primary-foreground) rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </Link>
              <Link 
                href="/support" 
                className="inline-flex items-center justify-center px-6 py-3 border border-(--color-border) bg-white text-(--color-foreground) rounded-md hover:bg-(--color-muted) transition-colors"
              >
                Get Support
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SitemapPage;