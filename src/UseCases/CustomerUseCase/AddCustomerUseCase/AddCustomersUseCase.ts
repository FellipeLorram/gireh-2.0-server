import { ICustomer } from '../../../Entities/Customer';
import { ICustomerRepository } from '../../../Repositories/Customer/CustomerRepository';

export class AddCustomersUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private customerRepository: ICustomerRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(customer: ICustomer): Promise<ICustomer | null> {
    const newCustomer = await this.customerRepository.AddCustomer(customer);
    return newCustomer;
  }
}
