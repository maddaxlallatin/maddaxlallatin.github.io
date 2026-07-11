import { useEffect, useState } from 'react';
import { Forminit } from 'forminit';
import useInView from '../hooks/useInView';

const forminit = new Forminit();
const FORM_ID = 'nnkybgz3syn';
const RECAPTCHA_SITE_KEY = '6LdLnk0tAAAAAJNW7tgSLdnHohbVjASeOX9zfIJf';

const fieldClass =
  'w-full border border-ink/20 bg-transparent px-3 py-2.5 font-display text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-signal dark:border-paper/20 dark:text-paper';

function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [copyRef, copyVisible] = useInView();
  const [formRef, formVisible] = useInView();

  useEffect(() => {
    const existing = document.querySelector('script[data-recaptcha="v3"]');
    if (existing) {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => setRecaptchaReady(true));
      }
      return undefined;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.dataset.recaptcha = 'v3';
    script.onload = () => {
      window.grecaptcha.ready(() => setRecaptchaReady(true));
    };
    document.head.appendChild(script);

    return undefined;
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!recaptchaReady || !window.grecaptcha) {
      setStatus('error');
      setError('reCAPTCHA not loaded. Please refresh the page.');
      return;
    }

    setStatus('loading');
    setError(null);

    const form = e.currentTarget;

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: 'contact_form',
      });

      const formData = new FormData(form);
      formData.append('g-recaptcha-response', token);

      const { error: submitError } = await forminit.submit(FORM_ID, formData);

      if (submitError) {
        setStatus('error');
        setError(submitError.message);
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError('An error occurred. Please try again.');
    }
  }

  return (
    <section id="contact" className="section-anchor border-b border-ink/10 py-20 dark:border-paper/10 md:py-28">
      <div className="site-shell">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <div ref={copyRef} className={`reveal ${copyVisible ? 'is-visible' : ''}`}>
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
            ref={formRef}
            onSubmit={handleSubmit}
            className={`reveal flex flex-col gap-3 ${formVisible ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': '120ms' }}
          >
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
              disabled={status === 'loading' || !recaptchaReady}
              className="mt-2 w-max border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:border-signal hover:bg-signal disabled:cursor-not-allowed disabled:opacity-60 dark:border-paper dark:bg-paper dark:text-ink dark:hover:border-signal dark:hover:bg-signal"
            >
              {status === 'loading' ? 'Sending...' : 'Work with me'}
            </button>

            <p className="mt-1 max-w-md font-mono text-[10px] leading-relaxed text-muted">
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-ink/20 underline-offset-2 transition-colors hover:text-signal dark:decoration-paper/20"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-ink/20 underline-offset-2 transition-colors hover:text-signal dark:decoration-paper/20"
              >
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
