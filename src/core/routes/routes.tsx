import React from 'react';
import Room from '@/pages/Room';
import RoomDetailPage from '@/pages/RoomDetailPage';
import RoomLogPage from '@/pages/RoomLogPage';
import RoutinesPage from '@/pages/RoutinesPage';
import SearchPage from '@/pages/SearchPage';
import RoomNewPage from '@/pages/RoomNewPage';
import RoomSettingPage from '@/pages/RoomSettingPage';
import StartPage from '@/pages/StartPage';
import EventPage from '@/pages/EventPage';
import NotFoundPage from '@/pages/NotFoundPage';
import JoinPage from '@/pages/JoinPage';
import JoinKakaoPage from '@/pages/JoinKakaoPage';
import UserPage from '@/pages/UserPage';
import RankPage from '@/pages/RankPage';
import CouponPage from '@/pages/CouponPage';
import ParticipateLogPage from '@/pages/ParticipateLogPage';
import OrderLogPage from '@/pages/OrderLogPage';
import StorePage from '@/pages/StorePage';
import MyBirdPage from '@/pages/MyBirdPage';
import GuidePage from '@/pages/GuidePage';
import PurchaseSuccessPage from '@/pages/PurchaseSuccesPage';
import PurchaseFailPage from '@/pages/PurchaseFailPage';

interface Route {
  path: string;
  authRequired: boolean;
  navBarRequired: boolean;
  element: React.ReactNode;
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
    element: <StartPage />
  },
  guide: {
    path: 'guide',
    authRequired: false,
    navBarRequired: false,
    element: <GuidePage />,
    pageName: '환영해요'
  },
  join: {
    path: 'join',
    authRequired: false,
    navBarRequired: false,
    element: <JoinPage />,
    pageName: '시작하기'
  },
  joinKakao: {
    path: 'login/kakao/oauth',
    authRequired: false,
    navBarRequired: false,
    element: <JoinKakaoPage />,
    pageName: '시작하기'
  },
  routines: {
    path: 'routines',
    authRequired: true,
    navBarRequired: true,
    element: <RoutinesPage />,
    pageName: '나의 루틴'
  },
  search: {
    path: 'search',
    authRequired: true,
    navBarRequired: true,
    element: <SearchPage />,
    pageName: '루틴방 조회'
  },
  myPage: {
    path: 'user',
    authRequired: true,
    navBarRequired: true,
    element: <UserPage />,
    pageName: '내 정보'
  },
  user: {
    path: 'user/:userId',
    authRequired: true,
    navBarRequired: true,
    element: <UserPage />,
    pageName: '유저 정보'
  },
  myLog: {
    path: 'user/participate-log',
    authRequired: true,
    navBarRequired: false,
    element: <ParticipateLogPage />,
    pageName: '방 참여기록'
  },
  myOrderLog: {
    path: 'user/order-log',
    authRequired: true,
    navBarRequired: false,
    element: <OrderLogPage />,
    pageName: '구매 내역'
  },
  myCoupon: {
    path: 'user/coupon',
    authRequired: true,
    navBarRequired: false,
    element: <CouponPage />,
    pageName: '쿠폰함'
  },
  store: {
    path: 'store',
    authRequired: true,
    navBarRequired: false,
    element: <StorePage />,
    pageName: '상점'
  },
  rank: {
    path: 'rank',
    authRequired: false,
    navBarRequired: false,
    element: <RankPage />,
    pageName: '랭킹'
  },
  createRoom: {
    path: 'room/new',
    authRequired: true,
    navBarRequired: false,
    element: <RoomNewPage />,
    pageName: '방 생성'
  },
  room: {
    path: 'room',
    authRequired: true,
    navBarRequired: true,
    element: <Room />
  },
  roomDetail: {
    path: 'room/:roomId',
    authRequired: true,
    navBarRequired: true,
    element: <RoomDetailPage />,
    pageName: '루틴방'
  },
  roomLog: {
    path: 'room/:roomId/log/:logId',
    authRequired: true,
    navBarRequired: false,
    element: <RoomLogPage />,
    pageName: '인증 기록'
  },
  roomSetting: {
    path: 'room/:roomId/setting',
    authRequired: true,
    navBarRequired: false,
    element: <RoomSettingPage />,
    pageName: '방 설정'
  },
  mybird: {
    path: 'mybird',
    authRequired: true,
    navBarRequired: false,
    element: <MyBirdPage />,
    pageName: '새 커스텀'
  },
  event: {
    path: 'event',
    authRequired: true,
    navBarRequired: false,
    element: <EventPage />,
    pageName: '이벤트/쿠폰'
  },
  purchaseSuccess: {
    path: 'purchase-success',
    authRequired: true,
    navBarRequired: false,
    element: <PurchaseSuccessPage />,
    pageName: '결제'
  },
  purchaseFail: {
    path: 'purchase-fail',
    authRequired: true,
    navBarRequired: false,
    element: <PurchaseFailPage />,
    pageName: '결제'
  },
  notFound: {
    path: '*',
    authRequired: false,
    navBarRequired: false,
    element: <NotFoundPage />
  }
} as const;

export default routes;
