import NotFoundPage from '@/pages/NotFoundPage';
import JoinPage from '@/pages/JoinPage';
import JoinKakaoPage from '@/pages/JoinKakaoPage';
import { Route } from './types/route';

export const PUBLIC_ROUTES = ['join', 'joinKakao'] as const;
export type PublicRouteNames = (typeof PUBLIC_ROUTES)[number];

type PublicRoutes = Record<PublicRouteNames, Route>;

const publicRoutes: PublicRoutes = {
  join: {
    path: '',
    navBarRequired: false,
    element: <JoinPage />,
    pageName: '시작하기'
  },
  joinKakao: {
    path: 'kakao/oauth',
    navBarRequired: false,
    element: <JoinKakaoPage />,
    pageName: '시작하기'
  }
} as const;

export const notFoundRoute: Route = {
  path: '*',
  navBarRequired: false,
  element: <NotFoundPage />
} as const;

export default publicRoutes;
