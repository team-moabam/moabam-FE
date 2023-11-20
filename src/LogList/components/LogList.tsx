import { Link } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import { MdLogout, MdLogin } from 'react-icons/md';
import { roomOptions } from '@/core/api/options';
import { ParticipateLogType } from '@/core/types/participateLog';

const LogList = () => {
  const [{ data }] = useSuspenseQueries({
    queries: [
      {
        ...roomOptions.joinHistory(),
        select: ({ roomHistory }: { roomHistory: ParticipateLogType[] }) =>
          roomHistory
      }
    ]
  });

  return (
    <ul>
      {data.map(({ roomId, title, deletedAt }) => (
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
            {!roomId && <h1 className="text-dark-gray">방 삭제됨</h1>}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default LogList;
