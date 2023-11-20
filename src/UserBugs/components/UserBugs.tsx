import { useSuspenseQueries } from '@tanstack/react-query';
import { BiSolidBugAlt } from 'react-icons/bi';
import { bugOptions } from '@/core/api/options';
import { MyBugsType } from '@/core/types/myBugs';

const UserBugs = () => {
  const [{ data }] = useSuspenseQueries({
    queries: [
      {
        ...bugOptions.myBug(),
        select: (bugs: MyBugsType) => {
          console.log(bugs);
          return bugs;
        }
      }
    ]
  });

  return (
    <>
      <div className="flex h-28 w-full rounded-2xl bg-light-sub dark:bg-dark-sub">
        {bugsArray.map(({ color, type }) => (
          <div
            className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
            key={type}
          >
            <div className="text-2xl">{data[type]}</div>
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

const bugsArray: {
  type: 'morningBug' | 'nightBug' | 'goldenBug';
  color: string;
}[] = [
  {
    type: 'morningBug',
    color: 'text-light-point'
  },
  {
    type: 'nightBug',
    color: 'text-dark-point'
  },
  {
    type: 'goldenBug',
    color: 'text-warning'
  }
];
