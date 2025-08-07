// Service Worker para ContaVsib
// Versión básica para eliminar advertencias de consola

const CACHE_NAME = 'contavsib-v1';
const urlsToCache = [
  '/',
  '/assets/redes/facebook.png',
  '/assets/redes/instagram.png',
  '/assets/redes/tiktok.png',
  '/assets/redes/whatsapp.png'
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepción de solicitudes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devolver el recurso cacheado o realizar la solicitud de red
        return response || fetch(event.request);
      })
  );
});