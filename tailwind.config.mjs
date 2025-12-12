// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  // 1. Content: Tell Tailwind where your classes are being used
  content: [
	'./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
	// 2. Extend: Add custom settings without overwriting Tailwind defaults
	extend: {
	  colors: {
		// Custom Color Palette for Roman Street
		charcoal: '#1E212B', // Deep Navy/Charcoal (Primary Background)
		gold: '#C3B47F',     // Muted Gold (Accent and CTAs)
		cream: '#F4F2EE',    // Off-White (Primary Text)
	  },
	  fontFamily: {
		// Custom Fonts, falling back to system defaults
		// Used for the Logo and Headings
		serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
		// Used for Body Text and Navigation (Sans-Serif is the Tailwind default)
		sans: ['Inter', ...defaultTheme.fontFamily.sans],
	  },
	},
  },
  // 3. Plugins: Include required third-party utilities
  plugins: [
	// This is required for the responsive video embeds
	require('@tailwindcss/aspect-ratio'),
  ],
};