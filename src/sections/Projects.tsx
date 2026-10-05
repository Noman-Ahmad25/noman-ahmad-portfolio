import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';
import { ExternalLink, ArrowRight } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const reqAnalyzer = PROJECTS.find((p) => p.id === 'requirement-analyzer')!;
  const alumniConn = PROJECTS.find((p) => p.id === 'alumniconn')!;
  const repoMind = PROJECTS.find((p) => p.id === 'repomind')!;
  const ticketTriage = PROJECTS.find((p) => p.id === 'ticket-triage')!;

  return (
    <section className="section projects-editorial" id="projects" aria-label="Projects">
      <div className="container">
        {/* Section Header */}
        <div className="projects-head">
          <span className="section-meta-tag">Featured Work</span>
          <h2 className="section-headline">Projects &amp; Systems</h2>
          <p className="section-lead">
            Production-oriented systems spanning deterministic AI orchestration, developer tooling, and multi-tenant architectures.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="bento-grid">
          {/* =========================================================
              CARD 1: AI Requirement Analyzer (Large Featured Bento Card)
              ========================================================= */}
          <article className="bento-card bento-featured">
            <div className="bento-header">
              <div className="bento-badge-group">
                <span className="bento-tag-accent font-mono">Featured AI System</span>
                <span className="bento-tag-muted font-mono">Decision Engine</span>
              </div>

              <div className="bento-actions">
                {reqAnalyzer.githubUrl && (
                  <a
                    href={reqAnalyzer.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                    aria-label="View source code on GitHub"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>

            <div className="bento-featured-content">
              <h3 className="bento-title-large">{reqAnalyzer.title}</h3>
              <p className="bento-desc-large">{reqAnalyzer.description}</p>

              {/* Conceptual Technical Visual: Specification -> Extraction -> Validation -> Decision */}
              <div className="tech-visual-panel">
                <div className="tech-visual-header font-mono">
                  <span className="tv-label">Architecture Pipeline</span>
                  <span className="tv-sublabel">Deterministic Logic Gate</span>
                </div>

                <div className="flow-stepper-strip font-mono">
                  <div className="flow-step">
                    <span className="flow-step-idx">01</span>
                    <span className="flow-step-name">Specification</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />

                  <div className="flow-step">
                    <span className="flow-step-idx">02</span>
                    <span className="flow-step-name">Extraction</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />

                  <div className="flow-step">
                    <span className="flow-step-idx">03</span>
                    <span className="flow-step-name">Validation</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />

                  <div className="flow-step flow-step-highlight">
                    <span className="flow-step-idx">04</span>
                    <span className="flow-step-name">Decision</span>
                  </div>
                </div>

                {/* Concrete Output Preview */}
                <div className="decision-matrix-strip font-mono">
                  <span className="dm-label">Deterministic Output Gate:</span>
                  <div className="dm-tokens">
                    <span className="dm-token token-take">TAKE</span>
                    <span className="dm-token token-review">REVIEW</span>
                    <span className="dm-token token-decline">DECLINE</span>
                  </div>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="bento-featured-bottom">
                <div className="bento-highlights-block">
                  <span className="bento-section-label font-mono">System Architecture</span>
                  <ul className="bento-bullet-list">
                    <li>
                      <span className="bullet-point font-mono">›</span>
                      <span>Gemini extracts structured requirements from unstructured specifications.</span>
                    </li>
                    <li>
                      <span className="bullet-point font-mono">›</span>
                      <span>Pydantic schemas validate LLM output and recover from malformed responses.</span>
                    </li>
                    <li>
                      <span className="bullet-point font-mono">›</span>
                      <span>Bounded context layer with provenance tags grounds model in available information.</span>
                    </li>
                    <li>
                      <span className="bullet-point font-mono">›</span>
                      <span>Multi-tenant workspaces and capability matching.</span>
                    </li>
                  </ul>
                </div>

                <div className="bento-tech-block">
                  <span className="bento-section-label font-mono">Stack</span>
                  <div className="bento-tech-tags">
                    {reqAnalyzer.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================
              CARD 2: AlumniConn (Tall Bento Card)
              ========================================================= */}
          <article className="bento-card bento-alumni">
            <div className="bento-header">
              <div className="bento-badge-group">
                <span className="bento-tag-muted font-mono">Full-Stack</span>
                <span className="bento-status-live font-mono">
                  <span className="pulse-indicator" /> Live on Render
                </span>
              </div>

              <div className="bento-actions">
                {alumniConn.githubUrl && (
                  <a
                    href={alumniConn.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-icon-btn"
                    title="Source code on GitHub"
                    aria-label="View source code on GitHub"
                  >
                    <GithubIcon size={15} />
                  </a>
                )}
                {alumniConn.liveUrl && (
                  <a
                    href={alumniConn.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-icon-btn"
                    title="Open live deployment"
                    aria-label="Open live deployment"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">{alumniConn.title}</h3>
              <p className="bento-desc">{alumniConn.description}</p>

              {/* Conceptual Technical Visual: Users -> API -> Database */}
              <div className="tech-visual-panel panel-compact">
                <div className="tech-visual-header font-mono">
                  <span className="tv-label">Data &amp; Event Flow</span>
                </div>

                <div className="flow-stepper-strip font-mono">
                  <div className="flow-step">
                    <span className="flow-step-name">Users</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step">
                    <span className="flow-step-name">FastAPI</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step">
                    <span className="flow-step-name">Database</span>
                  </div>
                </div>

                <div className="alumni-indicators font-mono">
                  <div className="ai-indicator">
                    <span className="indicator-dot" />
                    <span>WebSockets · Real-time Chat</span>
                  </div>
                  <div className="ai-indicator">
                    <span className="indicator-dot" />
                    <span>Vector Embedding · Ranking</span>
                  </div>
                </div>
              </div>

              <ul className="bento-bullet-list">
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>JWT authentication and four-tier role-based access control.</span>
                </li>
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>Real-time messaging channels with WebSocket connections.</span>
                </li>
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>Embedding-based semantic ranking for mentor recommendations.</span>
                </li>
              </ul>

              <div className="bento-bottom-strip">
                <div className="bento-tech-tags">
                  {alumniConn.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================
              CARD 3: RepoMind (Bottom Left Bento Card)
              ========================================================= */}
          <article className="bento-card bento-secondary">
            <div className="bento-header">
              <div className="bento-badge-group">
                <span className="bento-tag-accent font-mono">Developer Tool</span>
                <span className="bento-tag-muted font-mono">CLI</span>
              </div>

              <div className="bento-actions">
                {repoMind.githubUrl && (
                  <a
                    href={repoMind.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-icon-btn"
                    title="Source code on GitHub"
                    aria-label="View source code on GitHub"
                  >
                    <GithubIcon size={15} />
                  </a>
                )}
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">{repoMind.title}</h3>
              <p className="bento-desc">{repoMind.description}</p>

              {/* Conceptual Technical Visual: Repository -> Tree-sitter -> Analysis -> Technical Debt */}
              <div className="tech-visual-panel panel-compact">
                <div className="tech-visual-header font-mono">
                  <span className="tv-label">Analysis Flow</span>
                </div>

                <div className="flow-stepper-strip font-mono">
                  <div className="flow-step">
                    <span className="flow-step-name">Repository</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step">
                    <span className="flow-step-name">Tree-sitter</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step">
                    <span className="flow-step-name">Analysis</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step flow-step-highlight">
                    <span className="flow-step-name">Debt Report</span>
                  </div>
                </div>

                <div className="cli-terminal-preview font-mono">
                  <div className="terminal-line">
                    <span className="term-prompt">$</span> repomind scan --ast --embeddings
                  </div>
                  <div className="terminal-line term-subtle">
                    [AST] Tree-sitter parsed syntax graph
                  </div>
                  <div className="terminal-line term-subtle">
                    [VEC] pgvector semantic embeddings indexed
                  </div>
                  <div className="terminal-line term-accent">
                    → Surfaced architectural coupling &amp; debt
                  </div>
                </div>
              </div>

              <ul className="bento-bullet-list">
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>Uses Tree-sitter for deterministic code syntax analysis.</span>
                </li>
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>pgvector integration for repository intelligence and code retrieval.</span>
                </li>
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>Automated Pytest, Ruff, mypy, and GitHub Actions CI pipelines.</span>
                </li>
              </ul>

              <div className="bento-bottom-strip">
                <div className="bento-tech-tags">
                  {repoMind.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================
              CARD 4: Deterministic-First AI Ticket Triage (Bottom Right Bento Card)
              ========================================================= */}
          <article className="bento-card bento-secondary">
            <div className="bento-header">
              <div className="bento-badge-group">
                <span className="bento-tag-muted font-mono">AI Support System</span>
                <span className="bento-status-dev font-mono">In Development</span>
              </div>

              <div className="bento-actions">
                {ticketTriage.githubUrl && (
                  <a
                    href={ticketTriage.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-icon-btn"
                    title="Source code on GitHub"
                    aria-label="View source code on GitHub"
                  >
                    <GithubIcon size={15} />
                  </a>
                )}
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">{ticketTriage.title}</h3>
              <p className="bento-desc">{ticketTriage.description}</p>

              {/* Conceptual Technical Visual: Ticket -> Deterministic Checks -> Gemini -> Human Review */}
              <div className="tech-visual-panel panel-compact">
                <div className="tech-visual-header font-mono">
                  <span className="tv-label">Triage Pipeline</span>
                </div>

                <div className="flow-stepper-strip font-mono">
                  <div className="flow-step">
                    <span className="flow-step-name">Ticket</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step">
                    <span className="flow-step-name">Deterministic</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step">
                    <span className="flow-step-name">Gemini</span>
                  </div>
                  <ArrowRight size={13} className="flow-step-arrow" aria-hidden="true" />
                  <div className="flow-step flow-step-highlight">
                    <span className="flow-step-name">Human Review</span>
                  </div>
                </div>

                <div className="triage-checks-strip font-mono">
                  <div className="triage-check-item">
                    <span className="tc-tag">Gate 1</span>
                    <span>Regex ID extraction &amp; VIP status</span>
                  </div>
                  <div className="triage-check-item">
                    <span className="tc-tag">Gate 2</span>
                    <span>Legal-risk term scanner before LLM</span>
                  </div>
                  <div className="triage-check-item">
                    <span className="tc-tag">Gate 3</span>
                    <span>Gemini intent &amp; human reviewer loop</span>
                  </div>
                </div>
              </div>

              <ul className="bento-bullet-list">
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>Normalizes incoming tickets and extracts key entity IDs deterministically.</span>
                </li>
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>Performs VIP checks and flags sensitive legal terms prior to model calls.</span>
                </li>
                <li>
                  <span className="bullet-point font-mono">›</span>
                  <span>Review dashboard allows engineers to inspect and edit AI drafted responses.</span>
                </li>
              </ul>

              <div className="bento-bottom-strip">
                <div className="bento-tech-tags">
                  {ticketTriage.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
