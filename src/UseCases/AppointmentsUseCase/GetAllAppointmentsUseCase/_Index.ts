import { sellsRepository } from '../../../Repositories/Sell/Implementation/MongoDBSellsRepository';
import { GetAllSellsController } from './GetAllSellsController';
import { GetAllSellsUseCase } from './GetAllSellsUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const getAllSellsUseCase = new GetAllSellsUseCase(sellsRepository);
const getAllSellController = new GetAllSellsController(getAllSellsUseCase, messenger);

export { getAllSellController };
