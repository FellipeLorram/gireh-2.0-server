import { patientRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { GetSingleCustomersController } from './GetSingleCustomersController';
import { GetSingleCustomersUseCase } from './GetSingleCustomersUseCase';

const getSingleCustomersUseCase = new GetSingleCustomersUseCase(patientRepository);
const getSingleCustomerController = new GetSingleCustomersController(getSingleCustomersUseCase);

export { getSingleCustomerController };
