// MSW 서비스 워커를 등록하는 함수
export const setupMockServiceWorker = async () => {
  const { worker } = await import('@/core/api/mocks/browser');

  return worker.start({
    onUnhandledRequest(request, print) {
      const excludedUrls = [
        '/assets/',
        '/node_modules/',
        'chrome-extension://',
        'fonts.googleapis.com/css2',
        'cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1'
      ];

      if (excludedUrls.some((url) => request.url.includes(url))) {
        return;
      }

      print.warning();
    }
  });
};

// FCM 서비스 워커를 등록하는 함수
export const setupFCMServiceWorker = async () => {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js', {
        scope: '/'
      })
      .then(() => {
        navigator.serviceWorker.onmessage = (e) => {
          const url = e.data;
          location.href = url;
        };
      });
  });
};
