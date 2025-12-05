"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@headlessui/react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    setStatus('idle');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          source: 'Newsletter Signup',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setEmail('');
      } else {
        console.error('Newsletter subscription failed:', data);
        setStatus('error');
      }
      
      // Clear status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };


  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home Page", href: "/" },
        { label: "Projects List", href: "/projects" },
        { label: "About Me", href: "/about" },
        { label: "Contact Me", href: "/contact" },
        { label: "Blog Posts", href: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "FAQ Section", href: "/faq" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
        { label: "Site Map", href: "/sitemap" },
        { label: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/kyjahn-smith-16487224b/" },
        { label: "GitHub Repo", href: "https://github.com/KyPython" },
        { label: "Twitter Feed", href: "https://x.com/KyJahnSmith" },
        { label: "Instagram Page", href: "https://www.instagram.com/k_tsmith/" },
        { label: "YouTube Channel", href: "https://www.youtube.com/@kyjahnsmith3685" }
      ]
    },
    {
      title: "Follow Me",
      links: [
        { label: "Facebook Page", href: "https://www.facebook.com/kyjahn.smith/" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "User Agreement", href: "/terms" },
        { label: "Cookie Policy", href: "/privacy" },
        { label: "Accessibility Info", href: "/legal#accessibility" },
        { label: "Copyright Notice", href: "/legal#copyright" }
      ]
    },
    {
      title: "Contact Info",
      links: [
        { label: "Email Me", href: "mailto:kyjahntsmith@gmail.com" },
        { label: "Contact", href: "/contact" },
        { label: "Feedback Form", href: "/support" },
        { label: "Help Center", href: "/support" },
        { label: "Report Issue", href: "/support" },
        { label: "Privacy Notice", href: "/privacy" }
      ]
    }
  ];

  return (
    <footer className="px-16 py-20 bg-(--color-background) border-t border-(--color-border)">
      <div className="flex flex-col gap-20">
        {/* Newsletter Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="heading-card text-(--color-foreground)">
              Subscribe to updates
            </h3>
            <p className="text-body text-(--color-muted-foreground)">
              Stay informed about my latest projects and insights.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                disabled={isSubmitting}
                className={`px-4 py-2 border rounded-md text-body bg-(--color-background) text-(--color-foreground) focus:outline-none focus:ring-2 focus:ring-(--color-accent) min-w-[280px] ${
                  status === 'error' ? 'border-(--color-error)' : 'border-(--color-border)'
                }`}
              />
              <Button 
                type="submit" 
                variant="primary" 
                size="md"
                disabled={isSubmitting || !email.trim()}
              >
                {isSubmitting ? 'Joining...' : 'Join'}
              </Button>
            </form>
            
            {status === 'success' && (
              <div className="p-4 bg-(--color-success) bg-opacity-10 border border-(--color-success) border-opacity-30 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-(--color-success) bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-(--color-success)" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-small font-medium text-(--color-success) mb-1">
                      Welcome to my newsletter! 🎉
                    </h4>
                    <p className="text-small text-(--color-foreground)">
                      You're all set! I'll keep you updated with my latest projects, insights, and web development tips. Thanks for joining the community!
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-(--color-error) bg-opacity-10 border border-(--color-error) border-opacity-30 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-(--color-error) bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-(--color-error)" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-small font-medium text-(--color-error) mb-1">
                      Oops! Something went wrong
                    </h4>
                    <p className="text-small text-(--color-foreground)">
                      I couldn't process your subscription right now. Please check your email and try again, or reach out to me directly.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex gap-1 text-tiny">
              <span className="text-(--color-muted-foreground)">
                I respect your privacy and will not share your info.
              </span>
              <Link href="/privacy" className="text-(--color-accent) hover:text-(--color-primary) underline transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-t border-(--color-border)" />
        
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="text-body font-semibold text-(--color-foreground)">
                {section.title}
              </h4>
              <div className="flex flex-col gap-3">
                {section.links.map((link, index) => (
                  <Link
                    key={`${section.title}-${link.label}-${index}`}
                    href={link.href}
                    target={link.href.startsWith('http') || link.href.startsWith('mailto:') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-body text-(--color-muted-foreground) hover:text-(--color-accent) transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-4">
          <hr className="border-t border-(--color-border)" />
          <div className="flex items-center justify-between">
            <div className="heading-card text-(--color-foreground)">
              Ky Jahn Smith
            </div>
            <p className="text-body text-(--color-muted-foreground)">
              © 2025 Ky Jahn Smith. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;