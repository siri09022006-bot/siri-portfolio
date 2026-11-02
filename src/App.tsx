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

  const handleReplayDoor = () => {
    setIsDoorOpen(false);
    setShowDoorScene(true);
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
      <TurntableHero onReplayDoor={handleReplayDoor} />

      {/* Stylized Animated Cartoon Marquee Ribbon (Gianluca Patti Inspired) */}
      <CartoonMarquee />

      {/* About Section — Becoming, by design. */}
      <AboutSection />

      {/* Selected Works — DERIVA, Kpopify & Brand Systems */}
      <SelectedWorkSection />

      {/* Experience & Education — NEXUS, TEDx & BNMIT */}
      <ExperienceEducationSection />

      {/* Skills & Google Certifications */}
      <SkillsCertificationsSection />

      {/* Creative Atelier — 3D Figurine & BTS Mug Angle Explorer */}
      <AtelierSection />

      {/* Contact Section & Editorial Sign-off */}
      <ContactSection />

      {/* Luxury Floating Dock Navigation */}
      <FloatingChromeDock onOpenDoor={handleReplayDoor} />
    </div>
  );
};

export default App;
