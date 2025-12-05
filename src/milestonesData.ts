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

// Career and learning milestones for Ky Jahn Smith
export const milestones: Milestone[] = [
  // Employment History
  {
    id: 'game-presenter-evolution',
    date: '2024-12-01',
    title: 'Game Presenter',
    type: 'job',
    description: 'Facilitate live casino games at Evolution Gaming, engaging players with clear rules and dynamic presentation. Maintain high energy and professionalism to enhance player satisfaction and retention.',
    technologies: ['Live Streaming', 'Customer Engagement', 'Game Management'],
    link: 'https://www.evolution.com/'
  },
  {
    id: 'cashier-dunkin',
    date: '2021-02-01',
    title: 'Cashier/Customer Service',
    type: 'job',
    description: 'Handled transactions and resolved customer issues at Dunkin, ensuring accurate cash flow and efficient service delivery. Collaborated with team to optimize order processes.',
    technologies: ['Customer Service', 'Cash Management', 'Team Collaboration']
  },
  {
    id: 'camp-counselor-youth-works',
    date: '2019-07-01',
    title: 'Camp Counselor',
    type: 'job',
    description: 'Ensured safety and happiness of children at Youth Works through collaboration with team. Coordinated activities and led various games to enhance children\'s development and enjoyment.',
    technologies: ['Childcare', 'Activity Coordination', 'Team Leadership']
  },
  
  // Education
  {
    id: 'computer-engineering-degree',
    date: '2025-01-01',
    title: 'Bachelor of Science, Computer Engineering',
    type: 'learning',
    description: 'Pursuing Computer Engineering degree at University of Bridgeport, expected graduation May 2029. Building strong foundation in programming, AI/ML, and software engineering.',
    technologies: ['Computer Engineering', 'Programming', 'Software Engineering'],
    link: 'https://www.bridgeport.edu/'
  },
  
  // Projects
  {
    id: 'offline-tasks-pwa',
    date: '2025-12-01',
    title: 'Offline Tasks PWA',
    type: 'project',
    description: 'Built a production-ready Progressive Web App with offline-first architecture for task management.',
    technologies: ['React', 'Vite', 'TypeScript', 'Service Workers', 'IndexedDB', 'PWA'],
    link: 'https://offline-tasks-pwa.vercel.app/'
  },
  {
    id: 'offline-media-pwa',
    date: '2025-12-04',
    title: 'Offline Media PWA',
    type: 'project',
    description: 'Created a PWA for media submissions with offline-first architecture and background sync.',
    technologies: ['React', 'Vite', 'TypeScript', 'Service Workers', 'File API'],
    link: 'https://offline-media-pwa.vercel.app/'
  },
  {
    id: 'accessibleos',
    date: '2025-12-05',
    title: 'AccessibleOS',
    type: 'project',
    description: 'Built a comprehensive accessible task management system with WCAG 2.1 AA compliance.',
    technologies: ['React', 'TypeScript', 'React Native', 'Node.js', 'PostgreSQL', 'Unity'],
    link: 'https://accessible-os-backend.vercel.app/'
  },
  {
    id: 'skillsync',
    date: '2025-11-15',
    title: 'SkillSync - Microservices Architecture',
    type: 'project',
    description: 'Developed a full-stack microservices productivity app using Java, C#, Go, and Node.js.',
    technologies: ['Java', 'Spring Boot', 'C#', '.NET', 'Go', 'Gin', 'Node.js', 'React', 'MongoDB', 'Docker'],
    link: 'https://skillsync-snowy-phi.vercel.app/'
  },
  {
    id: 'cat-ate-my-source-code',
    date: '2025-12-03',
    title: 'cat-ate-my-source-code CLI Tool',
    type: 'project',
    description: 'Created a pragmatic backup & restore CLI tool for code projects with versioned backups.',
    technologies: ['TypeScript', 'Node.js', 'CLI', 'File System API'],
    link: 'https://github.com/KyPython/cat-ate-my-source-code'
  },
  {
    id: 'software-entropy',
    date: '2025-12-05',
    title: 'Software Entropy CLI Tool',
    type: 'project',
    description: 'Built a code-smell detection CLI tool with pluggable rule system and multiple output formats.',
    technologies: ['TypeScript', 'Node.js', 'CLI', 'Jest', 'Code Analysis', 'AST'],
    link: 'https://github.com/KyPython/software-entropy'
  },
  {
    id: 'tracer-bullets-app',
    date: '2025-12-05',
    title: 'Tracer Bullets App',
    type: 'project',
    description: 'Built a tracer bullets implementation demonstrating end-to-end architecture validation from The Pragmatic Programmer.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Tracer Bullets', 'Architecture Validation'],
    link: 'https://tracer-bullets-app.vercel.app/'
  },
  {
    id: 'log-filter-dsl',
    date: '2025-12-05',
    title: 'Log Filter DSL',
    type: 'project',
    description: 'Created a domain-specific language for filtering log lines, demonstrating Domain Languages from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'CLI', 'DSL', 'Compiler', 'Lexer', 'Parser', 'AST'],
    link: 'https://github.com/KyPython/log-filter-dsl'
  },
  {
    id: 'estimate-tracker',
    date: '2025-12-05',
    title: 'Estimate Tracker',
    type: 'project',
    description: 'Built a full-stack application for tracking time estimates vs actual time spent, inspired by Estimating from The Pragmatic Programmer.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Vite', 'Full Stack'],
    link: 'https://estimate-tracker-1nke5ujsq-kypythons-projects.vercel.app/'
  },
  {
    id: 'plain-text-tools',
    date: '2025-12-05',
    title: 'Plain Text Tools',
    type: 'project',
    description: 'Created a collection of CLI utilities for processing and manipulating plain text files.',
    technologies: ['TypeScript', 'Node.js', 'CLI', 'Text Processing', 'File Utilities'],
    link: 'https://github.com/KyPython/plain-text-tools'
  },
  
  // Kaggle Certifications & Courses
  {
    id: 'kaggle-intro-programming',
    date: '2025-01-15',
    title: 'Kaggle: Intro to Programming',
    type: 'course',
    description: 'Completed Kaggle course on programming fundamentals, building strong foundation in coding practices.',
    technologies: ['Python', 'Programming Fundamentals'],
    link: 'https://www.kaggle.com/learn/intro-to-programming'
  },
  {
    id: 'kaggle-intro-ml',
    date: '2025-02-01',
    title: 'Kaggle: Intro to Machine Learning',
    type: 'course',
    description: 'Completed introduction to machine learning course covering core ML concepts and techniques.',
    technologies: ['Machine Learning', 'Python', 'Scikit-learn'],
    link: 'https://www.kaggle.com/learn/intro-to-machine-learning'
  },
  {
    id: 'kaggle-intermediate-ml',
    date: '2025-02-15',
    title: 'Kaggle: Intermediate Machine Learning',
    type: 'course',
    description: 'Advanced machine learning techniques including feature engineering, cross-validation, and pipelines.',
    technologies: ['Machine Learning', 'Feature Engineering', 'Cross-Validation'],
    link: 'https://www.kaggle.com/learn/intermediate-machine-learning'
  },
  {
    id: 'kaggle-intro-deep-learning',
    date: '2025-03-01',
    title: 'Kaggle: Intro to Deep Learning',
    type: 'course',
    description: 'Introduction to deep learning and neural networks, building foundational knowledge in AI.',
    technologies: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Keras'],
    link: 'https://www.kaggle.com/learn/intro-to-deep-learning'
  },
  {
    id: 'kaggle-computer-vision',
    date: '2025-03-15',
    title: 'Kaggle: Computer Vision',
    type: 'course',
    description: 'Specialized course in computer vision, image processing, and convolutional neural networks.',
    technologies: ['Computer Vision', 'CNN', 'Image Processing', 'Deep Learning'],
    link: 'https://www.kaggle.com/learn/computer-vision'
  },
  {
    id: 'kaggle-time-series',
    date: '2025-04-01',
    title: 'Kaggle: Time Series',
    type: 'course',
    description: 'Time series analysis and forecasting techniques for temporal data.',
    technologies: ['Time Series', 'Forecasting', 'ARIMA', 'LSTM'],
    link: 'https://www.kaggle.com/learn/time-series'
  },
  {
    id: 'kaggle-ml-explainability',
    date: '2025-04-15',
    title: 'Kaggle: Machine Learning Explainability',
    type: 'course',
    description: 'Techniques for interpreting and explaining machine learning models.',
    technologies: ['ML Explainability', 'SHAP', 'Model Interpretation'],
    link: 'https://www.kaggle.com/learn/machine-learning-explainability'
  },
  {
    id: 'kaggle-game-ai-rl',
    date: '2025-05-01',
    title: 'Kaggle: Game AI and Reinforcement Learning',
    type: 'course',
    description: 'Game AI development and reinforcement learning algorithms for intelligent agents.',
    technologies: ['Reinforcement Learning', 'Game AI', 'Q-Learning', 'Deep RL'],
    link: 'https://www.kaggle.com/learn/intro-to-game-ai-and-reinforcement-learning'
  },
  
  // CodeSignal Assessment
  {
    id: 'codesignal-data-structures',
    date: '2025-05-15',
    title: 'CodeSignal: Data Structures Assessment',
    type: 'course',
    description: 'Completed CodeSignal assessment demonstrating proficiency in Linked Lists, Stacks, and Queues in Python.',
    technologies: ['Python', 'Data Structures', 'Linked Lists', 'Stacks', 'Queues'],
    link: 'https://codesignal.com/'
  },
  
  // Learning Milestones
  {
    id: 'pwa-mastery',
    date: '2025-11-20',
    title: 'Mastered Progressive Web Apps',
    type: 'learning',
    description: 'Deep dive into PWA architecture, service workers, and offline-first development patterns.',
    technologies: ['Service Workers', 'IndexedDB', 'Web App Manifest', 'Cache API'],
    link: 'https://web.dev/progressive-web-apps/'
  },
  {
    id: 'microservices-learning',
    date: '2025-10-15',
    title: 'Microservices Architecture Patterns',
    type: 'learning',
    description: 'Learned microservices patterns, API Gateway design, and multi-language backend development.',
    technologies: ['Microservices', 'API Gateway', 'Docker', 'Service Communication']
  },
  {
    id: 'accessibility-deep-dive',
    date: '2025-11-10',
    title: 'WCAG 2.1 AA Compliance',
    type: 'learning',
    description: 'Comprehensive study of web accessibility standards and implementation practices.',
    technologies: ['WCAG 2.1', 'ARIA', 'Semantic HTML', 'Screen Readers', 'Keyboard Navigation'],
    link: 'https://www.w3.org/WAI/WCAG21/quickref/'
  },
  {
    id: 'ai-ml-foundation',
    date: '2025-01-01',
    title: 'AI/ML Engineering Foundation',
    type: 'learning',
    description: 'Building expertise in Computer Vision, Time Series Analysis, Deep Learning, Game AI, and Reinforcement Learning.',
    technologies: ['Computer Vision', 'Time Series', 'Deep Learning', 'Reinforcement Learning', 'RAG', 'Fine-Tuning']
  },
  {
    id: 'full-stack-mastery',
    date: '2025-06-01',
    title: 'Full Stack Development Mastery',
    type: 'learning',
    description: 'Comprehensive understanding of frontend (React, React Native) and backend (Node.js, Express) development.',
    technologies: ['React', 'React Native', 'Node.js', 'Express', 'TypeScript', 'Supabase', 'Firebase']
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


