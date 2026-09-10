// PrepClone Enterprise Service Worker (100% Offline First)
const CACHE_NAME = 'prepclone-v2.4.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './images/icon-192.svg',
  './images/icon-512.svg',
  './vendor/pdfjs/pdf.min.js',
  './vendor/pdfjs/pdf.worker.min.js',
  './data/formulas.json',
  './data/pyq.json',
  './data/biology-11.json',
  './data/biology-12.json',
  './data/chemistry-11-part-1.json',
  './data/chemistry-11-part2.json',
  './data/chemistry-12-part-1.json',
  './data/chemistry-12-part-2.json',
  './data/physics-11-part-1.json',
  './data/physics-11-part-2.json',
  './data/physics-12-part-1.json',
  './data/physics-12-part-2.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // For data files and local PDF books, use cache-falling-back-to-network
  if (url.pathname.includes('/data/') || url.pathname.includes('/books/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) {
          // Fetch update in background
          fetch(event.request).then((res) => {
            if (res.ok) cache.put(event.request, res.clone());
          }).catch(() => {});
          return cached;
        }
        try {
          const res = await fetch(event.request);
          if (res.ok) cache.put(event.request, res.clone());
          return res;
        } catch (err) {
          return cached || new Response('[]', { headers: { 'Content-Type': 'application/json' } });
        }
      })
    );
    return;
  }

  // For static assets, try cache first, then network
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((res) => {
        if (res.ok && event.request.method === 'GET') {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        }
        return res;
      }).catch(() => {
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
