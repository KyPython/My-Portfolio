import React from "react";
import type { Metadata } from "next";
import ClientModals from "../components/ClientModals";

export const metadata: Metadata = {
  title: "KyPython Portfolio",
  description: "Showcase of web, app, and game projects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="KyPython Portfolio" />
        <meta
          property="og:description"
          content="Showcase of web, app, and game projects by KyJahn T Smith."
        />
        <meta property="og:image" content="/project1.jpg" />
        <meta property="og:url" content="https://kyjahn.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KyPython Portfolio" />
        <meta
          name="twitter:description"
          content="Showcase of web, app, and game projects by KyJahn T Smith."
        />
        <meta name="twitter:image" content="/project1.jpg" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <ClientModals />
      </body>
    </html>
  );
}
