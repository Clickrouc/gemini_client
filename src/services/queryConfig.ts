import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { API_URL } from '../env';

// eslint-disable-next-line import/prefer-default-export
export const baseQuery = (baseUrl: string) => fetchBaseQuery({
  baseUrl: `${API_URL}${baseUrl}`,
});
