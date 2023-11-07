export const PARAM_NAMES = ['userId', 'roomId', 'logId'] as const;
export type ParamNames = (typeof PARAM_NAMES)[number];
