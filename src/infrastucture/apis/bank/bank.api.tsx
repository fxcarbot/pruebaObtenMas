import {IAllBanksResponse} from '_types';
import {ApiConfig, OBTEN_MAS_API} from '../common';

const extendedApi = OBTEN_MAS_API.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getAllBanks: builder.query<IAllBanksResponse[], undefined>({
      query: () => ({
        url: ApiConfig.endpoints.bank.allBanks,
        method: 'GET',
      }),
    }),
  }),
});

export const {useLazyGetAllBanksQuery: useGetAllBanksRequest} = extendedApi;
