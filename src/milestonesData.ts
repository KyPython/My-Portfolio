// Milestones data for Knowledge Portfolio
// Inspired by "Your Knowledge Portfolio" from The Pragmatic Programmer

export type MilestoneType = 'project' | 'course' | 'job' | 'learning';

export interface Milestone {
  id: string;
  date: string;          // ISO date string (YYYY-MM-DD)
  title: string;
  type: MilestoneType;
  description?: string;
  technologies?: string[];
  link?: string;         // project URL, certificate URL, or learning resource
}

// Example milestones - add your own learning and career milestones here
export const milestones: Milestone[] = [
  // Projects
  {
    id: 'offline-tasks-pwa',
    date: '2024-12-01',
    title: 'Offline Tasks PWA',
    type: 'project',
    description: 'Built a production-ready Progressive Web App with offline-first architecture for task management.',
    technologies: ['React', 'Vite', 'TypeScript', 'Service Workers', 'IndexedDB', 'PWA'],
    link: 'https://offline-tasks-pwa.vercel.app/'
  },
  {
    id: 'offline-media-pwa',
    date: '2024-12-04',
    title: 'Offline Media PWA',
    type: 'project',
    description: 'Created a PWA for media submissions with offline-first architecture and background sync.',
    technologies: ['React', 'Vite', 'TypeScript', 'Service Workers', 'File API'],
    link: 'https://offline-media-pwa.vercel.app/'
  },
  {
    id: 'accessibleos',
    date: '2024-12-05',
    title: 'AccessibleOS',
    type: 'project',
    description: 'Built a comprehensive accessible task management system with WCAG 2.1 AA compliance.',
    technologies: ['React', 'TypeScript', 'React Native', 'Node.js', 'PostgreSQL', 'Unity'],
    link: 'https://accessible-os-backend.vercel.app/'
  },
  {
    id: 'skillsync',
    date: '2024-11-15',
    title: 'SkillSync - Microservices Architecture',
    type: 'project',
    description: 'Developed a full-stack microservices productivity app using Java, C#, Go, and Node.js.',
    technologies: ['Java', 'Spring Boot', 'C#', '.NET', 'Go', 'Gin', 'Node.js', 'React', 'MongoDB', 'Docker'],
    link: 'https://skillsync-snowy-phi.vercel.app/'
  },
  {
    id: 'cat-ate-my-source-code',
    date: '2024-12-03',
    title: 'cat-ate-my-source-code CLI Tool',
    type: 'project',
    description: 'Created a pragmatic backup & restore CLI tool for code projects with versioned backups.',
    technologies: ['TypeScript', 'Node.js', 'CLI', 'File System API'],
    link: 'https://github.com/KyPython/cat-ate-my-source-code'
  },
  {
    id: 'software-entropy',
    date: '2024-12-05',
    title: 'Software Entropy CLI Tool',
    type: 'project',
    description: 'Built a code-smell detection CLI tool with pluggable rule system and multiple output formats.',
    technologies: ['TypeScript', 'Node.js', 'CLI', 'Jest', 'Code Analysis', 'AST'],
    link: 'https://github.com/KyPython/software-entropy'
  },
  
  // Learning milestones
  {
    id: 'pwa-mastery',
    date: '2024-11-20',
    title: 'Mastered Progressive Web Apps',
    type: 'learning',
    description: 'Deep dive into PWA architecture, service workers, and offline-first development patterns.',
    technologies: ['Service Workers', 'IndexedDB', 'Web App Manifest', 'Cache API'],
    link: 'https://web.dev/progressive-web-apps/'
  },
  {
    id: 'microservices-learning',
    date: '2024-10-15',
    title: 'Microservices Architecture Patterns',
    type: 'learning',
    description: 'Learned microservices patterns, API Gateway design, and multi-language backend development.',
    technologies: ['Microservices', 'API Gateway', 'Docker', 'Service Communication']
  },
  {
    id: 'accessibility-deep-dive',
    date: '2024-11-10',
    title: 'WCAG 2.1 AA Compliance',
    type: 'learning',
    description: 'Comprehensive study of web accessibility standards and implementation practices.',
    technologies: ['WCAG 2.1', 'ARIA', 'Semantic HTML', 'Screen Readers', 'Keyboard Navigation'],
    link: 'https://www.w3.org/WAI/WCAG21/quickref/'
  },
  
  // Courses (example - replace with your actual courses)
  {
    id: 'advanced-typescript',
    date: '2024-09-01',
    title: 'Advanced TypeScript Patterns',
    type: 'course',
    description: 'Completed comprehensive course on advanced TypeScript features and design patterns.',
    technologies: ['TypeScript', 'Design Patterns', 'Type System'],
    link: '#'
  },
  {
    id: 'react-performance',
    date: '2024-08-15',
    title: 'React Performance Optimization',
    type: 'course',
    description: 'Learned React optimization techniques including memoization, code splitting, and lazy loading.',
    technologies: ['React', 'Performance', 'Optimization', 'Bundle Analysis']
  },
  
  // Jobs/Career milestones (example - replace with your actual career milestones)
  {
    id: 'full-stack-developer',
    date: '2024-01-01',
    title: 'Full Stack Developer',
    type: 'job',
    description: 'Started role focusing on building scalable web applications with modern technologies.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']
  }
];

// Helper function to group milestones by year
export function groupMilestonesByYear(milestones: Milestone[]): Record<string, Milestone[]> {
  const grouped: Record<string, Milestone[]> = {};
  
  milestones.forEach(milestone => {
    const year = new Date(milestone.date).getFullYear().toString();
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(milestone);
  });
  
  // Sort milestones within each year by date (newest first)
  Object.keys(grouped).forEach(year => {
    grouped[year].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });
  
  return grouped;
}

// Helper function to filter milestones by type
export function filterMilestonesByType(milestones: Milestone[], type: MilestoneType | 'all'): Milestone[] {
  if (type === 'all') {
    return milestones;
  }
  return milestones.filter(m => m.type === type);
}

// Get all unique milestone types
export function getMilestoneTypes(): MilestoneType[] {
  return ['project', 'course', 'job', 'learning'];
}

