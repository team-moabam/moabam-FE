import { BiSolidBugAlt } from 'react-icons/bi';
import { bugs, bugsArray } from '../mocks/bugs';

const UserBugs = () => {
  return (
    <>
      <div className="flex h-28 w-full rounded-2xl bg-light-sub dark:bg-dark-sub">
        {bugsArray.map(({ color, type }) => (
          <div
            className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
            key={type}
          >
            <div className="text-2xl">{bugs[type]}</div>
            <div className={`text-xl ${color}`}>
              <BiSolidBugAlt />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserBugs;
