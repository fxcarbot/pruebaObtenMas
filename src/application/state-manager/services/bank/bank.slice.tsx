import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAllBanksResponse, IBankState} from '_types';
import {RootState} from '../../store';

const initialState = {
  allBanks: [],
} as IBankState;

export const bankSlice = createSlice({
  name: 'bankSlice',
  initialState,
  reducers: {
    setAllBanks(state, action: PayloadAction<IAllBanksResponse[]>) {
      state.allBanks = action.payload;
    },
  },
});

export const {setAllBanks} = bankSlice.actions;
export const bankSelector = (state: RootState) => state.bankSlice;
