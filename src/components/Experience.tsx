import React from 'react';
import { Award, Briefcase, GraduationCap, PenTool, Check } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{
      paddingTop: 'var(--section-gap)',
      paddingBottom: 'var(--section-gap)',
      backgroundColor: 'var(--surface)'
    }}>
      <div className="page-frame">
        {/* Section Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
          marginBottom: '56px',
          alignItems: 'baseline'
        }}>
          <div style={{ gridColumn: 'span 7' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 4.8vw, 4.4rem)',
              lineHeight: 0.95,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--ink)'
            }}>
              Experience & Credentials
            </h2>
          </div>
          <div style={{ gridColumn: 'span 5' }}>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '1.05rem', lineHeight: 1.5 }}>
              Computer Science & Engineering student at BNMIT, club design lead, and certified UX practitioner.
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Left (Experience & Education), Right (Skills & Certifications) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '36px'
        }}>
          {/* Column 1: Roles & Education (Cols 1-7) */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Leadership & Design Roles */}
            <div style={{
              backgroundColor: 'var(--bg)',
              padding: 'clamp(24px, 3vw, 40px)',
              borderRadius: 'var(--radius-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Briefcase size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Design Experience</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Lead Designer & Vice Lead</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>Jan 2026 – Present</span>
                  </div>
                  <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>NEXUS BNMIT</div>
                  <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
                    Lead design initiatives and visual direction for student tech and innovation communities across campus.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Associate Designer</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>1 Year</span>
                  </div>
                  <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>TEDxBNMIT</div>
                  <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
                    Produce official event branding, social media assets, and digital collaterals maintaining strict global TEDx guidelines in Figma.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>FMCG Brand Designer</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>Completed</span>
                  </div>
                  <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>Sridattam Agarbatti</div>
                  <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
                    Delivered product visual packaging, homepage creative covers, and promotional social media assets.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Creator & Curator</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>Mar 2025 – Present</span>
                  </div>
                  <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>Mosaic Gen (Instagram Design Brand)</div>
                  <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
                    Curates visual storytelling concepts uniting graphic design, emerging tech, and artistic exploration.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div style={{
              backgroundColor: 'var(--bg)',
              padding: 'clamp(24px, 3vw, 40px)',
              borderRadius: 'var(--radius-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <GraduationCap size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Education</h3>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>B.E. in Computer Science & Engineering</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>2024 – 2028 (Expected)</span>
                </div>
                <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>
                  BNM Institute of Technology, Bengaluru
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--ink)', marginTop: '4px', fontWeight: 500 }}>
                  Current CGPA: 8.7 / 10 (3rd Year)
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--surface-raised)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600 }}>Pre-University Course (PUC)</span>
                  <span style={{ color: 'var(--accent)', fontWeight: 600 }}>92.5% (555/600)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                  <span style={{ color: 'var(--ink-secondary)' }}>Mirambika School for New Age (CBSE Class X)</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>88.4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Skills & Google Certifications (Cols 8-12) */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Design & Technical Toolkit */}
            <div style={{
              backgroundColor: 'var(--bg)',
              padding: 'clamp(24px, 3vw, 40px)',
              borderRadius: 'var(--radius-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <PenTool size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Core Toolkit</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    DESIGN TOOLS
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 500, marginTop: '4px' }}>
                    Figma, Adobe Photoshop
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    UX & METHODOLOGY
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--ink-secondary)', marginTop: '4px', lineHeight: 1.5 }}>
                    Design Thinking, UX Research, Wireframing, Low & High-Fidelity Prototyping, Empathize-Define-Ideate, Visual & Brand Design, Event Branding.
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    TECHNICAL FOUNDATIONS
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--ink)', marginTop: '4px' }}>
                    Python, Java, C++ (basics), AI Fundamentals, Web Interaction.
                  </div>
                </div>
              </div>
            </div>

            {/* Google UX Certifications */}
            <div style={{
              backgroundColor: 'var(--bg)',
              padding: 'clamp(24px, 3vw, 40px)',
              borderRadius: 'var(--radius-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Award size={22} color="var(--accent)" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Google UX Certifications</h3>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {[
                  'Foundations of User Experience (UX) Design',
                  'Start the UX Design Process: Empathize, Define, Ideate',
                  'Build Wireframes and Low-Fidelity Prototypes',
                  'Conduct UX Research and Test Early Concepts',
                  'Create High-Fidelity Designs & Prototypes in Figma',
                  'Build Dynamic User Interfaces (UI) for Websites',
                  'Design a User Experience for Social Good',
                  'Accelerate Your Job Search with AI',
                  'AI Fundamentals'
                ].map((cert, cIdx) => (
                  <li key={cIdx} style={{
                    fontSize: '0.875rem',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px'
                  }}>
                    <Check size={14} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
