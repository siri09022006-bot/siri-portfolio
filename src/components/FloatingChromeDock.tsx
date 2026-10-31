import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Palette, Mail, Sparkles, Download } from 'lucide-react';

export const FloatingChromeDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={15} /> },
    { id: 'about', label: 'About', icon: <User size={15} /> },
    { id: 'work', label: 'Works', icon: <Briefcase size={15} /> },
    { id: 'experience', label: 'Experience', icon: <GraduationCap size={15} /> },
    { id: 'skills', label: 'Skills', icon: <Sparkles size={15} /> },
    { id: 'atelier', label: 'Atelier', icon: <Palette size={15} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={15} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'experience', 'skills', 'atelier', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="chrome-floating-dock-wrapper" role="navigation" aria-label="Quick Navigation Dock">
      <div className="chrome-dock-bubble">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`dock-pill-btn ${isActive ? 'is-active' : ''}`}
              title={item.label}
            >
              <span className="dock-icon">{item.icon}</span>
              <span className="dock-label">{item.label}</span>
              {isActive && <span className="dock-glow-indicator" />}
            </button>
          );
        })}

        <a
          href="/Siri_DS_Resume.pdf"
          download="Siri_DS_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-pill-btn dock-resume-btn"
          title="Download Siri DS Resume (PDF)"
        >
          <span className="dock-icon"><Download size={14} /></span>
          <span className="dock-label">CV</span>
        </a>

      </div>
    </div>
  );
};
