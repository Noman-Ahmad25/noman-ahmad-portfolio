import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Left: Clean name */}
        <a href="#" className="nav-brand">
          <span className="brand-text">Noman Ahmad</span>
        </a>

        {/* Center / Desktop Links */}
        <nav className="nav-menu" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-item">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: GitHub, LinkedIn, Resume */}
        <div className="nav-right">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-subtle"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
            <span className="nav-link-text">GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-subtle"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
            <span className="nav-link-text">LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.resumeFile}
            download="Noman Ahmad-Resume.pdf"
            className="btn btn-sm btn-outline nav-resume"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-top">
              <span className="mobile-drawer-brand">Noman Ahmad</span>
              <button
                type="button"
                className="mobile-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-item"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-actions">
              <a
                href={PERSONAL_INFO.resumeFile}
                download="Noman Ahmad-Resume.pdf"
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '1rem' }}
              >
                Download Resume PDF
              </a>
              <div className="mobile-social-row">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
