import { useState } from 'react';
import {
  UseFormRegister,
  FieldErrors,
  UseFormClearErrors
} from 'react-hook-form';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@/shared/Icon';

interface ImageInputProps {
  register: UseFormRegister<{ file: null | FileList }[]>;
  errors: FieldErrors<{ file: null | FileList }[]>;
  clearErrors: UseFormClearErrors<{ file: null | FileList }[]>;
  content: string;
  image: string | null;
  idx: number;
}

const ImageInput = ({
  register,
  errors,
  clearErrors,
  content,
  image,
  idx
}: ImageInputProps) => {
  const [imgSrc, setImgSrc] = useState(image);

  const saveFileImage = (fileBlob: File) => {
    const fileUrl = URL.createObjectURL(fileBlob);
    setImgSrc(fileUrl);
  };

  return (
    <div>
      <div
        className={twMerge(
          clsx(
            'relative mb-1 h-0 w-full overflow-hidden rounded-2xl border border-dark-gray pb-[100%] shadow-[0_1px_4px_0px_rgba(0,0,0,0.2)]',
            {
              'border-danger': errors[idx]?.file?.message
            }
          )
        )}
      >
        <input
          type="file"
          id={content}
          {...register(`${idx}.file`, {
            required: '이미지를 넣어주세요'
          })}
          className="absolute left-0 top-0 h-full w-full before:block before:h-full before:w-full before:bg-white before:content-[''] after:absolute"
          onChange={(e) => {
            if (e.target.files) {
              saveFileImage(e.target.files[0]);
              clearErrors(`${idx}.file`);
            }
          }}
        />
        <label
          htmlFor={content}
          className="absolute block h-full w-full"
        >
          {imgSrc ? (
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imgSrc})` }}
            />
          ) : (
            <div>
              <Icon
                icon="FaPlus"
                size="4xl"
                className={clsx(
                  'absolute left-[50%] top-[50%] block translate-x-[-50%] translate-y-[-50%] text-dark-gray'
                )}
              />
            </div>
          )}
        </label>
      </div>
      <div>
        {errors[idx]?.file?.message && (
          <span className="block font-IMHyemin-bold text-sm text-danger">
            <>{errors[idx]?.file?.message}</>
          </span>
        )}
        <span className="block font-IMHyemin-bold text-sm">{content}</span>
      </div>
    </div>
  );
};

export default ImageInput;
