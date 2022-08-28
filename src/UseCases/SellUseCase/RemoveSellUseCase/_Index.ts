import { sellsRepository } from '../../../Repositories/Sell/Implementation/MongoDBSellsRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { DeleteSellController } from './RemoveSellController';
import { DeleteSellsUseCase } from './RemoveSellUseCase';

const deleteCustomerUseCase = new DeleteSellsUseCase(sellsRepository);
const deleteSellController = new DeleteSellController(deleteCustomerUseCase, messenger);

export { deleteSellController };
