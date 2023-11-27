import { Link } from 'react-router-dom';
import { useRouteData } from '@/core/hooks';
import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';
import { Toast } from '@/shared/Toast';

interface RoomHeaderProps {
  title: string;
}

const RoomHeader = ({ title }: RoomHeaderProps) => {
  const { location } = useRouteData();
  const sharePath = `${import.meta.env.VITE_LOCALHOST}${location}`;

  const handleShareButtonClick = () => {
    navigator.clipboard.writeText(sharePath);
    Toast.show({
      status: 'confirm',
      message: '페이지 공유 링크가 복사되었습니다.',
      subText: sharePath
    });
  };

  return (
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
