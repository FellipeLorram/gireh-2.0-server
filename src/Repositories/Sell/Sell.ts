/* eslint-disable no-unused-vars */
import { ISell } from '../../Entities/Sell';

export interface ISellRepository {
  AddSell(Sell: ISell): Promise<ISell>;
  EditSell(id: string, customerRef: string, Sell: ISell): Promise<ISell | null>;
  GetAllCustomerSells(customerRef: string): Promise<ISell[]>;
  GetAllSells(): Promise<ISell[]>;
  GetSingleSell(id: string, customerRef: string): Promise<ISell | null>;
  RemoveSell(id: string, customerRef: string): Promise<void>;
}
