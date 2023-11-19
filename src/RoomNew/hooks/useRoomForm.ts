import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import roomAPI from '@/core/api/functions/roomAPI';
import { useMoveRoute } from '@/core/hooks';
import {
  FORM_MESSAGE,
  ROOM_TYPES,
  TIME_RANGE,
  ROUTINE_NAME,
  ROOM_NAME,
  USER_COUNT,
  PASSWORD
} from '@/RoomForm/constants/literals';
import { Toast } from '@/shared/Toast';

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

const useRoomForm = () => {
  const moveTo = useMoveRoute();

  const mutation = useMutation({
    mutationFn: roomAPI.postRoom
  });

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
          Toast.show({
            message: '새로운 방을 만들었어요.',
            status: 'confirm'
          });

          moveTo('roomDetail', { roomId: data.roomId });
        },
        onError: (error) => {
          Toast.show({
            message: error.response?.data?.message ?? '오류가 발생했어요.',
            status: 'danger'
          });

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
            moveTo('join');
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
