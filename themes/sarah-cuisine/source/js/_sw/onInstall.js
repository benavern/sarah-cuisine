export default function(cacheName, cacheFiles) {
  return function(e) {
    console.log('[SW] onInstall', cacheName)

    e.waitUntil(
      caches.open(cacheName)
        // add files to the cache
        .then(cache => {
          console.log('[SW] Caching files', cacheFiles)
          return cache.addAll(cacheFiles)
        })
    )
  }
}
