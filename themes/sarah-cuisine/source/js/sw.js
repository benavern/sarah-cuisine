import onInstall from './_sw/onInstall'
import onActivate from './_sw/onActivate'
import onFetch from './_sw/onFetch'

const cacheName = 'sarah-cuisine-v1'
const cacheFiles = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
]

self.addEventListener('install', onInstall(cacheName, cacheFiles))
self.addEventListener('activate', onActivate(cacheName))
self.addEventListener('fetch', onFetch(cacheName))
