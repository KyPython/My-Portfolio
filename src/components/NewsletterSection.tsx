"use client";

import React, { useState } from 'react';
import { Input } from '@headlessui/react';
import Button from './ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

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
          source: 'Main Newsletter Section',
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
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-16 py-20 bg-(--color-background)" data-section="newsletter">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto text-center">
        <div className="flex flex-col gap-6">
          <h2 className="heading-subsection text-(--color-foreground)">
            Stay Updated with My Newsletter
          </h2>
          <p className="text-body-large text-(--color-foreground)">
            Join my community and receive the latest updates, tips, and exclusive insights directly to your inbox.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className={`flex-1 px-4 py-3 border rounded-md text-body focus:outline-none focus:ring-2 focus:border-transparent transition-colors ${
                status === 'error' 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-(--color-border) focus:ring-(--color-accent)'
              }`}
            />
            <Button 
              type="submit" 
              variant="primary" 
              size="md"
              disabled={isSubmitting || !email.trim()}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>
          
          {status === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg max-w-md mx-auto">
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
                    You're all set! I'll keep you updated with my latest projects, insights, and web development tips.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {status === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg max-w-md mx-auto">
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
                    Please check your email and try again, or reach out to me directly.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <p className="text-tiny text-(--color-muted-foreground)">
            By clicking Sign Up, you agree to my{' '}
            <a href="/terms" className="text-(--color-accent) hover:underline">
              Terms and Conditions
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;