import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://crissxross.net',
	integrations: [
		mdx(),
		sitemap(),
	],
  redirects: {
    '/elit/underbelly': '/archive/underbelly',
    '/elit/fitting-the-pattern': '/archive/fitting-the-pattern',
    '/elit/tailspin': '/archive/tailspin',
    '/elit/rememori': '/archive/rememori',
    '/oot/outoftouch': '/archive/outoftouch',
    '/remixworx/cx-trail-remix': '/archive/cx-trail-remix',
    '/remixworx/upsidedown-chandelier': '/archive/upsidedown-chandelier',
    '/movingpix/intravenus': '/archive/intravenus',
    '/movingpix/wedrank': '/archive/wedrank',
    '/movingpix/heights': '/archive/heights',
    '/movingpix/socialdis-ease': '/archive/socialdis-ease',
    '/movingpix/beforewebegin': '/archive/beforewebegin',
    '/projects/stitched-up': '/works/stitched-up',
    '/projects/writing-new-body-worlds': '/works/voices',
    '/home/about': '/about',
    '/projects': '/works',
    '/elit': '/archive',
    '/remixworx': '/archive',
    '/movingpix': '/archive',
    '/oot': '/archive',
  }
});
