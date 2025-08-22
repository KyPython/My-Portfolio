'use client';

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const PrivacyPage: React.FC = () => {
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
      <section className="relative px-16 py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618849821300-5f216d5e4937?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8c2VjdXJpdHklMjBkaWdpdGFsJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDB8MHx8Ymx1ZXwxNzU1ODI1NzIzfDA&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-6">
            Privacy Policy
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
              <h2 className="heading-card text-(--color-foreground) mb-4">Information We Collect</h2>
              <p className="text-body text-(--color-muted-foreground) mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our newsletter, or contact us for support.
              </p>
              <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
                <li>• Personal information (name, email address, phone number)</li>
                <li>• Professional information (company, job title)</li>
                <li>• Communication preferences</li>
                <li>• Technical information (IP address, browser type, device information)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
              <h2 className="heading-card text-(--color-foreground) mb-4">How We Use Your Information</h2>
              <p className="text-body text-(--color-muted-foreground) mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
                <li>• To provide and deliver our services</li>
                <li>• To send you technical notices and support messages</li>
                <li>• To communicate with you about products, services, and events</li>
                <li>• To monitor and analyze trends and usage</li>
                <li>• To detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
              <h2 className="heading-card text-(--color-foreground) mb-4">Information Sharing</h2>
              <p className="text-body text-(--color-muted-foreground) mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
                <li>• With service providers who assist us in operating our website</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
              <h2 className="heading-card text-(--color-foreground) mb-4">Data Security</h2>
              <p className="text-body text-(--color-muted-foreground)">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-(--color-border) p-8 mb-8">
              <h2 className="heading-card text-(--color-foreground) mb-4">Your Rights</h2>
              <p className="text-body text-(--color-muted-foreground) mb-4">
                You have the right to:
              </p>
              <ul className="text-body text-(--color-muted-foreground) space-y-2 ml-6">
                <li>• Access and update your personal information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Request a copy of your data</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="heading-card text-(--color-foreground) mb-4">Contact Us</h2>
              <p className="text-body text-(--color-muted-foreground) mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-body text-(--color-foreground)">
                <p>Email: privacy@kyjahnsmith.com</p>
                <p>Last updated: January 2025</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;