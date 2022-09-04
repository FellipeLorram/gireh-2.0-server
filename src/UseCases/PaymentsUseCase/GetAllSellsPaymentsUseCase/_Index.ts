import { GetAllSellPaymentsController } from './GetAllSellPaymentsController';
import { GetAllSellPaymentsUse } from './GetAllSellsPaymentsUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { paymentsRepository } from '../../../Repositories/Payments/Implementation/MongoDBPaymentRepository';

const getAllSellsPaymentsUseCase = new GetAllSellPaymentsUse(paymentsRepository);
const getAllSellsPaymentsController = new
GetAllSellPaymentsController(getAllSellsPaymentsUseCase, messenger);

export { getAllSellsPaymentsController };
