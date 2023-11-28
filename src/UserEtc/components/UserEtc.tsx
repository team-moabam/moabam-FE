import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCoupon2Fill } from 'react-icons/ri';
import {
  MdOutlineEmojiEvents,
  MdGrade,
  MdLineWeight,
  MdOutlineLogout
} from 'react-icons/md';
import { useBottomSheet, BottomSheet } from '@/shared/BottomSheet';
import Logout from './Logout';
import WithDrawal from './WithDrawal';

const UserEtc = () => {
  const { bottomSheetProps, open } = useBottomSheet();
  const [sheetContent, setSheetContent] = useState('');

  return (
    <>
      <div className="mb-4 mt-8 w-full overflow-hidden rounded-2xl bg-light-sub dark:bg-dark-sub">
        {etc.map(({ icon, route, text }) => (
          <Link
            to={route}
            className="flex items-center gap-3 p-5 transition-all"
            key={route}
          >
            {icon}
            <h1>{text}</h1>
          </Link>
        ))}
        <div
          className="flex cursor-pointer items-center gap-3 p-5 transition-all"
          onClick={() => {
            open();
            setSheetContent('로그아웃');
          }}
        >
          <MdOutlineLogout />
          <h1>로그아웃</h1>
        </div>
      </div>
      <div>
        <h1
          className="cursor-pointer text-dark-gray"
          onClick={() => {
            open();
            setSheetContent('회원탈퇴');
          }}
        >
          회원탈퇴
        </h1>
      </div>
      <BottomSheet {...bottomSheetProps}>
        {sheetContent === '로그아웃' ? <Logout /> : <WithDrawal />}
      </BottomSheet>
    </>
  );
};

export default UserEtc;

const etc = [
  {
    icon: <RiCoupon2Fill />,
    text: '쿠폰함',
    route: `coupon`
  },
  {
    icon: <MdOutlineEmojiEvents />,
    text: '랭킹',
    route: '/rank'
  },
  {
    icon: <MdGrade />,
    text: '이벤트',
    route: '/event'
  },
  {
    icon: <MdLineWeight />,
    text: '방 참여기록',
    route: 'participate-log'
  }
];
