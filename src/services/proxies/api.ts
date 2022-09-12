import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../queryConfig';

export const proxiesApi = createApi({
  reducerPath: 'proxiesApi',
  baseQuery: baseQuery('/proxies'),
  endpoints: (builder) => ({
    getProxies: builder.query({
      query: () => '/simple',
    }),
  }),
});

export const { useGetProxiesQuery } = proxiesApi;
