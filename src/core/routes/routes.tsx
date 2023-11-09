import React from 'react';
import Room from '@/pages/Room';
import RoomDetail from '@/pages/RoomDetail';
import RoutinesPage from '@/pages/RoutinesPage';
import RoomNew from '@/pages/RoomNew';
import RoomLog from '@/pages/RoomLog';
import Search from '@/pages/Search';
import UserPage from '@/pages/UserPage';
import RankPage from '@/pages/RankPage';
import CouponPage from '@/pages/CouponPage';
import LogPage from '@/pages/LogPage';
import OrderLogPage from '@/pages/OrderLogPage';

interface Route {
  path: string;
  authRequired: boolean;
  navBarRequired: boolean;
  element: React.ReactNode;
}

export type RouteNames =
  | 'home'
  | 'guide'
  | 'join'
  | 'routines'
  | 'search'
  | 'user'
  | 'myPage'
  | 'myLog'
  | 'myOrderLog'
  | 'myCoupon'
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
  home: {
    path: '',
    authRequired: true,
    navBarRequired: false,
    element: <div>home</div>
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
    element: <div>join</div>
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
    element: <Search />
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
    path: 'user/log',
    authRequired: true,
    navBarRequired: false,
    element: <LogPage />
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
    element: <RoomNew />
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
    element: <RoomDetail />
  },
  roomLog: {
    path: 'room/:roomId/log/:logId',
    authRequired: true,
    navBarRequired: false,
    element: <RoomLog />
  },
  roomSetting: {
    path: 'room/:roomId/setting',
    authRequired: true,
    navBarRequired: false,
    element: <div>roomSetting</div>
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
    element: <div>notFound</div>
  }
} as const;

export default routes;
