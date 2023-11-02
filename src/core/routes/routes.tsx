import React from 'react';

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
  | 'my'
  | 'myLog'
  | 'createRoom'
  | 'room'
  | 'roomLog'
  | 'roomSetting'
  | 'mybird'
  | 'notFound';

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
    element: <div>routines</div>
  },
  search: {
    path: 'search',
    authRequired: true,
    navBarRequired: true,
    element: <div>search</div>
  },
  my: {
    path: 'user',
    authRequired: true,
    navBarRequired: true,
    element: <div>my</div>
  },
  user: {
    path: 'user/:userId',
    authRequired: true,
    navBarRequired: true,
    element: <div>user</div>
  },
  myLog: {
    path: 'user/log',
    authRequired: true,
    navBarRequired: false,
    element: <div>userLog</div>
  },
  createRoom: {
    path: 'room/new',
    authRequired: true,
    navBarRequired: false,
    element: <div>create room</div>
  },
  room: {
    path: 'room/:roomId',
    authRequired: true,
    navBarRequired: true,
    element: <div>room</div>
  },
  roomLog: {
    path: 'room/:roomId/log/:logId',
    authRequired: true,
    navBarRequired: false,
    element: <div>roomLog</div>
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
