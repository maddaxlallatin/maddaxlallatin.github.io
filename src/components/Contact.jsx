import { useState } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit();
const FORM_ID = 'nnkybgz3syn';

const fieldClass =
  'w-full border border-ink/20 bg-transparent px-3 py-2.5 font-display text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-signal dark:border-paper/20 dark:text-paper';

function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { error: submitError } = await forminit.submit(FORM_ID, formData);

    if (submitError) {
      setStatus('error');
      setError(submitError.message);
      return;
    }

    setStatus('success');
    form.reset();
  }

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

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mono-label mb-1.5 block">First name</span>
                <input
                  type="text"
                  name="fi-sender-firstName"
                  required
                  className={fieldClass}
                  placeholder="First name"
                  autoComplete="given-name"
                />
              </label>
              <label className="block">
                <span className="mono-label mb-1.5 block">Last name</span>
                <input
                  type="text"
                  name="fi-sender-lastName"
                  required
                  className={fieldClass}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </label>
            </div>
            <label className="block">
              <span className="mono-label mb-1.5 block">Email</span>
              <input
                type="email"
                name="fi-sender-email"
                required
                className={fieldClass}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
            <label className="block">
              <span className="mono-label mb-1.5 block">Message</span>
              <textarea
                name="fi-text-message"
                required
                rows={6}
                className={fieldClass}
                placeholder="What should we build?"
              />
            </label>

            {status === 'error' && (
              <p className="font-mono text-xs text-red-700 dark:text-red-400" role="alert">
                {error}
              </p>
            )}
            {status === 'success' && (
              <p className="font-mono text-xs text-signal" role="status">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 w-max border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:border-signal hover:bg-signal disabled:cursor-not-allowed disabled:opacity-60 dark:border-paper dark:bg-paper dark:text-ink dark:hover:border-signal dark:hover:bg-signal"
            >
              {status === 'loading' ? 'Sending...' : 'Work with me'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
