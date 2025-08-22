import React, { useState } from 'react';
import { Input } from '@headlessui/react';
import Button from './ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success/error randomly for demo
      const success = Math.random() > 0.2; // 80% success rate
      
      if (success) {
        setStatus('success');
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section className="px-16 py-20 bg-white" data-section="newsletter">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto text-center">
        <div className="flex flex-col gap-6">
          <h2 className="heading-subsection text-(--color-foreground)">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-body-large text-(--color-foreground)">
            Join our community and receive the latest updates, tips, and exclusive offers directly to your inbox.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
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
          
          {message && (
            <div className={`text-sm p-3 rounded-md ${
              status === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : status === 'error'
                ? 'bg-red-50 text-red-700 border border-red-200'
                : ''
            }`}>
              {message}
            </div>
          )}
          
          <p className="text-tiny text-(--color-muted-foreground)">
            By clicking Sign Up, you agree to our{' '}
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