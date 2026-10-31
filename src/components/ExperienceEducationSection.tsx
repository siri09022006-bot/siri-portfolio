import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  badge?: string;
  bullets: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'nexus',
    role: 'Vice Lead & Lead Designer',
    org: 'NEXUS BNMIT',
    period: 'Jan 2026 – Present',
    badge: 'Design Leadership',
    bullets: [
      'Serve as Lead Designer (since January 2026) and Vice Lead (since May 2026) for the NEXUS BNMIT club.'
    ]
  },
  {
    id: 'tedx',
    role: 'Associate Designer',
    org: 'TEDxBNMIT',
    period: '1 Year',
    badge: 'Event Identity',
    bullets: [
      'Designed visual assets for TEDxBNMIT events using Figma.',
      'Helped the creative team maintain a cohesive visual identity across social media and event materials.',
      'Applied UI/UX and graphic design principles in a collaborative workflow covering event branding and visual communication.'
    ]
  },
  {
    id: 'mosaic',
    role: 'Creator & Designer',
    org: 'Mosaic Gen (Instagram Design Brand)',
    period: 'Mar 2025 – Present',
    badge: 'Creative Brand',
    bullets: [
      'Created and curate an Instagram-based design brand, producing original visuals across diverse creative styles.',
      'Build a creative presence that blends technology, design, and storytelling for an engaged audience.'
    ]
  },
  {
    id: 'sridattam',
    role: 'Designer',
    org: 'Sridattam Agarbatti',
    period: 'Design Project',
    badge: 'FMCG Brand',
    bullets: [
      'Designed FMCG product visuals for the Sridattam Agarbatti brand.',
      'Created home page covers for the brand.',
      'Produced social media posts for the brand.'
    ]
  }
];

const EDUCATIONS = [
  {
    institution: 'BNM Institute of Technology, Bengaluru',
    degree: 'B.E. in Computer Science & Engineering',
    period: '2024 – 2028 (Expected)',
    metric: '8.7 / 10',
    metricLabel: 'CGPA (3rd Year)',
    detail: 'Computer Science & Engineering student at BNMIT.'
  },
  {
    institution: 'Pre-University Course (PUC)',
    degree: 'Pre-University Education',
    period: 'Completed',
    metric: '92.5%',
    metricLabel: 'Percentage (555/600)',
    detail: 'Achieved 92.5% (555/600).'
  },
  {
    institution: 'Mirambika School for New Age, Bengaluru',
    degree: 'CBSE Class X',
    period: '2022',
    metric: '88.4%',
    metricLabel: 'Best Five Subjects',
    detail: 'Achieved 88.4% in best five subjects.'
  }
];

export const ExperienceEducationSection: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    nexus: true,
    tedx: true,
    mosaic: false,
    sridattam: false
  });

  const toggleRole = (id: string) => {
    setExpandedRoles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="content-section">
      <div className="section-container">
        {/* Experience Header */}
        <div className="section-kicker">
          <span>03 / EXPERIENCE</span>
          <span className="dot-sep">•</span>
          <span>LEARNING IN THE MAKING</span>
        </div>

        <div className="section-intro-row">
          <h2 className="editorial-title">
            Learning, <br />
            <span className="shimmer-text">in the making.</span>
          </h2>
          <p className="section-intro-desc">
            Hands-on design leadership across college tech societies, official TEDx events, and digital consumer brands.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="experience-list">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedRoles[exp.id];
            return (
              <div
                key={exp.id}
                className={`experience-card ${isExpanded ? 'is-expanded' : ''}`}
                onClick={() => toggleRole(exp.id)}
              >
                <div className="exp-card-header">
                  <div className="exp-header-left">
                    <div className="exp-org-row">
                      <span className="exp-org">{exp.org}</span>
                      {exp.badge && <span className="exp-badge">{exp.badge}</span>}
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                  </div>

                  <div className="exp-header-right">
                    <span className="exp-period">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <button
                      type="button"
                      aria-label="Toggle details"
                      className="exp-toggle-btn"
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>
                        <span className="bullet-dash">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Education Sub-Section */}
        <div id="education" className="education-block">
          <div className="section-kicker" style={{ marginTop: '56px' }}>
            <span>04 / EDUCATION</span>
            <span className="dot-sep">•</span>
            <span>THE FOUNDATION</span>
          </div>

          <h3 className="sub-editorial-title">
            The foundation, <br />
            <span className="shimmer-text">engineering &amp; craft.</span>
          </h3>

          <div className="education-grid">
            {EDUCATIONS.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="edu-metric-badge">
                  <span className="metric-score">{edu.metric}</span>
                  <span className="metric-tag">{edu.metricLabel}</span>
                </div>
                <h4 className="edu-institution">{edu.institution}</h4>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-period">{edu.period}</div>
                <p className="edu-detail">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
