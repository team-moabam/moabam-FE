import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', function (e) {
  console.log('[FCM] Service Worker Installed.');
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  console.log('[FCM] Service Worker Activated.');
});

self.addEventListener('push', function (e) {
  const data = e.data.json();

  if (!data) {
    return;
  }

  console.log('[FCM] Push Received.');

  const title = data.notification.title;

  const options = {
    icon: data.notification.image,
    ...data.notification
  };

  self.registration.showNotification(title, options);
});
