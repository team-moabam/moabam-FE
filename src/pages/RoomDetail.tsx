import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { roomAPI } from '@/core/api/functions/roomAPI';

import RoomInfo from '@/RoomDetail/components/RoomInfo';
import RoomNotice from '@/RoomDetail/components/RoomNotice';
import RoomWorkspace from '@/RoomDetail/components/RoomWorkspace';

import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';

const RoomDetail = () => {
  const { fetchRoomDetail } = roomAPI;
  const roomId = '1234';
  const { data, isLoading } = useQuery({
    queryKey: ['roomDetail', roomId],
    queryFn: ({ queryKey }) => {
      return fetchRoomDetail(queryKey[1]);
    }
  });

  let roomDetailData = data;

  if (isLoading) {
    roomDetailData = {
      roomId: 1,
      title: '',
      managerNickname: '',
      level: 0,
      roomType: 'MORNING',
      certifyTime: 0,
      currentUserCount: 0,
      maxUserCount: 0,
      announcement: '',
      completePercentage: 0,
      certifiedDates: '',
      routine: [{ routineId: 0, content: '' }],
      todayCertificateRank: []
    };
  }
  const { title, announcement } = roomDetailData;

  const roomInfoData = {
    level: roomDetailData.level,
    currentUserCount: roomDetailData.currentUserCount,
    maxUserCount: roomDetailData.maxUserCount
  };

  const roomWorkspaceData = {
    completePercentage: roomDetailData.completePercentage,
    certifiedDates: roomDetailData.certifiedDates,
    routine: roomDetailData.routine,
    todayCertificateRank: roomDetailData.todayCertificateRank
  };

  return (
    <div className="relative">
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
        <RoomInfo roomInfoData={roomInfoData} />
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomWorkspace roomWorkspaceData={roomWorkspaceData} />
      </div>
    </div>
  );
};

export default RoomDetail;
