import React from 'react';
import { X, Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(27, 26, 25, 0.55)',
      backdropFilter: 'blur(10px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'var(--bg)',
        width: 'min(90vw, 520px)',
        borderRadius: 'var(--radius-subtle)',
        padding: 'clamp(28px, 4vw, 44px)',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px'
      }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.2rem',
              fontWeight: 500,
              lineHeight: 1,
              color: 'var(--ink)'
            }}>
              Let’s Connect
            </h3>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.925rem', marginTop: '6px' }}>
              Available for UI/UX internships & collaborative design roles.
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
              padding: '4px'
            }}
            aria-label="Close dialog"
          >
            <X size={22} />
          </button>
        </div>

        {/* Contact Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <a
            href="mailto:siri09.02.2006@gmail.com?subject=UI/UX%20Design%20Opportunity"
            className="editorial-btn"
            style={{
              justifyContent: 'center',
              padding: '16px',
              fontSize: '1rem'
            }}
          >
            <Mail size={18} />
            siri09.02.2006@gmail.com
            <ArrowUpRight size={16} />
          </a>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: 'var(--surface)',
            padding: '20px',
            borderRadius: 'var(--radius-subtle)',
            fontSize: '0.925rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} color="var(--accent)" />
              <span style={{ color: 'var(--ink)', fontWeight: 500 }}>+91 9380641803</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={16} color="var(--accent)" />
              <span style={{ color: 'var(--ink-secondary)' }}>Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </div>

        {/* Profile Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '16px',
          borderTop: '1px solid var(--surface-raised)'
        }}>
          <a
            href="https://www.linkedin.com/in/siri-ds-1488a932b"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              color: 'var(--ink)',
              fontWeight: 500
            }}
          >
            LinkedIn
            <ExternalLink size={14} />
          </a>

          <a
            href="https://behance.net/sirids"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              color: 'var(--ink)',
              fontWeight: 500
            }}
          >
            Behance
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
