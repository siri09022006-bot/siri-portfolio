import React from 'react';

interface NavigationProps {
  activeTab: 'home' | 'work' | 'about';
  onTabChange: (tab: 'home' | 'work' | 'about') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <header style={{
      width: '100%',
      backgroundColor: 'transparent',
      paddingTop: '28px',
      paddingBottom: '20px',
      position: 'relative',
      zIndex: 20
    }}>
      <div className="page-frame" style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
          <button
            onClick={() => onTabChange('home')}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          >
            SIRI DS
          </button>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--ink-secondary)',
            letterSpacing: '0.04em'
          }}>
            UI/UX Designer & Technologist · Bengaluru
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button
            onClick={() => onTabChange('home')}
            style={{
              fontSize: '0.95rem',
              fontWeight: activeTab === 'home' ? 600 : 400,
              color: activeTab === 'home' ? 'var(--accent)' : 'var(--ink)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Home
          </button>
          <button
            onClick={() => onTabChange('work')}
            style={{
              fontSize: '0.95rem',
              fontWeight: activeTab === 'work' ? 600 : 400,
              color: activeTab === 'work' ? 'var(--accent)' : 'var(--ink)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Projects
          </button>
          <button
            onClick={() => onTabChange('about')}
            style={{
              fontSize: '0.95rem',
              fontWeight: activeTab === 'about' ? 600 : 400,
              color: activeTab === 'about' ? 'var(--accent)' : 'var(--ink)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Experience
          </button>
          <a
            href="mailto:siri09.02.2006@gmail.com?subject=UI/UX%20Design%20Opportunity"
            className="editorial-btn"
            style={{ padding: '10px 22px', fontSize: '0.875rem' }}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};
