import React, { useState } from 'react';
import { AnywhereDoorIntro } from './components/AnywhereDoorIntro';
import { TurntableHero } from './components/TurntableHero';
import { CartoonMarquee } from './components/CartoonMarquee';
import { AboutSection } from './components/AboutSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { SkillsCertificationsSection } from './components/SkillsCertificationsSection';
import { AtelierSection } from './components/AtelierSection';
import { ContactSection } from './components/ContactSection';
import { FloatingChromeDock } from './components/FloatingChromeDock';

export const App: React.FC = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [showDoorScene, setShowDoorScene] = useState(true);

  const handleEnterWorld = () => {
    setIsDoorOpen(true);
    setShowDoorScene(false);
  };

  return (
    <div className="portfolio-app cartoon-world-theme">
      {/* 3D Chrome Anywhere Door Opening Portal */}
      {showDoorScene && (
        <AnywhereDoorIntro
          onEnter={handleEnterWorld}
          isOpenState={isDoorOpen}
        />
      )}

      {/* Hero Section with Permanent Central 3D Cartoon Character */}
      <TurntableHero />

      {/* Stylized Animated Cartoon Marquee Ribbon (Gianluca Patti Inspired) */}
      <CartoonMarquee />

      {/* 01 / About Section — Becoming, by design. */}
      <AboutSection />

      {/* 02 / Selected Works — DERIVA, Kpopify & Brand Systems */}
      <SelectedWorkSection />

      {/* 03 & 04 / Experience & Education — NEXUS, TEDx, Sridattam & BNMIT */}
      <ExperienceEducationSection />

      {/* 05 & 06 / Skills & Google Certifications */}
      <SkillsCertificationsSection />

      {/* 07 / Creative Atelier — 3D Figurine & BTS Mug Angle Explorer */}
      <AtelierSection />

      {/* 08 / Contact Section & Editorial Sign-off */}
      <ContactSection />

      {/* Luxury Floating Dock Navigation */}
      <FloatingChromeDock />
    </div>
  );
};

export default App;
