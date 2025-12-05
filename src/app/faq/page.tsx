'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "I offer a comprehensive range of web development services including frontend development with React and Next.js, backend development with Node.js, full-stack applications, UI/UX design, and website optimization. I specialize in creating modern, responsive, and user-friendly web applications."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during the initial consultation and keep you updated throughout the development process."
    },
    {
      question: "What is your development process?",
      answer: "My development process includes: 1) Initial consultation and requirements gathering, 2) Design and wireframing, 3) Development and testing, 4) Client review and feedback, 5) Revisions and refinements, 6) Final delivery and deployment. I maintain regular communication throughout each phase."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer ongoing maintenance and support packages to ensure your website remains secure, updated, and performing optimally. This includes regular updates, security monitoring, performance optimization, and technical support."
    },
    {
      question: "What technologies do you work with?",
      answer: "I work with modern web technologies including React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and various cloud platforms like Vercel and AWS. I stay updated with the latest industry trends and best practices."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! I can help with existing projects including code reviews, bug fixes, feature additions, performance optimization, and modernization of legacy codebases. I'm experienced in working with various existing tech stacks."
    },
    {
      question: "What are your pricing models?",
      answer: "I offer flexible pricing models including fixed-price projects for well-defined scopes, hourly rates for ongoing work, and retainer agreements for long-term partnerships. Pricing depends on project complexity, timeline, and specific requirements."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, I work with clients globally and am experienced in remote collaboration. I use modern communication tools and project management platforms to ensure smooth collaboration across different time zones."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-(--color-background)">
      {/* Hero Section */}
      <section className="relative px-16 py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
            Find answers to common questions about my services, process, and how we can work together.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-(--color-border) overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="heading-card text-(--color-foreground) pr-4">
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-(--color-muted-foreground)" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                    </svg>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-(--color-border) pt-4">
                      <p className="text-body text-(--color-muted-foreground) leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-12">
            <h2 className="heading-card text-(--color-foreground) mb-4">
              Still have questions?
            </h2>
            <p className="text-body text-(--color-muted-foreground) mb-6 max-w-2xl mx-auto">
              I'm here to help! Feel free to reach out if you have any specific questions about your project or need more information about my services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-(--color-primary) text-(--color-primary-foreground) rounded-md hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="mailto:kyjahntsmith@gmail.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-(--color-border) bg-white text-(--color-foreground) rounded-md hover:bg-(--color-muted) transition-colors"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQPage;