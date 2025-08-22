'use client';

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const SupportPage: React.FC = () => {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ];

  const supportOptions = [
    {
      title: "Email Support",
      description: "Get help via email for general inquiries and project discussions",
      contact: "support@kyjahnsmith.com",
      responseTime: "24-48 hours",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      title: "Project Consultation",
      description: "Schedule a call to discuss your project requirements and get expert advice",
      contact: "Schedule a Call",
      responseTime: "Same day",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
        </svg>
      )
    },
    {
      title: "Technical Issues",
      description: "Report bugs, technical problems, or get help with existing projects",
      contact: "tech@kyjahnsmith.com",
      responseTime: "12-24 hours",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      )
    }
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and documentation for all services",
      link: "/docs"
    },
    {
      title: "FAQ",
      description: "Frequently asked questions and common solutions",
      link: "/faq"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and tutorials",
      link: "/tutorials"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share knowledge",
      link: "/community"
    }
  ];

  return (
    <div className="min-h-screen bg-(--color-background)">
      <Navigation links={navigationLinks} />
      
      {/* Hero Section */}
      <section className="relative px-16 py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-6">
            Support Center
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
            Get the help you need with our comprehensive support resources and dedicated assistance.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-(--color-foreground) mb-12 text-center">
            How Can We Help?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  {option.icon}
                </div>
                <h3 className="heading-card text-(--color-foreground) mb-4">
                  {option.title}
                </h3>
                <p className="text-body text-(--color-muted-foreground) mb-6">
                  {option.description}
                </p>
                <div className="space-y-2">
                  <p className="text-body font-medium text-(--color-foreground)">
                    {option.contact}
                  </p>
                  <p className="text-small text-(--color-muted-foreground)">
                    Response time: {option.responseTime}
                  </p>
                </div>
                <button className="mt-6 w-full px-6 py-3 bg-(--color-primary) text-(--color-primary-foreground) rounded-md hover:bg-gray-800 transition-colors">
                  Get Support
                </button>
              </div>
            ))}
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="heading-card text-(--color-foreground) mb-6 text-center">
                Quick Support Request
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body font-medium text-(--color-foreground) mb-2">
                      Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-body font-medium text-(--color-foreground) mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-body font-medium text-(--color-foreground) mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)">
                    <option>General Inquiry</option>
                    <option>Technical Issue</option>
                    <option>Project Consultation</option>
                    <option>Billing Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-body font-medium text-(--color-foreground) mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-(--color-primary) text-(--color-primary-foreground) rounded-md hover:bg-gray-800 transition-colors"
                >
                  Send Support Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-16 py-20 bg-(--color-muted)">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-(--color-foreground) mb-12 text-center">
            Self-Help Resources
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a 
                key={index}
                href={resource.link}
                className="bg-white rounded-lg shadow-sm border border-(--color-border) p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="heading-card text-(--color-foreground) mb-3 group-hover:text-(--color-accent) transition-colors">
                  {resource.title}
                </h3>
                <p className="text-body text-(--color-muted-foreground)">
                  {resource.description}
                </p>
                <div className="mt-4 text-(--color-accent) group-hover:text-(--color-primary) transition-colors">
                  Learn More →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-(--color-foreground) mb-8">
            Service Status
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-body font-medium text-green-800">All Systems Operational</span>
            </div>
            <p className="text-body text-green-700">
              All services are running smoothly. Last updated: January 21, 2025 at 2:30 PM EST
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;