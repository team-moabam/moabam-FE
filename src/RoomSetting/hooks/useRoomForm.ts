import { useMutation, useQueryClient } from '@tanstack/react-query';
import z from 'zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import roomAPI from '@/core/api/functions/roomAPI';
import { roomOptions } from '@/core/api/options';
import { Toast } from '@/shared/Toast';
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
  roomId: string;
  defaultValues: Inputs;
}

const useRoomForm = ({ roomId, defaultValues }: useRoomFormProps) => {
  const mutation = useMutation({
    mutationFn: roomAPI.putRoom
  });
  const queryClient = useQueryClient();

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
        routines: data.routines.map((r) => r.value),
        maxUserCount: data.userCount,
        password: data.password
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({
            queryKey: roomOptions.detail(roomId).queryKey
          });

          Toast.show({
            message: '방 정보를 수정했어요.',
            status: 'confirm'
          });
        },
        onError: (error) => {
          const { setError } = form;

          Toast.show({
            message: error.response?.data?.message || '오류가 발생했어요.',
            status: 'danger'
          });

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
        }
      }
    );
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => console.error(errors);

  const handleSubmit = form.handleSubmit(onSubmit, onError);

  return { form, handleSubmit, mutation };
};

export default useRoomForm;
