export default function(cacheName) {
  return function(e) {
    console.log('[SW] onFetch', cacheName, e.request.url)

    e.respondWith(
      caches.match(e.request)
        .then(response => {
          // found in cache, return cached data
          if (response) {
            console.log('[SW] Found in cache', e.request.url)
            return response
          }

          // not found in cache, try to download it
          const reqClone = e.request.clone()
          return fetch(reqClone)
            .then(res => {
              // nothing fetched, just return the response
              if (!res) {
                console.log(`[SW] No response from cache for ${e.request.url}`)
                return res
              }

              // data fetched, cache it and return the response
              const resClone = res.clone();
              caches.open(cacheName)
                .then(cache => {
                  console.log(`[SW] Caching new data for ${e.request.url}`)
                  cache.put(e.request, resClone)
                  return res
                })
            })
        })
        .catch(err => {
          console.log(`[SW] Error while fetching & caching the data for ${e.request.url}`)
        })
    )
  }
}
