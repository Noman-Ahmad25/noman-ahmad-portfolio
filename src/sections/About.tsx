import React from 'react';
import { Braces, DatabaseZap, LockKeyhole, ScanSearch } from 'lucide-react';
import './About.css';

const APPROACH_POINTS = [
  {
    title: 'Contracts before creativity',
    copy: 'LLM outputs are routed through schemas, recovery paths, and deterministic decision gates before they become system behavior.',
    icon: Braces,
  },
  {
    title: 'Data models that carry the workflow',
    copy: 'Patient-linked appointment records, Alembic migrations, and tenant-scoped data access keep backend features explicit.',
    icon: DatabaseZap,
  },
  {
    title: 'Access control as product logic',
    copy: 'RBAC appears across internship and project work, from ERP branch permissions to four-role tenant platforms.',
    icon: LockKeyhole,
  },
  {
    title: 'Automation with review points',
    copy: 'Ticket triage and requirement analysis use deterministic checks first, then human-editable LLM results where judgment matters.',
    icon: ScanSearch,
  },
];

export const About: React.FC = () => {
  return (
    <section className="section about-editorial" id="about" aria-label="Engineering Philosophy">
      <div className="container">
        <span className="section-meta-tag">Engineering Approach</span>

        <div className="about-editorial-grid">
          <div className="about-left">
            <h2 className="about-big-statement">
              Systems that let models reason without letting them drift.
            </h2>

            <div className="about-narrative-copy">
              <p>
                My strongest work sits where backend reliability and AI behavior meet: schema-validated outputs, explicit database contracts, tenant boundaries, and real-time interfaces that keep state understandable.
              </p>
              <p>
                The portfolio emphasizes this pattern through the requirement analyzer, AI ticket triage, AlumniConn, and internship work building FastAPI/PostgreSQL APIs, RBAC, migrations, SSE dashboards, and mobile capture flows.
              </p>
            </div>
          </div>

          <div className="approach-principles" aria-label="Engineering principles">
            {APPROACH_POINTS.map(({ title, copy, icon: Icon }) => (
              <article key={title} className="approach-principle">
                <Icon size={18} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <div className="boundary-map" aria-label="Trust boundary visualization">
            <div className="boundary-map-header">
              <span className="font-mono">Trust Boundary Map</span>
              <span className="font-mono">deterministic {'->'} probabilistic {'->'} reviewed</span>
            </div>
            <div className="boundary-grid">
              <div className="boundary-zone zone-strong">
                <span className="zone-index font-mono">01</span>
                <strong>Inputs</strong>
                <p>Specs, tickets, records, repository structure</p>
              </div>
              <div className="boundary-zone zone-strong">
                <span className="zone-index font-mono">02</span>
                <strong>Deterministic Gates</strong>
                <p>Regex checks, IDs, RBAC, migrations, Pydantic schemas</p>
              </div>
              <div className="boundary-zone zone-model">
                <span className="zone-index font-mono">03</span>
                <strong>Model Tasks</strong>
                <p>Extraction, routing, sentiment, requirement reasoning</p>
              </div>
              <div className="boundary-zone zone-output">
                <span className="zone-index font-mono">04</span>
                <strong>Bounded Outputs</strong>
                <p>TAKE / REVIEW / DECLINE, editable drafts, ranked matches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
