import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiConfig} from './config';

export const OBTEN_MAS_API = createApi({
  reducerPath: 'OBTEN_MAS_API',
  baseQuery: fetchBaseQuery({baseUrl: ApiConfig.obtenMasUrl}),
  endpoints: () => ({}),
});
