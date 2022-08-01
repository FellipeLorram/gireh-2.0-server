import { ICustomer } from '../../../Entities/Customer';
import { IUser } from '../../../Entities/User';
import { ICustomerRepository } from '../../../Repositories/Customer/CustomerRepository';

export class EditCustomersUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private customerRepository: ICustomerRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(user: IUser): Promise<ICustomer | null> {
    const customer = await this.customerRepository.EditCustomer(user.id, user);
    return customer;
  }
}
