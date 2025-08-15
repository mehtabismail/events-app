import { logout } from '@/store/auth/AuthSlice';
import { persistor } from '@/store/store';
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://locum-bridge-be-prod.azurewebsites.net/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  const { dispatch, endpoint, getState } = api;

  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    dispatch({ type: 'logout' });
    setTimeout(async () => {
      dispatch(logout()), await persistor.purge();
      await persistor.flush();
    }, 500);
  }

  // dispatch(setLoading(false));

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['User'],
  endpoints: () => ({}),
});
