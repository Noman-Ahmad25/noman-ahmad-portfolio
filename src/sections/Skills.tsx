import React from 'react';
import './Skills.css';

interface SkillGroup {
  category: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'JWT',
      'OAuth',
      'RBAC',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Alembic', 'pgvector'],
  },
  {
    category: 'AI / ML',
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
    category: 'Testing & DevOps',
    skills: [
      'Pytest',
      'Vitest',
      'Ruff',
      'mypy',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'Docker',
      'Linux',
      'Render',
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="section skills-editorial" id="skills" aria-label="Technical Skills">
      <div className="container">
        <span className="section-meta-tag">Skills</span>
        <h2 className="section-headline">Technical Skills</h2>
        <p className="section-lead">
          Technologies and tools I use to build backend services and AI systems.
        </p>

        {/* Responsive Skill Groups */}
        <div className="skills-groups">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="skill-group-row">
              <div className="skill-group-cat">
                <span className="skill-cat-title">{group.category}</span>
              </div>
              <div className="skill-group-chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
