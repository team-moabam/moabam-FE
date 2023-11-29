import { Link } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MdLogout, MdLogin } from 'react-icons/md';
import { roomOptions } from '@/core/api/options';

const LogList = () => {
  const {
    data: { roomHistory }
  } = useSuspenseQuery({ ...roomOptions.joinHistory() });

  if (!roomHistory)
    return (
      <div className="mt-5 text-center text-dark-gray">요청 오류입니다</div>
    );

  if (roomHistory.length === 0)
    return (
      <div className="mt-5 text-center text-dark-gray">기록이 없습니다</div>
    );

  const createdAtReplace = (createdAt: string) => {
    return createdAt.slice(2, 10).replaceAll('-', '.');
  };

  return (
    <ul>
      {roomHistory.map(({ roomId, title, deletedAt, createdAt }) => (
        <Link
          to={roomId ? `/room/${roomId}` : ''}
          key={roomId}
        >
          <li className="flex items-center gap-5 p-5">
            <div
              className={`text-xl  ${
                !deletedAt ? 'text-success' : 'text-dark-gray'
              }`}
            >
              {!deletedAt ? <MdLogin /> : <MdLogout />}
            </div>
            <h1 className="grow">
              ‘{title}’ {!deletedAt ? '참가!' : '탈출'}
            </h1>
            <h1 className="w-24 text-right text-dark-gray">
              {!roomId ? '방 삭제 됨' : createdAtReplace(createdAt)}
            </h1>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default LogList;
