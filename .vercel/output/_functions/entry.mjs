import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_pckJNSoc.mjs';
import { manifest } from './manifest_Dt45BBOh.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/booking.astro.mjs');
const _page4 = () => import('./pages/music.astro.mjs');
const _page5 = () => import('./pages/store.astro.mjs');
const _page6 = () => import('./pages/tour.astro.mjs');
const _page7 = () => import('./pages/videos.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/contact.js", _page2],
    ["src/pages/booking.astro", _page3],
    ["src/pages/music.astro", _page4],
    ["src/pages/store.astro", _page5],
    ["src/pages/tour.astro", _page6],
    ["src/pages/videos.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2b6c8d51-766e-4218-b495-0d67ea7c1410",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
