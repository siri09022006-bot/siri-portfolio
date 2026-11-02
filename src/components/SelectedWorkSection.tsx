import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, Eye, Music, Gamepad2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  headline: string;
  subtitle: string;
  tags: string[];
  role: string;
  focus: string;
  status: string;
  overview: string;
  pillars: { num: string; title: string; desc: string }[];
  visualIdentity: { title: string; desc: string }[];
  behanceUrl: string;
  icon: React.ReactNode;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'deriva',
    number: '01',
    title: 'DERIVA',
    headline: 'Gamified calculus learning experience where mathematical concepts become realms, quests, and challenges.',
    subtitle: 'UI/UX Design • Interaction Design • Gamification • Interactive Prototype',
    tags: ['UI/UX Design', 'Interaction Design', 'Gamification', 'Interactive Prototype'],
    role: 'UI/UX & Interaction Design',
    focus: 'Gamified Calculus Learning Experience',
    status: 'Interactive Prototype (Complete Journey)',
    overview:
      'Designed a game-inspired UI combining fantasy landscapes, ancient architecture, mathematical symbols, and character-led storytelling. Mapped the learner journey from exploration to discovery: mathematical realms, concept-based quests, visual proofs, and a Vault of collected formulas, connected into an interactive prototype.',
    pillars: [
      {
        num: '01',
        title: 'Realms, Quests & Challenges',
        desc: 'Gamified calculus learning experience where mathematical concepts become realms, quests, and challenges.'
      },
      {
        num: '02',
        title: 'Game-Inspired UI Architecture',
        desc: 'Designed a game-inspired UI combining fantasy landscapes, ancient architecture, mathematical symbols, and character-led storytelling.'
      },
      {
        num: '03',
        title: 'Learner Journey: Exploration to Discovery',
        desc: 'Mapped the learner journey from exploration to discovery: mathematical realms, concept-based quests, visual proofs, and a Vault of collected formulas.'
      },
      {
        num: '04',
        title: 'Interactive Prototype',
        desc: 'Connected the screens into an interactive prototype covering the complete learner journey.'
      }
    ],
    visualIdentity: [
      { title: 'Mythic Geometry', desc: 'Mathematical symbols interwoven with fantasy cartography.' },
      { title: 'Interactive Feedback', desc: 'Step-by-step quest progression and visual feedback confirming mastery.' },
      { title: 'Formula Vault UI', desc: 'Structured grimoire where unlocked mathematical proofs serve as persistent achievements.' }
    ],
    behanceUrl: 'https://behance.net/sirids',
    icon: <Gamepad2 size={20} />
  },
  {
    id: 'kpopify',
    number: '02',
    title: 'Kpopify – Emotion Based Music UI',
    headline: 'Mood-driven UI/UX concept for a music app focused entirely on Korean music, designed to feel immersive and visually expressive.',
    subtitle: 'UI/UX Concept • Interaction Design • Branding',
    tags: ['UI/UX Concept', 'Interaction Design', 'Branding'],
    role: 'UI/UX Concept & Interaction Design',
    focus: 'Emotion Based Music UI',
    status: 'UI/UX Concept & Motion Flow',
    overview:
      'Mood-driven UI/UX concept for a music app focused entirely on Korean music, designed to feel immersive and visually expressive. Studied user behavior and music interaction patterns to design an experience beyond static UI, designed cinematic transitions between screens, and explored how branding changes user perception of a music platform.',
    pillars: [
      {
        num: '01',
        title: 'Emotion-Led Discovery',
        desc: 'Mood-driven UI/UX concept for a music app focused entirely on Korean music, designed to feel immersive and visually expressive.'
      },
      {
        num: '02',
        title: 'User Behavior & Music Interaction',
        desc: 'Studied user behavior and music interaction patterns to design an experience beyond static UI.'
      },
      {
        num: '03',
        title: 'Cinematic Transitions',
        desc: 'Designed cinematic transitions between screens connecting states fluidly.'
      },
      {
        num: '04',
        title: 'Perception Through Branding',
        desc: 'Explored how branding changes user perception of a music platform.'
      }
    ],
    visualIdentity: [
      { title: 'Immersive Korean Music Staging', desc: 'Focused entirely on Korean music culture, designed to feel visually expressive.' },
      { title: 'Cinematic Screen Choreography', desc: 'Fluid transitions that link listening moods directly to interface visuals.' },
      { title: 'Brand Perception Framing', desc: 'Visual identity explored specifically to elevate listener engagement.' }
    ],
    behanceUrl: 'https://behance.net/sirids',
    icon: <Music size={20} />
  }
];

export const SelectedWorkSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>('deriva');
  const project = CASE_STUDIES.find((p) => p.id === activeProject) || CASE_STUDIES[0];

  return (
    <section id="work" className="content-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-intro-row">
          <h2 className="editorial-title">
            Case Studies, crafted with depth.
          </h2>
          <p className="section-intro-desc">
            Explore detailed UI/UX design systems spanning gamified mathematics learning and emotion-based music discovery.
          </p>
        </div>

        {/* Interactive Project Selector Tabs */}
        <div className="project-tab-bar" role="tablist">
          {CASE_STUDIES.map((item) => {
            const isActive = item.id === activeProject;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveProject(item.id)}
                className={`project-tab-btn ${isActive ? 'active' : ''}`}
              >
                <span className="tab-title">{item.title}</span>
                {isActive && <span className="tab-active-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Active Case Study Showcase Card */}
        <div className="case-study-showcase">
          {/* Top Metadata Bar */}
          <div className="case-study-meta-bar">
            <div className="case-study-tags">
              {project.tags.map((t, idx) => (
                <span key={idx} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="behance-case-btn"
            >
              <span>Full Case Study on Behance</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Project Title & Headline */}
          <div className="case-study-headline-box">
            <div className="case-study-name-row">
              <span className="project-icon-badge">{project.icon}</span>
              <h3 className="case-study-name">{project.title}</h3>
            </div>
            <h4 className="case-study-headline">{project.headline}</h4>
            <p className="case-study-overview">{project.overview}</p>
          </div>

          {/* Real Project UI Screenshot */}
          {project.id === 'kpopify' && (
            <div className="case-study-media-stage">
              <img
                src="/kpopify_showcase.png"
                alt="Kpopify mobile UI screens showcase"
                className="case-study-screenshot"
                loading="lazy"
              />
            </div>
          )}

          {/* 3 Metrics / Info Columns */}
          <div className="case-study-info-grid">
            <div className="info-col">
              <span className="info-label">MY ROLE</span>
              <span className="info-val">{project.role}</span>
            </div>
            <div className="info-col">
              <span className="info-label">PRIMARY FOCUS</span>
              <span className="info-val">{project.focus}</span>
            </div>
            <div className="info-col">
              <span className="info-label">STATUS</span>
              <span className="info-val">{project.status}</span>
            </div>
          </div>

          {/* The 3 Interactive Pillars / UX Process */}
          <div className="case-study-pillars-box">
            <div className="box-subhead">
              <Layers size={15} />
              <span>THE EXPERIENCE ARCHITECTURE</span>
            </div>
            <div className="pillars-grid">
              {project.pillars.map((pil, idx) => (
                <div key={idx} className="pillar-card">
                  <span className="pillar-num">{pil.num}</span>
                  <h5 className="pillar-title">{pil.title}</h5>
                  <p className="pillar-desc">{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Language Breakdown */}
          <div className="case-study-visual-box">
            <div className="box-subhead">
              <Eye size={15} />
              <span>THE VISUAL &amp; BRAND LANGUAGE</span>
            </div>
            <div className="visual-grid">
              {project.visualIdentity.map((vis, idx) => (
                <div key={idx} className="visual-card">
                  <div className="visual-header">
                    <Sparkles size={14} className="sparkle-icon" />
                    <h6>{vis.title}</h6>
                  </div>
                  <p>{vis.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
