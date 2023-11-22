import { useState } from 'react';
import clsx from 'clsx';
import BottomSheet from '@/shared/BottomSheet/components/BottomSheet';
import { BottomSheetProps } from '@/shared/BottomSheet/components/BottomSheet';

interface ReportBottomSheetProps {
  bottomSheetProps: BottomSheetProps;
  close: () => void;
  nickname: string;
  reportedId: string;
}

const reportContent = {
  '1234': '욕설 및 부적절한 단어 사용(닉네임 포함)',
  '2345': '루틴 이외의 다른 목적의 방 개설',
  '3456': '이유 없는 지속적인 콕 찌르기 사용',
  '5678': '인증 여부를 알기 힘든 인증 업로드',
  '6789': '기타'
};

const ReportBottomSheet = ({
  bottomSheetProps,
  // close,
  nickname,
  reportedId
}: ReportBottomSheetProps) => {
  const objReportContent = Object.entries(reportContent);
  const [checked, setChecked] = useState<string>('');
  return (
    <BottomSheet
      {...bottomSheetProps}
      className="bg-light-main p-0 dark:bg-dark-main"
    >
      <div className="mx-[1.54rem] mb-[2.12rem] mt-[3.13rem] text-black dark:text-white">
        <h1 className="mb-2 flex flex-col">
          <span className="font-IMHyemin-bold text-xl">{`‘${nickname}’ 님을`}</span>
          <span className="font-IMHyemin-bold text-xl">
            <strong className="text-danger">신고</strong>하시는 이유를
            골라주세요.
          </span>
        </h1>
        <div className="mb-[1.94rem] flex flex-col text-sm text-dark-gray">
          <span className="mb-1">해당 내용은 운영진에게 전달되며,</span>
          <span>추후 피드백이 있을 수 있습니다</span>
        </div>
        <form className="mb-[1.94rem]">
          {objReportContent.map(([id, content]) => (
            <div className="mb-[1.125rem] flex items-center">
              <div className="mr-[1.22rem]">
                <input
                  type="checkbox"
                  className="hidden"
                  id={id}
                  onClick={() => setChecked(id)}
                />
                <label
                  htmlFor={id}
                  className={clsx(
                    'relative block h-[1.2rem] w-[1.2rem] rounded-full border-2 border-dark-gray bg-white',
                    {
                      'after:absolute after:left-1/2 after:top-1/2 after:h-[0.75rem] after:w-[0.75rem] after:bg-danger after:rounded-full after:translate-x-[-47%] after:translate-y-[-51%]':
                        checked === id
                    }
                  )}
                />
              </div>
              <span
                className={clsx('text-base', {
                  'font-IMHyemin-bold text-[1rem]': checked === id
                })}
              >
                {content}
              </span>
            </div>
          ))}
        </form>
        <button className="btn btn-danger w-full">신고</button>
      </div>
    </BottomSheet>
  );
};

export default ReportBottomSheet;
