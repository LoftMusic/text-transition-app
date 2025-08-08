const CACHE_NAME = 'love-letter-v5';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  '/images/p1.jpg',
  '/images/p2.jpg',
  '/images/p3.jpg',
  '/images/p4.jpg',
  '/images/p5.jpg',
  '/images/p6.jpg',
  '/images/p7.jpg',
  '/images/p8.jpg',
  '/images/p9.jpg',
  '/images/p10.jpg',
  '/images/p11.jpg',
  '/images/p12.jpg',
  '/images/p13.jpg',
  '/images/p14.jpg',
  '/images/p15.jpg',
  '/images/p16.jpg',
  '/images/p17.jpg',
  '/images/p18.jpg',
  '/images/p19.jpg',
  '/images/p20.jpg',
  '/images/p21.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});