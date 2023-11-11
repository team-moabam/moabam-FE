import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import roomAPI from '@/core/api/functions/roomAPI';
import {
  FORM_MESSAGE,
  ROOM_TYPES,
  TIME_RANGE,
  ROUTINE_NAME,
  ROOM_NAME,
  USER_COUNT,
  PASSWORD
} from '@/RoomForm/constants/literals';

export const formSchema = z.object({
  type: z.enum(ROOM_TYPES),
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
  title: z
    .string()
    .trim()
    .min(ROOM_NAME.min, FORM_MESSAGE.ROOM_NAME)
    .max(ROOM_NAME.max, FORM_MESSAGE.ROOM_NAME),
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

const useFormManagement = () => {
  const form = useForm<Inputs>({
    defaultValues: {
      type: 'MORNING',
      certifyTime: TIME_RANGE['MORNING'][0],
      routines: [{ value: '' }],
      userCount: 5,
      title: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: zodResolver(formSchema)
  });

  const mutation = useMutation({
    mutationFn: roomAPI.postRoom
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutation.mutate(
      {
        title: data.title,
        password: data.password,
        type: data.type,
        routine: data.routines.map((r) => r.value),
        certifyTime: data.certifyTime % 24,
        maxUserCount: data.userCount
      },
      {
        onSuccess: (data) => {
          // TODO: toast({ message: '방이 생성되었습니다.', type: 'success' });
          console.log(data.message);

          // TODO: 방 상세 페이지로 redirect 해야 해요.
          console.log('TODO: 방 상세 페이지로 redirect');
        },
        onError: (error) => {
          // TODO: toast({ message: '서버에서 날아온 에러 메시지.', type: 'error' });
          console.log(error.response?.data?.message);

          if (error.response?.data?.validation) {
            const { setError } = form;

            const {
              title,
              password,
              type,
              routine,
              certifyTime,
              maxUserCount
            } = error.response.data.validation;

            setError('title', { message: title });
            setError('password', { message: password });
            setError('type', { message: type });
            setError('routines', { message: routine });
            setError('certifyTime', { message: certifyTime });
            setError('userCount', { message: maxUserCount });
          }

          if (error.response?.status === 401) {
            // TODO: 로그인 페이지로 redirect 해야 해요.
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

export default useFormManagement;
