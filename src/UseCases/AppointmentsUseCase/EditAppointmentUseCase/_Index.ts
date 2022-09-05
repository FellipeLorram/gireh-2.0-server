import { sellsRepository } from '../../../Repositories/Sell/Implementation/MongoDBSellsRepository';
import { EditSellsController } from './EditSellController';
import { EditSellsUseCase } from './EditSellUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const editSellsUseCase = new EditSellsUseCase(sellsRepository);
const editSellController = new
EditSellsController(editSellsUseCase, messenger);

export { editSellController };
