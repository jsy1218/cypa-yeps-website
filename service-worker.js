"use strict";var precacheConfig=[["/cypa-yeps-website/index.html","f4893de4b9a75bebb73a26860a7fea5b"],["/cypa-yeps-website/static/css/main.71d1b745.css","56eccba14df829525209eeb754a21448"],["/cypa-yeps-website/static/js/main.c0b080a3.js","1e23cd9bc887dd53d5cea4bc44a72906"],["/cypa-yeps-website/static/media/Emily Shuka.a94fd353.png","a94fd353ee345c4ca53ffe0a9764ddc0"],["/cypa-yeps-website/static/media/Steve Stubbs 1.93d0ce9e.png","93d0ce9ee5e950be4c1e3831773e9009"],["/cypa-yeps-website/static/media/Steve Stubbs 2.1f6f6eb4.png","1f6f6eb49c53a0a7a876ce76473e7e7f"],["/cypa-yeps-website/static/media/Steve Stubbs 3.0ec7780e.png","0ec7780e44c2854ab4c3ce1d2e48b808"],["/cypa-yeps-website/static/media/discussion.37c86acf.png","37c86acf5a64428fece18ad97d960791"],["/cypa-yeps-website/static/media/logo.c1bf42e6.png","c1bf42e689cdad17a498ce5ccae2861a"],["/cypa-yeps-website/static/media/wave.31ff7cd8.png","31ff7cd8d8b414da8bbf70e4e8233946"],["/cypa-yeps-website/static/media/wave.c083a55f.svg","c083a55f56c239376ad7314477f59f2f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/cypa-yeps-website/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});