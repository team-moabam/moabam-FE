import GuidePage from '@/pages/GuidePage';
import Room from '@/pages/Room';
import RoomDetailPage from '@/pages/RoomDetailPage';
import RoomLogPage from '@/pages/RoomLogPage';
import RoutinesPage from '@/pages/RoutinesPage';
import SearchPage from '@/pages/SearchPage';
import RoomNewPage from '@/pages/RoomNewPage';
import RoomSettingPage from '@/pages/RoomSettingPage';
import StartPage from '@/pages/StartPage';
import EventPage from '@/pages/EventPage';
import UserPage from '@/pages/UserPage';
import RankPage from '@/pages/RankPage';
import CouponPage from '@/pages/CouponPage';
import ParticipateLogPage from '@/pages/ParticipateLogPage';
import OrderLogPage from '@/pages/OrderLogPage';
import StorePage from '@/pages/StorePage';
import MyBirdPage from '@/pages/MyBirdPage';
import PurchaseSuccessPage from '@/pages/PurchaseSuccesPage';
import PurchaseFailPage from '@/pages/PurchaseFailPage';
import { Route } from './types/route';

export const PRIVATE_ROUTES = [
  'guide',
  'start',
  'routines',
  'search',
  'user',
  'myPage',
  'myLog',
  'myOrderLog',
  'myCoupon',
  'store',
  'createRoom',
  'room',
  'roomDetail',
  'roomLog',
  'roomSetting',
  'mybird',
  'event',
  'rank',
  'purchaseSuccess',
  'purchaseFail'
] as const;
export type PrivateRouteNames = (typeof PRIVATE_ROUTES)[number];

type PrivateRoutes = Record<PrivateRouteNames, Route>;

const privateRoutes: PrivateRoutes = {
  guide: {
    path: 'guide',
    navBarRequired: false,
    element: <GuidePage />,
    pageName: '환영해요'
  },
  start: {
    path: '',
    navBarRequired: false,
    element: <StartPage />
  },
  routines: {
    path: 'routines',
    navBarRequired: true,
    element: <RoutinesPage />,
    pageName: '나의 루틴'
  },
  search: {
    path: 'search',
    navBarRequired: true,
    element: <SearchPage />,
    pageName: '루틴방 조회'
  },
  myPage: {
    path: 'user',
    navBarRequired: true,
    element: <UserPage />,
    pageName: '내 정보'
  },
  user: {
    path: 'user/:userId',
    navBarRequired: true,
    element: <UserPage />,
    pageName: '유저 정보'
  },
  myLog: {
    path: 'user/participate-log',
    navBarRequired: false,
    element: <ParticipateLogPage />,
    pageName: '방 참여기록'
  },
  myOrderLog: {
    path: 'user/order-log',
    navBarRequired: false,
    element: <OrderLogPage />,
    pageName: '구매 내역'
  },
  myCoupon: {
    path: 'user/coupon',
    navBarRequired: false,
    element: <CouponPage />,
    pageName: '쿠폰함'
  },
  store: {
    path: 'store',
    navBarRequired: false,
    element: <StorePage />,
    pageName: '상점'
  },
  rank: {
    path: 'rank',
    navBarRequired: false,
    element: <RankPage />,
    pageName: '랭킹'
  },
  createRoom: {
    path: 'room/new',
    navBarRequired: false,
    element: <RoomNewPage />,
    pageName: '방 생성'
  },
  room: {
    path: 'room',
    navBarRequired: true,
    element: <Room />
  },
  roomDetail: {
    path: 'room/:roomId',
    navBarRequired: true,
    element: <RoomDetailPage />,
    pageName: '루틴방'
  },
  roomLog: {
    path: 'room/:roomId/log/:logId',
    navBarRequired: false,
    element: <RoomLogPage />,
    pageName: '인증 기록'
  },
  roomSetting: {
    path: 'room/:roomId/setting',
    navBarRequired: false,
    element: <RoomSettingPage />,
    pageName: '방 설정'
  },
  mybird: {
    path: 'mybird',
    navBarRequired: false,
    element: <MyBirdPage />,
    pageName: '새 커스텀'
  },
  event: {
    path: 'event',
    navBarRequired: false,
    element: <EventPage />,
    pageName: '이벤트/쿠폰'
  },
  purchaseSuccess: {
    path: 'purchase-success',
    navBarRequired: false,
    element: <PurchaseSuccessPage />,
    pageName: '결제'
  },
  purchaseFail: {
    path: 'purchase-fail',
    navBarRequired: false,
    element: <PurchaseFailPage />,
    pageName: '결제'
  }
} as const;

export default privateRoutes;
