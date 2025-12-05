"use client";

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import Navigation from './Navigation';
import Footer from './Footer';
import { mockRootProps } from '../portfolioMockData';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-(--color-background) flex flex-col">
        <Navigation links={mockRootProps.navigationLinks} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}