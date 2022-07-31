import { ICustomer } from '../../../Entities/Customer';
import { ICustomerRepository } from '../../../Repositories/Customer/CustomerRepository';

export class GetAllCustomersUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private customerRepository: ICustomerRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(): Promise<ICustomer[]> {
    const customers = await this.customerRepository.GetAllCustomers();
    return customers;
  }
}
