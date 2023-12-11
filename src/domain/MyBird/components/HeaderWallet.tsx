import { useSuspenseQueries } from '@tanstack/react-query';
import memberOptions from '@/core/api/options/member';
import { Icon } from '@/shared/Icon';

const HeaderWallet = () => {
  const [
    {
      data: { morningBug, nightBug, goldenBug }
    }
  ] = useSuspenseQueries({
    queries: [
      {
        ...memberOptions.myInfo()
      }
    ]
  });

  return (
    <div className="flex gap-3 rounded-full border-2 border-dark-gray bg-[rgba(1,1,1,0.5)] px-3 py-1">
      <div className="flex items-center gap-2 text-light-point">
        <Icon icon="BiSolidBugAlt" />
        <h1>{morningBug}</h1>
      </div>
      <div className="flex items-center gap-2 text-dark-point">
        <Icon icon="BiSolidBugAlt" />
        <h1>{nightBug}</h1>
      </div>
      <div className="flex items-center gap-2 text-warning">
        <Icon icon="BiSolidBugAlt" />
        <h1>{goldenBug}</h1>
      </div>
    </div>
  );
};

export default HeaderWallet;
