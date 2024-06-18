import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_48bb8c9b.mjs';

const _page0  = () => import('./chunks/generic_a0bcd770.mjs');
const _page1  = () => import('./chunks/index_b9c8ae6b.mjs');
const _page2  = () => import('./chunks/services_9d9cc2ea.mjs');
const _page3  = () => import('./chunks/contact_9aa9bd57.mjs');
const _page4  = () => import('./chunks/about_208f7f07.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/services.astro", _page2],["src/pages/contact.astro", _page3],["src/pages/about.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
