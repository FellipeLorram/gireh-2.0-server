import { ICustomer } from '../../../Entities/Customer';
import { ICustomerRepository } from '../../../Repositories/Customer/CustomerRepository';

export class GetSingleCustomersUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private customerRepository: ICustomerRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(customerId: string): Promise<ICustomer | null> {
    const customer = await this.customerRepository.GetSingleCustomer(customerId);
    return customer;
  }
}
