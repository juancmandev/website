import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import sitemap from '@astrojs/sitemap';
import playformInline from '@playform/inline';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://juancman.dev/',

  integrations: [
    sitemap(),
    react(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'tokyo-night' },
      rehypePlugins: [rehypeSlug],
    }),
    playformInline(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
