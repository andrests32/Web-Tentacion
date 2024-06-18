import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_592235c1.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.1ada9283.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-j7pv25f6]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-j7pv25f6]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.1ada9283.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-ucd2ps2b]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-ucd2ps2b]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.1ada9283.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-uw5kdbxl]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-uw5kdbxl]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.1ada9283.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-kh7btl4r]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-kh7btl4r]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/andrests/Escritorio/Web-moda/web-site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/andrests/Escritorio/Web-moda/web-site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/andrests/Escritorio/Web-moda/web-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/andrests/Escritorio/Web-moda/web-site/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/contact.astro":"chunks/pages/contact_593fd7bf.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_169a7495.mjs","/src/pages/index.astro":"chunks/pages/index_39253a91.mjs","/src/pages/services.astro":"chunks/pages/services_ff1d11a5.mjs","\u0000@astrojs-manifest":"manifest_767e098e.mjs","/home/andrests/Escritorio/Web-moda/web-site/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_3591afc5.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_cf43c207.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_654b3a61.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_79dd73fb.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_cdcad7bf.mjs","@astrojs/react/client.js":"_astro/client.4ae814ea.js","/home/andrests/Escritorio/Web-moda/web-site/src/components/navbar.tsx":"_astro/navbar.d6b967c5.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.1ada9283.css","/Banner-Bikini.jpg","/Banner-Disfraces.jpg","/Banner-Lenceria.jpg","/logonavtentacion.png","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.17 (1).jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.17 (3).jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.17.jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.18 (1).jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.18.jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (1).jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (2).jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (3).jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (4).jpeg","/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19.jpeg","/Bikinis/1.png","/Bikinis/10.png","/Bikinis/11.png","/Bikinis/12.png","/Bikinis/13.png","/Bikinis/14.png","/Bikinis/2.png","/Bikinis/3.png","/Bikinis/4.png","/Bikinis/48.png","/Bikinis/5.png","/Bikinis/52.png","/Bikinis/53.png","/Bikinis/55.png","/Bikinis/56.png","/Bikinis/59.png","/Bikinis/6.png","/Bikinis/60.png","/Bikinis/7.png","/Bikinis/8.png","/Bikinis/9.1.png","/Bikinis/9.png","/Disfraces/1.png","/Disfraces/10.png","/Disfraces/11.png","/Disfraces/12.png","/Disfraces/13.png","/Disfraces/2.png","/Disfraces/3.png","/Disfraces/4.png","/Disfraces/5.png","/Disfraces/6.png","/Disfraces/7.png","/Disfraces/8.png","/Disfraces/9.png","/Lenceria/lenceria1.png","/Lenceria/lenceria10.png","/Lenceria/lenceria11.png","/Lenceria/lenceria12.png","/Lenceria/lenceria13.png","/Lenceria/lenceria14.png","/Lenceria/lenceria15.png","/Lenceria/lenceria16.png","/Lenceria/lenceria17.png","/Lenceria/lenceria18.png","/Lenceria/lenceria19.png","/Lenceria/lenceria2.png","/Lenceria/lenceria20.png","/Lenceria/lenceria21.png","/Lenceria/lenceria22.png","/Lenceria/lenceria23.png","/Lenceria/lenceria24.png","/Lenceria/lenceria25.png","/Lenceria/lenceria26.png","/Lenceria/lenceria27.png","/Lenceria/lenceria28.png","/Lenceria/lenceria29.png","/Lenceria/lenceria3.png","/Lenceria/lenceria30.png","/Lenceria/lenceria31.png","/Lenceria/lenceria32.png","/Lenceria/lenceria33.png","/Lenceria/lenceria4.png","/Lenceria/lenceria5.png","/Lenceria/lenceria6.png","/Lenceria/lenceria7.png","/Lenceria/lenceria8.png","/Lenceria/lenceria9.png","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.20 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.20.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.21 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.21 (2).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.21 (3).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.21.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.24 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.24.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.25 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.25.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.26 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.26 (2).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.26 (3).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.26.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.27 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.27 (2).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.27 (3).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.27.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.28.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.29.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.30 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.30 (2).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.30.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.31.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.32 (1).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.32 (2).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.32 (3).jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.32.jpeg","/Lenceria2/WhatsApp Image 2024-06-03 at 21.17.33.jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 21.19.21 (1).jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 21.19.25.jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 22.10.20.jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 22.15.00.jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 22.15.01 (1).jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 22.15.01 (2).jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 22.15.01 (3).jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 22.15.01 (4).jpeg","/Lenceria3/WhatsApp Image 2024-06-11 at 22.15.01.jpeg","/_astro/client.4ae814ea.js","/_astro/index.03be2d59.js","/_astro/navbar.d6b967c5.js","/icons/faviconbeso.ico","/icons/icobikinis.png","/icons/icodisfrases.png","/icons/icolenceria.png","/icons/icoprice.png","/icons/icotrucksend.png","/icons/logopayment.webp","/promos/promo1.jpeg","/promos/promo10.jpeg","/promos/promo11.jpeg","/promos/promo12.jpeg","/promos/promo13.jpeg","/promos/promo14.jpeg","/promos/promo15.jpeg","/promos/promo16.jpeg","/promos/promo17.jpeg","/promos/promo18.jpeg","/promos/promo19.jpeg","/promos/promo2.jpeg","/promos/promo20.jpeg","/promos/promo21.jpeg","/promos/promo22.jpeg","/promos/promo23.jpeg","/promos/promo24.jpeg","/promos/promo25.jpeg","/promos/promo26.jpeg","/promos/promo27.jpeg","/promos/promo3.jpeg","/promos/promo4.jpeg","/promos/promo5.jpeg","/promos/promo6.jpeg","/promos/promo7.jpeg","/promos/promo8.jpeg","/promos/promo9.jpeg"]});

export { manifest };
