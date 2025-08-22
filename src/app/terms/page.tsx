'use client';

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const TermsPage: React.FC = () => {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-(--color-background)">
      <Navigation links={navigationLinks} />
      
      {/* Hero Section */}
      <section className="relative px-16 py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-6">
            Terms of Service
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By accessing our website, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-16 py-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Acceptance of Terms</h2>
            <p className="text-body text-(--color-muted-foreground)">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Use License</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              Permission is granted to temporarily download one copy of the materials on our website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose or for any public display</li>
              <li>• Attempt to reverse engineer any software contained on the website</li>
              <li>• Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Disclaimer</h2>
            <p className="text-body text-(--color-muted-foreground)">
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, 
              and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions 
              of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Limitations</h2>
            <p className="text-body text-(--color-muted-foreground)">
              In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
              or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized 
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Accuracy of Materials</h2>
            <p className="text-body text-(--color-muted-foreground)">
              The materials appearing on our website could include technical, typographical, or photographic errors. 
              We do not warrant that any of the materials on its website are accurate, complete, or current. 
              We may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Modifications</h2>
            <p className="text-body text-(--color-muted-foreground)">
              We may revise these terms of service for its website at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Contact Information</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="text-body text-(--color-foreground)">
              <p>Email: legal@kyjahnsmith.com</p>
              <p>Last updated: January 2025</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;