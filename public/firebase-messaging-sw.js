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
    icon: '/pwa/pwa-192x192.png',
    ...data.notification
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function (e) {
  const title = e.notification?.title;
  const roomId = Number(title);

  let url = '/';

  // 타이틀로 방 번호를 받으면 방 상세 페이지로 이동
  if (!isNaN(roomId)) {
    url = `/room/${roomId}`;
  }

  e.notification.close();

  // eslint-disable-next-line no-undef
  e.waitUntil(clients.openWindow(url));
});
