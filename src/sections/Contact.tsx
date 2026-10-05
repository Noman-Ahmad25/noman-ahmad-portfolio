import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { Mail, Copy, Check, ArrowUpRight, FileText } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section contact-editorial" id="contact" aria-label="Contact">
      <div className="container">
        <span className="section-meta-tag">Contact</span>

        <div className="contact-editorial-content">
          <h2 className="contact-editorial-heading">Let's build something useful.</h2>
          <p className="contact-editorial-lead">
            Interested in backend engineering, AI systems, or building something from scratch? Get in touch.
          </p>

          {/* Direct Email Bar */}
          <div className="contact-email-bar">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="email-display-link">
              <Mail size={22} className="email-icon" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <button
              type="button"
              className="btn btn-sm btn-outline copy-pill"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
            >
              {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              <span className="font-mono text-xs">{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Direct Links Grid */}
          <div className="contact-links-grid">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-contact-link"
            >
              <div className="link-left">
                <GithubIcon size={18} />
                <span className="link-title">GitHub</span>
              </div>
              <span className="link-detail font-mono text-xs">@{PERSONAL_INFO.githubHandle}</span>
              <ArrowUpRight size={14} className="link-arrow" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-contact-link"
            >
              <div className="link-left">
                <LinkedinIcon size={18} />
                <span className="link-title">LinkedIn</span>
              </div>
              <span className="link-detail font-mono text-xs">@{PERSONAL_INFO.linkedinHandle}</span>
              <ArrowUpRight size={14} className="link-arrow" />
            </a>

            <a
              href={PERSONAL_INFO.resumeFile}
              download="Noman Ahmad-Resume.pdf"
              className="editorial-contact-link"
            >
              <div className="link-left">
                <FileText size={18} />
                <span className="link-title">Download Resume</span>
              </div>
              <span className="link-detail font-mono text-xs">PDF</span>
              <ArrowUpRight size={14} className="link-arrow" />
            </a>
          </div>

          {/* Location and Phone */}
          <div className="contact-meta-row font-mono text-xs">
            <span>Location: {PERSONAL_INFO.location}</span>
            <span className="meta-sep">·</span>
            <span>Tel: {PERSONAL_INFO.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
