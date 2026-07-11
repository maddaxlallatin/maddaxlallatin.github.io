
const fieldClass =
  'w-full border border-ink/20 bg-transparent px-3 py-2.5 font-display text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-signal dark:border-paper/20 dark:text-paper';

function Contact() {
  return (
    <section id="contact" className="section-anchor border-b border-ink/10 py-20 dark:border-paper/10 md:py-28">
      <div className="site-shell">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <div>
            <p className="mono-label">Schema · 04 / Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Open a channel
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Send a note.
            </p>
            <div className="mt-8 flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.14em]">
              <a
                href="mailto:me@maddaxlallatin.com"
                className="normal-case tracking-normal text-muted transition-colors hover:text-signal"
              >
                me@maddaxlallatin.com
              </a>
              <a
                href="https://github.com/maddaxlallatin"
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-signal"
              >
                github.com/maddaxlallatin
              </a>
              <a
                href="https://linkedin.com/in/maddaxlallatin"
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-signal"
              >
                linkedin.com/in/maddaxlallatin
              </a>
            </div>
          </div>

          <form
            action="https://getform.io/f/3e9810be-733e-407d-93a3-8f16412d26b4"
            method="POST"
            className="flex flex-col gap-3"
          >
            <label className="block">
              <span className="mono-label mb-1.5 block">Name</span>
              <input type="text" name="Name" required className={fieldClass} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mono-label mb-1.5 block">Email</span>
              <input type="email" name="Email" required className={fieldClass} placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="mono-label mb-1.5 block">Message</span>
              <textarea
                name="Message"
                required
                rows="6"
                className={fieldClass}
                placeholder="What should we build?"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-max border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:border-signal hover:bg-signal dark:border-paper dark:bg-paper dark:text-ink dark:hover:border-signal dark:hover:bg-signal"
            >
              Work with me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
