// Mock data for the portfolio website
export enum ProjectCategory {
  WEB_DEVELOPMENT = "Web Development",
  APP_DEVELOPMENT = "App Development", 
  GAME_DEVELOPMENT = "Game Development",
  FULL_STACK = "Full Stack"
}

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINE = "outline"
}

export enum SectionType {
  HERO = "hero",
  PROJECTS = "projects",
  PROCESS = "process",
  DEMOS = "demos",
  NEWSLETTER = "newsletter",
  FOOTER = "footer"
}

// Data passed as props to the root component
export const mockRootProps = {
  projects: [
    {
      id: "supacrm",
      title: "SupaCRM",
      category: ProjectCategory.WEB_DEVELOPMENT as const,
      description: "A full-featured CRM for real estate agents — listing management, automated follow-ups, and analytics.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "/images/supacrm.svg",
      liveUrl: "https://supacrm.vercel.app/",
      repoUrl: "https://github.com/KyPython/SupaCRM",
      featured: true
    },
    {
      id: "formflow",
      title: "FormFlow", 
      category: ProjectCategory.WEB_DEVELOPMENT as const,
      description: "SaaS for automating form workflows with secure hosting and CI/CD integration.",
      tech: ["React", "Node.js", "Express", "SCSS"],
      image: "/images/formflow.svg",
      liveUrl: "https://formflow-frontend-phi.vercel.app",
      repoUrl: "https://github.com/KyPython/FormFlow",
      featured: true
    },
      {
        id: "post-code-scraper",
        title: "Post Code Scraper",
        category: ProjectCategory.WEB_DEVELOPMENT as const,
    description: `This web application showcases my ability to build efficient and scalable solutions for data scraping and storage. The app scrapes postal codes from every state in the USA, and securely stores them in a Supabase database. It demonstrates my expertise in web scraping, database integration, and deploying production-ready applications.\n\nKey Features:\n- Automated Data Scraping: Efficiently extracts postal codes from targeted sources.\n- Secure Data Storage: Uses Supabase for reliable and scalable database management.\n- Cloud Deployment: Fully deployed on Render.com for seamless accessibility.\n\nWhy This Matters:\n- Build robust backend systems for data collection and storage.\n- Work with modern tools like Playwright, Supabase, and Render.\n- Deliver solutions that are ready for deployment in real-world scenarios.\n\nHow It Works:\n- Python: Core programming language for the scraper.\n- Playwright: For fast and reliable web scraping.\n- Supabase: A scalable backend-as-a-service for data storage.\n- Render: For cloud deployment and hosting.`,
    tech: ["Python", "Playwright", "Supabase", "Render", "Next.js", "TypeScript", "Tailwind CSS"],
        image: "/images/offline-tasks-pwa.png",
    liveUrl: "https://post-code-scraper.onrender.com",
  repoUrl: "https://github.com/KyPython/Post-Code-Scraper-New",
  featured: true,
  },
    {
      id: "algoclinic",
      title: "AlgoClinic",
      category: ProjectCategory.WEB_DEVELOPMENT as const,
      description: "Algorithm analysis platform with AI-driven insights, benchmarking and edge-case detection for developers and teams.",
      tech: ["React", "Python", "FastAPI", "Monaco Editor"],
      image: "/images/algoclinic.svg",
      liveUrl: "https://algo-clinic.vercel.app",
      repoUrl: "https://github.com/KyPython/AlgoClinic",
      featured: true
    },
    {
      id: "smartscan-ai",
      title: "SmartScan AI Frontend",
      category: ProjectCategory.APP_DEVELOPMENT as const,
      description: "Cross-platform client for AI-powered image captioning — real-time camera, async API and clean UX; deployed as an MVP.",
      tech: ["Expo Router", "React Native Web", "TypeScript"],
      image: "/images/smartscan-ai-frontend.svg",
      liveUrl: "https://smartscan-ai-frontend.vercel.app/onboarding",
      repoUrl: "https://github.com/KyPython/smartscan-ai-frontend",
      featured: true
    },
    {
      id: "growth-master",
    title: "Growth Master 🚀",
    category: ProjectCategory.APP_DEVELOPMENT as const,
    description: `A Clean, Emotionally-Driven Mobile App for Tracking Personal Growth & Performance\n\nGrowth Master is designed as a modern, intuitive mobile application focused on empowering users to track and celebrate their everyday progress. It's built on the principle that consistent small wins and positive micro-interactions lead to significant personal improvement. The app offers a seamless and emotionally resonant experience, helping users stay motivated by visualizing their journey towards better habits and faster performance.\n\nKey Features:\n- Daily Wins Tracking: Easily log and visualize small achievements and positive moments each day.\n- Personal Improvement Journey: Monitor progress across various personal goals and habits over time.\n- Fast Performance Insights: Track and analyze key performance metrics for rapid feedback and optimization.\n- Intuitive Micro-Interactions: Enjoy a smooth, responsive, and engaging user interface designed for effortless use.\n- Emotionally Driven Design: A clean and thoughtful design that fosters a positive and encouraging environment.\n\nFor freelance clients, Growth Master serves as a testament to expertise in developing user-centric, high-performance, and engaging mobile applications. This project showcases:\n- Front-End Proficiency: Expertise in creating clean, responsive, and aesthetically pleasing mobile interfaces using modern frameworks.\n- Emotionally Intelligent Design: The ability to translate abstract concepts like emotional drive and personal improvement into tangible, user-friendly features.\n- Data-Driven Tracking: Competence in designing systems for logging, analyzing, and presenting user data effectively.\n- Performance Optimization: A focus on delivering a fast and fluid user experience, critical for user retention.\n- Scalable Architecture: Understanding of how to structure an app for future growth and new features.\n\nChoosing a developer who can not only code but also deeply understand and translate user psychology into app design, as demonstrated by Growth Master, ensures a product that truly resonates with your target audience.`,
    tech: ["React Native", "HTML", "CSS/SCSS", "JavaScript", "TypeScript", "Git", "GitHub", "Figma"],
    image: "/images/growth-master.svg",
    liveUrl: "https://growth-master-green.vercel.app",
    repoUrl: "https://github.com/KyPython/Growth-Master",
    featured: true
    },
    {
      id: "streamengine",
      title: "StreamEngine",
      category: ProjectCategory.WEB_DEVELOPMENT as const,
      description: "Real-time data processing and visualization platform for live dashboards and scalable streaming infrastructure.",
      tech: ["React", "Node.js", "Kafka", "WebSockets"],
      image: "/images/streamengine.svg",
      liveUrl: "https://stream-engine-silk.vercel.app",
      repoUrl: "https://github.com/KyPython/StreamEngine",
      featured: true
    },
    {
      id: "reportengine",
      title: "ReportEngine",
      category: ProjectCategory.WEB_DEVELOPMENT as const,
      description: "Automated reporting and dashboards for business analytics; exports, scheduling and insights.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      image: "/images/report-engine.svg",
      liveUrl: "https://reportengine.vercel.app/",
      repoUrl: "https://github.com/KyPython/ReportEngine",
      featured: false
    },
    {
      id: "salesbase-frontend",
      title: "SalesBase Frontend",
      category: ProjectCategory.WEB_DEVELOPMENT as const,
      description: "Modern CRM frontend with intuitive dashboards and realtime data integrations for enterprise sales teams.",
      tech: ["React", "Tailwind CSS"],
      image: "/images/salesbase-frontend.svg",
      liveUrl: "https://salesbase-frontend.vercel.app",
      repoUrl: "https://github.com/KyPython/SalesBase-Frontend",
      featured: false
    },
  {
    id: "altlens",
    title: "AltLens",
    category: ProjectCategory.APP_DEVELOPMENT as const,
    description: `AltLens is a React Native project created with Expo.\n\nGetting Started:\nTo run the project, use one of the following commands:\n- npm run android   # Run on Android emulator/device\n- npm run ios       # Run on iOS simulator/device\n- npm run web       # Run in the browser\n\nProject Structure:\n- App.js or App.tsx: Main entry point for the app\n- assets/: Images, fonts, and other static assets\n- components/: Reusable React Native components\n- screens/: App screens (if you add them)\n\nFirebase Integration Example:\nimport { auth, db } from '../lib/firebase';\n// Example: Sign up a user\n// import { createUserWithEmailAndPassword } from 'firebase/auth';\n// await createUserWithEmailAndPassword(auth, email, password);\n// Example: Add data to Firestore\n// import { collection, addDoc } from 'firebase/firestore';\n// await addDoc(collection(db, 'users'), { name: 'Jane Doe' });\n\nLearn More:\n- Expo Documentation: https://docs.expo.dev/\n- React Native Documentation: https://reactnative.dev/`,
    tech: ["React Native", "Expo", "Firebase", "JavaScript", "TypeScript"],
    image: "/images/project-placeholder.png",
    liveUrl: "https://alt-lens-app-new.vercel.app",
    repoUrl: "https://github.com/KyPython/Alt-Lens-App-New",
    featured: true,
  },
    {
      id: "skillsync",
      title: "SkillSync",
      category: ProjectCategory.FULL_STACK as const,
      description: "Full-stack microservices productivity application demonstrating multi-language backend development. Features task management (CRUD), goal tracking with progress bars, Pomodoro timer, motivational quotes API, and a real-time dashboard. Built with a microservices architecture using Java (Spring Boot), C# (.NET), Go (Gin), and Node.js (Express), all orchestrated through an API Gateway pattern and containerized with Docker.",
      tech: ["Java", "Spring Boot", "C#", ".NET", "Go", "Gin", "Node.js", "Express", "React", "TypeScript", "MongoDB", "Docker"],
      image: "/images/skillsync.png",
      liveUrl: "https://skillsync-snowy-phi.vercel.app/",
      repoUrl: "https://github.com/KyPython/skillsync",
      featured: true
    },
    {
      id: "offline-tasks-pwa",
      title: "Offline Tasks PWA",
      category: ProjectCategory.FULL_STACK as const,
      description: "A production-ready Progressive Web App (PWA) with offline-first architecture for task management. Features full CRUD operations that work seamlessly offline, automatic background synchronization when connectivity is restored, and native app-like experience with installable PWA capabilities. Built with modern web technologies and deployed across multiple cloud platforms.",
      tech: ["React", "Vite", "TypeScript", "Node.js", "Express", "Service Workers", "IndexedDB", "PWA", "Vercel", "Render"],
      image: "/images/offline-tasks-pwa.png",
      liveUrl: "https://offline-tasks-pwa.vercel.app/",
      repoUrl: "https://github.com/KyPython/offline-tasks-pwa",
      featured: true
    },
    {
      id: "offline-media-pwa",
      title: "Offline Media PWA",
      category: ProjectCategory.FULL_STACK as const,
      description: "A Progressive Web App (PWA) for creating and managing media submissions with offline-first architecture. Features photo and video uploads that work seamlessly offline, automatic background synchronization when connectivity is restored, and a sync queue to track pending uploads. Built with modern web technologies for reliable media management even in low-connectivity environments.",
      tech: ["React", "Vite", "TypeScript", "Node.js", "Express", "Service Workers", "IndexedDB", "PWA", "File API", "Vercel"],
      image: "/images/offline-media-pwa.png",
      liveUrl: "https://offline-media-pwa.vercel.app/",
      repoUrl: "https://github.com/KyPython/offline-media-pwa",
      featured: true
    },
    {
      id: "accessibleos",
      title: "AccessibleOS",
      category: ProjectCategory.FULL_STACK as const,
      description: "A comprehensive, accessible task management system built for Web, Mobile, and Unity platforms with strong accessibility foundations. Features WCAG 2.1 AA compliance, semantic HTML, ARIA roles, keyboard navigation, screen reader support, and multi-platform synchronization. Includes React web app, React Native mobile app, Unity game, and Node.js backend with PostgreSQL.",
      tech: ["React", "TypeScript", "React Native", "Node.js", "Express", "PostgreSQL", "Unity", "C#", "WCAG 2.1", "Accessibility"],
      image: "/images/accessibleos.png",
      liveUrl: "https://accessible-os-backend.vercel.app/",
      repoUrl: "https://github.com/KyPython/AccessibleOS",
      featured: true
    },
    {
      id: "cat-ate-my-source-code",
      title: "cat-ate-my-source-code",
      category: ProjectCategory.APP_DEVELOPMENT as const,
      description: "A pragmatic backup & restore CLI tool for code projects, focused on disaster recovery and redundancy habits. Inspired by 'The Pragmatic Programmer', this tool helps developers develop good backup habits and protect code from disasters. Features versioned backups with timestamps, support for multiple projects, configurable exclude patterns, automatic retention policies, dry-run mode, and cross-platform compatibility. Designed with a config-driven approach for easy setup and management.",
      tech: ["TypeScript", "Node.js", "CLI", "File System API", "npm"],
      image: "/images/project-placeholder.png",
      liveUrl: "",
      repoUrl: "https://github.com/KyPython/cat-ate-my-source-code",
      featured: true
    },
    {
      id: "software-entropy",
      title: "Software Entropy",
      category: ProjectCategory.APP_DEVELOPMENT as const,
      description: "A code-smell detection CLI tool that scans code repositories for common issues like long functions, large files, and TODO/FIXME density. Features a pluggable rule system for easy extension, multiple output formats (JSON and pretty console), configurable thresholds, and efficient scanning with customizable file patterns. Well-tested with comprehensive Jest test suite and designed for fast, actionable code quality insights.",
      tech: ["TypeScript", "Node.js", "CLI", "Jest", "Code Analysis", "AST"],
      image: "/images/project-placeholder.png",
      liveUrl: "",
      repoUrl: "https://github.com/KyPython/software-entropy",
      featured: true
    },
    {
      id: "stone-soup-board",
      title: "Stone Soup Board",
      category: ProjectCategory.FULL_STACK as const,
      description: "A minimal kanban board application designed for iterative contribution and collaborative improvement. Follows the 'Stone Soup' philosophy—starting with a simple foundation that invites collaborative enhancement. Features three columns (Ideas, In Progress, Done), full CRUD operations for cards, and a clean, intuitive interface. Built with React and TypeScript frontend, Node.js and Express backend, with comprehensive testing.",
      tech: ["React", "TypeScript", "Node.js", "Express", "Jest", "Kanban", "Full Stack"],
      image: "/images/stone-soup-board.png",
      liveUrl: "https://stone-soup-board.vercel.app/",
      repoUrl: "https://github.com/KyPython/stone-soup-board",
      featured: true
    },
  ],
  personalInfo: {
    name: "Ky Jahn Smith",
    email: "kyjahntsmith@gmail.com",
    linkedIn: "https://www.linkedin.com/in/kyjahn-smith-16487224b/",
    github: "https://github.com/KyPython",
    description: "Highly motivated and versatile aspiring AI/ML Engineer and UI/UX Developer with a strong foundation in programming and specialized expertise in machine learning (Computer Vision, Time Series Analysis, Deep Learning, Game AI, Reinforcement Learning). Proficient in UI/UX Design, CSS, and HTML, demonstrating a comprehensive understanding of both front-end development and human-centered design principles."
  },
  navigationLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Knowledge", href: "/knowledge" },
    { label: "About Me", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
};