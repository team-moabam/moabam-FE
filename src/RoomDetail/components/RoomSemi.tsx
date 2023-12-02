import { useQuery } from '@tanstack/react-query';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { roomOptions } from '@/core/api/options';
import { ProgressBar } from '@/shared/ProgressBar';
import { RoomDetailMeta } from '@/Meta';
import { RoomNotice } from '..';
import isMorning from '../utils/isMorning';
import RoomHeader from './RoomHeader';
import RoomPreview from './RoomPreview';
import RoomDetailFallback from './RoomDetailFallback';

interface RoomSemiProps {
  roomId?: string;
  serverTime: Date;
  checkedRoomJoin: boolean;
}

const RoomSemi = ({ roomId, serverTime, checkedRoomJoin }: RoomSemiProps) => {
  const { data: roomSemiData, status } = useQuery({
    ...roomOptions.semiDetail(roomId),
    enabled: !checkedRoomJoin
  });

  if (status !== 'success') return <RoomDetailFallback />;

  const {
    title,
    announcement,
    certifiedRanks,
    level,
    currentUserCount,
    maxUserCount,
    exp,
    roomImage
  } = roomSemiData;

  return (
    <>
      <RoomDetailMeta roomTitle={title} />
      <RoomHeader
        title={title}
        checkedRoomJoin={checkedRoomJoin}
      />
      <RoomNotice content={announcement} />
      <div
        className="h-[20.56rem] bg-cover bg-no-repeat text-white"
        style={{ backgroundImage: `url(${roomImage})` }}
      >
        <div className="relative h-[20.56rem] overflow-hidden">
          {certifiedRanks.map((el) => {
            const { memberId, nickname, rank, awakeImage, sleepImage } = el;

            const sleepImageTitle = sleepImage.replace(/^.*\//, '');
            const awakeImageTitle = awakeImage.replace(/^.*\//, '');

            return (
              <span
                key={memberId}
                className={clsx('absolute flex w-fit flex-col items-center', {
                  'top-[39%] left-[37%]': rank === 1,
                  'top-[51%] left-[14%]': rank === 2,
                  'top-[57%] right-[8%]': rank === 3
                })}
              >
                <div
                  className={twMerge(
                    clsx(
                      'relative mb-[0.22rem] h-[3.9rem] w-[3.25rem] bg-contain bg-bottom bg-no-repeat',
                      {
                        "after:absolute after:right-[-14px] after:top-[-10px] after:block after:content-['zzz'] after:origin-center after:rotate-[-16deg]":
                          isMorning(serverTime),
                        'h-[2.88rem] w-[3.25rem]':
                          awakeImageTitle === 'egg.png' ||
                          sleepImageTitle === 'egg.png'
                      }
                    )
                  )}
                  style={{
                    backgroundImage: `url(${
                      isMorning(serverTime) ? sleepImage : awakeImage
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
              </span>
            );
          })}

          <div className="absolute inset-x-0 bottom-0">
            <div className="mb-2 flex items-end justify-between bg-inherit pl-3.5 pr-7">
              <span className="block h-[1.93rem] w-[4.62rem] rounded-[6.25rem] bg-light-point py-[0.16rem] text-center font-IMHyemin-bold text-light-main dark:bg-dark-point">
                Lv {level}
              </span>
              <div className="flex font-IMHyemin-bold text-base text-light-gray">
                <span className="font-IMHyemin-bold">{currentUserCount}</span>
                <span
                  className="flex font-IMHyemin-bold before:mx-[0.4rem] before:block 
           before:font-IMHyemin-bold before:text-base before:content-['/']"
                >
                  {maxUserCount}
                </span>
              </div>
            </div>
            <ProgressBar progress={(exp / 10) * 100}></ProgressBar>
          </div>
        </div>
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomPreview {...roomSemiData} />
      </div>
    </>
  );
};

export default RoomSemi;
