import { ICustomer } from '../../../Entities/Customer';
import { ICustomerRepository } from '../CustomerRepository';
import { CustomerModel } from '../../../Schema/Customer';

export class MongoDBCustomerRepository implements ICustomerRepository {
  async AddCustomer(customer: ICustomer): Promise<ICustomer> {
    const newCustomer = await CustomerModel.create(customer);
    return newCustomer;
  }

  async EditCustomer(id: string, customer: ICustomer): Promise<ICustomer | null> {
    const editedCustomer = await CustomerModel.findOneAndUpdate({ id }, customer);
    return editedCustomer;
  }

  async GetAllCustomers(): Promise<ICustomer[]> {
    return CustomerModel.find().sort({ created_at: -1 });
  }

  async GetSingleCustomer(id: string): Promise<ICustomer | null> {
    const customer = CustomerModel.findById(id);
    return customer;
  }

  async RemoveCustomer(id: string): Promise<void> {
    await CustomerModel.findOneAndDelete({ id });
  }
}
