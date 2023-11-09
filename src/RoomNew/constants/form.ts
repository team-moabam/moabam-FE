import z from 'zod';
import {
  ROOM_TYPES,
  TIME_RANGE,
  ROUTINE_NAME,
  ROOM_NAME,
  USER_COUNT,
  PASSWORD
} from '@/RoomForm/constants/literals';

const MESSAGE = {
  ROUTINE_NAME: `루틴 내용은 ${ROUTINE_NAME.min}글자에서 ${ROUTINE_NAME.max}글자 사이여야 해요.`,
  ROOM_NAME: `방 제목은 ${ROOM_NAME.min}글자에서 ${ROOM_NAME.max}글자 사이여야 해요.`,
  USER_COUNT: `인원을 올바르게 선택해주세요.`,
  PASSWORD: `비밀번호는 ${PASSWORD.min}자리에서 ${PASSWORD.max}자리의 숫자여야 해요.}`,
  ONLY_NUMERIC_PASSWORD: `비밀번호는 숫자로만 입력해주세요.`
};

export const formSchema = z.object({
  type: z.enum(ROOM_TYPES),
  certifyTime: z.number(),
  routines: z.array(
    z.object({
      value: z
        .string()
        .trim()
        .min(ROUTINE_NAME.min, MESSAGE.ROUTINE_NAME)
        .max(ROUTINE_NAME.max, MESSAGE.ROUTINE_NAME)
    })
  ),
  title: z
    .string()
    .trim()
    .min(ROOM_NAME.min, MESSAGE.ROOM_NAME)
    .max(ROOM_NAME.max, MESSAGE.ROOM_NAME),
  userCount: z
    .number()
    .gte(USER_COUNT.min, MESSAGE.USER_COUNT)
    .lte(USER_COUNT.max, MESSAGE.USER_COUNT),
  password: z.literal('').or(
    z
      .string()
      .min(PASSWORD.min, MESSAGE.PASSWORD)
      .max(PASSWORD.max, MESSAGE.PASSWORD)
      .refine((v) => /^\d*$/.test(v), {
        message: MESSAGE.ONLY_NUMERIC_PASSWORD
      })
  )
});

export const defaultValues: Inputs = {
  type: 'morning',
  certifyTime: TIME_RANGE['morning'][0],
  routines: [{ value: '' }],
  userCount: 5,
  title: '',
  password: ''
};

export type Inputs = z.infer<typeof formSchema>;
