import { Link } from 'react-router-dom';
import { Rank } from '@/core/types';

interface RankThumbnailProps {
  rankData: Rank;
  center?: boolean;
}

const RankThumbnailItem = ({
  rankData,
  center = false
}: RankThumbnailProps) => {
  const { image, memberId, nickname, rank, score } = rankData;
  const userRank = rank as 1 | 2 | 3;
  console.log(rankColor[userRank]);
  return (
    <Link
      to={`/user/${memberId}`}
      className={`flex h-full flex-1 flex-col justify-end ${center && 'pt-5'}`}
    >
      <div className="grid place-items-center">
        <div
          className={`relative mb-5 aspect-square  ${center ? 'h-24' : 'h-16'}`}
        >
          <img
            src={image}
            className="absolute rounded-full"
          />
          <div
            className={`absolute -bottom-1 -right-1 z-10 grid aspect-square place-content-center rounded-full font-extrabold text-light-sub ${
              center ? 'w-8' : 'w-6'
            } ${rankColor[userRank]}`}
          >
            <h1>{rank}</h1>
          </div>
        </div>
        <div className="text-sm">{nickname}</div>
        <div className="mt-2 font-extrabold text-light-point dark:text-dark-point">
          Lv {score}
        </div>
      </div>
    </Link>
  );
};

export default RankThumbnailItem;

const rankColor = {
  1: 'bg-warning',
  2: 'bg-dark-gray',
  3: 'bg-bronze'
};
