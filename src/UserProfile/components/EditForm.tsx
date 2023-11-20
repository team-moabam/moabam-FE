import { useState, useRef, ChangeEvent } from 'react';
import { MdAdd } from 'react-icons/md';
import EditInput from './EditInput';

interface EditForm {
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditForm = ({ setIsEditMode }: EditForm) => {
  const editImgInput = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<string | null>(null);

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const imageUrl = e.target.result as string;
          setState(imageUrl);
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <>
      <form className="flex w-full flex-col items-center">
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
          {state && (
            <img
              src={state}
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
          >
            수정!
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
