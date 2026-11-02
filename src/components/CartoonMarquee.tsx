import React from 'react';

interface CartoonMarqueeProps {
  items?: string[];
}

export const CartoonMarquee: React.FC<CartoonMarqueeProps> = () => {
  const words = [
    'Siri DS',
    '3D Cartoon Universe',
    'UI/UX Design Intern',
    'Bengaluru, Karnataka',
    'Fueled by BTS & Coffee',
    'DERIVA: Gamified Calculus UX',
    'Kpopify: Emotion Music Discovery',
    'Lead Designer at NEXUS BNMIT',
    '9 Google UX Certifications',
    '360° Ceramic Figurine Atelier'
  ];

  return (
    <div className="cartoon-marquee-ribbon" role="region" aria-label="Animated Highlights Ticker">
      <div className="marquee-track">
        {[0, 1, 2].map((loopIdx) => (
          <div key={loopIdx} className="marquee-group" aria-hidden={loopIdx > 0}>
            {words.map((w, idx) => (
              <span key={idx} className="marquee-item">
                <span className="marquee-text">{w}</span>
                <span className="marquee-sparkle">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
