import { ICustomerRepository } from '../../../Repositories/Customer/CustomerRepository';

export class DeleteCustomerUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private customerRepository: ICustomerRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(customerId: string): Promise<void> {
    await this.customerRepository.RemoveCustomer(customerId);
  }
}
