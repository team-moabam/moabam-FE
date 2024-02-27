import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import roomAPI from '@/core/api/functions/roomAPI';
import { useMoveRoute } from '@/core/hooks';
import { Toast } from '@/shared/Toast';
import {
  FORM_LITERAL as L,
  TIME_RANGE
} from '@/domain/RoomForm/constants/literals';

export const formSchema = z.object({
  roomType: z.enum(L.roomType.value, {
    required_error: L.roomType.message
  }),
  certifyTime: z.number(),
  routines: z.array(
    z.object({
      value: z
        .string()
        .trim()
        .min(L.routines.item.min.value, L.routines.item.min.message)
        .max(L.routines.item.max.value, L.routines.item.max.message)
    })
  ),
  title: z
    .string()
    .trim()
    .min(L.title.min.value, L.title.min.message)
    .max(L.title.max.value, L.title.max.message),
  userCount: z
    .number()
    .gte(L.userCount.min.value, L.userCount.min.message)
    .lte(L.userCount.max.value, L.userCount.max.message),
  password: z.literal('').or(
    z
      .string()
      .min(L.password.min.value, L.password.min.message)
      .max(L.password.max.value, L.password.max.message)
      .refine((v) => /^\d*$/.test(v), {
        message: L.password.onlyNumeric.message
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
      roomType: undefined,
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
        roomType: data.roomType,
        routines: data.routines.map((r) => r.value),
        certifyTime: data.certifyTime % 24,
        maxUserCount: data.userCount
      },
      {
        onSuccess: (data) => {
          Toast.show({
            message: '새로운 방을 만들었어요.',
            status: 'confirm'
          });

          moveTo('roomDetail', { roomId: data });
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
              roomType,
              routines,
              certifyTime,
              maxUserCount
            } = error.response.data.validation;

            setError('title', { message: title });
            setError('password', { message: password });
            setError('roomType', { message: roomType });
            setError('routines', { message: routines });
            setError('certifyTime', { message: certifyTime });
            setError('userCount', { message: maxUserCount });
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
