import React from 'react';

interface CartoonMarqueeProps {
  items?: string[];
}

export const CartoonMarquee: React.FC<CartoonMarqueeProps> = () => {
  const words = [
    'SIRI DS',
    '3D CARTOON UNIVERSE',
    'UI/UX DESIGN INTERN',
    'BENGALURU, IN',
    'FUELED BY BTS & COFFEE',
    'DERIVA: QUEST FOR CALCULUS',
    'KPOPIFY: MOOD SOUND',
    'LEAD DESIGNER @ NEXUS BNMIT',
    '9 GOOGLE CERTIFICATIONS',
    '360° BTS CERAMIC ATELIER'
  ];

  return (
    <div className="cartoon-marquee-ribbon" role="region" aria-label="Animated Highlights Ticker">
      <div className="marquee-track">
        {[0, 1, 2].map((loopIdx) => (
          <div key={loopIdx} className="marquee-group" aria-hidden={loopIdx > 0}>
            {words.map((w, idx) => (
              <span key={idx} className="marquee-item">
                <span className="marquee-text">{w}</span>
                <span className="marquee-sparkle">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
