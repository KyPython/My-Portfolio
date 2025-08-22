'use client';

import React, { useState } from 'react';
import { Input, Select, Textarea } from '@headlessui/react';
import Button from './ui/Button';

const SupportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    
    setIsSubmitting(true);
    setStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          source: 'Support Request',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        console.error('Support form submission failed:', data);
        setStatus('error');
      }
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Support form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-body font-medium text-(--color-foreground) mb-2">
              Name *
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your name"
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
            />
          </div>
          <div>
            <label className="block text-body font-medium text-(--color-foreground) mb-2">
              Email *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your@email.com"
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
            />
          </div>
        </div>
        <div>
          <label className="block text-body font-medium text-(--color-foreground) mb-2">
            Subject
          </label>
          <Select
            value={formData.subject}
            onChange={(value) => handleInputChange('subject', value)}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Issue">Technical Issue</option>
            <option value="Project Consultation">Project Consultation</option>
            <option value="Billing Question">Billing Question</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
          </Select>
        </div>
        <div>
          <label className="block text-body font-medium text-(--color-foreground) mb-2">
            Message *
          </label>
          <Textarea
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Describe your issue or question..."
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
          />
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Send Support Request'}
        </Button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                Message sent successfully! 🚀
              </h4>
              <p className="text-green-700 mb-3">
                Thanks for reaching out! I've received your message and it's been added to my system. 
                I typically respond within 24-48 hours, but I'll do my best to get back to you even sooner.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>I'll reply to: {formData.email || 'your email'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-800 mb-2">
                Couldn't send your message
              </h4>
              <p className="text-red-700 mb-3">
                Something went wrong on my end. Please double-check that all required fields are filled out correctly and try again.
              </p>
              <div className="text-sm text-red-600">
                <p>Alternative: Email me directly at <a href="mailto:kyjahntsmith@gmail.com" className="underline font-medium">kyjahntsmith@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportForm;