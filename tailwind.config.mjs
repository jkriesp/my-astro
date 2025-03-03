/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Using standard Tailwind colors for consistency
        // We're not redefining them as they're already available
        // Just documenting our color usage here:
        /*
        Light theme:
        - Primary bg: gray-50
        - Secondary bg: white
        - Headings: gray-800
        - Body text: gray-600
        - Links: blue-600
        - Primary accent: blue-500
        - Secondary accent: green-500

        Dark theme:
        - Primary bg: gray-900
        - Secondary bg: gray-800
        - Headings: gray-100
        - Body text: gray-300
        - Links: blue-400
        - Primary accent: blue-600
        - Secondary accent: green-600
        */
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(71 85 105)", // gray-600
            "--tw-prose-headings": "rgb(31 41 55)", // gray-800
            "--tw-prose-links": "rgb(37 99 235)", // blue-600
            "--tw-prose-bold": "rgb(31 41 55)", // gray-800
            "--tw-prose-code": "rgb(31 41 55)", // gray-800
            "--tw-prose-quotes": "rgb(71 85 105)", // gray-600

            // Dark mode
            '[data-theme="dark"] &': {
              "--tw-prose-body": "rgb(209 213 219)", // gray-300
              "--tw-prose-headings": "rgb(243 244 246)", // gray-100
              "--tw-prose-links": "rgb(96 165 250)", // blue-400
              "--tw-prose-bold": "rgb(243 244 246)", // gray-100
              "--tw-prose-code": "rgb(243 244 246)", // gray-100
              "--tw-prose-quotes": "rgb(209 213 219)", // gray-300
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
