import { customerRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { GetSingleCustomersController } from './GetSingleCustomersController';
import { GetSingleCustomersUseCase } from './GetSingleCustomersUseCase';

const getSingleCustomersUseCase = new GetSingleCustomersUseCase(customerRepository);
const getSingleCustomerController = new GetSingleCustomersController(getSingleCustomersUseCase);

export { getSingleCustomerController };
