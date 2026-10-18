import { defineConfig } from 'astro/config';
// SITE_URL and SITE_BASE are set by the publish workflow (GitHub Pages project sites live under /<repo>).
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
