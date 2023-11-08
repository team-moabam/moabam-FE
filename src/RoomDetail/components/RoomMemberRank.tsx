import clsx from 'clsx';
import { RankMember } from '@/core/types/Member';

interface RoomMemberRankProps {
  todayCertificateRank: RankMember[];
}

const RoomMemberRank = ({ todayCertificateRank }: RoomMemberRankProps) => {
  console.log(todayCertificateRank);
  return (
    <>
      {todayCertificateRank
        .filter((el) => el.rank <= 3)
        .map((el) => {
          const { memberId, nickname, awakeImage, rank } = el;
          return (
            <div
              key={memberId}
              className={clsx('absolute flex w-fit flex-col items-center', {
                'top-[11.69rem] left-[4.13rem]': rank === 1,
                'top-[13.63rem] left-[12.19rem]': rank === 2,
                'top-[12.75rem] right-[0.69rem]': rank === 3
              })}
            >
              <div
                className="mb-[0.22rem] h-[2.88rem] w-[3.25rem] bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${awakeImage})` }}
              />
              <span
                className={clsx(
                  'block  w-fit rounded-2xl px-3 py-[0.05rem] text-xs text-white',
                  {
                    'bg-gold': rank === 1,
                    'bg-silver': rank === 2,
                    'bg-bronze': rank === 3
                  }
                )}
              >
                {nickname}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default RoomMemberRank;
