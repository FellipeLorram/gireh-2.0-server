/* eslint-disable no-unused-vars */
import { ICustomer } from '../../Entities/Customer';

export interface ICustomerRepository {
  AddCustomer(customer: ICustomer): Promise<ICustomer>;
  EditCustomer(id: string, customer: ICustomer): Promise<ICustomer | null>;
  GetAllCustomers(): Promise<ICustomer[]>;
  GetSingleCustomer(id: string): Promise<ICustomer | null>;
  RemoveCustomer(id: string): Promise<void>;
}
