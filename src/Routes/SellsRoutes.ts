/* eslint-disable max-len */
import { Router, Request, Response } from 'express';
import { addSellController } from '../UseCases/SellUseCase/AddSellUseCase/_Index';

const sellRouter = Router();

// sellRouter.get('/sells', (req: Request, res: Response) => getAllCustomerController.handle(req, res));
// sellRouter.get('/customer/:id', (req: Request, res: Response) => getSingleCustomerController.handle(req, res));

// sellRouter.delete('/remove-customer/:id', (req: Request, res: Response) => deleteCustomerController.handle(req, res));
// sellRouter.post('/edit-customer/:id', (req: Request, res: Response) => editCustomerController.handle(req, res));
sellRouter.post('/add-sell', (req: Request, res: Response) => addSellController.handle(req, res));

export default sellRouter;
