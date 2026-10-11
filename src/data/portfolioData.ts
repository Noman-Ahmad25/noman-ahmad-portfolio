export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  status?: string;
  technologies: string[];
  description: string;
  problem: string;
  implementation: string;
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI Systems' | 'Full-Stack' | 'Developer Tools';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  context: string;
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
  resumeHeadline: 'Backend Engineer | Python, FastAPI & AI Systems',
  currentRole: 'Software Developer Intern @ Dream Filler',
  educationStatus: 'Computer Science · Expected 2027',
  tagline:
    'B.Tech Computer Science student graduating in 2027, building FastAPI/PostgreSQL backends, multi-role RBAC, real-time systems, and structured LLM workflows with deterministic decision logic.',
  location: 'Satna, Madhya Pradesh, India',
  email: 'nomanahmad9356@gmail.com',
  githubUrl: 'https://github.com/Noman-Ahmad25',
  githubHandle: 'Noman-Ahmad25',
  linkedinUrl: 'https://linkedin.com/in/noman-ahmad25',
  linkedinHandle: 'noman-ahmad25',
  resumeFile: `${import.meta.env.BASE_URL}Noman Ahmad-Resume.pdf`,
  coreStack: ['Python', 'FastAPI', 'PostgreSQL', 'Node.js', 'Gemini'],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'dream-filler',
    role: 'Software Developer Intern',
    company: 'Dream Filler',
    context: 'YOLO, Flutter, Express, MongoDB, SSE',
    period: 'Sep 2026 - Present',
    bullets: [
      'Fine-tuned YOLO across 4 iterations on a self-collected, self-labeled 62-image dataset using Roboflow; achieved 75.5% mAP and 11.8ms inference latency.',
      'Introduced a dedicated Patient model, migrated existing MongoDB data, and adapted appointment workflows to use patient-linked records.',
      'Built custom Flutter camera capture with image compression, replacing image_picker to address memory-related app restarts.',
      'Implemented Server-Sent Events for server-pushed real-time queue dashboard updates, reducing reliance on repeated polling.',
      'Built a public React appointment interface and added or modified 15+ Node.js/Express API endpoints across 3-5 modules.',
    ],
    technologies: ['Flutter', 'React', 'Node.js', 'Express', 'MongoDB', 'SSE', 'YOLO', 'Roboflow'],
  },
  {
    id: 'quantumbay',
    role: 'Backend Development Intern',
    company: 'Quantumbay Cloud',
    context: 'Remote · Medorax pharmacy ERP',
    period: 'Jul 2026 - Sep 2026',
    bullets: [
      'Built 3 modules and 40+ FastAPI/PostgreSQL endpoints for Medorax, a pharmacy ERP, integrating with 10+ modules and the frontend.',
      'Implemented RBAC for owner, manager, accountant, pharmacist, and inventory manager roles with per-module and branch-level permissions.',
      'Designed schemas and Alembic migrations; resolved migration conflicts across independently developed modules.',
    ],
    technologies: ['FastAPI', 'PostgreSQL', 'Alembic', 'RBAC', 'REST APIs'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'requirement-analyzer',
    title: 'AI Requirement Analyzer & Project Decision Engine',
    eyebrow: 'Structured LLM workflow',
    technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'Gemini', 'Pydantic v2'],
    description:
      'Turns vague or contradictory client specifications into structured requirements and a deterministic TAKE, REVIEW, or DECLINE decision.',
    problem:
      'Raw client specs are often incomplete, contradictory, or too vague to route directly into engineering work.',
    implementation:
      'Gemini performs extraction, while Pydantic v2 validation, recovery paths, provenance tags, and capability matching keep the final decision bounded.',
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
    eyebrow: 'AI support routing',
    technologies: ['Python', 'Gemini', 'SQL', 'REST'],
    description:
      'Routes support tickets through deterministic checks before using an LLM for tasks that require language understanding.',
    problem:
      'Support automation needs reliable routing and risk detection before language-model reasoning enters the loop.',
    implementation:
      'The pipeline normalizes tickets, extracts IDs, detects language, checks VIP status, flags legal-risk terms, then lets Gemini handle intent, sentiment, and draft routing.',
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
    title: 'AlumniConn - Student-Alumni Platform',
    status: 'Live on Render',
    eyebrow: 'Deployed multi-tenant platform',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgvector'],
    description:
      'A multi-tenant platform for connecting students and alumni through profiles, messaging, and recommendation features.',
    problem:
      'Institution-scoped alumni networks need access control, persistent messaging, and useful mentor discovery without leaking tenant data.',
    implementation:
      'Tenant-scoped data access, four-role RBAC, JWT authentication, pgvector recommendations, WebSocket messaging, and a one-click demo environment support the workflow.',
    bullets: [
      'Built a deployed multi-tenant platform with tenant-scoped data access, four-role RBAC, and JWT authentication.',
      'Implemented hybrid mentor recommendations using 384-dimensional embeddings, pgvector similarity search, and deterministic ranking heuristics.',
      'Developed real-time WebSocket messaging with online presence, persistent chat history, and Cloudinary image attachments.',
      'Added a one-click demo environment with synthetic institutional data and an in-browser email verification inbox.',
    ],
    githubUrl: 'https://github.com/Noman-Ahmad25/AlumniConn',
    liveUrl: 'https://alumniconn-umber.vercel.app',
    category: 'Full-Stack',
  },
  {
    id: 'repomind',
    title: 'RepoMind - Repository Intelligence CLI',
    eyebrow: 'Developer tool',
    technologies: ['Python', 'Tree-sitter', 'pgvector', 'Gemini'],
    description:
      'A developer tool that combines repository analysis with LLM reasoning to surface technical debt.',
    problem:
      'Large repositories are hard to inspect manually, especially when structural code facts and reasoning need to be combined.',
    implementation:
      'Tree-sitter produces deterministic syntax analysis, pgvector stores embeddings, Gemini reasons over the retrieved context, and CI covers Pytest, Ruff, mypy, and GitHub Actions.',
    bullets: [
      'Combined deterministic Tree-sitter analysis with Gemini reasoning to surface technical debt.',
      'Used pgvector-backed embeddings for repository intelligence and retrieval.',
      'Added CI with Pytest, Ruff, mypy, and GitHub Actions.',
    ],
    githubUrl: 'https://github.com/Noman-Ahmad25/repomind',
    category: 'Developer Tools',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'SSE', 'JWT', 'RBAC', 'Pydantic'],
  },
  {
    title: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQLAlchemy', 'Alembic', 'pgvector'],
  },
  {
    title: 'AI / ML',
    skills: [
      'Google Gemini',
      'LLM orchestration',
      'Structured outputs',
      'RAG',
      'Embeddings',
      'FAISS',
      'YOLO',
      'Roboflow',
    ],
  },
  {
    title: 'Testing & DevOps',
    skills: ['Pytest', 'Ruff', 'mypy', 'Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Render'],
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
