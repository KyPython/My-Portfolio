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
      <body className="antialiased font-sans">
        {children}
        <ClientModals />
      </body>
    </html>
  );
}
