import React from 'react';
import { ArrowUpRight, Sparkles, Code2, Palette, Download } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="content-section">
      <div className="section-container">
        {/* Header Grid */}
        <div className="about-header-grid">
          <div>
            <h2 className="editorial-title">
              Becoming, by design.
            </h2>
            <div className="siri-monogram">
              Siri DS
              <span className="monogram-tag">UI/UX Design Intern</span>
            </div>
          </div>

          <div className="about-narrative">
            <p className="narrative-lead">
              I’m a Computer Science &amp; Engineering student at BNMIT, seeking a UI/UX Design Intern role.
              I enjoy designing visuals and interfaces that are <em>smart, calm, and simple</em> — and I’m
              constantly learning how to make those choices with more intention.
            </p>
            <p className="narrative-body">
              As Lead Designer and Vice Lead at <strong>NEXUS BNMIT</strong>, I work hands-on across brand design,
              FMCG product visuals, event branding, social media, and interface concepts using <strong>Figma</strong> and{' '}
              <strong>Adobe Photoshop</strong>.
            </p>
            <p className="narrative-body">
              Having completed Google UX design coursework covering UX research, wireframing, and high-fidelity
              prototyping, my goal is to weave engineering logic with tactile visual craft for products people genuinely love using.
            </p>

            {/* Quick interactive badges */}
            <div className="about-pill-row">
              <a href="#work" className="about-pill">
                <Palette size={14} className="pill-icon" />
                <span>2 Flagship Case Studies</span>
                <ArrowUpRight size={13} />
              </a>
              <a href="#experience" className="about-pill">
                <Sparkles size={14} className="pill-icon" />
                <span>NEXUS Lead &amp; TEDx Designer</span>
                <ArrowUpRight size={13} />
              </a>
              <a href="#education" className="about-pill">
                <Code2 size={14} className="pill-icon" />
                <span>BNMIT 8.7 CGPA</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="/Siri_DS_Resume.pdf"
                download="Siri_DS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-pill resume-pill"
                title="Download Siri DS Resume (PDF)"
              >
                <Download size={14} className="pill-icon" />
                <span>Download Resume (PDF)</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
