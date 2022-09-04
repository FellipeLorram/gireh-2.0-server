import { GetAllPaymentsController } from './GetAllPaymentsController';
import { GetAllPayments } from './GetAllPaymentsUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { paymentsRepository } from '../../../Repositories/Payments/Implementation/MongoDBPaymentRepository';

const getAllPaymentsUseCase = new GetAllPayments(paymentsRepository);
const getAllPaymentsController = new GetAllPaymentsController(getAllPaymentsUseCase, messenger);

export { getAllPaymentsController };
