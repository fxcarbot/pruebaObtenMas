import {OBTEN_MAS_API} from '_apis';
import {bankSlice} from '_slices';

export const reducer = {
  [bankSlice.name]: bankSlice.reducer,
  [OBTEN_MAS_API.reducerPath]: OBTEN_MAS_API.reducer,
};

export const apiMiddleware = [OBTEN_MAS_API.middleware];
