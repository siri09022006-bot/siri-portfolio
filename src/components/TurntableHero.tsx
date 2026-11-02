import React, { useEffect, useRef, useState } from 'react';
import { Coffee, Download, DoorClosed } from 'lucide-react';

interface TurntableHeroProps {
  onReplayDoor?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  text: string;
}

export const TurntableHero: React.FC<TurntableHeroProps> = ({ onReplayDoor }) => {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const figRef = useRef<HTMLDivElement>(null);
  const [headTilt, setHeadTilt] = useState(0);
  const [mugBouncing, setMugBouncing] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Synthesize a cute playful bubble/steam sound when interacting with the mug
  const playMugSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Audio fails silently
    }
  };

  // Mug click interaction: tactile bounce + floating BTS hearts & coffee steam
  const handleMugClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMugBouncing(true);
    playMugSound();
    setTimeout(() => setMugBouncing(false), 450);

    const icons = ['💜', '☕', '✨', 'BTS', '🌸'];
    const newParticles: Particle[] = [0, 1, 2].map((i) => ({
      id: Date.now() + i,
      x: 45 + (Math.random() * 20 - 10),
      y: 65 - i * 8,
      text: icons[Math.floor(Math.random() * icons.length)]
    }));

    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 1800);
  };

  // 360° Turntable Canvas Engine
  useEffect(() => {
    const cv = cvRef.current;
    const fig = figRef.current;
    if (!cv || !fig) return;

    const ctx = cv.getContext('2d', { alpha: true });
    if (!ctx) return;

    const SPLIT = [0.58, 0.595, 0.58, 0.60];
    const W = 620;
    const H = 900;
    const BX = 290;
    const SEQ: [number, number][] = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [2, 1],
      [1, 1],
    ];
    const N = SEQ.length;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const R = Math.min(window.devicePixelRatio || 1, 2);
    const CW = W * R;
    const CH = H * R;
    const SD = 5;

    cv.width = CW;
    cv.height = CH;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const mk = () => {
      const c = document.createElement('canvas');
      c.width = CW;
      c.height = CH;
      const g = c.getContext('2d')!;
      g.imageSmoothingEnabled = true;
      g.imageSmoothingQuality = 'high';
      return g;
    };

    const up: HTMLCanvasElement[] = [];
    const bx: CanvasRenderingContext2D[] = [];
    const sp: number[] = [];

    let tg = 0;
    let tmx = 0;
    let drag = false;
    let lastX: number | null = null;
    let lastT = 0;
    let vel = 0;
    let lastMove = 0;
    let last = 0;
    let raf = 0;
    let vis = true;

    const A = { p: 0, v: 0 };
    const M = { p: 0, v: 0 };
    const B = { p: 0, v: 0 };

    const md = (x: number) => ((x % N) + N) % N;
    const ss = (x: number) => {
      const clamped = Math.max(0, Math.min(1, x));
      return clamped * clamped * (3 - 2 * clamped);
    };

    const damp = (o: { p: number; v: number }, target: number, smooth: number, dt: number) => {
      const om = 2 / smooth;
      const x = om * dt;
      const e = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
      const c = o.p - target;
      const t = (o.v + om * c) * dt;
      o.v = (o.v - om * t) * e;
      o.p = target + (c + t) * e;
    };

    const spin = (e: PointerEvent, k: number) => {
      const now = performance.now();
      if (lastX !== null) {
        const dx = e.clientX - lastX;
        const dt = Math.max(8, now - lastT) / 1000;
        tg += dx * k;
        vel += ((dx * k) / dt - vel) * 0.35;
      }
      lastX = e.clientX;
      lastT = now;
      lastMove = now;
    };

    const onPointerEnter = (e: PointerEvent) => {
      lastX = e.clientX;
      lastT = performance.now();
      vel = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      const normX = (e.clientX - r.left) / r.width - 0.5;
      tmx = normX * 2;
      setHeadTilt(normX * 3.5); // Cute head tilt tracking cursor

      if (drag) {
        spin(e, N / (r.width * 1.1));
      } else if (e.pointerType === 'mouse') {
        spin(e, N / (r.width * 2.4));
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      drag = true;
      lastX = e.clientX;
      lastT = performance.now();
      vel = 0;
      cv.setPointerCapture(e.pointerId);
      cv.style.cursor = 'grabbing';
      B.v = 1.2;
    };

    const release = (e: PointerEvent) => {
      if (drag) {
        tg += Math.max(-N, Math.min(N, vel)) * 0.22;
        lastMove = performance.now();
      }
      drag = false;
      lastX = e.pointerType === 'mouse' ? e.clientX : null;
      cv.style.cursor = 'grab';
    };

    const onPointerLeave = () => {
      lastX = null;
      tmx = 0;
      setHeadTilt(0);
    };

    cv.addEventListener('pointerenter', onPointerEnter);
    cv.addEventListener('pointermove', onPointerMove);
    cv.addEventListener('pointerdown', onPointerDown);
    cv.addEventListener('pointerup', release);
    cv.addEventListener('pointercancel', release);
    cv.addEventListener('pointerleave', onPointerLeave);

    const prep = () => {
      for (let n = 0; n < N; n++) {
        const k = SEQ[n][0];
        const u = mk();
        if (SEQ[n][1]) {
          u.setTransform(-1, 0, 0, 1, 2 * BX * R, 0);
        }
        u.drawImage(images[k], 0, 0, CW, CH);
        up[n] = u.canvas;
        bx[n] = mk();
        sp[n] = Math.round(SPLIT[k] * CH);
      }
    };

    const warp = (n: number, t: number) => {
      const g = bx[n];
      const u = up[n];
      const SP = sp[n];
      g.clearRect(0, 0, CW, CH);

      for (let y = 0; y < SP; y += SD) {
        const s = Math.min(SD, SP - y);
        const h = 1 - (y + s * 0.5) / SP;
        const h2 = Math.pow(h, 1.6);
        const dx =
          (Math.sin(t * 0.8) * 3.2 + Math.sin(t * 1.37 + 1.3) * 1.1 + M.p * 6) * h2 +
          Math.sin(t * 1.5 + (y / R) * 0.012) * 1.1 * h * h;
        const shiftX = Math.round(dx * R);
        g.drawImage(u, 0, y, CW, s, shiftX, y, CW, s);
      }
      g.drawImage(u, 0, SP, CW, CH - SP, 0, SP, CW, CH - SP);
    };

    const put = (n: number, a: number, sq: number, sc: number) => {
      if (a <= 0.003) return;
      const SP = sp[n];
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(BX * R, 0);
      ctx.scale(sq, 1);
      ctx.translate(-BX * R, 0);
      const scaledSP = Math.round(SP * sc);
      const offsetY = SP - scaledSP;
      ctx.drawImage(bx[n].canvas, 0, 0, CW, SP, 0, offsetY, CW, scaledSP);
      ctx.drawImage(bx[n].canvas, 0, SP - 1, CW, CH - SP + 1, 0, SP - 1, CW, CH - SP + 1);
      ctx.restore();
    };

    const draw = (ts: number) => {
      raf = 0;
      if (!vis && !still) return;

      const t = ts / 1000;
      const dt = Math.min(0.033, Math.max(0.001, (ts - last) / 1000 || 0.016));
      last = ts;

      damp(M, tmx, 0.6, dt);
      if (!drag && ts - lastMove > 180 && tg !== Math.round(tg)) {
        tg = Math.round(tg);
      }
      damp(A, tg, drag ? 0.16 : 0.38, dt);
      if (Math.abs(A.p) > N * 50) {
        const o = Math.floor(A.p / N) * N;
        A.p -= o;
        tg -= o;
      }

      damp(B, 0, 0.25, dt);
      // Keep natural anatomical proportions without vertical stretch distortion
      const sc = 1;

      const b = Math.floor(A.p);
      const f = A.p - b;
      const i = md(b);
      const j = md(b + 1);
      // Keep constant natural width (no horizontal squeezing during rotation)
      const sq = 1;
      const a = ss(f);

      ctx.clearRect(0, 0, CW, CH);
      warp(i, t);
      put(i, 1 - a, sq, sc);

      if (a > 0.003) {
        warp(j, t);
        put(j, a, sq, sc);
      }

      const d = Math.abs(md(A.p + N / 2) - N / 2);
      const on = fig.classList.contains('rot');
      if (d > 0.25 && !on) fig.classList.add('rot');
      else if (d < 0.15 && on) fig.classList.remove('rot');

      if (!still) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        vis = entries[0].isIntersecting;
        if (vis && !still) {
          start();
        } else if (!vis && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      });
      observer.observe(fig);
    }

    const images: HTMLImageElement[] = [];
    let loaded = 0;
    const paths = ['/f0.webp', '/f1.webp', '/f2.webp', '/f3.webp'];

    paths.forEach((src, idx) => {
      const im = new Image();
      im.src = src;
      images[idx] = im;
      const onLoaded = () => {
        loaded++;
        if (loaded === 4) {
          prep();
          start();
        }
      };
      if (im.complete && im.naturalWidth) {
        onLoaded();
      } else {
        im.onload = onLoaded;
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
      cv.removeEventListener('pointerenter', onPointerEnter);
      cv.removeEventListener('pointermove', onPointerMove);
      cv.removeEventListener('pointerdown', onPointerDown);
      cv.removeEventListener('pointerup', release);
      cv.removeEventListener('pointercancel', release);
      cv.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <div className="page" id="home">
      {/* Top Header */}
      <header className="cartoon-header">
        <div className="brand">
          <b>Siri DS</b>
          <span className="brand-dot">•</span>
          <span>UI/UX Design Intern</span>
        </div>
        <nav className="cartoon-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Selected Works</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#atelier" className="nav-link">Atelier</a>
          {onReplayDoor && (
            <button
              type="button"
              onClick={onReplayDoor}
              className="door-nav-pill-btn"
              title="Open Anywhere Door"
            >
              <DoorClosed size={14} />
              <span>Anywhere Door</span>
            </button>
          )}
          <a
            href="/Siri_DS_Resume.pdf"
            download="Siri_DS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-nav-btn"
            title="Download Siri DS Resume (PDF)"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>
          <a href="#contact" className="cta">
            Contact <span>↗</span>
          </a>
        </nav>
      </header>

      {/* Main 3D Cartoon Hero Stage */}
      <main className="stage">
        {/* Soft Volumetric Stage Lighting */}
        <div className="glow"></div>
        <div className="floor"></div>

        {/* Left Headline */}
        <div className="intro">
          <h1>
            I design products people enjoy using.
          </h1>
          <p>Computer Science &amp; Engineering student at BNMIT seeking a UI/UX Design Intern role.</p>
        </div>

        {/* Central 3D Cartoon Character Anchor (85vh Center Position) */}
        <div
          className={`fig ${mugBouncing ? 'is-bouncing' : ''}`}
          ref={figRef}
          style={{ transform: `rotate(${headTilt}deg)` }}
        >
          <div id="scene">
            <canvas id="cv" ref={cvRef} aria-label="Siri standing on a BTS mug in 3D"></canvas>

            {/* Interactive Mug Click Hotspot */}
            <button
              type="button"
              onClick={handleMugClick}
              className="mug-hotspot"
              title="Click the BTS Mug for Coffee & Vibe!"
              aria-label="Interact with BTS Mug"
            >
              <div className="mug-hint-bubble">
                <Coffee size={12} />
                <span>BTS &amp; Coffee</span>
              </div>
            </button>

            {/* Floating Hearts & Coffee Steam Particles */}
            {particles.map((p) => (
              <span
                key={p.id}
                className="floating-mug-particle"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                {p.text}
              </span>
            ))}
          </div>

          {/* Pinned Editorial Notes */}
          <div className="note r" style={{ top: '22%' }}>
            <i></i>
            <u></u>Hi, I’m Siri
          </div>
          <div className="note l" style={{ top: '44%' }}>
            <i></i>
            <u></u>Details matter
          </div>
          <div className="note r" style={{ top: '76%' }}>
            <i></i>
            <u></u>Fueled by BTS &amp; coffee
          </div>
        </div>

        {/* Right Stats Block - 100% Verified from Resume */}
        <div className="stats">
          <div className="stat-item">
            <b>8.7</b>
            <span>CGPA · BNMIT CSE</span>
          </div>
          <div className="stat-item">
            <b>9</b>
            <span>Google Certifications</span>
          </div>
          <div className="stat-item">
            <b>2</b>
            <span>Flagship Case Studies</span>
          </div>
        </div>
      </main>
    </div>
  );
};
