!function(){"use strict";const t=1617629044516,e=`cache${t}`,s=["/client/client.56c24277.js","/client/inject_styles.5607aec6.js","/client/index.4d79f8a2.js","/client/test1.ae8345b9.js","/client/utils.932e656f.js","/client/test2.d65dacf5.js","/client/test3.e39f3de8.js","/client/test4.dd1d4804.js","/client/Widget1.f03279fc.js","/client/Widget2.a4b3b0f8.js","/client/test5.6a84b709.js","/client/test6.db4d2263.js","/client/test7.b36712c3.js","/client/test8.607803a9.js"].concat(["/service-worker-index.html","/global.css","/lf.css","/manifest.json","/setup.webp"]),c=new Set(s);self.addEventListener("install",(t=>{t.waitUntil(caches.open(e).then((t=>t.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const s of t)s!==e&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url),n=s.protocol.startsWith("http"),a=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&c.has(s.pathname),l="only-if-cached"===e.request.cache&&!i;!n||a||l||e.respondWith((async()=>i&&await caches.match(e.request)||async function(e){const s=await caches.open(`offline${t}`);try{const t=await fetch(e);return s.put(e,t.clone()),t}catch(t){const c=await s.match(e);if(c)return c;throw t}}(e.request))())}))}();
