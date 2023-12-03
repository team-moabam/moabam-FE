import { Link } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import rankOptions from '@/core/api/options/rank';
import RankThumbnailItem from './RankThumbnailItem';

const RankList = () => {
  const {
    data: { myRanking, topRankings }
  } = useSuspenseQuery({
    ...rankOptions.rank()
  });

  if (topRankings.length < 3)
    return (
      <div className="flex justify-center p-5">유저가 너무 적습니다..흑흑</div>
    );

  return (
    <>
      <div>
        <div className="flex items-end bg-light-sub p-5 shadow-md dark:bg-dark-sub">
          <RankThumbnailItem rankData={topRankings[1]} />
          <RankThumbnailItem
            rankData={topRankings[0]}
            center={true}
          />
          <RankThumbnailItem rankData={topRankings[2]} />
        </div>
      </div>
      <div className="mt-5 h-full overflow-auto bg-light-main text-black dark:bg-dark-main dark:text-white">
        <ul>
          {topRankings.map(({ rank, memberId, nickname, image, score }) => (
            <Link
              to={`/user/${memberId}`}
              className="flex h-16 items-center p-3"
              key={memberId}
            >
              <div className="w-10  text-center text-xl">{rank}</div>
              <div className="mx-2 h-11 w-11 overflow-hidden rounded-full">
                <img
                  src={image}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">{nickname}</div>
              <div>{score} p</div>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex h-16 items-center bg-light-sub p-3 dark:bg-dark-sub">
        <div className="w-10  text-center text-xl">{myRanking.rank}</div>
        <div className="mx-2 h-11 w-11 overflow-hidden rounded-full">
          <img
            src={myRanking.image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">{myRanking.nickname}</div>
        <div>Lv {myRanking.score}</div>
      </div>
    </>
  );
};

export default RankList;
