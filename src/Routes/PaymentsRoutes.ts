/* eslint-disable max-len */
import { Router, Request, Response } from 'express';
import { addPaymentController } from '../UseCases/PaymentsUseCase/AddPaymentUseCase/_Index';
import { getAllPaymentsController } from '../UseCases/PaymentsUseCase/GetAllPaymentsUseCase/_Index';
import { getAllSellsPaymentsController } from '../UseCases/PaymentsUseCase/GetAllSellsPaymentsUseCase/_Index';
import { getPaymentController } from '../UseCases/PaymentsUseCase/GetPaymentUseCase/_Index';
import { removePaymentController } from '../UseCases/PaymentsUseCase/RemovePaymentUseCase/_Index';

const sellRouter = Router();

sellRouter.post('/add-payment', (req: Request, res: Response) => addPaymentController.handle(req, res));
sellRouter.delete('/remove-payment/:id', (req: Request, res: Response) => removePaymentController.handle(req, res));
sellRouter.get('/payments', (req: Request, res: Response) => getAllPaymentsController.handle(req, res));
sellRouter.get('/payments/:id', (req: Request, res: Response) => getAllSellsPaymentsController.handle(req, res));
sellRouter.get('/payment/:id', (req: Request, res: Response) => getPaymentController.handle(req, res));
