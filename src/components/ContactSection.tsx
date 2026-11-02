import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Phone, MapPin, Linkedin, FileDown, Download } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'siri09.02.2006@gmail.com';
  const phone = '+91 9380641803';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-container">
        {/* Big Editorial Headline */}
        <div className="contact-headline-row">
          <h2 className="editorial-title contact-huge-title">
            Good things start with a conversation.
          </h2>
        </div>

        {/* Seeking Status Banner */}
        <div className="seeking-banner">
          <div className="seeking-left">
            <span className="seeking-tag">Currently Seeking</span>
            <h3 className="seeking-role">UI/UX Design Intern opportunities</h3>
          </div>
          <div className="seeking-right">
            <p>
              I’m Siri, a Computer Science &amp; Engineering student at BNMIT exploring UI/UX and
              interaction design. If there’s a thoughtful interface to shape, a visual brand to explore, or an
              internship team where I can learn and contribute, I’d love to connect.
            </p>
          </div>
        </div>

        {/* Write to Me - Big Email Block */}
        <div className="contact-card email-hero-card">
          <div className="card-subhead">Write to Me</div>
          <div className="email-action-row">
            <a
              href={`mailto:${email}`}
              className="big-email-link"
              title="Click to compose email"
            >
              <span>{email}</span>
              <ArrowUpRight size={32} className="email-arrow" />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className={`copy-pill-btn ${copied ? 'is-copied' : ''}`}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
          <p className="email-subtext">
            For internship opportunities, design conversations, and creative collaborations.
          </p>
        </div>

        {/* Columns: Socials & Direct Details */}
        <div className="contact-details-grid">
          <div className="contact-sub-card">
            <div className="card-subhead">Find Me Elsewhere</div>
            <div className="social-links-list">
              <a
                href="https://www.linkedin.com/in/siri-ds-1488a932b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-row-item"
              >
                <div className="social-title-box">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </div>
                <div className="social-url-box">
                  <span>linkedin.com/in/siri-ds-1488a932b</span>
                  <ArrowUpRight size={14} />
                </div>
              </a>

              <a
                href="https://behance.net/sirids"
                target="_blank"
                rel="noopener noreferrer"
                className="social-row-item"
              >
                <div className="social-title-box">
                  <span className="behance-symbol">Bē</span>
                  <span>Behance</span>
                </div>
                <div className="social-url-box">
                  <span>behance.net/sirids</span>
                  <ArrowUpRight size={14} />
                </div>
              </a>

              <a
                href="/Siri_DS_Resume.pdf"
                download="Siri_DS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="social-row-item resume-download-row"
                title="Download Siri's official Resume in PDF"
              >
                <div className="social-title-box">
                  <FileDown size={18} />
                  <span>Resume (PDF)</span>
                </div>
                <div className="social-url-box">
                  <span>Download Resume</span>
                  <Download size={14} />
                </div>
              </a>
            </div>
          </div>

          {/* 03 / The Details */}
          <div className="contact-sub-card">
            <div className="card-subhead">Direct Details</div>
            <div className="details-box">
              <div className="detail-item">
                <span className="detail-label">
                  <MapPin size={13} />
                  Based in
                </span>
                <span className="detail-val">Bengaluru, Karnataka, India</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">
                  <Phone size={13} />
                  PHONE
                </span>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="detail-val detail-link">
                  {phone}
                </a>
              </div>

              <p className="detail-summary">
                Interested in UI/UX, interaction design, and visual communication, backed by a computer science engineering perspective.
              </p>
            </div>
          </div>
        </div>

        {/* Emotional Sign-off Quote */}
        <div className="contact-signoff-box">
          <p className="signoff-quote-text">
            Thank you for spending time with my work.
          </p>
          <span className="signoff-badge">SIRI DS / DESIGN PORTFOLIO</span>
        </div>

        {/* Bottom Site Footer */}
        <footer className="editorial-footer">
          <div className="footer-brand-col">
            <div className="footer-brand-title">SIRI DS</div>
            <div className="footer-brand-sub">
              Bengaluru, Karnataka · UI/UX &amp; Visual Design
            </div>
          </div>

          <div className="footer-nav-col">
            <a href="#about">About</a>
            <span className="footer-sep">/</span>
            <a href="#work">Selected Works</a>
            <span className="footer-sep">/</span>
            <a href="#experience">Experience</a>
            <span className="footer-sep">/</span>
            <a href="#skills">Skills</a>
            <span className="footer-sep">/</span>
            <a href="#atelier">Creative Atelier</a>
          </div>

          <div className="footer-links-col">
            <a href={`mailto:${email}`}>{email} ↗</a>
            <div className="footer-ext-links">
              <a href="/Siri_DS_Resume.pdf" download="Siri_DS_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume (PDF) ↓
              </a>
              <a href="https://www.linkedin.com/in/siri-ds-1488a932b" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://behance.net/sirids" target="_blank" rel="noopener noreferrer">
                Behance ↗
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
