import { sellsRepository } from '../../../Repositories/Sell/Implementation/MongoDBSellsRepository';
import { GetAllCustomerSellsController } from './GetAllCustomerSellsController';
import { GetAllCustomerSellsUseCase } from './GetAllCustomerSellsCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const getAllCustomerSellsUseCase = new GetAllCustomerSellsUseCase(sellsRepository);
const getAllCustomerSellsController = new
GetAllCustomerSellsController(getAllCustomerSellsUseCase, messenger);

export { getAllCustomerSellsController };
