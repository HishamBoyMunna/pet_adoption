/*
 * Paw Haven service worker.
 *
 * Next.js ships no service worker and no service-worker bundling — this file is
 * a plain script registered from a client component via `import.meta.url`, so
 * Turbopack emits it as a hashed asset. See the Progressive Web Apps guide in
 * node_modules/next/dist/docs/01-app/02-guides/progressive-web-apps.md
 *
 * Strategy:
 *   navigations        network-first, fall back to the cached page, then "/"
 *   immutable assets   cache-first (/_next/static, images, icons)
 *   everything else    stale-while-revalidate
 *
 * Bump CACHE_VERSION to invalidate every cached response on next activate.
 */

const CACHE_VERSION = "v1";
const SHELL_CACHE = `paw-haven-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `paw-haven-runtime-${CACHE_VERSION}`;
const CURRENT_CACHES = [SHELL_CACHE, RUNTIME_CACHE];

// "/" is precached so the app opens to something useful on a cold offline load.
const PRECACHE_URLS = ["/", "/manifest.webmanifest", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("paw-haven-") && !CURRENT_CACHES.includes(key))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/pets/") ||
    url.pathname.startsWith("/icon") ||
    url.pathname.startsWith("/apple-touch-icon") ||
    url.pathname.startsWith("/favicon")
  );
}

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request)) ?? (await caches.match("/"));
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const hit = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => hit);
  return hit ?? network;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Never intercept non-GET, cross-origin, or the Next.js dev live-reload socket.
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/_next/webpack-hmr")) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});