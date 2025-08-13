const CACHE_NAME = 'unity-webgl-v1';
const urlsToCache = [
  './',
  './index.html',
  './Build/unreality3d-playground.loader.js',
  './Build/unreality3d-playground.framework.js',
  './Build/unreality3d-playground.data',
  './Build/unreality3d-playground.wasm'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});