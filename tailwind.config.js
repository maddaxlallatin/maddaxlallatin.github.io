/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#E6EBF0',
        ink: '#0B1220',
        muted: '#5A6577',
        signal: '#0D9F8F',
        graphite: '#121820',
        panel: '#D5DCE4',
        'panel-dark': '#1A222D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};
