import { Link } from 'react-router-dom';
import RoomInfo from '@/Room/RoomInfo';
import RoomNotice from '@/Room/RoomNotice';
import RoomCalendar from '@/Room/RoomCalendar';
import RoomProgress from '@/Room/RoomProgress';
import RoomRoutine from '@/Room/RoomRoutine';
import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';

const RoomPage = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/level1.png')] bg-contain bg-no-repeat">
        <Header title="물마시기 대작전">
          <div className="flex">
            <Link
              to="setting"
              className="mr-[1.06rem]"
            >
              <Icon
                icon="MdEdit"
                size="xl"
              />
            </Link>
            <button>
              <Icon
                icon="BiSolidShareAlt"
                size="xl"
              />
            </button>
          </div>
        </Header>
        <RoomNotice content="2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방 2일 이상 인증 안하면 칼추방" />
        <RoomInfo />
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomCalendar />
        <RoomProgress />
        <RoomRoutine />
        <button className="text-[0.87rem] text-black dark:text-white">
          방 나가기
        </button>
      </div>
    </div>
  );
};

export default RoomPage;
