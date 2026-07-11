import { useEffect, useState } from 'react';
import asciiArtLight from '../assets/ascii-art-light.txt?raw';
import asciiArtDark from '../assets/ascii-art-dark.txt?raw';

function Hero() {
  const [scanning, setScanning] = useState(
    () => typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const frame = requestAnimationFrame(() => setScanning(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="top" className="grid-surface relative border-b border-ink/10 dark:border-paper/10">
      <div className="site-shell grid min-h-[calc(100vh-3.5rem)] items-center gap-10 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-8 md:py-20">
        <div className="fade-in">
          <p className="mono-label">Schema · 00 / Identity</p>

          <h1 className="fade-in-delay mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink dark:text-paper md:text-7xl lg:text-8xl">
            Maddax
            <br />
            Lallatin
          </h1>

          <p className="fade-in-delay-2 mt-6 max-w-xl font-display text-lg text-muted md:text-xl">
            Student software engineer at Space Dynamics Lab and CS major at Utah State — building accessible web systems, APIs, and hardware.
          </p>

          <div className="fade-in-delay-2 mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:border-signal hover:bg-signal dark:border-paper dark:bg-paper dark:text-ink dark:hover:border-signal dark:hover:bg-signal dark:hover:text-ink"
            >
              View work
            </a>
            <a
              href="#contact"
              className="border border-ink/25 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:border-signal hover:text-signal dark:border-paper/25 dark:text-paper"
            >
              Contact
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <span>Space Dynamics Lab</span>
            <span>USU · CS + UAS · GPA 3.82</span>
            <span>Logan, UT</span>
          </div>
        </div>

        <div className="fade-in-delay relative min-w-0 border border-ink/15 bg-paper/40 p-2 dark:border-paper/15 dark:bg-graphite/40 md:justify-self-end">
          <p className="mono-label mb-2 px-1">Fig · 01 / Scan</p>
          <div className={`ascii-frame ${scanning ? 'is-scanning' : ''}`}>
            <pre className="ascii-portrait dark:hidden" aria-hidden="true">
              {asciiArtLight}
            </pre>
            <pre className="ascii-portrait hidden dark:block" aria-hidden="true">
              {asciiArtDark}
            </pre>
          </div>
          <span className="sr-only">ASCII portrait of Maddax Lallatin</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
