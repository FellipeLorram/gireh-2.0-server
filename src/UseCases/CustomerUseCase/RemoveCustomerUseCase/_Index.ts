import { customerRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { DeleteCustomerController } from './RemoveCustomerController';
import { DeleteCustomerUseCase } from './RemoveCustomerUseCase';

const deleteCustomerUseCase = new DeleteCustomerUseCase(customerRepository);
const deleteCustomerController = new DeleteCustomerController(deleteCustomerUseCase, messenger);

export { deleteCustomerController };
