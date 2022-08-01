import { patientRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { GetAllCustomersController } from './GetAllCustomersController';
import { GetAllCustomersUseCase } from './GetAllCustomersUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const getAllCustomersUseCase = new GetAllCustomersUseCase(patientRepository);
const getAllCustomerController = new GetAllCustomersController(getAllCustomersUseCase, messenger);

export { getAllCustomerController };
