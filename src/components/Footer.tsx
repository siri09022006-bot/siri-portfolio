import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" style={{
      backgroundColor: 'var(--ink)',
      color: 'var(--bg)',
      paddingTop: 'clamp(70px, 9vw, 120px)',
      paddingBottom: '32px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="page-frame">
        {/* Upper Grid: Invitation & Authentic Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          marginBottom: '72px',
          alignItems: 'start'
        }}>
          {/* Invitation (Cols 1-7) */}
          <div style={{ gridColumn: 'span 7' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 4.6vw, 4.5rem)',
              lineHeight: 0.95,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--bg)',
              marginBottom: '28px'
            }}>
              Let’s design thoughtful interfaces together.
            </h2>
            <a
              href="mailto:siri09.02.2006@gmail.com?subject=UI/UX%20Design%20Opportunity%20-%20Siri%20DS"
              className="editorial-btn editorial-btn-accent"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              siri09.02.2006@gmail.com
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Contact & Social Links (Cols 9-12) */}
          <div style={{
            gridColumn: 'span 4',
            gridColumnStart: 9,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontSize: '1rem'
          }}>
            <span style={{
              fontSize: '0.85rem',
              color: '#8A857F',
              letterSpacing: '0.04em'
            }}>
              Location & Profiles
            </span>
            <span style={{ color: 'var(--bg)', fontWeight: 500 }}>
              Bengaluru, Karnataka · +91 9380641803
            </span>
            <a
              href="https://www.linkedin.com/in/siri-ds-1488a932b"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#D4CDC5', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              LinkedIn / siri-ds-1488a932b
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://behance.net/sirids"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#D4CDC5', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Behance / sirids
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Legal & Meta row directly above monumental name */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem',
          color: '#8A857F',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(250, 247, 242, 0.1)'
        }}>
          <span>© {new Date().getFullYear()} Siri DS. All rights reserved.</span>
          <span>UI/UX Designer · BNMIT Bengaluru</span>
        </div>

        {/* Monumental Wordmark (Cropped at bottom edge per TasteSkill) */}
        <div style={{
          overflow: 'hidden',
          marginTop: '16px'
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 21vw, 20rem)',
            fontWeight: 600,
            lineHeight: 0.8,
            letterSpacing: '-0.04em',
            color: 'rgba(250, 247, 242, 0.08)',
            transform: 'translateY(15%)',
            userSelect: 'none',
            whiteSpace: 'nowrap'
          }}>
            SIRI DS
          </div>
        </div>
      </div>
    </footer>
  );
};
