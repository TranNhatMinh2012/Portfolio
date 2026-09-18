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
        paper: {
          light: '#F8F7F4',
          dark: '#0D0D0F',
          surfaceLight: '#FFFFFF',
          surfaceDark: '#141417',
          subtleLight: '#F0EFEA',
          subtleDark: '#19191D'
        },
        cobalt: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
          subtleLight: 'rgba(37, 99, 235, 0.08)',
          subtleDark: 'rgba(59, 130, 246, 0.12)'
        },
        graphite: {
          DEFAULT: '#111113',
          light: '#EDEDEC',
          mutedLight: '#66666E',
          mutedDark: '#94949E'
        },
        bg: {
          light: '#F8F7F4',
          dark: '#0D0D0F',
          subtleLight: '#F0EFEA',
          subtleDark: '#141416'
        },
        border: {
          light: '#E5E4DE',
          dark: '#232328'
        },
        ink: {
          primaryLight: '#111113',
          primaryDark: '#EDEDEC',
          mutedLight: '#66666E',
          mutedDark: '#94949E',
          faintLight: '#8A8A93',
          faintDark: '#6E6E77'
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
