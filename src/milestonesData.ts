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
  {
    id: 'shell-games',
    date: '2025-12-05',
    title: 'Shell Games Toolkit',
    type: 'project',
    description: 'Built reusable shell scripts for project scaffolding, environment checks, and deployment automation, demonstrating Shell Games from The Pragmatic Programmer.',
    technologies: ['Shell', 'Bash', 'POSIX', 'CLI', 'Automation', 'DevOps'],
    link: 'https://github.com/KyPython/shell-games'
  },
  {
    id: 'power-editing',
    date: '2025-12-05',
    title: 'Power Editing Configuration',
    type: 'project',
    description: 'Created VS Code and Cursor editor configuration for maximum productivity, implementing Power Editing philosophy from The Pragmatic Programmer.',
    technologies: ['VS Code', 'Cursor', 'Editor Configuration', 'Productivity', 'Keybindings', 'Snippets'],
    link: 'https://github.com/KyPython/power-editing'
  },
  {
    id: 'git-workflows-sample',
    date: '2025-12-05',
    title: 'Git Workflows Sample',
    type: 'project',
    description: 'Created a sample project demonstrating Git workflows and branching strategies, implementing Source Code Control principles from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Git', 'GitHub', 'CI/CD', 'Branching Strategies'],
    link: 'https://github.com/KyPython/git-workflows-sample'
  },
  {
    id: 'debugging-demo',
    date: '2025-12-05',
    title: 'Debugging Demo',
    type: 'project',
    description: 'Created a buggy todo manager app for teaching systematic debugging techniques, demonstrating debugging principles from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Jest', 'Debugging', 'Testing', 'Education'],
    link: 'https://github.com/KyPython/debugging-demo'
  },
  {
    id: 'code-generator-tool',
    date: '2025-12-05',
    title: 'Code Generator Tool',
    type: 'project',
    description: 'Created a CLI tool for generating boilerplate code from templates, implementing Code Generators principle from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'CLI', 'Code Generation', 'Templates', 'Boilerplate'],
    link: 'https://github.com/KyPython/code-generator-tool'
  },
  {
    id: 'assertive-programming',
    date: '2025-12-05',
    title: 'Assertive Programming Demo',
    type: 'project',
    description: 'Created a demonstration of Assertive Programming principles, showing how runtime assertions improve reliability and debuggability, from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Jest', 'Assertions', 'Defensive Programming', 'Testing'],
    link: 'https://github.com/KyPython/assertive-programming'
  },
  {
    id: 'design-by-contract-lib',
    date: '2025-12-05',
    title: 'Design by Contract Library',
    type: 'project',
    description: 'Created a lightweight TypeScript library for enforcing Design by Contract principles, published as npm package @kypython/design-by-contract, from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'npm', 'Design by Contract', 'Defensive Programming', 'Library'],
    link: 'https://github.com/KyPython/design-by-contract-lib'
  },
  {
    id: 'using-exceptions-demo',
    date: '2025-12-05',
    title: 'Using Exceptions Demo',
    type: 'project',
    description: 'Built a demonstration API showcasing proper exception handling patterns, implementing Using Exceptions principle from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'API', 'Exception Handling', 'Error Handling', 'Full Stack'],
    link: 'https://using-exceptions-demo.vercel.app/'
  },
  {
    id: 'dead-programs-logging',
    date: '2025-12-05',
    title: 'Dead Programs Tell No Lies',
    type: 'project',
    description: 'Built a demonstration API showcasing fail-fast error handling and structured logging, implementing Dead Programs Tell No Lies principle from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'API', 'Error Handling', 'Logging', 'Fail Fast', 'Full Stack'],
    link: 'https://dead-programs-logging.onrender.com'
  },
  {
    id: 'balancing-resources',
    date: '2025-12-05',
    title: 'Balancing Resources Demo',
    type: 'project',
    description: 'Created a demonstration of safe resource acquisition and release patterns, implementing Balancing Resources principle from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Resource Management', 'Memory Management', 'Connection Pooling'],
    link: 'https://github.com/KyPython/balancing-resources'
  },
  {
    id: 'decoupling-law-of-demeter',
    date: '2025-12-05',
    title: 'Decoupling & Law of Demeter',
    type: 'project',
    description: 'Created a demonstration of decoupling principles and the Law of Demeter, implementing decoupling and Law of Demeter principles from The Pragmatic Programmer.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Decoupling', 'Law of Demeter', 'Design Patterns'],
    link: 'https://kypython.github.io/decoupling-law-of-demeter/'
  },
  {
    id: 'metaprogramming-demo',
    date: '2025-12-05',
    title: 'Metaprogramming Demo',
    type: 'project',
    description: 'Created a Python demonstration of metaprogramming techniques, showcasing runtime code generation and reflection capabilities from The Pragmatic Programmer.',
    technologies: ['Python', 'Metaprogramming', 'Decorators', 'Metaclasses', 'Runtime Code Generation'],
    link: 'https://kypython.github.io/metaprogramming-demo/'
  },
  {
    id: 'temporal-coupling-demo',
    date: '2025-12-05',
    title: 'Temporal Coupling Demo',
    type: 'project',
    description: 'Created a demonstration of event-driven architecture to avoid temporal coupling, implementing decoupling principles from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Event-Driven Architecture', 'Publish-Subscribe', 'Temporal Coupling'],
    link: 'https://kypython.github.io/temporal-coupling-demo/'
  },
  {
    id: 'mvc-demo-app',
    date: '2025-12-05',
    title: 'MVC Demo Application',
    type: 'project',
    description: 'Built a Todo application demonstrating MVC architectural pattern and "It\'s Just a View" principle from The Pragmatic Programmer.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MVC', 'Architecture', 'Full Stack'],
    link: 'https://mvc-demo-app.onrender.com'
  },
  {
    id: 'blackboard-pattern-demo',
    date: '2025-12-05',
    title: 'Blackboard Pattern Demo',
    type: 'project',
    description: 'Created a demonstration of the Blackboard architectural pattern with text enrichment experts, implementing architectural patterns from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Blackboard Pattern', 'Architecture', 'Design Patterns', 'Expert Systems'],
    link: 'https://blackboard-pattern-demo.vercel.app/'
  },
  {
    id: 'program-by-coincidence',
    date: '2025-12-05',
    title: 'Programming by Coincidence Demo',
    type: 'project',
    description: 'Created a demonstration showing the difference between programming by coincidence and intentional programming, from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Jest', 'Refactoring', 'Code Quality', 'Intentional Programming'],
    link: 'https://github.com/KyPython/program-by-coincidence'
  },
  {
    id: 'algorithm-speed-demo',
    date: '2025-12-05',
    title: 'Algorithm Speed Demo',
    type: 'project',
    description: 'Created a demonstration of algorithm performance differences with comprehensive benchmarking, implementing Algorithm Speed principle from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Algorithms', 'Big-O Notation', 'Performance', 'Benchmarking'],
    link: 'https://github.com/KyPython/algorithm-speed-demo'
  },
  {
    id: 'refactoring-legacy-module',
    date: '2025-12-05',
    title: 'Refactoring Legacy Module',
    type: 'project',
    description: 'Created a demonstration of refactoring legacy code, showing systematic improvement techniques from The Pragmatic Programmer.',
    technologies: ['JavaScript', 'TypeScript', 'Refactoring', 'Legacy Code', 'Code Quality', 'Testing'],
    link: 'https://kypython.github.io/refactoring-legacy-module/'
  },
  {
    id: 'easy-to-test-code',
    date: '2025-12-05',
    title: 'Easy to Test Code',
    type: 'project',
    description: 'Created a demonstration of testable code design with dependency injection, implementing Code That\'s Easy to Test principle from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Jest', 'Dependency Injection', 'Testing', 'Testability'],
    link: 'https://github.com/KyPython/easy-to-test-code'
  },
  {
    id: 'evil-wizards-demo',
    date: '2025-12-05',
    title: 'Evil Wizards Demo',
    type: 'project',
    description: 'Created a pedagogical demonstration contrasting obfuscated vs clear code, showing the dramatic impact of code quality on readability and maintainability.',
    technologies: ['TypeScript', 'Node.js', 'Jest', 'Code Quality', 'Readability', 'Maintainability'],
    link: 'https://kypython.github.io/evil-wizards-demo/'
  },
  {
    id: 'requirements-pit-tool',
    date: '2025-12-05',
    title: 'Requirements Pit Tool',
    type: 'project',
    description: 'Created a tool for capturing and structuring software requirements systematically, implementing requirements engineering principles from The Pragmatic Programmer.',
    technologies: ['React', 'TypeScript', 'Vite', 'Requirements Engineering', 'Project Planning'],
    link: 'https://requirements-pit-tool.vercel.app/'
  },
  {
    id: 'solving-impossible-puzzles',
    date: '2025-12-05',
    title: 'Solving Impossible Puzzles',
    type: 'project',
    description: 'Created a case study in debugging a subtle race condition in an async task queue, demonstrating Solving Impossible Puzzles principle from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Jest', 'Debugging', 'Race Conditions', 'Async Programming'],
    link: 'https://kypython.github.io/solving-impossible-puzzles/'
  },
  {
    id: 'readiness-checklist-tool',
    date: '2025-12-06',
    title: 'Readiness Checklist Tool',
    type: 'project',
    description: 'Created a web-based tool to evaluate project readiness, implementing Not Until You\'re Ready principle from The Pragmatic Programmer.',
    technologies: ['React', 'TypeScript', 'Vite', 'Project Planning', 'Risk Assessment'],
    link: 'https://readiness-checklist-tool.vercel.app/'
  },
  {
    id: 'specification-trap-demo',
    date: '2025-12-06',
    title: 'Specification Trap Demo',
    type: 'project',
    description: 'Created a demonstration comparing over-specification vs. pragmatic lightweight requirements, illustrating The Specification Trap from The Pragmatic Programmer.',
    technologies: ['React', 'TypeScript', 'Vite', 'Requirements Engineering', 'User Stories', 'Agile'],
    link: 'https://kypython.github.io/specification-trap-demo/'
  },
  {
    id: 'circles-and-arrows-design',
    date: '2025-12-06',
    title: 'Circles and Arrows Design',
    type: 'project',
    description: 'Created a system design repository demonstrating Circles and Arrows approach from The Pragmatic Programmer, using simple Mermaid diagrams for architecture documentation.',
    technologies: ['Mermaid', 'System Design', 'Architecture', 'Documentation', 'Diagrams'],
    link: 'https://kypython.github.io/circles-and-arrows-design/'
  },
  {
    id: 'pragmatic-teams-workflow',
    date: '2025-12-06',
    title: 'Pragmatic Teams Workflow',
    type: 'project',
    description: 'Created a demonstration repository showcasing pragmatic team workflows with GitHub, including workflow documentation and collaboration practices.',
    technologies: ['React', 'TypeScript', 'Vite', 'GitHub', 'Workflow', 'Team Collaboration'],
    link: 'https://kypython.github.io/pragmatic-teams-workflow/'
  },
  {
    id: 'ubiquitous-automation',
    date: '2025-12-06',
    title: 'Ubiquitous Automation',
    type: 'project',
    description: 'Created a demo showcasing CI/CD and DevOps automation principles, implementing Ubiquitous Automation from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'GitHub Actions', 'CI/CD', 'DevOps', 'Automation'],
    link: 'https://ubiquitous-automation.vercel.app/'
  },
  {
    id: 'ruthless-testing-demo',
    date: '2025-12-06',
    title: 'Ruthless Testing Demo',
    type: 'project',
    description: 'Created a demonstration of Ruthless Testing strategy with multi-layer test suite, implementing testing principles from The Pragmatic Programmer.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Jest', 'Supertest', 'Testing'],
    link: 'https://ruthless-testing-demo.vercel.app/'
  },
  {
    id: 'great-expectations-stakeholders',
    date: '2025-12-06',
    title: 'Great Expectations Stakeholders',
    type: 'project',
    description: 'Created a demo showcasing Great Expectations principle from The Pragmatic Programmer, demonstrating effective stakeholder expectation management in software projects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Stakeholder Management', 'Project Management'],
    link: 'https://kypython.github.io/great-expectations-stakeholders/'
  },
  {
    id: 'its-all-writing-docs',
    date: '2025-12-06',
    title: "It's All Writing",
    type: 'project',
    description: 'Created a simple counter application demonstrating that software is all writing, implementing the principle from The Pragmatic Programmer that every aspect of software development is fundamentally an act of writing and communication.',
    technologies: ['React', 'TypeScript', 'Vite', 'Vitest', 'Documentation'],
    link: 'https://kypython.github.io/its-all-writing-docs/'
  },
  {
    id: 'intro-llm-chatbot',
    date: '2025-12-06',
    title: 'LLM Chat API',
    type: 'project',
    description: 'Created a minimal LLM chat API built with Node.js, TypeScript, Express, and OpenAI SDK, demonstrating production-ready API design for AI/ML integration.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'OpenAI SDK', 'REST API', 'AI/ML'],
    link: 'https://intro-llm-chatbot.vercel.app/'
  },
  {
    id: 'prompt-playground',
    date: '2025-12-06',
    title: 'Prompt Engineering Playground',
    type: 'project',
    description: 'Created a Node.js API for testing different prompt engineering techniques (zero-shot, one-shot, few-shot, chain-of-thought) with OpenAI models, demonstrating advanced AI/ML prompt engineering skills.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'OpenAI SDK', 'Prompt Engineering', 'AI/ML'],
    link: 'https://github.com/KyPython/prompt-playground'
  },
  {
    id: 'advanced-prompting-reasoner',
    date: '2025-12-06',
    title: 'Advanced Prompting Reasoner',
    type: 'project',
    description: 'Created a multi-step reasoning API using chain-of-thought and self-consistency techniques for solving math and logic problems, demonstrating advanced AI/ML reasoning capabilities.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'OpenAI SDK', 'Chain-of-Thought', 'Self-Consistency', 'AI/ML'],
    link: 'https://advanced-prompting-reasoner.vercel.app/'
  },
  {
    id: 'llm-finetuning-demo',
    date: '2025-12-06',
    title: 'LLM Fine-tuning Demo',
    type: 'project',
    description: 'Created a comprehensive demonstration of fine-tuning large language models for custom tasks and domain-specific applications, showcasing advanced AI/ML engineering skills.',
    technologies: ['Python', 'LLM', 'Fine-tuning', 'Machine Learning', 'AI/ML', 'Model Training'],
    link: 'https://kypython.github.io/llm-finetuning-demo/'
  },
  {
    id: 'rag-node-ts',
    date: '2025-12-06',
    title: 'RAG Node.js TypeScript Service',
    type: 'project',
    description: 'Created a production-ready RAG (Retrieval-Augmented Generation) HTTP service with document ingestion, semantic search, and LLM answer generation, demonstrating enterprise-grade AI/ML engineering.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'LangChain', 'OpenAI', 'Pinecone', 'RAG', 'Vector Database', 'AI/ML'],
    link: 'https://github.com/KyPython/rag-node-ts'
  },
  {
    id: 'llm-internals-report',
    date: '2025-12-06',
    title: 'LLM Internals Report',
    type: 'project',
    description: 'Created a comprehensive research and educational project exploring LLM internals with interactive notebooks and detailed technical report, demonstrating deep understanding of neural network architecture and transformer mechanisms.',
    technologies: ['Python', 'Jupyter', 'Machine Learning', 'LLM', 'Neural Networks', 'Transformers', 'Attention Mechanisms', 'AI/ML'],
    link: 'https://github.com/KyPython/llm-internals-report'
  },
  {
    id: 'llm-future-trends',
    date: '2025-12-06',
    title: 'LLM Future Trends',
    type: 'project',
    description: 'Created a comprehensive research and analysis project exploring future trends and developments in large language models, demonstrating strategic thinking and ability to analyze emerging AI/ML technologies.',
    technologies: ['Research', 'Analysis', 'LLM', 'AI/ML', 'Future Trends', 'Strategic Analysis', 'Technology Forecasting'],
    link: 'https://kypython.github.io/llm-future-trends/'
  },
  {
    id: 'tools-assistant',
    date: '2025-12-06',
    title: 'Tools & Frameworks Assistant',
    type: 'project',
    description: 'Created a modular CLI assistant with LangChain TypeScript that intelligently selects and calls specialized tools, demonstrating advanced AI agent orchestration and tool calling capabilities.',
    technologies: ['TypeScript', 'LangChain', 'Node.js', 'AI/ML', 'Agent Framework', 'Tool Calling', 'API', 'CLI'],
    link: 'https://tools-assistant.vercel.app/'
  },
  {
    id: 'ethics-safety-toolkit',
    date: '2025-12-06',
    title: 'Ethics & Safety Toolkit',
    type: 'project',
    description: 'Created a lightweight Express.js service that wraps LLM generation endpoints with safety checks, screening outputs for toxicity and bias, demonstrating ethical AI implementation and content moderation patterns.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'AI/ML', 'Safety', 'Ethics', 'Content Moderation', 'API'],
    link: 'https://ethics-safety-toolkit.vercel.app/'
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


