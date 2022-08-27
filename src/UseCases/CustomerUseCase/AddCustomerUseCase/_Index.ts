import { customerRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { AddCustomersController } from './AddCustomersController';
import { AddCustomersUseCase } from './AddCustomersUseCase';

const addCustomersUseCase = new AddCustomersUseCase(customerRepository);
const addCustomerController = new AddCustomersController(addCustomersUseCase, messenger);

export { addCustomerController };
