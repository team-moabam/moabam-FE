import { useRef, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdAdd } from 'react-icons/md';
import { userData } from '../mocks/userData';
import EditInput from './EditInput';
import { ProgressBar } from '@/shared/ProgressBar';

interface ImageState {
  selectedImage: File | null;
  imageUrl: string | null;
}

const UserMain = () => {
  const { nickname, intro, level, exp, birds, badges, img } = userData;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, seteditData] = useState({ nickname, intro, img });
  const editImgInput = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<ImageState>({
    selectedImage: null,
    imageUrl: null
  });

  const handleEdit = () => {
    const newNickName = document.querySelector(
      '#new-nickname'
    ) as HTMLInputElement;
    const newIntro = document.querySelector('#new-intro') as HTMLInputElement;
    console.log(newNickName.value, newIntro.value);
  };

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const imageUrl = e.target.result as string;
          setState({ selectedImage, imageUrl });
          console.log({ selectedImage, imageUrl });
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="relative pt-5">
      <div
        className="absolute right-0 cursor-pointer text-3xl text-dark-gray hover:text-black dark:hover:text-white"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        <MdModeEdit />
      </div>
      {isEditMode ? (
        <form
          className="flex w-full flex-col items-center"
          onSubmit={handleFormSubmit}
        >
          <input
            type="file"
            ref={editImgInput}
            className="hidden"
            accept="image/gif,image/jpeg,image/png"
            onChange={handleImageSelect}
            name="profile_image"
          />
          <div className="relative h-24 w-24 overflow-hidden rounded-full">
            <img
              src={img ?? 'public/assets/user.png'}
              className="absolute h-full w-full object-cover"
            />
            {state.imageUrl && (
              <img
                src={state.imageUrl}
                alt=""
                className="absolute grid h-full w-full object-cover"
              />
            )}
            <div
              className="absolute grid h-full w-full place-content-center bg-[rgba(1,1,1,0.2)] text-4xl text-light-main transition-all hover:text-dark-gray"
              onClick={() => editImgInput.current?.click()}
            >
              <MdAdd />
            </div>
          </div>
          <div className="my-2 flex w-full max-w-[16rem] flex-col items-center gap-2">
            <EditInput
              placeholder={'새 닉네임 (최대 20자)'}
              id="new-nickname"
              name="nickname"
            />

            <EditInput
              placeholder={'한 줄 소개 (최대 20자)'}
              id="new-intro"
              name="intro"
            />
          </div>
          <div className="flex w-full max-w-[16rem] gap-2">
            <button
              className="btn grow rounded-lg border border-light-gray shadow-none hover:bg-light-gray"
              onClick={() => setIsEditMode(false)}
            >
              취소
            </button>
            <button
              type="submit"
              className="btn btn-light-point dark:btn-dark-point grow rounded-lg shadow-none"
              onClick={handleEdit}
            >
              수정!
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-24 w-24 overflow-hidden rounded-full">
            <img
              src={img ? img : 'public/assets/user.png'}
              className="absolute h-full w-full object-cover"
            />
          </div>
          <h1 className="text-xl">{editData.nickname}</h1>
          <h1 className="text-dark-gray">{editData.intro}</h1>
        </div>
      )}

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
        <h1>대표 새</h1>
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
        <h1>뱃지</h1>
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

export default UserMain;

const badgeArray: ('오목눈이_탄생' | '어른_오목눈이' | '어른_부엉이')[] = [
  '오목눈이_탄생',
  '어른_오목눈이',
  '어른_부엉이'
];
