import timeline from './data/timeline';

function Path() {
  return (
    <section id="path" className="section-anchor border-b border-ink/10 py-20 dark:border-paper/10 md:py-28">
      <div className="site-shell">
        <div className="mb-12">
          <p className="mono-label">Schema · 03 / Path</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Timeline
          </h2>
        </div>

        <ol className="relative border-l border-ink/20 dark:border-paper/20">
          {timeline.map((item) => (
            <li key={`${item.year}-${item.title}`} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-paper dark:bg-graphite" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className={`font-mono text-xs uppercase tracking-[0.14em] ${
                    item.year === 'Now'
                      ? 'font-semibold text-signal'
                      : 'text-muted'
                  }`}
                >
                  {item.year}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {item.duration}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                {item.details}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Path;
