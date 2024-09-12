import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const LIVE_URL = 'https://spectrasonic117.github.io';
const BASE = './dist';
export default defineConfig({
	integrations: [tailwind()],
	site: LIVE_URL,
	base: BASE
});
