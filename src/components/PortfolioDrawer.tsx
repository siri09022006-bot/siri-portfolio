import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface PortfolioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioDrawer: React.FC<PortfolioDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(27, 26, 25, 0.45)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'flex-end',
      transition: 'opacity 0.25s ease'
    }}>
      <div style={{
        width: 'min(92vw, 680px)',
        height: '100dvh',
        backgroundColor: 'var(--bg)',
        overflowY: 'auto',
        padding: 'clamp(28px, 4vw, 56px)',
        boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          borderBottom: '1px solid var(--surface-raised)',
          paddingBottom: '20px'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.4rem',
              fontWeight: 500,
              color: 'var(--ink)'
            }}>
              Selected Works & Credentials
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', marginTop: '4px' }}>
              Siri DS · UI/UX Design Intern · Bengaluru
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--ink)',
              padding: '8px'
            }}
            aria-label="Close drawer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Case Studies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em' }}>
            CASE STUDIES
          </h3>

          {/* DERIVA */}
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '24px',
            borderRadius: 'var(--radius-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500 }}>
                DERIVA
              </h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                Gamification · Interaction Design
              </span>
            </div>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Gamified calculus learning experience where mathematical concepts become realms, quests, and challenges. Mapped complete learner journey with interactive prototype in Figma.
            </p>
            <a
              href="https://behance.net/sirids"
              target="_blank"
              rel="noreferrer"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginTop: '4px'
              }}
            >
              Read full case study on Behance
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Kpopify */}
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '24px',
            borderRadius: 'var(--radius-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500 }}>
                Kpopify
              </h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                Emotion-Based Music UI · Branding
              </span>
            </div>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Mood-driven UI/UX concept for a Korean music platform with fluid cinematic transitions and emotionally resonant branding.
            </p>
            <a
              href="https://behance.net/sirids"
              target="_blank"
              rel="noreferrer"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--ink)',
                marginTop: '4px'
              }}
            >
              Read full case study on Behance
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Sridattam Agarbatti */}
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '24px',
            borderRadius: 'var(--radius-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500 }}>
                Sridattam Agarbatti
              </h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                FMCG Product Visuals
              </span>
            </div>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Designed FMCG product visual packaging, home page covers, and social media creative identity.
            </p>
          </div>
        </div>

        {/* Experience & Education */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em' }}>
            ROLES & EDUCATION
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>Lead Designer & Vice Lead</span>
                <span style={{ color: 'var(--ink-secondary)' }}>Jan 2026 – Present</span>
              </div>
              <div style={{ color: 'var(--accent)' }}>NEXUS BNMIT</div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>Associate Designer</span>
                <span style={{ color: 'var(--ink-secondary)' }}>1 Year</span>
              </div>
              <div style={{ color: 'var(--accent)' }}>TEDxBNMIT</div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>B.E. Computer Science & Engineering</span>
                <span style={{ color: 'var(--ink-secondary)' }}>2024 – 2028 (Expected)</span>
              </div>
              <div style={{ color: 'var(--accent)' }}>BNM Institute of Technology · CGPA 8.7/10</div>
            </div>
          </div>
        </div>

        {/* Direct Contact Footer in Drawer */}
        <div style={{
          marginTop: 'auto',
          paddingTop: '24px',
          borderTop: '1px solid var(--surface-raised)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a
            href="mailto:siri09.02.2006@gmail.com"
            className="editorial-btn"
            style={{ padding: '12px 24px', fontSize: '0.875rem' }}
          >
            siri09.02.2006@gmail.com
          </a>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem' }}>
            <a href="https://www.linkedin.com/in/siri-ds-1488a932b" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://behance.net/sirids" target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
