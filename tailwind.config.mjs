/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Muted pastel color palette for modern minimalist design
        sage: {
          50: '#f7f9f7',
          100: '#e8ede8',
          200: '#d1ddd1',
          300: '#b5c9b5',
          400: '#8fa98f',
          500: '#6b8a6b',
          600: '#557055',
          700: '#3a4a44',
          800: '#2a3632',
          900: '#1a2220',
        },
        lavender: {
          50: '#f8f7fb',
          100: '#efecf7',
          200: '#d9d3eb',
          300: '#c0b6dd',
          400: '#a095c9',
          500: '#8475b5',
          600: '#6b5f99',
          700: '#554f68',
          800: '#332f40',
          900: '#221f2b',
        },
        blush: {
          50: '#fdf8f8',
          100: '#f9eeee',
          200: '#f0d9d9',
          300: '#e5bfbf',
          400: '#d69f9f',
          500: '#c68080',
          600: '#a66666',
          700: '#7d4d4d',
          800: '#4d3030',
          900: '#2b1a1a',
        },
        powder: {
          50: '#f7f9fb',
          100: '#ecf2f7',
          200: '#d6e4f0',
          300: '#b8d3e6',
          400: '#93bdd9',
          500: '#70a8cc',
          600: '#5a8ab3',
          700: '#446888',
          800: '#2d4455',
          900: '#1a2733',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#4a5568", // Soft charcoal
            "--tw-prose-headings": "#2d3748", // Darker gray
            "--tw-prose-links": "#8475b5", // Lavender
            "--tw-prose-bold": "#2d3748", // Darker gray
            "--tw-prose-code": "#6b8a6b", // Sage
            "--tw-prose-quotes": "#718096", // Muted gray

            // Dark mode
            '[data-theme="dark"] &': {
              "--tw-prose-body": "#e2e8f0", // Crisp light slate
              "--tw-prose-headings": "#f8fafc", // Almost white for excellent contrast
              "--tw-prose-links": "#c4b5fd", // Vibrant lavender
              "--tw-prose-bold": "#f8fafc", // Almost white for emphasis
              "--tw-prose-code": "#86efac", // Bright sage green
              "--tw-prose-quotes": "#94a3b8", // Muted slate gray
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
