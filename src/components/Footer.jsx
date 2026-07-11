
function Footer() {
  return (
    <footer className="py-8">
      <div className="site-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          © {new Date().getFullYear()} Maddax Lallatin
        </p>
        <div className="flex gap-4 font-mono text-[11px] uppercase tracking-[0.14em]">
          <a
            href="https://github.com/maddaxlallatin"
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-signal"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/maddaxlallatin"
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
