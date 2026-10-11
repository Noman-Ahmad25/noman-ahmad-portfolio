import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { ArrowDown, ArrowUpRight, Database, FileText, Mail, ShieldCheck } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-editorial" id="hero" aria-label="Introduction">
      <div className="container hero-shell">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-meta-row font-mono">
              <span className="hero-status-pill">
                <span className="pulse-indicator" />
                <span>{PERSONAL_INFO.currentRole}</span>
              </span>
              <span className="hero-context-item">{PERSONAL_INFO.educationStatus}</span>
            </div>

            <h1 className="hero-display-name">{PERSONAL_INFO.name}</h1>
            <p className="hero-display-title">{PERSONAL_INFO.resumeHeadline}</p>
            <p className="hero-statement">{PERSONAL_INFO.tagline}</p>

            <div className="hero-btns" aria-label="Primary links">
              <a href="#projects" className="btn btn-primary">
                <span>View Work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>

              <a href={`mailto:${PERSONAL_INFO.email}`} className="btn btn-outline">
                <Mail size={15} />
                <span>Contact</span>
              </a>
            </div>

            <div className="hero-tech-row font-mono" aria-label="Core focus technologies">
              {PERSONAL_INFO.coreStack.map((item) => (
                <span key={item} className="tech-item">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero-signal-panel" aria-label="Portfolio highlights">
            <div className="signal-panel-top">
              <span className="signal-label font-mono">Verified Resume Signals</span>
              <a
                href={PERSONAL_INFO.resumeFile}
                download="Noman Ahmad-Resume.pdf"
                className="signal-resume-link"
              >
                <FileText size={15} />
                <span>PDF</span>
              </a>
            </div>

            <dl className="signal-list">
              <div>
                <dt><Database size={16} /> Backend Scope</dt>
                <dd>40+ FastAPI/PostgreSQL endpoints across 3 Medorax modules.</dd>
              </div>
              <div>
                <dt><ShieldCheck size={16} /> Access Control</dt>
                <dd>RBAC for five operational roles with per-module and branch-level permissions.</dd>
              </div>
              <div>
                <dt><span className="signal-dot" /> AI Reliability</dt>
                <dd>Structured outputs, Pydantic validation, RAG, embeddings, and deterministic decisions.</dd>
              </div>
            </dl>

            <div className="hero-proof-grid font-mono" aria-label="Selected measurable work">
              <div>
                <span className="proof-value">75.5%</span>
                <span className="proof-label">YOLO mAP</span>
              </div>
              <div>
                <span className="proof-value">11.8ms</span>
                <span className="proof-label">Inference latency</span>
              </div>
              <div>
                <span className="proof-value">62</span>
                <span className="proof-label">Self-labeled images</span>
              </div>
            </div>

            <div className="signal-pipeline" aria-hidden="true">
              <span>spec</span>
              <span>schema</span>
              <span>rules</span>
              <span>decision</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
