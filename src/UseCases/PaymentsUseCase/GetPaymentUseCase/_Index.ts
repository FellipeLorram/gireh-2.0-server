import { GetPaymentController } from './GetPaymentController';
import { GetPaymentUse } from './GetPaymentUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { paymentsRepository } from '../../../Repositories/Payments/Implementation/MongoDBPaymentRepository';

const getPaymentUseCase = new GetPaymentUse(paymentsRepository);
const getPaymentController = new
GetPaymentController(getPaymentUseCase, messenger);

export { getPaymentController };
