import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const firebase = initializeApp(firebaseConfig);
const messaging = getMessaging(firebase);

/**
 * Firebase 서버에 FCM 토큰 발급을 요청합니다.
 * @returns string FCM 토큰
 */
const getFCMToken = async () => {
  return await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_PUBLIC_KEY
  });
};

export { firebase, messaging, getFCMToken };
