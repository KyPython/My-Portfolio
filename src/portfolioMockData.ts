// Mock data for the portfolio website
export enum ProjectCategory {
  WEB_DEVELOPMENT = "Web Development",
  APP_DEVELOPMENT = "App Development", 
  GAME_DEVELOPMENT = "Game Development"
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
    }
  ],
  personalInfo: {
    name: "KyPython",
    email: "ky@python.dev",
    linkedIn: "https://linkedin.com/in/kypython",
    github: "https://github.com/KyPython",
    description: "As a versatile developer, I craft tailored solutions that elevate user experiences and drive business success. My projects reflect a blend of creativity and technical expertise, ensuring impactful results for every client."
  },
  navigationLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
};