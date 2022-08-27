import { customerRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { EditCustomersController } from './EditCustomersController';
import { EditCustomersUseCase } from './EditCustomersUseCase';

const editCustomersUseCase = new EditCustomersUseCase(customerRepository);
const editCustomerController = new EditCustomersController(editCustomersUseCase, messenger);

export { editCustomerController };
