import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  role: string;
  description: string;
  highlights: string[];
  behanceUrl?: string;
  badge: string;
}

const PROJECTS: Project[] = [
  {
    title: 'DERIVA',
    category: 'Gamified Calculus Learning Experience',
    role: 'UI/UX Design · Interaction Design · Gamification',
    description: 'A game-inspired UI where abstract calculus concepts transform into explorable mathematical realms, character-driven quests, and challenges.',
    highlights: [
      'Visual storytelling combining fantasy landscapes and mathematical symbols',
      'End-to-end learner journey: concept quests, visual proofs, and Formula Vault',
      'Complete high-fidelity interactive prototype mapped in Figma'
    ],
    behanceUrl: 'https://behance.net/sirids',
    badge: 'Flagship Case Study'
  },
  {
    title: 'Kpopify',
    category: 'Emotion-Based Music UI Concept',
    role: 'UI/UX Concept · Interaction Design · Branding',
    description: 'A mood-driven streaming interface tailored for Korean music, moving beyond static grids through dynamic emotional moods and cinematic transitions.',
    highlights: [
      'Explored how music branding shapes user emotional perception',
      'Designed cinematic motion transitions between listening states',
      'Studied user interaction patterns to create fluid navigation gestures'
    ],
    behanceUrl: 'https://behance.net/sirids',
    badge: 'Mobile Interaction Concept'
  },
  {
    title: 'Sridattam Agarbatti',
    category: 'FMCG Brand & Digital Visuals',
    role: 'Visual Design · FMCG Branding',
    description: 'Crafted distinct visual identity assets, digital homepage covers, and social media creative systems for an FMCG consumer fragrance brand.',
    highlights: [
      'Comprehensive product visual styling and promotional compositions',
      'Designed high-conversion homepage cover banners',
      'Maintained brand consistency across multi-channel social media releases'
    ],
    behanceUrl: 'https://behance.net/sirids',
    badge: 'Brand & Visual Design'
  },
  {
    title: 'TEDxBNMIT & NEXUS',
    category: 'Event Branding & Club Visual Identity',
    role: 'Lead Designer & Vice Lead · Event Branding',
    description: 'Lead visual design workflows across TEDxBNMIT event branding and student-led design communities at BNM Institute of Technology.',
    highlights: [
      'Designed cohesive visual assets for university-wide TEDx events in Figma',
      'Serve as Lead Designer and Vice Lead for NEXUS BNMIT',
      'Structured collaborative UI/UX and graphic design pipelines for creative teams'
    ],
    behanceUrl: 'https://behance.net/sirids',
    badge: 'Leadership & Event Design'
  }
];

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" style={{
      paddingTop: 'var(--section-gap)',
      paddingBottom: 'var(--section-gap)',
      borderTop: '1px solid var(--surface-raised)'
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
              Featured Projects & Works
            </h2>
          </div>
          <div style={{ gridColumn: 'span 5' }}>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '1.05rem', lineHeight: 1.5 }}>
              Case studies spanning gamified learning platforms, emotional music interfaces, and FMCG visual branding from my design portfolio.
            </p>
          </div>
        </div>

        {/* Project List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {PROJECTS.map((project, idx) => (
            <article
              key={idx}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-subtle)',
                padding: 'clamp(28px, 3.8vw, 48px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '32px',
                alignItems: 'center'
              }}
            >
              {/* Left Column: Project Substance */}
              <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.825rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}>
                  <span>{project.badge}</span>
                  <span style={{ color: 'var(--ink-secondary)', fontWeight: 400 }}>· {project.role}</span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)'
                }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--ink-secondary)', fontSize: '1.025rem', maxWidth: '52ch', lineHeight: 1.55 }}>
                  {project.description}
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '8px 0 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx} style={{
                      fontSize: '0.9rem',
                      color: 'var(--ink)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Case Study Actions */}
              <div style={{
                gridColumn: 'span 4',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '16px'
              }}>
                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-btn"
                    style={{ padding: '14px 24px', fontSize: '0.9rem' }}
                  >
                    View on Behance
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
