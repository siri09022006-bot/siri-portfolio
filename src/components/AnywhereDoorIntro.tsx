import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, DoorClosed } from 'lucide-react';

interface AnywhereDoorIntroProps {
  onEnter: () => void;
  isOpenState: boolean;
}

export const AnywhereDoorIntro: React.FC<AnywhereDoorIntroProps> = ({ onEnter, isOpenState }) => {
  const [doorOpen, setDoorOpen] = useState(false);
  const [handleTurned, setHandleTurned] = useState(false);
  const [dissolved, setDissolved] = useState(isOpenState);

  // Tactile brass latch click and welcoming harmonic sound via Web Audio API
  const playDoorSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Tactile latch click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);

      // Warm major chime chord
      const freqs = [392.00, 493.88, 587.33, 783.99]; // G, B, D, High G
      freqs.forEach((freq, idx) => {
        const chimeOsc = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        chimeOsc.type = 'sine';
        chimeOsc.frequency.setValueAtTime(freq, ctx.currentTime + 0.12 + idx * 0.07);
        chimeGain.gain.setValueAtTime(0, ctx.currentTime + 0.12 + idx * 0.07);
        chimeGain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.18 + idx * 0.07);
        chimeGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.85 + idx * 0.07);
        chimeOsc.connect(chimeGain);
        chimeGain.connect(ctx.destination);
        chimeOsc.start(ctx.currentTime + 0.12 + idx * 0.07);
        chimeOsc.stop(ctx.currentTime + 0.9 + idx * 0.07);
      });
    } catch {
      // Audio playback fails silently if browser policy restricts
    }
  };

  const handleOpenDoor = () => {
    if (doorOpen) return;
    setHandleTurned(true);
    playDoorSound();

    setTimeout(() => {
      setDoorOpen(true);
    }, 250);

    setTimeout(() => {
      setDissolved(true);
      onEnter();
    }, 1100);
  };

  useEffect(() => {
    if (isOpenState) {
      setDoorOpen(true);
      setDissolved(true);
    }
  }, [isOpenState]);

  if (dissolved) return null;

  return (
    <div className={`anywhere-door-overlay ${doorOpen ? 'is-opening' : ''}`}>
      {/* Ambient luxury background */}
      <div className="door-space-bg">
        <div className="door-radial-glow" />
      </div>

      {/* Primary Title - Painted on First Frame */}
      <div className="door-top-bar">
        <div className="door-brand-tag">
          <span className="brand-name">Siri DS</span>
          <span className="brand-role">UI/UX Design Intern</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setDoorOpen(true);
            setDissolved(true);
            onEnter();
          }}
          className="door-skip-btn"
          aria-label="Enter portfolio immediately"
        >
          <span>Enter Portfolio</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Center 3D Anywhere Door Stage */}
      <div className="door-stage-3d">
        <div className="door-header-copy">
          <h1 className="door-h1-title">Siri DS — UI/UX Design Intern</h1>
          <p className="door-h1-sub">
            Computer Science &amp; Engineering student at BNMIT crafting thoughtful digital interfaces.
          </p>
        </div>

        <div
          className={`door-frame-wrapper ${handleTurned ? 'handle-clicked' : ''}`}
          onClick={handleOpenDoor}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleOpenDoor();
          }}
          aria-label="Open the Anywhere Door to enter Siri's 3D cartoon world"
        >
          {/* Light Portal Emanating Behind the Door */}
          <div className={`door-portal-light ${doorOpen ? 'active' : ''}`} />

          {/* 3D Door Leaf */}
          <div className={`door-leaf-3d ${doorOpen ? 'door-swung-open' : ''}`}>
            <img
              src="/brown_home_door.jpg"
              alt="Classic Anywhere Door in 3D perspective"
              className="door-render-img"
            />
            <div className="door-gloss-reflection" />
            <div className={`door-knob-highlight ${handleTurned ? 'turned' : ''}`} />
          </div>

          <div className="door-floor-shadow" />
        </div>

        {/* Tactile Call to Action */}
        <div className="door-cta-container">
          <button
            type="button"
            onClick={handleOpenDoor}
            className="door-open-pill-btn"
          >
            <DoorClosed size={16} />
            <span>Click Door to Open</span>
            <Sparkles size={14} />
          </button>
          <p className="door-caption">
            Inspired by Gianluca Patti · 3D Cartoon World
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnywhereDoorIntro;
