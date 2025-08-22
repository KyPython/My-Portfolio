'use client';

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const LegalPage: React.FC = () => {
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
      <section className="relative px-16 py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-6">
            Legal Information
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
            Important legal notices, copyright information, and compliance details for this website.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-16 py-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Copyright Notice</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              © 2025 Ky Jahn Smith. All rights reserved. The content, design, graphics, and other materials on this website are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-body text-(--color-muted-foreground)">
              No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the owner, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Trademark Information</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              All trademarks, service marks, trade names, logos, and other proprietary designations used on this website are the property of their respective owners. The use of any trademark, service mark, or logo without express written permission is strictly prohibited.
            </p>
            <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
              <li>• Company logos and brand names are trademarks of their respective owners</li>
              <li>• Technology logos (React, Next.js, etc.) are trademarks of their respective companies</li>
              <li>• All project names and designs are proprietary to their respective clients</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Professional Liability</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              As a professional web developer, I maintain appropriate professional liability insurance and adhere to industry best practices. However, the following limitations apply:
            </p>
            <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
              <li>• Services are provided on an "as is" basis without warranties of any kind</li>
              <li>• Liability is limited to the amount paid for services rendered</li>
              <li>• Client is responsible for backing up their own data and content</li>
              <li>• Third-party integrations and services are subject to their own terms</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Compliance & Standards</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              This website and all services provided comply with relevant industry standards and regulations:
            </p>
            <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
              <li>• WCAG 2.1 AA accessibility guidelines</li>
              <li>• GDPR compliance for EU users</li>
              <li>• CCPA compliance for California residents</li>
              <li>• Industry-standard security practices</li>
              <li>• Professional code of ethics</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Third-Party Content</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              This website may contain links to third-party websites and services. The inclusion of any link does not imply endorsement by us of the site or service.
            </p>
            <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
              <li>• External links are provided for convenience only</li>
              <li>• We are not responsible for third-party content or services</li>
              <li>• Third-party sites have their own terms and privacy policies</li>
              <li>• Images and assets are properly licensed or attributed</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Dispute Resolution</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              Any disputes arising from the use of this website or services provided will be resolved through the following process:
            </p>
            <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
              <li>• Initial attempt at informal resolution through direct communication</li>
              <li>• Mediation through a mutually agreed upon mediator</li>
              <li>• Binding arbitration if mediation fails</li>
              <li>• Governing law: [Your State/Country] jurisdiction</li>
            </ul>
          </div>

          <div className="bg-indigo-50 rounded-lg p-8">
            <h2 className="heading-card text-(--color-foreground) mb-4">Legal Contact Information</h2>
            <p className="text-body text-(--color-muted-foreground) mb-4">
              For legal inquiries, copyright concerns, or compliance questions:
            </p>
            <div className="text-body text-(--color-foreground) space-y-2">
              <p><strong>Legal Department:</strong> legal@kyjahnsmith.com</p>
              <p><strong>Copyright Agent:</strong> copyright@kyjahnsmith.com</p>
              <p><strong>Business Address:</strong> [Your Business Address]</p>
              <p><strong>Last Updated:</strong> January 2025</p>
            </div>
            <div className="mt-6 p-4 bg-white rounded border border-indigo-200">
              <p className="text-small text-indigo-800">
                <strong>Notice:</strong> This legal information is provided for transparency and compliance purposes. 
                For specific legal advice regarding your situation, please consult with a qualified attorney.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;