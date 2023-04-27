export interface IAllBanksResponse {
  description: string;
  age: number;
  url: string;
  bankName: string;
}

export interface IBankState {
  allBanks: IAllBanksResponse[];
}
