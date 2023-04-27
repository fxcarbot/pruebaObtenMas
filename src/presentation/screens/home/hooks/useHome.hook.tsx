import {useEffect, useState} from 'react';
import {useGetAllBanksRequest} from '_apis';
import {IAllBanksResponse} from '_types';
import {useReduxBank} from '_slices';

export const useHome = (): IHomeHook => {
  const [getListBanks, {data: dataAllBanks, isLoading, isError}] =
    useGetAllBanksRequest();
  const {allBanks = [], onSetAllBanks} = useReduxBank();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [listBanks, setListBanks] = useState<IAllBanksResponse[]>([]);

  useEffect(() => {
    console.log('allBanks.length', allBanks.length);
    if (!allBanks.length) getListBanks(undefined);
  }, []);

  useEffect(() => {
    if (allBanks.length) return setListBanks(allBanks);
    if (dataAllBanks) {
      onSetAllBanks(dataAllBanks);
      setListBanks(dataAllBanks);
      return;
    }
  }, [dataAllBanks]);

  function onCloseModal() {
    setShowModal(false);
  }

  return {
    listBanks,
    showModal,
    onCloseModal,
    isLoading,
    isError,
  };
};

interface IHomeHook {
  listBanks: IAllBanksResponse[] | undefined;
  onCloseModal(): void;
  showModal: boolean;
  isLoading: boolean;
  isError: boolean;
}

export default useHome;
