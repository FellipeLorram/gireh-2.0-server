/* eslint-disable no-unused-vars */
import { ISell } from '../../Entities/Sell';

export interface ISellRepository {
  AddSell(Sell: ISell): Promise<ISell>;
  EditSell(id: string, Sell: ISell): Promise<ISell | null>;
  GetAllCustomerSells(customerRef: string): Promise<ISell[]>;
  GetAllSells(): Promise<ISell[]>;
  GetSingleSell(id: string): Promise<ISell | null>;
  RemoveSell(id: string): Promise<void>;
}
