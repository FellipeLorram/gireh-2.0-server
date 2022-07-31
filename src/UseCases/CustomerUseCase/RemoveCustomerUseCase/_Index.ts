import { patientRepository } from '../../../Repositories/Customer/Implementation/MongoDBCustomerRepository';
import { DeleteCustomerController } from './RemoveCustomerController';
import { DeleteCustomerUseCase } from './RemoveCustomerUseCase';

const deleteCustomerUseCase = new DeleteCustomerUseCase(patientRepository);
const deleteCustomerController = new DeleteCustomerController(deleteCustomerUseCase);

export { deleteCustomerController };
