import { Link } from 'react-router-dom';
import Profile from './Profile';

interface AvatarProps {
  imgUrl: string;
  userId: number;
  nickname: string;
  manager?: boolean;
  contribution?: number;
}

const Avatar = ({
  imgUrl,
  userId,
  nickname,
  manager,
  contribution
}: AvatarProps) => {
  return (
    <Link
      className="flex items-center"
      to={`/user/${userId}`}
    >
      <Profile imgUrl={imgUrl} />
      <div className="flex flex-col text-[14px] leading-[1.6rem]">
        <div className="flex items-center">
          <span className="font-IMHyemin-bold text-black dark:text-white">
            {nickname}
          </span>
          {manager && (
            <div className="ml-[.5625rem] h-5 w-5 bg-[url('/icons/icon-crown.png')] bg-contain bg-center bg-no-repeat" />
          )}
        </div>
        {contribution !== undefined && (
          <span className="text-dark-gray">기여도 : {contribution}점</span>
        )}
      </div>
    </Link>
  );
};

export default Avatar;
