import { useMutation } from '@tanstack/react-query';
import z from 'zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import roomAPI from '@/core/api/functions/roomAPI';
import {
  ANNOUNCEMENT,
  ROUTINE_NAME,
  ROOM_NAME,
  USER_COUNT,
  PASSWORD,
  FORM_MESSAGE
} from '@/RoomForm/constants/literals';

export const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(ROOM_NAME.min, FORM_MESSAGE.ROOM_NAME)
    .max(ROOM_NAME.max, FORM_MESSAGE.ROOM_NAME),
  announcement: z
    .string()
    .trim()
    .min(ANNOUNCEMENT.min, FORM_MESSAGE.ANNOUNCEMENT)
    .max(ANNOUNCEMENT.max, FORM_MESSAGE.ANNOUNCEMENT),
  certifyTime: z.number(),
  routines: z.array(
    z.object({
      value: z
        .string()
        .trim()
        .min(ROUTINE_NAME.min, FORM_MESSAGE.ROUTINE_NAME)
        .max(ROUTINE_NAME.max, FORM_MESSAGE.ROUTINE_NAME)
    })
  ),
  userCount: z
    .number()
    .gte(USER_COUNT.min, FORM_MESSAGE.USER_COUNT)
    .lte(USER_COUNT.max, FORM_MESSAGE.USER_COUNT),
  password: z.literal('').or(
    z
      .string()
      .min(PASSWORD.min, FORM_MESSAGE.PASSWORD)
      .max(PASSWORD.max, FORM_MESSAGE.PASSWORD)
      .refine((v) => /^\d*$/.test(v), {
        message: FORM_MESSAGE.ONLY_NUMERIC_PASSWORD
      })
  )
});

export type Inputs = z.infer<typeof formSchema>;

interface useRoomFormProps {
  roomId: number;
  defaultValues: Inputs;
}

const useRoomForm = ({ roomId, defaultValues }: useRoomFormProps) => {
  const mutation = useMutation({
    mutationFn: roomAPI.putRoom
  });

  const form = useForm<Inputs>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(
      {
        roomId,
        title: data.title,
        announcement: data.announcement,
        certifyTime: data.certifyTime % 24,
        routine: data.routines.map((r) => r.value),
        maxUserCount: data.userCount,
        password: data.password
      },
      {
        onSuccess: (data) => console.log(data),
        onError: (error) => {
          const { setError } = form;

          // TODO: 에러 Toast 메시지를 보여줘야 해요.
          console.log(error.response?.data?.message);

          if (error.response?.data?.validation) {
            const {
              title,
              announcement,
              routine,
              password,
              certifyTime,
              maxUserCount
            } = error.response.data.validation;

            setError('title', { message: title });
            setError('announcement', { message: announcement });
            setError('routines', { message: routine });
            setError('password', { message: password });
            setError('certifyTime', { message: certifyTime });
            setError('userCount', { message: maxUserCount });
          }

          if (error.response?.status === 401) {
            // TODO: 로그인 페이지로 redirect 해야 해요.
            // TODO: 혹은 전역 MutationCache에 리다이렉션 관련 로직을 작업해야 해요.
            console.log('TODO: 로그인 페이지로 redirect');
          }
        }
      }
    );
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => console.error(errors);

  const handleSubmit = form.handleSubmit(onSubmit, onError);

  return { form, handleSubmit, mutation };
};

export default useRoomForm;
