import { sellsRepository } from '../../../Repositories/Sell/Implementation/MongoDBSellsRepository';
import { GetSingleSellController } from './GetSingleSellController';
import { GetSingleSellUseCase } from './GetSingleSellUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const getSingleSellUseCase = new GetSingleSellUseCase(sellsRepository);
const getSingleSellController = new GetSingleSellController(getSingleSellUseCase, messenger);

export { getSingleSellController };
