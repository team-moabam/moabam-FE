import { useMutation, useQueryClient } from '@tanstack/react-query';
import z from 'zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import roomAPI from '@/core/api/functions/roomAPI';
import { roomOptions } from '@/core/api/options';
import { useMoveRoute } from '@/core/hooks';
import { Toast } from '@/shared/Toast';
import { FORM_LITERAL as L } from '@/domain/RoomForm/constants/literals';

export const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(L.title.min.value, L.title.min.message)
    .max(L.title.max.value, L.title.max.message),
  announcement: z
    .string()
    .trim()
    .min(L.announcement.min.value)
    .max(L.announcement.max.value, L.announcement.max.message),
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

interface useRoomFormProps {
  roomId: string;
  defaultValues: Inputs;
}

const useRoomForm = ({ roomId, defaultValues }: useRoomFormProps) => {
  const mutation = useMutation({
    mutationFn: roomAPI.putRoom
  });
  const queryClient = useQueryClient();

  const moveTo = useMoveRoute();

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

          moveTo('roomDetail', { roomId });
        },
        onError: (error) => {
          const { setError } = form;

          Toast.show({
            message: error.response?.data?.message || '오류가 발생했어요.',
            status: 'danger'
          });

          if (error.response?.data?.validation) {
            const { title, announcement, password, certifyTime, maxUserCount } =
              error.response.data.validation;

            setError('title', { message: title });
            setError('announcement', { message: announcement });
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
