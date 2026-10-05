import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-editorial" id="hero" aria-label="Introduction">
      <div className="container">
        {/* Subtle Career & Status Context */}
        <div className="hero-meta-row font-mono">
          <span className="hero-status-pill">
            <span className="pulse-indicator" />
            <span>{PERSONAL_INFO.currentRole}</span>
          </span>
          <span className="hero-context-item">{PERSONAL_INFO.educationStatus}</span>
        </div>

        {/* Name & Discipline */}
        <div className="hero-title-group">
          <h1 className="hero-display-name">{PERSONAL_INFO.name}</h1>
          <p className="hero-display-title font-mono">{PERSONAL_INFO.title}</p>
        </div>

        {/* Natural Concise Statement */}
        <div className="hero-statement-block">
          <p className="hero-statement">
            {PERSONAL_INFO.tagline}
          </p>
        </div>

        {/* Actions & Core Technologies */}
        <div className="hero-action-row">
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
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
              href={PERSONAL_INFO.resumeFile}
              download="Noman Ahmad-Resume.pdf"
              className="btn btn-outline"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>

          <div className="hero-tech-row font-mono" aria-label="Core focus technologies">
            <span className="tech-item">Python</span>
            <span className="tech-sep">·</span>
            <span className="tech-item">FastAPI</span>
            <span className="tech-sep">·</span>
            <span className="tech-item">PostgreSQL</span>
            <span className="tech-sep">·</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-sep">·</span>
            <span className="tech-item">Gemini / AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
