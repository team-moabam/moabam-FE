import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import { useLocalStorage } from '@/core/hooks';
import reportAPI from '@/core/api/functions/reportAPI';
import BottomSheet from '@/shared/BottomSheet/components/BottomSheet';
import { BottomSheetProps } from '@/shared/BottomSheet/components/BottomSheet';
import { Toast } from '@/shared/Toast';
import { REPORT_CONTENT } from '../constants/constant';
import { ReportContent, FormReport } from '../types/type';

interface ReportBottomSheetProps {
  bottomSheetProps: BottomSheetProps;
  close: () => void;
  nickname: string;
  reportedId: number | null;
  changeCheckedInput: (state: string) => void;
  checked: string;
  changeReportStatus: (value: boolean) => void;
}

const reportContent: ReportContent = REPORT_CONTENT;

const ReportBottomSheet = ({
  bottomSheetProps,
  close,
  nickname,
  reportedId,
  changeCheckedInput,
  checked,
  changeReportStatus
}: ReportBottomSheetProps) => {
  const {
    formState: { errors },
    register,
    setError,
    handleSubmit
  } = useFormContext<FormReport>();

  const mutation = useMutation({
    mutationFn: reportAPI.report
  });

  const [userId] = useLocalStorage('MEMBER_ID', 0);

  const objReportContent = Object.entries(reportContent);

  const handleFormSubmit = (data: FormReport) => {
    let description = null;

    for (const [key, value] of Object.entries(data)) {
      if (value) {
        description = reportContent[key];
      }
    }

    if (!description) {
      setError('report', {
        type: 'custom',
        message: '신고 이유를 선택해주세요'
      });
    }

    mutation.mutate(
      {
        reportedId,
        memberId: userId,
        description
      },
      {
        onSuccess: () => {
          close();
          changeReportStatus(false);
          changeCheckedInput('');
          Toast.show({
            status: 'danger',
            message: '신고가 접수되었습니다'
          });
        }
      }
    );
  };

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
        <form
          id="reportForm"
          className="mb-[1.94rem]"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          {objReportContent.map(([id, content]) => (
            <div
              className="mb-[1.125rem] flex items-center"
              key={id}
            >
              <div className="mr-[1.22rem]">
                <input
                  type="radio"
                  className="hidden"
                  id={id}
                  onClick={() => changeCheckedInput(id)}
                  {...register(id)}
                />
                <label
                  htmlFor={id}
                  className={clsx(
                    'relative block h-[1.2rem] w-[1.2rem] rounded-full border-2 border-dark-gray bg-white',
                    {
                      'after:absolute after:left-1/2 after:top-1/2 after:h-[0.75rem] after:w-[0.75rem] after:bg-danger after:rounded-full after:translate-x-[-50%] after:translate-y-[-50%]':
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
        <span className="font-IMHyemin-bold text-sm text-danger">
          {errors.report?.message}
        </span>
        <button
          className="btn btn-danger mt-3 w-full"
          type="submit"
          form="reportForm"
        >
          신고
        </button>
      </div>
    </BottomSheet>
  );
};

export default ReportBottomSheet;
