import { paymentsRepository } from '../../../Repositories/Payments/Implementation/MongoDBPaymentRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { AddPaymentController } from './AddPaymentController';
import { AddPaymentUseCase } from './AddPaymentUseCase';

const addPaymentUseCase = new AddPaymentUseCase(paymentsRepository);
const addPaymentController = new AddPaymentController(addPaymentUseCase, messenger);

export { addPaymentController };
