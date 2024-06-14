import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_00999142.mjs';

const _page0  = () => import('./chunks/generic_3591afc5.mjs');
const _page1  = () => import('./chunks/index_aefdc825.mjs');
const _page2  = () => import('./chunks/services_80457165.mjs');
const _page3  = () => import('./chunks/contact_854ff9c8.mjs');
const _page4  = () => import('./chunks/about_4a70d757.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/services.astro", _page2],["src/pages/contact.astro", _page3],["src/pages/about.astro", _page4]]);
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
