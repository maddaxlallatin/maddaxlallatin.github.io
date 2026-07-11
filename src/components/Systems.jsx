import systems from './data/systems';
import useInView from '../hooks/useInView';

function Systems() {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section id="systems" className="section-anchor border-b border-ink/10 py-20 dark:border-paper/10 md:py-28">
      <div className="site-shell">
        <div ref={headerRef} className={`reveal mb-12 ${headerVisible ? 'is-visible' : ''}`}>
          <p className="mono-label">Schema · 02 / Systems</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Stack modules
          </h2>
          <p className="mt-3 max-w-lg text-sm text-muted">
            Capabilities grouped like subsystems — languages, frameworks, accessibility & embedded, and tools.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2">
          {systems.map((module, index) => (
            <article
              key={module.id}
              className={`reveal border border-ink/15 p-5 transition-colors hover:border-signal dark:border-paper/15 ${
                gridVisible ? 'is-visible' : ''
              }`}
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <div className="flex items-baseline justify-between gap-3 border-b border-ink/10 pb-3 dark:border-paper/10">
                <h3 className="font-display text-xl font-semibold tracking-tight">{module.label}</h3>
                <span className="font-mono text-[11px] text-signal">{module.code}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {module.items.map((item) => (
                  <li
                    key={item}
                    className="border border-ink/10 px-2 py-1 font-mono text-[11px] text-muted dark:border-paper/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Systems;
