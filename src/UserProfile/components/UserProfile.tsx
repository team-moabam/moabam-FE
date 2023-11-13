import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { userData } from '../mocks/userData';
import { ProgressBar } from '@/shared/ProgressBar';
import { Input } from '@/shared/Input';

const UserProfile = () => {
  const { nickname, intro, level, exp, birds, badges } = userData;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, seteditData] = useState({ nickname, intro });
  return (
    <div className="relative p-3 pb-0">
      <div
        className="absolute right-0 cursor-pointer text-3xl text-dark-gray hover:text-black dark:hover:text-white"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        <MdModeEdit />
      </div>
      {/* 프로필 */}
      <div className="flex flex-col items-center">
        {isEditMode ? (
          <>
            <div className="relative h-28 w-28 overflow-hidden rounded-full">
              <img
                src="https://storage.enuri.info/pic_upload/knowbox2/202005/08362910620200507cd5549b2-9c1f-4447-aa00-72645ae3a069.jpg"
                alt=""
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute h-full w-full bg-[rgba(1,1,1,0.5)]"></div>
            </div>
            <div className="my-2 flex w-full flex-col gap-2">
              <Input
                size="sm"
                placeholder={editData.nickname + ' (최대 20자)'}
              />
              <Input
                size="sm"
                placeholder={editData.intro + ' (최대 20자)'}
              />
            </div>
            <button className="btn btn-light-point w-full">수정하기</button>
          </>
        ) : (
          <>
            <div className="relative h-28 w-28 overflow-hidden rounded-full">
              <img
                src="https://storage.enuri.info/pic_upload/knowbox2/202005/08362910620200507cd5549b2-9c1f-4447-aa00-72645ae3a069.jpg"
                alt=""
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute h-full w-full bg-[rgba(1,1,1,0.5)]"></div>
            </div>
            <div className="my-2 text-xl">{editData.nickname}</div>
            <div className="text-dark-gray">{editData.intro}</div>
          </>
        )}
      </div>
      {/* 프로필 끝 */}
      <div className="my-2 mt-4 flex w-full items-end justify-between">
        <div className="text-xl text-light-point dark:text-dark-point">
          Lv {level}
        </div>
        <div>{exp} / 10</div>
      </div>
      <ProgressBar
        progress={(exp / 10) * 100}
        className="rounded-full "
      />
      <div className="mb-3 mt-8 flex w-full justify-between">
        <div>대표 새</div>
        <Link
          to="/mybird"
          className="cursor-pointer text-light-point dark:text-dark-point"
        >
          변경
        </Link>
      </div>
      <div className="flex w-full justify-center gap-4">
        <div className="flex aspect-[3/4] w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-light-sub text-lg dark:bg-dark-sub">
          <div className="aspect-square w-1/2 overflow-hidden rounded-full bg-slate-400">
            <img
              src={birds.MORNING_SKIN}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>오목눈이</div>
        </div>
        <div className="flex aspect-[3/4] w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-light-sub text-lg dark:bg-dark-sub">
          <div className="aspect-square w-1/2 overflow-hidden rounded-full bg-slate-400">
            <img
              src={birds.NIGHT_SKIN}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>부엉이</div>
        </div>
      </div>
      <div className="mb-3 mt-8 flex w-full justify-between">
        <div>뱃지</div>
      </div>
      <div className="flex h-36 w-full rounded-lg  text-sm">
        {badgeArray.map((badge) => (
          <div
            className="flex h-full w-2/6 flex-col items-center justify-center gap-2 rounded-lg"
            key={badge}
          >
            <div
              className={`h-14 w-14 rounded-full ${
                badges[badge]
                  ? 'bg-light-point dark:bg-dark-point'
                  : 'bg-dark-gray'
              }`}
            />
            <p className="text-center">{badge}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;

const badgeArray: ('오목눈이_탄생' | '어른_오목눈이' | '어른_부엉이')[] = [
  '오목눈이_탄생',
  '어른_오목눈이',
  '어른_부엉이'
];
