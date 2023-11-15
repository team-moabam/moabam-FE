import React from 'react';
import Room from '@/pages/Room';
import RoomDetailPage from '@/pages/RoomDetailPage';
import RoomLogPage from '@/pages/RoomLogPage';
import RoutinesPage from '@/pages/RoutinesPage';
import SearchPage from '@/pages/SearchPage';
import RoomNewPage from '@/pages/RoomNewPage';
import RoomSettingPage from '@/pages/RoomSettingPage';
import StartPage from '@/pages/StartPage';
import NotFoundPage from '@/pages/NotFoundPage';
import JoinPage from '@/pages/JoinPage';
import UserPage from '@/pages/UserPage';
import RankPage from '@/pages/RankPage';
import CouponPage from '@/pages/CouponPage';
import VisitLogPage from '@/pages/VisitLogPage';
import OrderLogPage from '@/pages/OrderLogPage';
import StorePage from '@/pages/StorePage';

interface Route {
  path: string;
  authRequired: boolean;
  navBarRequired: boolean;
  element: React.ReactNode;
}

export type RouteNames =
  | 'start'
  | 'guide'
  | 'join'
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
  | 'rank';

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
    element: <div>guide</div>
  },
  join: {
    path: 'join',
    authRequired: false,
    navBarRequired: false,
    element: <JoinPage />
  },
  routines: {
    path: 'routines',
    authRequired: true,
    navBarRequired: true,
    element: <RoutinesPage />
  },
  search: {
    path: 'search',
    authRequired: true,
    navBarRequired: true,
    element: <SearchPage />
  },
  myPage: {
    path: 'user',
    authRequired: true,
    navBarRequired: true,
    element: <UserPage />
  },
  user: {
    path: 'user/:userId',
    authRequired: true,
    navBarRequired: true,
    element: <UserPage />
  },
  myLog: {
    path: 'user/visitLog',
    authRequired: true,
    navBarRequired: false,
    element: <VisitLogPage />
  },
  myOrderLog: {
    path: 'user/orderLog',
    authRequired: true,
    navBarRequired: false,
    element: <OrderLogPage />
  },
  myCoupon: {
    path: 'user/coupon',
    authRequired: true,
    navBarRequired: false,
    element: <CouponPage />
  },
  store: {
    path: 'store',
    authRequired: true,
    navBarRequired: false,
    element: <StorePage />
  },
  rank: {
    path: 'rank',
    authRequired: false,
    navBarRequired: false,
    element: <RankPage />
  },
  createRoom: {
    path: 'room/new',
    authRequired: true,
    navBarRequired: false,
    element: <RoomNewPage />
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
    element: <RoomDetailPage />
  },
  roomLog: {
    path: 'room/:roomId/log/:logId',
    authRequired: true,
    navBarRequired: false,
    element: <RoomLogPage />
  },
  roomSetting: {
    path: 'room/:roomId/setting',
    authRequired: true,
    navBarRequired: false,
    element: <RoomSettingPage />
  },
  mybird: {
    path: 'mybird',
    authRequired: true,
    navBarRequired: false,
    element: <div>mybird</div>
  },
  notFound: {
    path: '*',
    authRequired: false,
    navBarRequired: false,
    element: <NotFoundPage />
  }
} as const;

export default routes;
