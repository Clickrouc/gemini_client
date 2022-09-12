import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../queryConfig';

export const accountsApi = createApi({
  reducerPath: 'accountsApi',
  baseQuery: baseQuery('/accounts'),
  tagTypes: ['AccountsList'],
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => '/',
      providesTags: ['AccountsList'],
    }),
    createAccount: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AccountsList'],
    }),
    updateAccount: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AccountsList'],
    }),
    deleteAccount: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['AccountsList'],
    }),
    switchAccount: builder.mutation({
      query: (body) => ({
        url: '/switch',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['AccountsList'],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
  useSwitchAccountMutation,
} = accountsApi;
