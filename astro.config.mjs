// @ts-check
import { defineConfig } from 'astro/config';
import { fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://aiuyap.github.io',
	base: '/',
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'DM Sans',
				cssVariable: '--font-dm-sans',
				weights: ['400', '500', '600'],
				subsets: ['latin'],
				fallbacks: ['system-ui', 'sans-serif'],
				display: 'swap',
			},
			{
				provider: fontProviders.google(),
				name: 'Outfit',
				cssVariable: '--font-outfit',
				weights: ['600', '700'],
				subsets: ['latin'],
				fallbacks: ['system-ui', 'sans-serif'],
				display: 'swap',
			},
			{
				provider: fontProviders.google(),
				name: 'JetBrains Mono',
				cssVariable: '--font-mono',
				weights: ['400'],
				subsets: ['latin'],
				fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
				display: 'swap',
			},
		],
	},
});
