// MSW 서비스 워커를 등록하는 함수
export const setupMockServiceWorker = async (workerUrl: URL) => {
  const { worker } = await import('@/core/api/mocks/browser');

  return worker.start({
    serviceWorker: {
      url: workerUrl.href
    },
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
export const setupFCMServiceWorker = async (workerUrl: URL) => {
  return navigator.serviceWorker.register(workerUrl.href).then(() => {
    navigator.serviceWorker.onmessage = (e) => {
      const type = e.data?.type;
      const url = e.data?.url;

      if (type === 'notification-click') {
        location.href = url;
      }
    };
  });
};
