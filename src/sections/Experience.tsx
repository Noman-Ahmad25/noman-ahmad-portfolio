import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import './Experience.css';

export const Experience: React.FC = () => {
  return (
    <section className="section experience-editorial" id="experience" aria-label="Work Experience">
      <div className="container">
        <span className="section-meta-tag">Experience</span>
        <h2 className="section-headline">Work Experience</h2>
        <p className="section-lead" style={{ marginBottom: '4rem' }}>
          Experience building backend APIs, AI applications, and production-oriented software.
        </p>

        {/* Editorial Timeline */}
        <div className="editorial-timeline">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="timeline-row">
              {/* Left Column: Date & Meta */}
              <div className="timeline-date-col">
                <span className="timeline-period font-mono">{exp.period}</span>
                <span className="timeline-loc font-mono text-xs">{exp.location}</span>
              </div>

              {/* Right Column: Company, Role & Bullets */}
              <div className="timeline-content-col">
                <div className="timeline-head-block">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <p className="timeline-role font-mono">{exp.role}</p>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="timeline-bullet-item">
                      <span className="bullet-point font-mono">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="timeline-tech-strip">
                  {exp.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
