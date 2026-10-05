import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';
import { ArrowUpRight } from 'lucide-react';
import './Achievements.css';

export const Achievements: React.FC = () => {
  return (
    <section className="section achievements-editorial" id="achievements" aria-label="Achievements">
      <div className="container">
        <span className="section-meta-tag">Achievements</span>
        <h2 className="section-headline">Achievements &amp; Certifications</h2>

        {/* Clean Consistent Compact List */}
        <div className="achievements-compact-list">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.id} className="achievement-row">
              <div className="ach-left-col">
                <h3 className="ach-title">{item.title}</h3>
                <div className="ach-meta-info font-mono text-xs">
                  <span className="ach-issuer">{item.issuerOrScope}</span>
                  {item.date && (
                    <span className="ach-date">{item.date}</span>
                  )}
                </div>
              </div>

              <div className="ach-right-col">
                <p className="ach-desc">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ach-link font-mono text-xs"
                    aria-label={`View repository for ${item.title}`}
                  >
                    <GithubIcon size={14} />
                    <span>Challenge Repository</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
