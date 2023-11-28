import React from 'react';
import { RouteObject } from 'react-router-dom';

interface Route {
  path: string;
  authRequired: boolean;
  navBarRequired: boolean;
  element: Promise<{ default: React.ComponentType<RouteObject> }>;
  pageName?: string;
}

export type RouteNames =
  | 'start'
  | 'guide'
  | 'join'
  | 'joinKakao'
  | 'routines'
  | 'search'
  | 'user'
  | 'myPage'
  | 'myLog'
  | 'myOrderLog'
  | 'myCoupon'
  | 'store'
  | 'createRoom'
  | 'room'
  | 'roomDetail'
  | 'roomLog'
  | 'roomSetting'
  | 'mybird'
  | 'notFound'
  | 'event'
  | 'rank'
  | 'purchaseSuccess'
  | 'purchaseFail';

type Routes = Record<RouteNames, Route>;

const routes: Routes = {
  start: {
    path: '',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/StartPage')
  },
  guide: {
    path: 'guide',
    authRequired: false,
    navBarRequired: false,
    element: import('@/pages/GuidePage'),
    pageName: '환영해요'
  },
  join: {
    path: 'join',
    authRequired: false,
    navBarRequired: false,
    element: import('@/pages/JoinPage'),
    pageName: '시작하기'
  },
  joinKakao: {
    path: 'login/kakao/oauth',
    authRequired: false,
    navBarRequired: false,
    element: import('@/pages/JoinKakaoPage'),
    pageName: '시작하기'
  },
  routines: {
    path: 'routines',
    authRequired: true,
    navBarRequired: true,
    element: import('@/pages/RoutinesPage'),
    pageName: '나의 루틴'
  },
  search: {
    path: 'search',
    authRequired: true,
    navBarRequired: true,
    element: import('@/pages/SearchPage'),
    pageName: '루틴방 조회'
  },
  myPage: {
    path: 'user',
    authRequired: true,
    navBarRequired: true,
    element: import('@/pages/UserPage'),
    pageName: '내 정보'
  },
  user: {
    path: 'user/:userId',
    authRequired: true,
    navBarRequired: true,
    element: import('@/pages/UserPage'),
    pageName: '유저 정보'
  },
  myLog: {
    path: 'user/participate-log',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/ParticipateLogPage'),
    pageName: '방 참여기록'
  },
  myOrderLog: {
    path: 'user/order-log',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/OrderLogPage'),
    pageName: '구매 내역'
  },
  myCoupon: {
    path: 'user/coupon',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/CouponPage'),
    pageName: '쿠폰함'
  },
  store: {
    path: 'store',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/StorePage'),
    pageName: '상점'
  },
  rank: {
    path: 'rank',
    authRequired: false,
    navBarRequired: false,
    element: import('@/pages/RankPage'),
    pageName: '랭킹'
  },
  createRoom: {
    path: 'room/new',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/RoomNewPage'),
    pageName: '방 생성'
  },
  room: {
    path: 'room',
    authRequired: true,
    navBarRequired: true,
    element: import('@/pages/Room')
  },
  roomDetail: {
    path: 'room/:roomId',
    authRequired: true,
    navBarRequired: true,
    element: import('@/pages/RoomDetailPage'),
    pageName: '루틴방'
  },
  roomLog: {
    path: 'room/:roomId/log/:logId',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/RoomLogPage'),
    pageName: '인증 기록'
  },
  roomSetting: {
    path: 'room/:roomId/setting',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/RoomSettingPage'),
    pageName: '방 설정'
  },
  mybird: {
    path: 'mybird',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/MyBirdPage'),
    pageName: '새 커스텀'
  },
  event: {
    path: 'event',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/EventPage'),
    pageName: '이벤트/쿠폰'
  },
  purchaseSuccess: {
    path: 'purchase-success',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/PurchaseSuccesPage'),
    pageName: '결제'
  },
  purchaseFail: {
    path: 'purchase-fail',
    authRequired: true,
    navBarRequired: false,
    element: import('@/pages/PurchaseFailPage'),
    pageName: '결제'
  },
  notFound: {
    path: '*',
    authRequired: false,
    navBarRequired: false,
    element: import('@/pages/NotFoundPage')
  }
} as const;

export default routes;
