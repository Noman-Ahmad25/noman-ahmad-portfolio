export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  status?: string;
  technologies: string[];
  description: string;
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI Systems' | 'Full-Stack' | 'Developer Tools';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuerOrScope: string;
  date?: string;
  description: string;
  link?: string;
}

export interface EducationInfo {
  institution: string;
  location: string;
  degree: string;
  field: string;
  expectedYear: string;
}

export const PERSONAL_INFO = {
  name: 'Noman Ahmad',
  title: 'Backend & AI Software Engineer',
  currentRole: 'Software Developer Intern @ Dream Filler',
  educationStatus: 'Computer Science · Expected 2027',
  tagline:
    'I build backend systems and AI applications with reliable APIs, strong data layers, and deterministic logic.',
  location: 'Satna, Madhya Pradesh, India',
  email: 'nomanahmad9356@gmail.com',
  phone: '+91 93563 80208',
  githubUrl: 'https://github.com/Noman-Ahmad25',
  githubHandle: 'Noman-Ahmad25',
  linkedinUrl: 'https://linkedin.com/in/noman-ahmad25',
  linkedinHandle: 'noman-ahmad25',
  resumeFile: `${import.meta.env.BASE_URL}Noman Ahmad-Resume.pdf`,
  coreStack: ['Python', 'FastAPI', 'PostgreSQL', 'Node.js', 'AI/LLM'],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'dream-filler',
    role: 'Software Developer Intern',
    company: 'Dream Filler',
    location: 'Satna, India',
    period: 'Sep 2026 – Present',
    bullets: [
      'Fine-tuning a YOLO object-detection model on a custom dataset, including image collection and labeling with Roboflow.',
      'Building features for a mobile application using Flutter, Node.js/Express, and MongoDB, including a redesign of the home screen.',
    ],
    technologies: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'YOLO', 'Roboflow'],
  },
  {
    id: 'quantumbay',
    role: 'Backend Development Intern',
    company: 'Quantumbay Cloud',
    location: 'Remote',
    period: 'Jul 2026 – Sep 2026',
    bullets: [
      'Developed FastAPI and PostgreSQL APIs for a modular pharmacy ERP covering authentication, staff management, inventory, purchasing, and billing.',
      'Designed database schemas and Alembic migrations, including resolving migration conflicts across independently developed modules.',
      'Implemented role-based access control and branch-level data handling, and debugged routing and API contract issues during service integration.',
    ],
    technologies: ['FastAPI', 'PostgreSQL', 'Alembic', 'RBAC', 'REST APIs'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'requirement-analyzer',
    title: 'AI Requirement Analyzer & Project Decision Engine',
    technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'Gemini', 'Docker', 'Pydantic'],
    description:
      'Turns vague or contradictory client specifications into structured requirements and a deterministic TAKE, REVIEW, or DECLINE decision.',
    bullets: [
      'Gemini extracts structured requirements from unstructured specifications.',
      'Pydantic schemas validate LLM output and recover from malformed responses.',
      'A bounded context layer with provenance tags helps keep the model grounded in the available information.',
      'Supports multi-tenant workspaces and capability matching.',
    ],
    githubUrl: 'https://github.com/Noman-Ahmad25/requirement-analyzer',
    category: 'AI Systems',
  },
  {
    id: 'ticket-triage',
    title: 'Deterministic-First AI Ticket Triage System',
    status: 'In Development',
    technologies: ['Python', 'Gemini', 'SQL', 'REST'],
    description:
      'Routes support tickets through deterministic checks before using an LLM for tasks that require language understanding.',
    bullets: [
      'Normalizes tickets, detects language, extracts IDs with regex, checks VIP status, and flags legal-risk terms before the LLM call.',
      'Gemini handles intent, sentiment, and routing.',
      'Human-in-the-loop dashboard allows reviewers to edit AI-generated drafts.',
    ],
    githubUrl: 'https://github.com/Noman-Ahmad25/ai-support-triage',
    category: 'AI Systems',
  },
  {
    id: 'alumniconn',
    title: 'AlumniConn — Multi-Tenant Student–Alumni Platform',
    status: 'Live on Render',
    technologies: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    description:
      'A multi-tenant platform for connecting students and alumni through profiles, messaging, and recommendation features.',
    bullets: [
      'JWT authentication and four-tier role-based access control.',
      'Real-time messaging using WebSockets.',
      'Embedding-based semantic ranking for mentor and connection recommendations.',
      'React 19, TypeScript, FastAPI, and PostgreSQL.',
    ],
    githubUrl: 'https://github.com/Noman-Ahmad25/AlumniConn',
    liveUrl: 'https://alumniconn-umber.vercel.app',
    category: 'Full-Stack',
  },
  {
    id: 'repomind',
    title: 'RepoMind — AI-Powered Repository Intelligence CLI',
    technologies: ['Python', 'Tree-sitter', 'pgvector', 'Gemini', 'Docker'],
    description:
      'A developer tool that combines repository analysis with LLM reasoning to surface technical debt.',
    bullets: [
      'Uses Tree-sitter for deterministic code analysis.',
      'Uses Gemini for reasoning over the analysis results.',
      'Uses pgvector for repository intelligence.',
      'Automated Pytest, Ruff, mypy, and GitHub Actions checks.',
    ],
    githubUrl: 'https://github.com/Noman-Ahmad25/repomind',
    category: 'Developer Tools',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT', 'OAuth', 'RBAC'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Alembic', 'pgvector'],
  },
  {
    title: 'AI / ML',
    skills: [
      'Google Gemini',
      'LLM orchestration',
      'Structured outputs',
      'RAG',
      'Embeddings',
      'Semantic search',
      'FAISS',
      'YOLO',
      'Roboflow',
    ],
  },
  {
    title: 'Testing & DevOps',
    skills: ['Pytest', 'Vitest', 'Ruff', 'mypy', 'Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Linux', 'Render'],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'india-runs',
    title: 'India Runs Data & AI Challenge',
    issuerOrScope: 'National Challenge',
    description:
      'Built a FAISS and Sentence-Transformers candidate-ranking pipeline for 100,000+ resumes and deployed it on Hugging Face Spaces.',
    link: 'https://github.com/Noman-Ahmad25/india-runs-candidate-ranking',
  },
  {
    id: 'nptel-dsa',
    title: 'Data Structures and Algorithms using Java',
    issuerOrScope: 'NPTEL',
    date: 'Nov 2025',
    description:
      'Coursework and certification covering algorithmic problem-solving, tree/graph structures, and runtime complexity analysis.',
  },
  {
    id: 'fcc-web',
    title: 'Responsive Web Design',
    issuerOrScope: 'freeCodeCamp',
    date: 'Aug 2025',
    description:
      'Foundational certification covering responsive layout principles, CSS grid, flexbox, and accessible semantic HTML.',
  },
];

export const EDUCATION: EducationInfo = {
  institution: 'Vindhya Institute of Technology and Science',
  location: 'Satna, Madhya Pradesh',
  degree: 'Bachelor of Technology',
  field: 'Computer Science',
  expectedYear: 'Expected 2027',
};
