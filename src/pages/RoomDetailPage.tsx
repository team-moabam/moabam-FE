import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { RoomNotice } from '@/RoomDetail';
import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';
import RoomDetailContainer from '@/RoomDetail/components/RoomDetailContainer';
import RoomDetailProvider from '@/RoomDetail/components/RoomDetailProvider';

const RoomDetailPage = () => {
  const roomId = '1234';
  const serverTime = new Date();
  const todayDate = `${serverTime.getFullYear()}-${serverTime.getMonth()}-${serverTime.getDate()}`;

  const { data: roomDetailData, status } = useQuery({
    ...roomOptions.detailByDate(roomId, todayDate)
  });

  if (status !== 'success') return <div>임시 Loading...</div>;

  const { title, announcement } = roomDetailData;

  return (
    <div className="relative h-full overflow-y-scroll">
      <Header
        title={title}
        className="absolute z-[1] text-white"
      >
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
      <RoomNotice content={announcement} />
      <RoomDetailProvider serverTime={serverTime}>
        <RoomDetailContainer
          roomDetailData={roomDetailData}
          serverTime={serverTime}
        />
      </RoomDetailProvider>
    </div>
  );
};

export default RoomDetailPage;
