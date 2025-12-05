import Link from "next/link";
import { Button } from '@headlessui/react';

export default function About() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="heading-hero text-(--color-foreground) mb-8">About Me</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-body-large text-(--color-foreground) leading-relaxed">
            Hi, I&apos;m <strong>KyJahn Smith</strong>! I build web, app, and game projects with a focus 
            on clean code, user-first design, and creative problem solving. My 
            journey started with curiosity and grew into a passion for impactful 
            software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-(--color-muted) p-6 rounded-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">Frontend</h3>
            <p className="text-body text-(--color-muted-foreground)">
              HTML, CSS, JS, React & React Native
            </p>
          </div>
          
          <div className="bg-(--color-muted) p-6 rounded-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">Backend</h3>
            <p className="text-body text-(--color-muted-foreground)">
              Node.js, Supabase
            </p>
          </div>
          
          <div className="bg-(--color-muted) p-6 rounded-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">Game Dev</h3>
            <p className="text-body text-(--color-muted-foreground)">
              Unity, C#, Godot
            </p>
          </div>
          
          <div className="bg-(--color-muted) p-6 rounded-lg">
            <h3 className="heading-card text-(--color-foreground) mb-4">Tools</h3>
            <p className="text-body text-(--color-muted-foreground)">
              Git, Figma, Firebase, Jira, Postman
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="inline-block px-8 py-4 bg-(--color-accent) text-(--color-accent-foreground) rounded-lg text-body font-semibold hover:opacity-90 transition-opacity"
        >
          See My Projects
        </Link>
      </div>
    </div>
  );
}