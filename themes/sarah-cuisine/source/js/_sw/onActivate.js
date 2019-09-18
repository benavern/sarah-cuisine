export default function(cacheName) {
  return function(e) {
    console.log('[SW] onActivate', cacheName)

    e.waitUntil(
      // remove old cache files
      caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(thisCacheName => {
          if (thisCacheName !== cacheName) {
            console.log(`[SW] Removing files from ${thisCacheName}`)
            return caches.delete(thisCacheName)
          }
        })
      ))
    )
  }
}
