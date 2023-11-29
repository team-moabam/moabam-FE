import { Link } from 'react-router-dom';
import { useLocalStorage, useRouteData } from '@/core/hooks';
import { RankMember } from '@/core/types/Member';
import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';
import { Toast } from '@/shared/Toast';

interface RoomHeaderProps {
  title: string;
  checkedRoomJoin: boolean;
  managerNickName?: string;
  todayCertificateRank?: RankMember[];
}

const RoomHeader = ({
  title,
  checkedRoomJoin,
  managerNickName,
  todayCertificateRank
}: RoomHeaderProps) => {
  const { location } = useRouteData();
  const sharePath = `${import.meta.env.VITE_LOCALHOST}${location}`;
  const [myUserId] = useLocalStorage('MEMBER_ID', null);

  const handleShareButtonClick = () => {
    navigator.clipboard.writeText(sharePath);
    Toast.show({
      status: 'confirm',
      message: '페이지 공유 링크가 복사되었습니다.',
      subText: sharePath
    });
  };

  const checkManagerNickName = todayCertificateRank?.find(
    (el) => el.memberId === myUserId
  )?.nickname;

  return (
    <Header
      title={title}
      className="absolute z-[1] text-white"
    >
      <div className="flex">
        {checkedRoomJoin && checkManagerNickName === managerNickName && (
          <Link
            to="setting"
            className="mr-[1.06rem]"
          >
            <Icon
              icon="MdEdit"
              size="xl"
            />
          </Link>
        )}
        <button onClick={handleShareButtonClick}>
          <Icon
            icon="BiSolidShareAlt"
            size="xl"
          />
        </button>
      </div>
    </Header>
  );
};

export default RoomHeader;
