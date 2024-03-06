if (new URL(location.href).searchParams.get('msw') === 'true') {
  self.importScripts('/mockServiceWorker.js');
}

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
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

  e.waitUntil(
    self.clients
      .matchAll({ includeUncontrolled: true })
      .then((windowClients) => {
        if (windowClients.length > 0) {
          const client = windowClients[0];

          client.focus();
          client.postMessage({
            type: 'notification-click',
            url
          });
        } else {
          self.clients.openWindow(url);
        }
      })
  );
});
