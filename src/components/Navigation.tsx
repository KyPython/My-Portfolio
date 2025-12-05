"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import ChevronDownIcon from './icons/ChevronDownIcon';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';

interface NavigationLink {
  label: string;
  href: string;
}

interface NavigationProps {
  links: NavigationLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignUp = () => {
    // Scroll to newsletter section or open modal
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Sign up clicked - could open modal or redirect');
    }
  };

  const handleLearnMore = () => {
    // Scroll to projects section
    const projectsSection = document.querySelector('[data-section="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Learn more clicked - could redirect to projects');
    }
  };

  return (
    <nav className={`sticky top-0 z-50 flex items-center justify-between px-16 py-4 bg-(--color-background) border-b border-(--color-border) transition-shadow duration-200 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-(--color-foreground) hover:text-(--color-accent) transition-colors">
          Ky Jahn Smith
        </Link>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-(--color-foreground) hover:text-(--color-accent) transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--color-accent) transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
          
          <Menu as="div" className="relative">
            <MenuButton className="flex items-center gap-1 text-body text-(--color-foreground) hover:text-(--color-accent) transition-colors">
              More
              <ChevronDownIcon width={13} height={7} color="currentColor" />
            </MenuButton>
            
            <MenuItems className="absolute top-full left-0 mt-2 bg-white border border-(--color-border) rounded-md shadow-lg py-2 min-w-[120px] z-10 focus:outline-none">
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/services"
                    className={`block px-4 py-2 text-sm text-(--color-foreground) transition-colors ${
                      focus ? 'bg-(--color-muted) text-(--color-accent)' : ''
                    }`}
                  >
                    Services
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="md" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button variant="primary" size="md" onClick={handleLearnMore}>
            Learn More
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;