import { Link } from 'react-router-dom';
import { MdLogout, MdLogin } from 'react-icons/md';
import { data } from '../mocks/roomHistory';

const LogList = () => {
  const { roomHistory } = data;
  return (
    <ul>
      {roomHistory.map(({ roomId, title, createdAt }) => (
        <Link
          to={`/room/${roomId}`}
          key={roomId}
        >
          <li className="flex items-center gap-5 p-5">
            <div
              className={`text-xl  ${
                createdAt ? 'text-success' : 'text-dark-gray'
              }`}
            >
              {createdAt ? <MdLogin /> : <MdLogout />}
            </div>
            <h1 className="grow">
              ‘{title}’ 방 {createdAt ? '참가!' : '탈출'}
            </h1>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default LogList;
