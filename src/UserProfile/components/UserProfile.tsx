import { useState, ChangeEvent } from 'react';
import { MdModeEdit, MdAdd } from 'react-icons/md';

interface UserProfileProps {
  nickname: string;
  intro: string | undefined;
  profile_image: string | undefined;
}

const UserProfile = ({ nickname, intro, profile_image }: UserProfileProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newImgUrl, setNewImgUrl] = useState<string | null>(null);

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const imageUrl = e.target.result as string;
          setNewImgUrl(imageUrl);
          console.log(imageUrl);
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <>
      <div
        className="absolute right-0 cursor-pointer text-3xl text-dark-gray hover:text-black dark:hover:text-white"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        <MdModeEdit />
      </div>
      {isEditMode ? (
        <form className="flex w-full flex-col items-center">
          <input
            type="file"
            id="profile_image"
            className="hidden"
            accept="image/gif,image/jpeg,image/png"
            onChange={handleImageSelect}
          />
          <div className="relative h-24 w-24 overflow-hidden rounded-full">
            <img
              src={profile_image ?? '/assets/user.png'}
              className="absolute h-full w-full object-cover"
            />
            {newImgUrl && (
              <>
                <div className="absolute h-full w-full bg-light-main" />
                <img
                  src={newImgUrl}
                  className="absolute grid h-full w-full object-cover"
                />
              </>
            )}
            <div
              className="absolute grid h-full w-full place-content-center bg-[rgba(1,1,1,0.2)] text-4xl text-light-main transition-all hover:text-dark-gray"
              onClick={() => {
                const profile_image = document.querySelector(
                  '#profile_image'
                ) as HTMLInputElement;
                profile_image?.click();
              }}
            >
              <MdAdd />
            </div>
          </div>
          <div className="my-2 flex w-full max-w-[16rem] flex-col items-center gap-2">
            <input
              type="text"
              placeholder={'새 닉네임 (최대 20자)'}
              className="w-full border-b border-light-gray bg-transparent p-1 focus:border-b-2
            focus:border-light-point focus:outline-none focus:ring-light-point
            dark:focus:border-dark-point dark:focus:ring-dark-point"
            />
            <input
              type="text"
              placeholder={'한 줄 소개 (최대 20자)'}
              className="w-full border-b border-light-gray bg-transparent p-1 focus:border-b-2
            focus:border-light-point focus:outline-none focus:ring-light-point
            dark:focus:border-dark-point dark:focus:ring-dark-point"
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
            >
              수정!
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-24 w-24 overflow-hidden rounded-full">
            <img
              src={profile_image ?? '/assets/user.png'}
              className="absolute h-full w-full object-cover"
            />
          </div>
          <h1 className="text-xl">{nickname}</h1>
          <h1 className="text-dark-gray">{intro}</h1>
        </div>
      )}
    </>
  );
};

export default UserProfile;
