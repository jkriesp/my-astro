# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (hot reload enabled)
npm run dev

# Type-check with Astro and build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI directly
npm run astro
```

## Architecture Overview

This is an Astro-based static blog with MDX support, Tailwind CSS styling, and a custom theming system.

### Content Management

**Blog posts** are stored in `src/content/blog/` as `.mdx` files and managed through Astro's Content Collections API:

- Schema defined in `src/content/config.ts` using Zod validation
- Required frontmatter: `title`, `description`, `pubDate`
- Optional frontmatter: `updatedDate`, `heroImage`, `tags` (defaults to empty array)
- Posts are rendered via the dynamic route `src/pages/blog/[...slug].astro`

**Static paths generation**: Astro uses `getStaticPaths()` to generate routes at build time from the content collection.

### Theming System

The site implements a dual-mode theme system (light/dark) using:

1. **CSS custom properties** (`--accent`, `--background`, `--text`, etc.) defined in `src/styles/global.css`
2. **Data attribute switching**: `[data-theme="dark"]` and `[data-theme="light"]`
3. **Tailwind dark mode** configured as `darkMode: ["class", '[data-theme="dark"]']`
4. **localStorage persistence**: Theme preference stored in browser

Theme toggle logic in `ThemeToggle.astro` uses an inline script to manage theme state.

### Image Handling

**Hero images** use a mapping system in `BlogPost.astro`:

- Static placeholder images imported from `src/images/`
- Hero image paths in frontmatter (e.g., `/blog-placeholder-1.jpg`) are mapped to imported image objects
- Images processed using Astro's `<Image>` component with Sharp optimization

This pattern exists because Astro requires static imports for optimized images—dynamic paths don't work with the build-time optimizer.

### Component Architecture

**Layout hierarchy**:
- `BlogPost.astro` → Main blog post layout with hero image, metadata, content slot, and related posts
- Uses shared components: `Header`, `Footer`, `BaseHead`, `FormattedDate`, `TagList`

**Key components**:
- `RelatedPosts.astro`: Finds related posts by tag matching, falls back to recent posts if needed
- `BlogPostPreviewCard.astro`: Reusable card for displaying post previews
- `ThemeToggle.astro`: Theme switcher with animated icon transitions
- `LatestBlogPosts.astro`: Fetches and displays recent posts (likely used on homepage)

### Styling Approach

- **Tailwind** for utility classes and responsive design
- **CSS custom properties** for theme-aware colors
- **Scoped component styles** in `.astro` files using `<style>` tags
- **Global styles** in `src/styles/global.css` with custom animations and typography
- **Atkinson font** loaded via `@font-face` from `/public/fonts/`

### Configuration Files

- `astro.config.mjs`: Enables MDX, sitemap, and Tailwind integrations; sets site URL for Cloudflare Pages
- `tailwind.config.mjs`: Configures dark mode, typography plugin, and prose color variables
- `src/consts.ts`: Global constants like `SITE_TITLE` and `SITE_DESCRIPTION`

### RSS Feed

RSS feed generation handled by `src/pages/rss.xml.js` using `@astrojs/rss` integration.

## Working with Blog Posts

When creating new blog posts:
1. Add `.mdx` file to `src/content/blog/`
2. Include required frontmatter fields
3. Use tags array for related post linking
4. Hero images must reference one of the predefined placeholder paths or extend the `heroImageMap` in `BlogPost.astro`

## Deployment

Site deploys to Cloudflare Pages at `https://my-astro-4js.pages.dev`. The build command runs type-checking before building.
