import { useSuspenseQueries } from '@tanstack/react-query';
import { BiSolidBugAlt } from 'react-icons/bi';
import userOptions from '@/core/api/options/user';

const HeaderWallet = () => {
  const [
    {
      data: { morning_bug, night_bug, golden_bug }
    }
  ] = useSuspenseQueries({
    queries: [
      {
        ...userOptions.user()
      }
    ]
  });

  return (
    <>
      <div className="flex gap-3 rounded-full border-2 border-dark-gray bg-[rgba(1,1,1,0.5)] px-3 py-1">
        <div className="flex items-center gap-2 text-light-point">
          <BiSolidBugAlt />
          <h1>{morning_bug}</h1>
        </div>
        <div className="flex items-center gap-2 text-dark-point">
          <BiSolidBugAlt />
          <h1>{night_bug}</h1>
        </div>
        <div className="flex items-center gap-2 text-warning">
          <BiSolidBugAlt />
          <h1>{golden_bug}</h1>
        </div>
      </div>
    </>
  );
};

export default HeaderWallet;
