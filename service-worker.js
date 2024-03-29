self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('v1').then(cache => {
			cache.addAll([
                                '/',
				'/index.html',
				'/style.css',
				'/script.js',
                                '/favicon.svg',
				'/icon-32x32.png',
				'/icon-64x64.png',
				'/icon-128x128.png',
				'/icon-192x192.png',
				'/icon-256x256.png',
				'/icon-512x512.png'
			]);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		})
	);
});
