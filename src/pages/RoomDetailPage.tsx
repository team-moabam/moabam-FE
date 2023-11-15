import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { RoomInfo, RoomNotice, RoomWorkspace } from '@/RoomDetail';
import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';

const RoomDetailPage = () => {
  const roomId = '1234';

  const { data: roomDetailData, status } = useQuery({
    ...roomOptions.detail(roomId)
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
      <div className="h-[20.56rem] bg-[url('/level1.png')] bg-cover bg-no-repeat text-white">
        <RoomInfo {...roomDetailData} />
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomWorkspace {...roomDetailData} />
      </div>
    </div>
  );
};

export default RoomDetailPage;
