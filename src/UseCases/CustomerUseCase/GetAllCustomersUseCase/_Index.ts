import { patientRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { GetAllCustomersController } from './GetAllCustomersController';
import { GetAllCustomersUseCase } from './GetAllCustomersUseCase';

const getAllCustomersUseCase = new GetAllCustomersUseCase(patientRepository);
const getAllCustomerController = new GetAllCustomersController(getAllCustomersUseCase);

export { getAllCustomerController };
