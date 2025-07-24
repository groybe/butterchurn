self.addEventListener("install", event => {
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
                "./logo512.png",
                "./logo192.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
