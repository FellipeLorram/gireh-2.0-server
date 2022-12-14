/* eslint-disable max-len */
import { Router, Request, Response } from 'express';
import { addSellController } from '../UseCases/SellUseCase/AddSellUseCase/_Index';
import { editSellController } from '../UseCases/SellUseCase/EditSellUseCase/_Index';
import { getAllCustomerSellsController } from '../UseCases/SellUseCase/GetAllCustomerSellsUseCase/_Index';
import { getAllSellController } from '../UseCases/SellUseCase/GetAllSellsUseCase/_Index';
import { getSingleSellController } from '../UseCases/SellUseCase/GetSingleSellUseCase/_Index';
import { deleteSellController } from '../UseCases/SellUseCase/RemoveSellUseCase/_Index';

const sellRouter = Router();

sellRouter.get('/sells', (req: Request, res: Response) => getAllSellController.handle(req, res));
sellRouter.get('/customer-sells/:id', (req: Request, res: Response) => getAllCustomerSellsController.handle(req, res));
sellRouter.get('/sell/:id', (req: Request, res: Response) => getSingleSellController.handle(req, res));

sellRouter.delete('/remove-sell/:id', (req: Request, res: Response) => deleteSellController.handle(req, res));
sellRouter.post('/edit-sell/:id', (req: Request, res: Response) => editSellController.handle(req, res));
sellRouter.post('/add-sell', (req: Request, res: Response) => addSellController.handle(req, res));

export default sellRouter;
