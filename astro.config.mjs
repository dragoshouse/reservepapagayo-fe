import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
      dataset: PUBLIC_SANITY_DATASET || 'production',
      useCdn: false, // since we are doing SSG and want the freshest data at build time
      apiVersion: '2024-03-01',
    }),
  ],
});
