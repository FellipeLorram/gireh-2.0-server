import { patientRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { EditCustomersController } from './EditCustomersController';
import { EditCustomersUseCase } from './EditCustomersUseCase';

const editCustomersUseCase = new EditCustomersUseCase(patientRepository);
const editCustomerController = new EditCustomersController(editCustomersUseCase, messenger);

export { editCustomerController };
