import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import './Skills.css';

export const Skills: React.FC = () => {
  return (
    <section className="section skills-editorial" id="skills" aria-label="Technical Skills">
      <div className="container">
        <span className="section-meta-tag">Skills</span>
        <h2 className="section-headline">Technical Skills</h2>
        <p className="section-lead">
          Skills grouped from the updated resume, kept readable as an engineering stack instead of a wall of badges.
        </p>

        <div className="skills-matrix">
          {SKILL_CATEGORIES.map((group) => (
            <div key={group.title} className="skill-group-row">
              <div className="skill-group-cat">
                <span className="skill-cat-title">{group.title}</span>
              </div>
              <p className="skill-group-list">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
