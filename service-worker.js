/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
<<<<<<< HEAD:service-worker.js
  "/precache-manifest.b017ce90e3403414fe04552c71da33bf.js"
=======
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
>>>>>>> deploy:build/service-worker.js
);

importScripts("/precache-manifest.5d9b966e253ccac430523b58099d8766.js");

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html"),
  {
    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/]
  }
);
