import {IAllBanksResponse} from '_types';
import {useAppDispatch, useAppSelector} from '../../store';
import {bankSelector, setAllBanks} from './bank.slice';

export const useReduxBank = (): IProductsHook => {
  const dispatch = useAppDispatch();

  const {allBanks} = useAppSelector(bankSelector);
  const onSetAllBanks = (value: IAllBanksResponse[]) => {
    dispatch(setAllBanks(value));
  };

  return {
    onSetAllBanks,
    allBanks,
  };
};

interface IProductsHook {
  onSetAllBanks(value: IAllBanksResponse[]): void;
  allBanks: IAllBanksResponse[];
}

export default useReduxBank;
