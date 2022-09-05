import { sellsRepository } from '../../../Repositories/Sell/Implementation/MongoDBSellsRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { AddCustomersController } from './AddAppointmentController';
import { AddSellUseCase } from './AddAppointmentUseCase';

const addSellUseCase = new AddSellUseCase(sellsRepository);
const addSellController = new AddCustomersController(addSellUseCase, messenger);

export { addSellController };
