import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  integrations: [sitemap()],
  image: {
    domains: ['media.stokeleads.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'media.stokeleads.com' },
      { protocol: 'https', hostname: '*.r2.dev' },
    ],
  },
});
