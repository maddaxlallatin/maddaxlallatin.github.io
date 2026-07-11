import portfolio from './data/portfolio';
import ProjectPanel from './ProjectPanel';

function Work() {
  const featured = portfolio.filter((project) => project.featured);
  const archive = portfolio.filter((project) => !project.featured);

  return (
    <section id="work" className="section-anchor border-b border-ink/10 py-20 dark:border-paper/10 md:py-28">
      <div className="site-shell">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label">Schema · 01 / Work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Selected systems
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted md:text-right">
            Featured builds across APIs, embedded systems, full-stack apps, and simulation — then a compact archive.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {featured.map((project, index) => (
            <ProjectPanel key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <p className="mono-label mb-4">Archive</p>
          <ul className="divide-y divide-ink/10 border-y border-ink/10 dark:divide-paper/10 dark:border-paper/10">
            {archive.map((project) => (
              <li key={project.id}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 py-4 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-mono text-[11px] text-muted">{project.year}</span>
                    <span className="font-display text-lg font-medium text-ink transition-colors group-hover:text-signal dark:text-paper">
                      {project.title}
                    </span>
                    <span className="truncate text-sm text-muted">{project.summary}</span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted group-hover:text-signal">
                    Open →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Work;
