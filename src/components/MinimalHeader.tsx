import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MinimalHeaderProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  isAlert: boolean;
  showGlasses: boolean;
  onToggleGlasses: () => void;
}

export const MinimalHeader: React.FC<MinimalHeaderProps> = ({
  onOpenProjects,
  onOpenContact,
  isAlert,
  showGlasses,
  onToggleGlasses
}) => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: 'clamp(20px, 3.5vw, 36px) clamp(24px, 4vw, 48px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 50,
      pointerEvents: 'none' // Allows clicking 3D character underneath except on interactive buttons
    }}>
      {/* Top Left: Siri DS Wordmark */}
      <div style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'baseline', gap: '16px' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
          lineHeight: 1
        }}>
          Siri DS
        </span>
        <span style={{
          fontSize: '0.825rem',
          color: 'var(--ink-secondary)',
          letterSpacing: '0.04em'
        }}>
          UI/UX Designer
        </span>
      </div>

      {/* Top Right: Actions & Live State */}
      <div style={{
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(16px, 2.5vw, 32px)'
      }}>
        {/* Subtle Live Avatar Mood Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.8rem',
          color: isAlert ? 'var(--accent)' : 'var(--ink-secondary)',
          transition: 'color 0.25s ease'
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: isAlert ? 'var(--accent)' : '#B8B0A2',
            transition: 'background-color 0.25s ease, transform 0.25s ease',
            transform: isAlert ? 'scale(1.3)' : 'scale(1)'
          }} />
          <span style={{ display: 'inline-block' }}>
            {isAlert ? 'Tracking gaze' : 'Breathing idle'}
          </span>
        </div>

        {/* Spectacles Toggle Button */}
        <button
          type="button"
          onClick={onToggleGlasses}
          style={{
            fontSize: '0.825rem',
            fontWeight: 500,
            color: showGlasses ? 'var(--accent)' : 'var(--ink-secondary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px 10px',
            borderRadius: '2px',
            transition: 'color 0.2s ease'
          }}
          title="Toggle round spectacles on character"
        >
          Glasses: {showGlasses ? 'On' : 'Off'}
        </button>

        {/* Projects Slide-over Button */}
        <button
          type="button"
          onClick={onOpenProjects}
          style={{
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--ink)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            transition: 'color 0.2s ease'
          }}
        >
          Selected Works
        </button>

        {/* Contact ↗ Button */}
        <button
          type="button"
          onClick={onOpenContact}
          className="editorial-btn"
          style={{
            padding: '10px 22px',
            fontSize: '0.875rem'
          }}
        >
          Contact
          <ArrowUpRight size={16} />
        </button>
      </div>
    </header>
  );
};
