import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@headlessui/react';
import Button from './ui/Button';
import LogoIcon from './icons/LogoIcon';

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setEmail('');
      
      // Clear status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
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
        { label: "Contact Us", href: "/contact" },
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
        { label: "LinkedIn Profile", href: "https://linkedin.com/in/kypython" },
        { label: "GitHub Repo", href: "https://github.com/KyPython" },
        { label: "Twitter Feed", href: "https://twitter.com/kypython" },
        { label: "Instagram Page", href: "https://instagram.com/kypython" },
        { label: "YouTube Channel", href: "https://youtube.com/@kypython" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { label: "Facebook Page", href: "https://facebook.com/kypython" },
        { label: "Pinterest Board", href: "https://pinterest.com/kypython" },
        { label: "Snapchat Story", href: "https://snapchat.com/add/kypython" },
        { label: "TikTok Account", href: "https://tiktok.com/@kypython" },
        { label: "Legal", href: "/legal" }
      ]
    },
    {
      title: "Copyright Notice",
      links: [
        { label: "User Agreement", href: "/user-agreement" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility Info", href: "/accessibility" },
        { label: "Contact Info", href: "/contact-info" },
        { label: "Email Us", href: "mailto:ky@python.dev" }
      ]
    },
    {
      title: "Call Us",
      links: [
        { label: "Office Location", href: "/location" },
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
              Stay informed about our latest projects and insights.
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
              <div className="text-sm text-green-600">
                ✓ Successfully subscribed!
              </div>
            )}
            
            {status === 'error' && (
              <div className="text-sm text-red-600">
                ✗ Something went wrong. Please try again.
              </div>
            )}
            
            <div className="flex gap-1 text-tiny">
              <span className="text-(--color-muted-foreground)">
                We respect your privacy and will not share your info.
              </span>
              <Link href="/privacy" className="text-(--color-foreground) underline">
                We respect your privacy and will not share your info.
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
            <LogoIcon width={70} height={36} color="#000000" />
            <p className="text-small text-(--color-foreground)">
              © 2025 Relume. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;