import React, { useState } from 'react';
import { HeroCanvas } from './Scene/HeroCanvas';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onNavigateWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateWork }) => {
  const [isCharacterAlert, setIsCharacterAlert] = useState(false);

  return (
    <section style={{
      position: 'relative',
      paddingTop: 'clamp(20px, 3vw, 40px)',
      paddingBottom: 'clamp(40px, 6vw, 80px)',
      overflow: 'hidden'
    }}>
      <div className="page-frame">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'center',
          minHeight: 'calc(80dvh - 120px)'
        }}>
          {/* Left Column: Minimal Name & Intent (Cols 1-5) */}
          <div style={{
            gridColumn: 'span 5',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 2
          }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.4rem, 6.2vw, 6.8rem)',
              lineHeight: 0.94,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              color: 'var(--ink)'
            }}>
              Smart & simple visual design.
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)',
              lineHeight: 1.55,
              maxWidth: '36ch',
              color: 'var(--ink-secondary)'
            }}>
              UI/UX design intern crafting brand identities, gamified experiences, and emotional digital interfaces in Bengaluru.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              paddingTop: '8px'
            }}>
              <button
                type="button"
                onClick={onNavigateWork}
                className="editorial-btn"
              >
                Explore Projects
                <ArrowUpRight size={18} />
              </button>

              <a
                href="mailto:siri09.02.2006@gmail.com"
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--ink)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px'
                }}
              >
                siri09.02.2006@gmail.com
              </a>
            </div>

            {/* Subtle live avatar status */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.85rem',
              color: isCharacterAlert ? 'var(--accent)' : 'var(--ink-secondary)',
              transition: 'color 0.25s ease',
              paddingTop: '4px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: isCharacterAlert ? 'var(--accent)' : '#B8B0A2',
                transition: 'background-color 0.25s ease, transform 0.25s ease',
                transform: isCharacterAlert ? 'scale(1.25)' : 'scale(1)'
              }} />
              <span>
                {isCharacterAlert ? 'Siri avatar is awake & tracking' : 'Siri avatar in cozy sleepy idle'}
              </span>
            </div>
          </div>

          {/* Right Column: Central Visual Focal Point (Cols 6-12) */}
          <div style={{
            gridColumn: 'span 7',
            position: 'relative',
            height: 'clamp(500px, 64vh, 720px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Elegant architectural background panel */}
            <div style={{
              position: 'absolute',
              inset: '8px',
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius-subtle)',
              zIndex: 0
            }} />

            {/* 3D Canvas with Chibi Siri */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              zIndex: 1
            }}>
              <HeroCanvas onHoverStateChange={setIsCharacterAlert} />
            </div>

            {/* Micro caption */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              right: '28px',
              fontSize: '0.78rem',
              color: 'var(--ink-secondary)',
              letterSpacing: '0.04em',
              zIndex: 2,
              pointerEvents: 'none'
            }}>
              Hover character to awaken · Built in Three.js
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
