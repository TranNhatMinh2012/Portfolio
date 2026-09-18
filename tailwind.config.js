/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#FAFAF9',      // warm off-white
          dark: '#0A0A0B',       // deep clean charcoal/black
          subtleLight: '#F4F4F5',
          subtleDark: '#141416'
        },
        border: {
          light: '#E4E4E7',
          dark: '#27272A'
        },
        ink: {
          primaryLight: '#18181B',
          primaryDark: '#FAFAFA',
          mutedLight: '#52525B',
          mutedDark: '#A1A1AA',
          faintLight: '#71717A',
          faintDark: '#71717A'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      }
    },
  },
  plugins: [],
}
