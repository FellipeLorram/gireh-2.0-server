import { sellsRepository } from '../../../Repositories/Sell/Implementation/MongoDBSellsRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { AddCustomersController } from './AddSellController';
import { AddSellUseCase } from './AddSellUseCase';

const addSellUseCase = new AddSellUseCase(sellsRepository);
const addSellController = new AddCustomersController(addSellUseCase, messenger);

export { addSellController };
