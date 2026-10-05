import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import './Education.css';

export const Education: React.FC = () => {
  return (
    <section className="section education-editorial" id="education" aria-label="Education">
      <div className="container">
        <span className="section-meta-tag">Education</span>
        <h2 className="section-headline">Education</h2>

        {/* Minimal Typography Block */}
        <div className="edu-minimal-block">
          <h3 className="edu-school-name">{EDUCATION.institution}</h3>
          <p className="edu-degree-line">
            {EDUCATION.degree} — {EDUCATION.field}
          </p>
          <p className="edu-meta-line font-mono text-xs">
            <span>{EDUCATION.expectedYear}</span>
            <span className="edu-sep">·</span>
            <span>{EDUCATION.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
