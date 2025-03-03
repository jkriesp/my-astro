# Jenske's Blog

A personal blog built with Astro, featuring articles about cloud engineering, software development, and tech explorations. The site is designed to be fast, accessible, and easy to maintain.

## Features

- ✨ Responsive blog layout with dark/light mode
- 📱 Mobile-friendly design
- 🏷️ Tag-based article organization
- 🔍 SEO optimized with OpenGraph support
- 📰 RSS feed support
- 📝 MDX support for rich content
- 🎨 Custom styling with CSS variables for theming

## Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- TypeScript - For type safety
- MDX - Enhanced Markdown support
- Custom Components:
  - Blog Post Preview Cards
  - Tag List
  - Theme Toggle
  - Latest Blog Posts

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```text
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   ├── content/      # Blog posts and collections
│   ├── layouts/      # Page layouts
│   ├── pages/        # Route components
│   └── styles/       # Global styles
├── astro.config.mjs  # Astro configuration
└── tsconfig.json     # TypeScript configuration
```

## Deployment

This site is deployed to Cloudflare Pages at [my-astro-4js.pages.dev](https://my-astro-4js.pages.dev).

## License

All rights reserved © Jenske
