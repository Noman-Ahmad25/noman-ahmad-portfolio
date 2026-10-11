import React from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectById = (id: Project['id']) => PROJECTS.find((project) => project.id === id)!;

const ProjectActions: React.FC<{ project: Project; expanded?: boolean }> = ({ project, expanded = false }) => (
  <div className="project-actions">
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={expanded ? 'btn btn-sm btn-outline' : 'project-icon-link'}
        aria-label={`View source code for ${project.title}`}
        title="Source code"
      >
        <GithubIcon size={15} />
        {expanded && <span>Source Code</span>}
        <ArrowUpRight size={13} />
      </a>
    )}
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={expanded ? 'btn btn-sm btn-outline' : 'project-icon-link'}
        aria-label={`Open live deployment for ${project.title}`}
        title="Live deployment"
      >
        <ExternalLink size={15} />
        {expanded && <span>Live</span>}
      </a>
    )}
  </div>
);

const TechList: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="project-tech-list" aria-label="Technology stack">
    {items.map((item) => (
      <span key={item} className="tech-tag">
        {item}
      </span>
    ))}
  </div>
);

const ProjectBullets: React.FC<{ bullets: string[] }> = ({ bullets }) => (
  <ul className="project-bullets">
    {bullets.map((bullet) => (
      <li key={bullet}>{bullet}</li>
    ))}
  </ul>
);

const RequirementVisual: React.FC = () => (
  <div className="project-visual requirement-visual" aria-label="Requirement analyzer architecture">
    <div className="visual-column visual-source">
      <span className="visual-kicker font-mono">Client Spec</span>
      <p>vague scope, contradictions, missing constraints</p>
    </div>
    <div className="visual-column visual-schema">
      <span className="visual-kicker font-mono">Validated Schema</span>
      <div className="schema-row"><span>actors</span><strong>required</strong></div>
      <div className="schema-row"><span>features</span><strong>typed</strong></div>
      <div className="schema-row"><span>risks</span><strong>flagged</strong></div>
    </div>
    <div className="visual-column visual-decision">
      <span className="visual-kicker font-mono">Decision Gate</span>
      <div className="decision-stack font-mono">
        <span>TAKE</span>
        <span>REVIEW</span>
        <span>DECLINE</span>
      </div>
    </div>
  </div>
);

const AlumniVisual: React.FC = () => (
  <div className="project-visual alumni-visual" aria-label="AlumniConn tenancy and recommendation flow">
    <div className="tenant-lane">
      <span>Tenant A</span>
      <span>Student</span>
      <span>Alumni</span>
    </div>
    <div className="tenant-lane muted">
      <span>Tenant B</span>
      <span>Admin</span>
      <span>Mentor</span>
    </div>
    <div className="recommendation-band font-mono">
      <span>384d embeddings</span>
      <span>pgvector similarity</span>
      <span>ranking heuristics</span>
    </div>
    <div className="socket-line font-mono">
      <span className="socket-dot" />
      WebSocket messaging + presence
    </div>
  </div>
);

const RepoMindVisual: React.FC = () => (
  <div className="project-visual repomind-visual" aria-label="RepoMind repository intelligence layers">
    {['Repository', 'Tree-sitter CST', 'pgvector embeddings', 'Gemini reasoning', 'CI checks'].map((layer, index) => (
      <div key={layer} className="repo-layer">
        <span className="font-mono">{String(index + 1).padStart(2, '0')}</span>
        <strong>{layer}</strong>
      </div>
    ))}
  </div>
);

const TriageVisual: React.FC = () => (
  <div className="project-visual triage-visual" aria-label="Ticket triage deterministic gates">
    {[
      ['Normalize', 'language + ticket shape'],
      ['Extract', 'IDs, account state, VIP checks'],
      ['Scan', 'legal-risk terms before LLM'],
      ['Review', 'editable AI draft'],
    ].map(([label, detail]) => (
      <div key={label} className="triage-gate">
        <span className="font-mono">{label}</span>
        <p>{detail}</p>
      </div>
    ))}
  </div>
);

export const Projects: React.FC = () => {
  const reqAnalyzer = projectById('requirement-analyzer');
  const alumniConn = projectById('alumniconn');
  const repoMind = projectById('repomind');
  const ticketTriage = projectById('ticket-triage');

  return (
    <section className="section projects-editorial" id="projects" aria-label="Projects">
      <div className="container">
        <div className="projects-head">
          <span className="section-meta-tag">Featured Work</span>
          <h2 className="section-headline">Projects designed around constraints, not decoration.</h2>
          <p className="section-lead">
            The strongest projects here show the same pattern from different angles: deterministic gates, explicit data boundaries, and LLMs used for the parts that benefit from language reasoning.
          </p>
        </div>

        <div className="project-bento">
          <article className="project-card project-featured">
            <div className="project-card-top">
              <div>
                <span className="project-eyebrow font-mono">{reqAnalyzer.eyebrow}</span>
                <h3>{reqAnalyzer.title}</h3>
              </div>
              <ProjectActions project={reqAnalyzer} expanded />
            </div>

            <p className="project-description large">{reqAnalyzer.description}</p>
            <RequirementVisual />

            <div className="project-evidence-grid">
              <div>
                <span className="evidence-label font-mono">Problem</span>
                <p>{reqAnalyzer.problem}</p>
              </div>
              <div>
                <span className="evidence-label font-mono">Implementation</span>
                <p>{reqAnalyzer.implementation}</p>
              </div>
            </div>

            <ProjectBullets bullets={reqAnalyzer.bullets} />
            <TechList items={reqAnalyzer.technologies} />
          </article>

          <article className="project-card project-alumni">
            <div className="project-card-top">
              <div>
                <span className="project-eyebrow font-mono">{alumniConn.eyebrow}</span>
                <h3>{alumniConn.title}</h3>
              </div>
              <ProjectActions project={alumniConn} />
            </div>
            <p className="project-description">{alumniConn.description}</p>
            <AlumniVisual />
            <ProjectBullets bullets={alumniConn.bullets.slice(0, 3)} />
            <TechList items={alumniConn.technologies} />
          </article>

          <article className="project-card project-secondary">
            <div className="project-card-top">
              <div>
                <span className="project-eyebrow font-mono">{repoMind.eyebrow}</span>
                <h3>{repoMind.title}</h3>
              </div>
              <ProjectActions project={repoMind} />
            </div>
            <p className="project-description">{repoMind.description}</p>
            <RepoMindVisual />
            <p className="project-implementation">{repoMind.implementation}</p>
            <TechList items={repoMind.technologies} />
          </article>

          <article className="project-card project-secondary">
            <div className="project-card-top">
              <div>
                <span className="project-eyebrow font-mono">{ticketTriage.eyebrow}</span>
                <h3>{ticketTriage.title}</h3>
              </div>
              <ProjectActions project={ticketTriage} />
            </div>
            <p className="project-description">{ticketTriage.description}</p>
            <TriageVisual />
            <p className="project-implementation">{ticketTriage.implementation}</p>
            <TechList items={ticketTriage.technologies} />
          </article>
        </div>
      </div>
    </section>
  );
};
