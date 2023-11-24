import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RankMember } from '@/core/types/Member';

interface RoomMemberRankProps {
  todayCertificateRank: RankMember[];
  certifyTime: number;
}

const RoomMemberRank = ({
  todayCertificateRank,
  certifyTime
}: RoomMemberRankProps) => {
  return (
    <>
      {certifyTime === 8 ? (
        <div className="rounded-[6.25rem] bg-[rgba(0,0,0,0.3)] px-[1.68rem] py-[0.25rem] font-IMHyemin-bold text-white">
          지금은 루틴 "인증시간" 입니다
        </div>
      ) : (
        <>
          {todayCertificateRank
            .filter((el) => el.rank <= 3)
            .map((el) => {
              const { memberId, nickname, rank } = el;
              const awakeImage = '/assets/skins/awakeOmokSkin0.png';
              const sleepImage = '/assets/skins/sleepOmokSkin0.png';
              const time = 23;
              return (
                <Link
                  to={`/user/${memberId}`}
                  key={memberId}
                  className={clsx('absolute flex w-fit flex-col items-center', {
                    'top-[11.69rem] left-[4.13rem]': rank === 1,
                    'top-[13.63rem] left-[12.19rem]': rank === 2,
                    'top-[12.75rem] right-[0.69rem]': rank === 3
                  })}
                >
                  <div
                    className={clsx(
                      'relative mb-[0.22rem] h-[2.88rem] w-[3.25rem] bg-contain bg-no-repeat ',
                      {
                        "after:absolute after:right-[-14px] after:top-[-10px] after:block after:content-['zzz'] after:origin-center after:rotate-[-16deg]":
                          time > 16
                      }
                    )}
                    style={{
                      backgroundImage: `url(${
                        time > 16 ? sleepImage : awakeImage
                      })`
                    }}
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
                </Link>
              );
            })}
        </>
      )}
    </>
  );
};

export default RoomMemberRank;
