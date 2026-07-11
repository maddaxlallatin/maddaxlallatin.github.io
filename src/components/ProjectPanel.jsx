
function ProjectPanel({ project, index }) {
  const code = String(index + 1).padStart(2, '0');

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative block border border-ink/15 bg-panel/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal dark:border-paper/15 dark:bg-panel-dark/50"
    >
      <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-signal transition-transform duration-300 group-hover:scale-y-100" />

      <div className="grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-ink/10 md:aspect-auto md:min-h-[240px] md:border-b-0 md:border-r dark:border-paper/10">
          <img
            src={project.imgUrl}
            alt=""
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute left-3 top-3 border border-ink/20 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink backdrop-blur-sm dark:border-paper/20 dark:bg-graphite/90 dark:text-paper">
            {project.category}
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 md:p-6">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="mono-label">
                {code} · {project.year}
              </span>
              <span className="font-mono text-[11px] text-muted">{project.role}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-signal dark:text-paper md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
              {project.summary}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-ink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted dark:border-paper/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectPanel;
