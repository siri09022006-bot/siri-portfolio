import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" style={{
      paddingTop: 'var(--section-gap)',
      paddingBottom: 'var(--section-gap)',
      backgroundColor: 'var(--surface)'
    }}>
      <div className="page-frame">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Section Heading (Cols 1-5) */}
          <div style={{ gridColumn: 'span 5' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4.2vw, 4rem)',
              lineHeight: 0.95,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '24px'
            }}>
              Craft over noise.
            </h2>
            <div style={{
              width: '48px',
              height: '3px',
              backgroundColor: 'var(--accent)'
            }} />
          </div>

          {/* Statement & Principles (Cols 6-12) */}
          <div style={{
            gridColumn: 'span 7',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            <p style={{
              fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem)',
              fontFamily: 'var(--font-display)',
              lineHeight: 1.35,
              color: 'var(--ink)',
              fontWeight: 400
            }}>
              Most digital products look like the average of every tool their designers used. Real identity emerges when software embraces the precision of bookmaking and the kinetic joy of physical objects.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px',
              paddingTop: '20px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-text)',
                  fontWeight: 600,
                  marginBottom: '10px',
                  color: 'var(--ink)'
                }}>
                  Tactile Motion
                </h3>
                <p style={{ color: 'var(--ink-secondary)', fontSize: '0.975rem' }}>
                  Micro-interactions driven by physics, spring dampening, and reactive gaze rather than arbitrary linear animations.
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-text)',
                  fontWeight: 600,
                  marginBottom: '10px',
                  color: 'var(--ink)'
                }}>
                  System Architecture
                </h3>
                <p style={{ color: 'var(--ink-secondary)', fontSize: '0.975rem' }}>
                  Reusable design tokens and component libraries built for engineering parity and frictionless developer handoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
