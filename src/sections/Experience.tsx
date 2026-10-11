import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import './Experience.css';

export const Experience: React.FC = () => {
  return (
    <section className="section experience-editorial" id="experience" aria-label="Work Experience">
      <div className="container">
        <span className="section-meta-tag">Experience</span>
        <h2 className="section-headline">Internship experience with production constraints.</h2>
        <p className="section-lead">
          Backend, mobile, and AI work from the updated resume, focused on API contracts, data migrations, permissions, realtime updates, and deployed workflows.
        </p>

        <div className="editorial-timeline">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="timeline-row">
              <div className="timeline-date-col">
                <span className="timeline-period font-mono">{exp.period}</span>
                <span className="timeline-loc font-mono text-xs">{exp.context}</span>
              </div>

              <div className="timeline-content-col">
                <div className="timeline-head-block">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <p className="timeline-role font-mono">{exp.role}</p>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="timeline-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>

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
