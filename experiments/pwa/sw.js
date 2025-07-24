self.addEventListener("install", event => {
		console.log('Service Worker installing...');
    event.waitUntil(
        caches.open("butterchurn-cache").then(cache => {
            return cache.addAll([
                "./pwa.html",
                "./manifest.json",
                "./libs/base.min.js",
                "./libs/butterchurn.js",
                "./libs/extra.min.js",
                "./libs/jquery-3.1.1.min.js",
                "./libs/lodash.js",
                "./libs/normalize.css",
                "./favicon.ico",
                "./logo192.png",
                "./logo512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
		console.log('Fetching:', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'REFRESH_CACHE') {
		console.log('Service Worker refreshing cache...');
    caches.open('butterchurn-cache').then(cache => {
      return cache.addAll([
                "./pwa.html",
                "./manifest.json",
                "./libs/base.min.js",
                "./libs/butterchurn.js",
                "./libs/extra.min.js",
                "./libs/jquery-3.1.1.min.js",
                "./libs/lodash.js",
                "./libs/normalize.css",
                "./favicon.ico",
                "./logo192.png",
                "./logo512.png"
      ]);
    });
  }
});
