import z from 'zod';
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

export const defaultValues: Inputs = {
  title: '',
  announcement: '',
  certifyTime: 0,
  routines: [{ value: '' }],
  userCount: 5,
  password: ''
};

export type Inputs = z.infer<typeof formSchema>;
