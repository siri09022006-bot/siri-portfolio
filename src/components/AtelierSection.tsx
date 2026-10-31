import React, { useState } from 'react';
import { Rotate3d, Sparkles, ChevronRight } from 'lucide-react';

interface AngleView {
  id: string;
  label: string;
  degree: string;
  src: string;
  aspect: string;
  notes: string;
}

const ANGLES: AngleView[] = [
  {
    id: 'front',
    label: 'Front View',
    degree: '0°',
    src: '/f0.webp',
    aspect: 'Portrait Equilibrium',
    notes: 'Direct symmetry, showing the traditional pleating and contrast of the vivid magenta saree against the BTS ceramic typography.'
  },
  {
    id: 'three-quarter',
    label: '3/4 Front View',
    degree: '60°',
    src: '/f1.webp',
    aspect: 'Dimensional Depth',
    notes: 'Reveals the curvature of the 11oz ceramic mug handle and the natural light refraction along the saree silk folds.'
  },
  {
    id: 'side',
    label: 'Full Side View',
    degree: '120°',
    src: '/f2.webp',
    aspect: 'Profile Silhouette',
    notes: 'Clean vertical posture emphasizing the playful scale proportion between figurine and everyday drinking vessel.'
  },
  {
    id: 'back',
    label: 'Back View',
    degree: '180°',
    src: '/f3.webp',
    aspect: 'Surface Detailing',
    notes: 'Detailed view of the pallu drape and the complete wrap-around BTS lore illustrations on the reverse ceramic.'
  },
  {
    id: 'full',
    label: 'Composition View',
    degree: 'Top / 45°',
    src: '/character_siri.png',
    aspect: 'Total Scale Harmony',
    notes: 'Overview inspecting the stage presence, rim balance, and emotional resonance of the entire tactile composition.'
  }
];

export const AtelierSection: React.FC = () => {
  const [activeAngleId, setActiveAngleId] = useState<string>('front');
  const activeAngle = ANGLES.find((a) => a.id === activeAngleId) || ANGLES[0];

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="atelier" className="content-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-kicker">
          <span>07 / CREATIVE ATELIER</span>
          <span className="dot-sep">•</span>
          <span>WHERE THE IDEA GETS TO WANDER</span>
        </div>

        <div className="section-intro-row">
          <h2 className="editorial-title">
            The Creative Atelier, <br />
            <span className="shimmer-text">where the idea gets to wander.</span>
          </h2>
          <p className="section-intro-desc">
            A space for discovery where editorial styling and 3D craft meet. A figure in a vivid magenta saree standing on a 3D BTS ceramic mug.
          </p>
        </div>

        {/* Meeting of Worlds Highlight */}
        <div className="atelier-lead-box">
          <div className="lead-text-col">
            <span className="highlight-tag">VISUAL IDENTITY EXPLORATION</span>
            <h3 className="lead-headline">A meeting of worlds.</h3>
            <p className="lead-desc">
              A miniature figure in a vivid magenta saree stands atop an 11oz BTS ceramic mug.
              Draped fabric against cold ceramic glazing: a playful contrast of scale bringing everyday objects into a gallery stage.
            </p>
            <button
              type="button"
              onClick={scrollToHero}
              className="atelier-spin-cta"
            >
              <Rotate3d size={16} />
              <span>Experience in 360° Turntable ↑</span>
            </button>
          </div>

          <div className="lead-preview-col">
            <div className="angle-preview-frame">
              <img
                src={activeAngle.src}
                alt={activeAngle.label}
                className="angle-large-img"
              />
              <div className="angle-preview-badge">
                <span className="badge-deg">{activeAngle.degree}</span>
                <span className="badge-label">{activeAngle.label}</span>
              </div>
            </div>
            <div className="angle-quick-notes">
              <strong>{activeAngle.aspect}</strong>: {activeAngle.notes}
            </div>
          </div>
        </div>

        {/* Three Design Pillars */}
        <div className="atelier-pillars-grid">
          <div className="atelier-pillar-card">
            <span className="p-num">01</span>
            <h4>Magenta, with presence.</h4>
            <p>
              The saree carries the composition in one unapologetic colour. Draped in traditional pleating, it commands attention without competing with the typography.
            </p>
          </div>

          <div className="atelier-pillar-card">
            <span className="p-num">02</span>
            <h4>A playful proportion.</h4>
            <p>
              The 11oz ceramic mug creates scale identity. Using a physical size standard transforms an everyday breakfast object into a dramatic pedestal.
            </p>
          </div>

          <div className="atelier-pillar-card">
            <span className="p-num">03</span>
            <h4>A story in the surface.</h4>
            <p>
              The mug is full-wrapped with handwritten BTS lore and song lyrics—a personal touch that adds warmth, fandom, and character.
            </p>
          </div>
        </div>

        {/* "One idea. Every angle." Interactive Explorer */}
        <div className="angles-explorer-box">
          <div className="angles-header">
            <div>
              <span className="box-kicker">INTERACTIVE ANGLE INSPECTOR</span>
              <h3 className="sub-editorial-title">One idea. Every angle.</h3>
            </div>
            <p className="angles-header-desc">
              Click any view below to inspect camera angles, silk drape highlights, and surface typography.
            </p>
          </div>

          <div className="angles-thumbs-row">
            {ANGLES.map((ang) => {
              const isSelected = ang.id === activeAngleId;
              return (
                <button
                  key={ang.id}
                  type="button"
                  onClick={() => setActiveAngleId(ang.id)}
                  className={`angle-thumb-btn ${isSelected ? 'active' : ''}`}
                >
                  <div className="thumb-img-wrapper">
                    <img src={ang.src} alt={ang.label} />
                  </div>
                  <div className="thumb-info">
                    <span className="thumb-deg">{ang.degree}</span>
                    <span className="thumb-title">{ang.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Play Signoff */}
        <div className="atelier-signoff-card">
          <div className="signoff-quote">
            <Sparkles size={20} className="sparkle-icon" />
            <h4>Visual play, with intention.</h4>
            <p>
              This exploration in scale, form, and dimensional presentation informs the same attention to detail applied to interface design and digital brand identity.
            </p>
          </div>
          <a
            href="https://behance.net/sirids"
            target="_blank"
            rel="noopener noreferrer"
            className="atelier-behance-link"
          >
            <span>Explore on Behance</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
