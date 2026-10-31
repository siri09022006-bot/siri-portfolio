import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AnywhereDoorIntroProps {
  onEnter: () => void;
  isOpenState: boolean;
}

export const AnywhereDoorIntro: React.FC<AnywhereDoorIntroProps> = ({ onEnter, isOpenState }) => {
  const [doorOpen, setDoorOpen] = useState(false);
  const [handleTurned, setHandleTurned] = useState(false);
  const [dissolved, setDissolved] = useState(isOpenState);

  // Synthesize a tactile brass door latch turn and warm welcoming harmonic chord
  const playDoorSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // 1. Solid brass latch click / turn
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

      // 2. Warm welcoming chime chord
      const freqs = [392.00, 493.88, 587.33, 783.99]; // G, B, D, High G (Warm major)
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
      // Audio playback fails silently if user has not interacted
    }
  };

  const handleOpenDoor = () => {
    if (doorOpen) return;
    setHandleTurned(true);
    playDoorSound();

    setTimeout(() => {
      setDoorOpen(true);
    }, 280);

    setTimeout(() => {
      setDissolved(true);
      onEnter();
    }, 1200);
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
      {/* Ambient background particles */}
      <div className="door-space-bg">
        <div className="door-radial-glow" />
        <div className="chrome-star star-1">✦</div>
        <div className="chrome-star star-2">✦</div>
        <div className="chrome-star star-3">✦</div>
        <div className="chrome-star star-4">✦</div>
      </div>

      {/* Top Header Prompt */}
      <div className="door-top-bar">
        <div className="door-brand-tag">
          <b>Siri DS</b>
          <span>• UI/UX Designer</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setDoorOpen(true);
            setDissolved(true);
            onEnter();
          }}
          className="door-skip-btn"
        >
          <span>Enter Portfolio</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* The Warm Classic Brown Home Door Stage */}
      <div className="door-stage-3d">
        <div
          className={`door-frame-wrapper ${handleTurned ? 'handle-clicked' : ''}`}
          onClick={handleOpenDoor}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleOpenDoor();
          }}
          aria-label="Open the door to enter Siri's portfolio"
        >
          {/* Light Portal Emanating from Behind the Door */}
          <div className={`door-portal-light ${doorOpen ? 'active' : ''}`} />

          {/* The Brown Wooden Home Door */}
          <div className={`door-leaf-3d ${doorOpen ? 'door-swung-open' : ''}`}>
            <img
              src="/brown_home_door.jpg"
              alt="Classic Brown Wooden Home Door"
              className="door-render-img"
            />
            {/* Subtle Wood Sheen Reflection */}
            <div className="door-gloss-reflection" />
            {/* Tactile Brass Knob Highlight Hotspot */}
            <div className={`door-knob-highlight ${handleTurned ? 'turned' : ''}`} />
          </div>

          {/* Ambient Floor Shadow */}
          <div className="door-floor-shadow" />
        </div>

        {/* Floating Call to Action */}
        <div className="door-cta-container">
          <button
            type="button"
            onClick={handleOpenDoor}
            className="door-open-pill-btn"
          >
            <Sparkles size={16} className="btn-sparkle" />
            <span>Turn Brass Knob to Enter</span>
          </button>
          <p className="door-caption">
            Welcome to Siri’s design space
          </p>
        </div>
      </div>
    </div>
  );
};
