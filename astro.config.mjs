// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import remarkAsides from './src/plugins/remark-asides.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://aegis-constitution.com',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkAsides],
  },
});
