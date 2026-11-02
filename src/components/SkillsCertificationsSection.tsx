import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'tools' | 'ux' | 'code';
  group: string;
}

const SKILLS: SkillItem[] = [
  // Design Tools
  { name: 'Figma', category: 'tools', group: 'Design Tools' },
  { name: 'Adobe Photoshop', category: 'tools', group: 'Design Tools' },
  // UX & Design Skills
  { name: 'Design Thinking', category: 'ux', group: 'UX & Design' },
  { name: 'UX Research', category: 'ux', group: 'UX & Design' },
  { name: 'Wireframing', category: 'ux', group: 'UX & Design' },
  { name: 'Low-Fidelity & High-Fidelity Prototyping', category: 'ux', group: 'UX & Design' },
  { name: 'UX Process (Empathize, Define, Ideate)', category: 'ux', group: 'UX & Design' },
  { name: 'Visual Design', category: 'ux', group: 'UX & Design' },
  { name: 'Brand Design', category: 'ux', group: 'UX & Design' },
  { name: 'FMCG Product Design', category: 'ux', group: 'UX & Design' },
  { name: 'Event Branding', category: 'ux', group: 'UX & Design' },
  { name: 'Social Media Design', category: 'ux', group: 'UX & Design' },
  // Programming & AI
  { name: 'Python', category: 'code', group: 'Programming & AI' },
  { name: 'Java', category: 'code', group: 'Programming & AI' },
  { name: 'C++ (basics)', category: 'code', group: 'Programming & AI' },
  { name: 'AI Fundamentals', category: 'code', group: 'Programming & AI' }
];

const CERTIFICATIONS = [
  { num: '01', title: 'Accelerate Your Job Search with AI', issuer: 'Google' },
  { num: '02', title: 'Design a User Experience for Social Good & Prepare for Jobs', issuer: 'Google' },
  { num: '03', title: 'Build Dynamic User Interfaces (UI) for Websites', issuer: 'Google' },
  { num: '04', title: 'Create High-Fidelity Designs and Prototypes in Figma', issuer: 'Google' },
  { num: '05', title: 'Conduct UX Research and Test Early Concepts', issuer: 'Google' },
  { num: '06', title: 'Build Wireframes and Low-Fidelity Prototypes', issuer: 'Google' },
  { num: '07', title: 'Start the UX Design Process: Empathize, Define, and Ideate', issuer: 'Google' },
  { num: '08', title: 'Foundations of User Experience (UX) Design', issuer: 'Google' },
  { num: '09', title: 'AI Fundamentals', issuer: 'Google' }
];

export const SkillsCertificationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tools' | 'ux' | 'code'>('all');
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const filteredSkills =
    filter === 'all' ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="content-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-intro-row">
          <h2 className="editorial-title">
            Skills &amp; Craft, curated with intent.
          </h2>
          <p className="section-intro-desc">
            From UX field research to high-fidelity Figma components and computer science engineering foundations.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="filter-pill-bar">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Skills ({SKILLS.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'tools' ? 'active' : ''}`}
            onClick={() => setFilter('tools')}
          >
            Design Tools (2)
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'ux' ? 'active' : ''}`}
            onClick={() => setFilter('ux')}
          >
            UX &amp; Design Skills (11)
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'code' ? 'active' : ''}`}
            onClick={() => setFilter('code')}
          >
            Programming &amp; AI (4)
          </button>
        </div>

        {/* Dynamic Skill Tags Grid */}
        <div className="skills-tag-grid">
          {filteredSkills.map((s, idx) => (
            <div key={idx} className="skill-tag-card">
              <span className="skill-name">{s.name}</span>
              <span className="skill-level-badge">{s.group}</span>
            </div>
          ))}
        </div>

        {/* Google Certifications Block */}
        <div id="certifications" className="certifications-block">
          <div className="certs-headline-box">
            <h3 className="sub-editorial-title">
              Google Certified, from research to release.
            </h3>
            <div className="cert-verified-pill">
              <ShieldCheck size={16} />
              <span>9 Verified Google Credentials</span>
            </div>
          </div>

          <div className="certs-list-grid">
            {CERTIFICATIONS.map((cert) => {
              const isSelected = selectedCert === cert.num;
              return (
                <div
                  key={cert.num}
                  className={`cert-item-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedCert(isSelected ? null : cert.num)}
                >
                  <div className="cert-left">
                    <span className="cert-idx">{cert.num}</span>
                    <h4 className="cert-name">{cert.title}</h4>
                  </div>
                  <div className="cert-right">
                    <span className="cert-org-badge">{cert.issuer}</span>
                    <CheckCircle2 size={16} className="cert-check" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
