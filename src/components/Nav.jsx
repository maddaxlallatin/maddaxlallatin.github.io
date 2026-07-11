import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'systems', label: 'Systems' },
  { id: 'path', label: 'Path' },
  { id: 'contact', label: 'Contact' },
];

function Nav({ theme, onThemeSwitch }) {
  const [active, setActive] = useState('work');
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const linkRefs = useRef({});
  const trackRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const track = trackRef.current;
      const link = linkRefs.current[active];
      if (!track || !link) {
        setIndicator((current) => ({ ...current, ready: false }));
        return;
      }

      const trackBox = track.getBoundingClientRect();
      const linkBox = link.getBoundingClientRect();
      setIndicator({
        left: linkBox.left - trackBox.left,
        width: linkBox.width,
        ready: true,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [active]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? 'border-ink/15 bg-paper/90 backdrop-blur-md dark:border-paper/15 dark:bg-graphite/90'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="site-shell flex items-center justify-between gap-4 py-3">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-ink dark:text-paper">
          ML<span className="text-signal">/</span>SYS
        </a>

        <nav
          ref={trackRef}
          aria-label="Primary"
          className="nav-track flex max-w-[55%] items-center gap-1 overflow-x-auto font-mono text-[11px] uppercase tracking-[0.14em] sm:max-w-none sm:gap-4 sm:text-xs"
        >
          {LINKS.map((link) => (
            <a
              key={link.id}
              ref={(node) => {
                linkRefs.current[link.id] = node;
              }}
              href={`#${link.id}`}
              className={`relative z-10 whitespace-nowrap px-1.5 py-1 transition-colors ${
                active === link.id
                  ? 'text-signal'
                  : 'text-muted hover:text-ink dark:hover:text-paper'
              }`}
            >
              {link.label}
            </a>
          ))}
          <span
            className="nav-indicator"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.ready ? 1 : 0,
            }}
            aria-hidden="true"
          />
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/maddaxlallatin"
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-signal sm:inline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/maddaxlallatin"
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-signal md:inline"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={onThemeSwitch}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="border border-ink/20 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:border-signal hover:text-signal dark:border-paper/20 dark:text-paper"
          >
            {theme === 'dark' ? 'Day' : 'Night'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
