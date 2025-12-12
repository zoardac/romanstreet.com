// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- CRITICAL IMPORT
import vercel from '@astrojs/vercel';
export default defineConfig({
  // Output setting for Vercel
  output: 'server', 
  
  integrations: [
    tailwind({
      // Optional: If your tailwind.config.mjs is in the root, this is fine
    }),
  ],

  // Add the Vercel adapter if you haven't already
  adapter: vercel(),
});