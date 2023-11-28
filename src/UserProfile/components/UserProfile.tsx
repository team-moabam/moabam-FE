import { useState, ChangeEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MdModeEdit, MdAdd } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';
import memberAPI from '@/core/api/functions/memberAPI';
import memberOptions from '@/core/api/options/member';
import { Toast } from '@/shared/Toast';

interface Inputs {
  nickname?: string;
  intro?: string;
  profileImage?: File[];
}

interface UserProfileProps {
  nickname: string;
  intro: string | undefined;
  profileImage: string | undefined;
  userId: string;
}

export interface ModifyMemberRequest {
  nickname?: string;
  intro?: string;
}

const inputStyle = `w-full border-b border-light-gray bg-transparent p-1 focus:border-b-2focus:border-light-point focus:outline-none focus:ring-light-poin dark:focus:border-dark-point dark:focus:ring-dark-point`;

const UserProfile = ({
  nickname,
  intro,
  profileImage,
  userId
}: UserProfileProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newImgUrl, setNewImgUrl] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: memberAPI.editMyInfo
  });

  const handleClickFileInput = () => {
    const profile_image = document.querySelector(
      '#profileImage'
    ) as HTMLInputElement;
    profile_image?.click();
  };

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const imageUrl = e.target.result as string;
          setNewImgUrl(imageUrl);
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleChangeNormalMode = () => {
    setIsEditMode(false);
    setNewImgUrl(null);
    reset();
  };

  const onSubmit: SubmitHandler<Inputs> = ({
    nickname,
    intro,
    profileImage
  }) => {
    const formData = new FormData();
    const modifyMemberRequest: ModifyMemberRequest = {};
    if (nickname) modifyMemberRequest['nickname'] = nickname;
    if (intro) modifyMemberRequest['intro'] = intro;
    formData.append('modifyMemberRequest', JSON.stringify(modifyMemberRequest));
    if (profileImage) formData.append('profileImage', profileImage[0]);
    mutation.mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: memberOptions.myInfo().queryKey
        });
        Toast.show({
          message: '변경 성공',
          status: 'confirm'
        });
      },
      onError: () => {
        Toast.show({
          message: '뭔가가 잘못되었습니다 ㄷㄷ',
          status: 'danger'
        });
      }
    });
    handleChangeNormalMode();
  };

  return (
    <>
      {!isEditMode && !userId && (
        <div
          className="absolute right-0 z-20 cursor-pointer text-3xl text-dark-gray hover:text-black dark:hover:text-white"
          onClick={() => setIsEditMode(true)}
        >
          <MdModeEdit />
        </div>
      )}

      {isEditMode ? (
        <form
          className="flex w-full flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="file"
            id="profileImage"
            className="hidden"
            accept="image/gif,image/jpeg,image/png"
            {...register('profileImage', {
              onChange: (e) => handleImageSelect(e)
            })}
          />
          <div className="relative z-20 h-24 w-24 overflow-hidden rounded-full">
            <img
              src={profileImage ?? '/assets/user.png'}
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
              onClick={handleClickFileInput}
            >
              <MdAdd />
            </div>
          </div>
          <div className="my-2 flex w-full max-w-[16rem] flex-col items-start gap-2">
            <input
              placeholder={nickname}
              className={inputStyle}
              {...register('nickname')}
            />

            <input
              placeholder={intro}
              className={inputStyle}
              {...register('intro')}
            />
            <span className="text-sm text-danger">
              빈 항목은 변경되지 않습니다!
            </span>
          </div>
          <div className="flex w-full max-w-[16rem] gap-2">
            <button
              className="btn grow rounded-lg border border-light-gray shadow-none hover:bg-light-gray"
              onClick={handleChangeNormalMode}
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
              src={profileImage ?? '/assets/user.png'}
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
