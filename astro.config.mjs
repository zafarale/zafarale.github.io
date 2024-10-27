// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';


import tailwind from '@astrojs/tailwind';

import astroExpressiveCode from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        astroExpressiveCode({
            themes: ['andromeeda','solarized-dark'],
            plugins: [
                pluginLineNumbers(),
                pluginCollapsibleSections()
            ]
        }),
        mdx(), 
        sitemap(), 
        tailwind()],
});