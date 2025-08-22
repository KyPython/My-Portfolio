"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('onboarding-completed');
    
    if (!hasCompletedOnboarding) {
      // Redirect to onboarding for new users
      router.push('/onboarding');
    } else {
      // Redirect to portfolio for returning users
      router.push('/portfolio');
    }
  }, [router]);

  // Loading state while redirecting
  return (
    <div className="min-h-screen bg-(--color-background) flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-8 h-8 border-4 border-(--color-accent) border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-body text-(--color-muted-foreground)">Loading...</p>
      </div>
    </div>
  );
}