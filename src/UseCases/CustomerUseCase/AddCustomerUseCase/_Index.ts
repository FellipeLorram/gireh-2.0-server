import { patientRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { AddCustomersController } from './AddCustomersController';
import { AddCustomersUseCase } from './AddCustomersUseCase';

const addCustomersUseCase = new AddCustomersUseCase(patientRepository);
const addCustomerController = new AddCustomersController(addCustomersUseCase, messenger);

export { addCustomerController };
