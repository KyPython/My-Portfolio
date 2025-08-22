'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FooterPagesPreview: React.FC = () => {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ];

  const pages = [
    {
      title: "Privacy Policy",
      href: "/privacy",
      description: "Comprehensive privacy policy explaining data collection, usage, and user rights",
      color: "from-blue-50 to-indigo-100",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      )
    },
    {
      title: "Terms of Service",
      href: "/terms",
      description: "Terms of use outlining user agreements, service conditions, and legal disclaimers",
      color: "from-gray-50 to-blue-50",
      icon: (
        <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>
      )
    },
    {
      title: "FAQ",
      href: "/faq",
      description: "Frequently asked questions with expandable sections and comprehensive answers",
      color: "from-purple-50 to-blue-50",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      )
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Articles and insights on web development with modern card layouts",
      color: "from-green-50 to-blue-50",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: "Support Center",
      href: "/support",
      description: "Help center with contact options, resources, and troubleshooting information",
      color: "from-orange-50 to-red-50",
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "Sitemap",
      href: "/sitemap",
      description: "Organized sitemap displaying all website pages in a hierarchical structure",
      color: "from-teal-50 to-blue-50",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/>
        </svg>
      )
    },
    {
      title: "Legal Information",
      href: "/legal",
      description: "Legal notices containing copyright information, disclaimers, and compliance details",
      color: "from-indigo-50 to-purple-50",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-(--color-background)">
      <Navigation links={navigationLinks} />
      
      {/* Hero Section */}
      <section className="relative px-16 py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618849821300-5f216d5e4937?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8c2VjdXJpdHklMjBkaWdpdGFsJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDB8MHx8Ymx1ZXwxNzU1ODI1NzIzfDA&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg">
            <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-8">
            Footer Pages Preview
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-3xl mx-auto mb-12">
            Explore all the essential pages that make up a complete portfolio website. Each page is designed with modern aesthetics, 
            clear information architecture, and user-friendly navigation.
          </p>
          
          {/* Updated Social Media Links Notice */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-white/20 shadow-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">
              ✨ Updated Social Media Links
            </h3>
            <div className="grid grid-cols-2 gap-4 text-body text-(--color-muted-foreground)">
              <div>
                <p><strong>Twitter:</strong> @KyJahnSmith</p>
                <p><strong>Instagram:</strong> @k_tsmith</p>
              </div>
              <div>
                <p><strong>YouTube:</strong> @kyjahnsmith3685</p>
                <p><strong>Facebook:</strong> Ky Jahn Smith</p>
              </div>
            </div>
            <p className="text-small text-green-600 mt-3">
              ✓ Removed: Snapchat, Pinterest, and TikTok as requested
            </p>
          </div>
        </div>
      </section>

      {/* Pages Grid */}
      <section className="px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((page, index) => (
              <a
                key={page.href}
                href={page.href}
                className="group block"
              >
                <div className={`relative bg-gradient-to-br ${page.color} rounded-xl p-8 h-full border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg">
                    {page.icon}
                  </div>
                  
                  <h3 className="heading-card text-(--color-foreground) mb-4 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                  
                  <p className="text-body text-(--color-muted-foreground) mb-6 leading-relaxed">
                    {page.description}
                  </p>
                  
                  <div className="flex items-center text-(--color-accent) group-hover:text-blue-600 transition-colors font-medium">
                    <span>Explore Page</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-16 py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-(--color-foreground) mb-12 text-center">
            Modern Design Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="heading-card text-(--color-foreground) mb-4">
                Modern Aesthetics
              </h3>
              <p className="text-body text-(--color-muted-foreground)">
                Clean, contemporary design with glassmorphism effects, gradient backgrounds, and smooth animations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="heading-card text-(--color-foreground) mb-4">
                User Experience
              </h3>
              <p className="text-body text-(--color-muted-foreground)">
                Intuitive navigation, interactive elements, and accessibility-first design for all users.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="heading-card text-(--color-foreground) mb-4">
                Performance
              </h3>
              <p className="text-body text-(--color-muted-foreground)">
                Fast loading times, optimized images, and efficient code structure for the best user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FooterPagesPreview;