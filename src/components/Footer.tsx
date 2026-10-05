import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Brand & Title */}
        <div className="footer-left">
          <span className="footer-name">{PERSONAL_INFO.name}</span>
          <span className="footer-role font-mono text-xs">{PERSONAL_INFO.title}</span>
        </div>

        {/* Minimal Links */}
        <div className="footer-center font-mono text-xs">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-sep">·</span>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span className="footer-sep">·</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="footer-link">
            Email
          </a>
          <span className="footer-sep">·</span>
          <a
            href={PERSONAL_INFO.resumeFile}
            download="Noman Ahmad-Resume.pdf"
            className="footer-link"
          >
            Resume
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="footer-right">
          <span className="footer-copy font-mono text-xs">© 2026 Noman Ahmad</span>
          <button
            type="button"
            className="footer-top-btn font-mono text-xs"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
