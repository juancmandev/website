import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import sitemap from '@astrojs/sitemap';

import playformInline from '@playform/inline';

// https://astro.build/config
export default defineConfig({
  site: 'https://juancman.dev/',
  integrations: [
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: 'catppuccin-mocha',
          },
        ],
      ],
    }),
    playformInline(),
  ],
});
