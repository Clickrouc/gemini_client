// eslint-disable-next-line import/prefer-default-export
export const convertError = (error: any): string => error?.data?.message || error?.error;
