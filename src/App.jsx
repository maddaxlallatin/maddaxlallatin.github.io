import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Systems from './components/Systems';
import Path from './components/Path';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getPreferredTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-paper font-display text-ink dark:bg-graphite dark:text-paper">
      <Nav theme={theme} onThemeSwitch={handleThemeSwitch} />
      <main>
        <Hero />
        <Work />
        <Systems />
        <Path />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
