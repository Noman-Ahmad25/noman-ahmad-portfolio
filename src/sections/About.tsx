import React from 'react';
import { ArrowDown } from 'lucide-react';
import './About.css';

const PIPELINE_STAGES = [
  { step: '01', title: 'Input', note: 'Raw specs, tickets, or user requests' },
  { step: '02', title: 'Validation', note: 'Pydantic schemas and regex checks' },
  { step: '03', title: 'Deterministic Logic', note: 'Business rules and database constraints' },
  { step: '04', title: 'LLM Reasoning', note: 'Targeted Gemini extraction and intent' },
  { step: '05', title: 'Structured Output', note: 'Type-safe, validated results' },
];

export const About: React.FC = () => {
  return (
    <section className="section about-editorial" id="about" aria-label="Engineering Philosophy">
      <div className="container">
        <span className="section-meta-tag">Philosophy</span>

        <div className="about-editorial-grid">
          {/* Left: Statement & Narrative */}
          <div className="about-left">
            <h2 className="about-big-statement">
              Deterministic logic first.
              <br />
              <span className="text-muted-editorial">LLMs where they add value.</span>
            </h2>

            <div className="about-narrative-copy">
              <p>
                I prefer deterministic logic for the parts of a system that need predictable behavior, and use LLMs where they provide useful reasoning or language capabilities.
              </p>
              <p>
                That means validating inputs, enforcing schemas, and handling business rules before relying on an LLM. This approach is reflected in my AI projects, where structured outputs and bounded context help keep model behavior reliable.
              </p>
            </div>
          </div>

          {/* Right: Flow Visual */}
          <div className="about-right">
            <div className="pipeline-card">
              <span className="pipeline-card-label font-mono">Engineering Pipeline</span>

              <div className="pipeline-vertical-list">
                {PIPELINE_STAGES.map((stage, idx) => (
                  <React.Fragment key={stage.step}>
                    <div className="pipeline-vertical-node">
                      <div className="node-step-badge font-mono">{stage.step}</div>
                      <div className="node-content">
                        <span className="node-title-text">{stage.title}</span>
                        <span className="node-note-text font-mono">{stage.note}</span>
                      </div>
                    </div>

                    {idx < PIPELINE_STAGES.length - 1 && (
                      <div className="pipeline-connector-line" aria-hidden="true">
                        <ArrowDown size={14} className="connector-arrow" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
