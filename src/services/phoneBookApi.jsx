import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627ae371a01c46a853159574.mockapi.io/phone-book-api/v1',
  }),

  tegTypes: ['Contact'],

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),

    updateContact: builder.mutation({
      query: updatedContact => {
        const { contactId } = updatedContact;
        return {
          url: `/contacts/${contactId}`,
          method: 'PUT',
          body: updatedContact,
        };
      },
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = phoneBookApi;
