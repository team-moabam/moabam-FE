import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getMessaging, getToken, type Messaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let firebase: FirebaseApp;
let messaging: Messaging;

/**
 * Firebase 앱을 초기화합니다.
 * (아이폰 외부 애플리케이션의 브라우저를 통해서 접속할 때
 * 모듈에서 바로 초기화하면 에러가 발생해서 하얀 화면이 뜨는 문제가 있었습니다.
 * 그래서 모듈에서 바로 초기화하지 않고, 함수를 통해 초기화하도록 했습니다.)
 */
const initializeFirebase = () => {
  try {
    firebase = initializeApp(firebaseConfig);
    messaging = getMessaging(firebase);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Firebase 서버에 FCM 토큰 발급을 요청합니다.
 * @returns string FCM 토큰
 */
const getFCMToken = async () => {
  return await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_PUBLIC_KEY
  });
};

export { initializeFirebase, getFCMToken };
