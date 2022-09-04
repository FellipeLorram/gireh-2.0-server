import { paymentsRepository } from '../../../Repositories/Payments/Implementation/MongoDBPaymentRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { DeleteSellController } from './RemovePaymentController';
import { DeletePaymentUseCase } from './RemovePaymentUseCase';

const RemovePaymentUseCase = new DeletePaymentUseCase(paymentsRepository);
const removePaymentController = new DeleteSellController(RemovePaymentUseCase, messenger);

export { removePaymentController };
