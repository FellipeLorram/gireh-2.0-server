import { Router, Request, Response } from 'express';
import { deleteCustomerController } from '../UseCases/CustomerUseCase/RemoveCustomerUseCase/_Index';
import { getAllCustomerController } from '../UseCases/CustomerUseCase/GetAllCustomersUseCase/_Index';
import { getSingleCustomerController } from '../UseCases/CustomerUseCase/GetSingleCustomerUseCase/_Index';
import { addCustomerController } from '../UseCases/CustomerUseCase/AddCustomerUseCase/_Index';

const customerRouter = Router();

customerRouter.get('/customers', (req: Request, res: Response) => getAllCustomerController.handle(req, res));
customerRouter.get('/customer', (req: Request, res: Response) => getSingleCustomerController.handle(req, res));

customerRouter.post('/remove-customer', (req: Request, res: Response) => deleteCustomerController.handle(req, res));
customerRouter.post('/add-customer', (req: Request, res: Response) => addCustomerController.handle(req, res));

export default customerRouter;
