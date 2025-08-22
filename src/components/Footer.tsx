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

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      // Internal navigation
      window.location.href = href;
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
        { label: "Facebook Page", href: "https://www.facebook.com/kyjahn.smith/" },
        { label: "Legal", href: "/legal" },
        { label: "User Agreement", href: "/user-agreement" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility Info", href: "/accessibility" }
      ]
    },
    {
      title: "Copyright Notice",
      links: [
        { label: "User Agreement", href: "/user-agreement" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility Info", href: "/accessibility" },
        { label: "Contact Info", href: "/contact-info" },
        { label: "Email Us", href: "mailto:kyjahntsmith@gmail.com" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "Feedback Form", href: "/feedback" },
        { label: "Help Center", href: "/help" },
        { label: "Report Issue", href: "/report" },
        { label: "Privacy Notice", href: "/privacy-notice" }
      ]
    }
  ];

  return (
    <footer className="px-16 py-20 bg-white">
      <div className="flex flex-col gap-20">
        {/* Newsletter Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-(--color-foreground)">
              Subscribe to updates
            </h3>
            <p className="text-body text-(--color-foreground)">
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
                className={`px-4 py-2 border rounded-md text-body focus:outline-none focus:ring-2 focus:ring-(--color-accent) min-w-[280px] ${
                  status === 'error' ? 'border-red-500' : 'border-(--color-border)'
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
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-green-800 mb-1">
                      Welcome to my newsletter! 🎉
                    </h4>
                    <p className="text-sm text-green-700">
                      You're all set! I'll keep you updated with my latest projects, insights, and web development tips. Thanks for joining the community!
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-red-800 mb-1">
                      Oops! Something went wrong
                    </h4>
                    <p className="text-sm text-red-700">
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
              <Link href="/privacy" className="text-(--color-foreground) underline">
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
                {section.links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-small text-(--color-foreground) hover:text-(--color-accent) transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-4">
          <hr className="border-t border-(--color-border)" />
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-(--color-foreground)">
              Ky Jahn Smith
            </div>
            <p className="text-small text-(--color-foreground)">
              © 2025 Ky Jahn Smith. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;