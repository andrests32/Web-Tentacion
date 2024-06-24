import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_852d4028.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.49642986.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-j7pv25f6]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-j7pv25f6]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.49642986.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-ucd2ps2b]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-ucd2ps2b]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.49642986.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-uw5kdbxl]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-uw5kdbxl]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.49642986.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-kh7btl4r]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-kh7btl4r]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/andrests/Escritorio/Web-moda/web-site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/andrests/Escritorio/Web-moda/web-site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/andrests/Escritorio/Web-moda/web-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/andrests/Escritorio/Web-moda/web-site/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/contact.astro":"chunks/pages/contact_86efeeee.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_79751a2b.mjs","/src/pages/index.astro":"chunks/pages/index_ac423e39.mjs","/src/pages/services.astro":"chunks/pages/services_a96dbaf1.mjs","\u0000@astrojs-manifest":"manifest_1d27a54a.mjs","/home/andrests/Escritorio/Web-moda/web-site/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_c120ba3e.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_a0bcd770.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_ca0ac18e.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_64f7ba22.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_97b86fb5.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_f173da70.mjs","/home/andrests/Escritorio/Web-moda/web-site/src/components/navbar.tsx":"_astro/navbar.8f8358da.js","@astrojs/react/client.js":"_astro/client.c7955ce7.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/bannerbikini.3fffdf54.jpg","/_astro/bannerlenceria.d6d2eb26.jpg","/_astro/bannerdisfraces.08cbdd74.jpg","/_astro/about.49642986.css","/bannerbikini.jpg","/bannerdisfraces.jpg","/bannerlenceria.jpg","/logonavtentacion.png","/Bikinis/bikini1.png","/Bikinis/bikini10.png","/Bikinis/bikini11.png","/Bikinis/bikini12.png","/Bikinis/bikini13.png","/Bikinis/bikini14.png","/Bikinis/bikini15.png","/Bikinis/bikini16.png","/Bikinis/bikini17.png","/Bikinis/bikini2.png","/Bikinis/bikini3.png","/Bikinis/bikini4.png","/Bikinis/bikini5.png","/Bikinis/bikini6.png","/Bikinis/bikini7.png","/Bikinis/bikini8.png","/Bikinis/bikini9.png","/Lenceria/lenceria1.png","/Lenceria/lenceria10.png","/Lenceria/lenceria11.png","/Lenceria/lenceria12.png","/Lenceria/lenceria13.png","/Lenceria/lenceria14.png","/Lenceria/lenceria15.png","/Lenceria/lenceria16.png","/Lenceria/lenceria17.png","/Lenceria/lenceria18.png","/Lenceria/lenceria19.png","/Lenceria/lenceria2.png","/Lenceria/lenceria20.png","/Lenceria/lenceria21.png","/Lenceria/lenceria22.png","/Lenceria/lenceria23.png","/Lenceria/lenceria24.png","/Lenceria/lenceria25.png","/Lenceria/lenceria26.png","/Lenceria/lenceria27.png","/Lenceria/lenceria28.png","/Lenceria/lenceria29.png","/Lenceria/lenceria3.png","/Lenceria/lenceria30.png","/Lenceria/lenceria31.png","/Lenceria/lenceria32.png","/Lenceria/lenceria33.png","/Lenceria/lenceria4.png","/Lenceria/lenceria5.png","/Lenceria/lenceria6.png","/Lenceria/lenceria7.png","/Lenceria/lenceria8.png","/Lenceria/lenceria9.png","/Bikins2/bikinis1.jpeg","/Bikins2/bikinis2.jpeg","/Bikins2/bikinis3.jpeg","/Bikins2/bikinis4.jpeg","/Bikins2/bikinis5.jpeg","/Bikins2/bikinis6.jpeg","/Bikins2/bikinis7.jpeg","/Bikins2/bikinis8.jpeg","/Lenceria2/lenceriac1.jpeg","/Lenceria2/lenceriac10.jpeg","/Lenceria2/lenceriac11.jpeg","/Lenceria2/lenceriac12.jpeg","/Lenceria2/lenceriac13.jpeg","/Lenceria2/lenceriac2.jpeg","/Lenceria2/lenceriac3.jpeg","/Lenceria2/lenceriac4.jpeg","/Lenceria2/lenceriac5.jpeg","/Lenceria2/lenceriac6.jpeg","/Lenceria2/lenceriac7.jpeg","/Lenceria2/lenceriac8.jpeg","/Lenceria2/lenceriac9.jpeg","/Lenceria3/lenc1.jpeg","/Lenceria3/lenc2.jpeg","/Lenceria3/lenc3.jpeg","/Lenceria3/lenc4.jpeg","/Lenceria3/lenc5.jpeg","/Lenceria3/lenc6.jpeg","/Lenceria3/lenc7.jpeg","/Lenceria3/lenc8.jpeg","/Lenceria3/lenc9.jpeg","/_astro/client.c7955ce7.js","/_astro/index.20dd3996.js","/_astro/navbar.8f8358da.js","/icons/faviconbeso.ico","/icons/icobikinis.png","/icons/icodisfrases.png","/icons/icolenceria.png","/icons/icoprice.png","/icons/icotrucksend.png","/icons/logopayment.webp","/promos/promo1.jpeg","/promos/promo10.jpeg","/promos/promo11.jpeg","/promos/promo12.jpeg","/promos/promo13.jpeg","/promos/promo14.jpeg","/promos/promo15.jpeg","/promos/promo16.jpeg","/promos/promo17.jpeg","/promos/promo18.jpeg","/promos/promo19.jpeg","/promos/promo2.jpeg","/promos/promo20.jpeg","/promos/promo21.jpeg","/promos/promo22.jpeg","/promos/promo23.jpeg","/promos/promo24.jpeg","/promos/promo25.jpeg","/promos/promo26.jpeg","/promos/promo27.jpeg","/promos/promo3.jpeg","/promos/promo4.jpeg","/promos/promo5.jpeg","/promos/promo6.jpeg","/promos/promo7.jpeg","/promos/promo8.jpeg","/promos/promo9.jpeg"]});

export { manifest };
