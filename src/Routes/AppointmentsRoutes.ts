/* eslint-disable max-len */
import { Router, Request, Response } from 'express';
import { addPaymentController } from '../UseCases/PaymentsUseCase/AddPaymentUseCase/_Index';

const appointmentRouter = Router();

appointmentRouter.get('/add-appointment/:id', (req: Request, res: Response) => addPaymentController.handle(req, res));
// appointmentRouter.get('/customer-Appointments/:id', (req: Request, res: Response) => getAllCustomerAppointmentsController.handle(req, res));
// appointmentRouter.get('/Appointment/:id', (req: Request, res: Response) => getSingleAppointmentController.handle(req, res));

// appointmentRouter.delete('/remove-Appointment/:id', (req: Request, res: Response) => deleteAppointmentController.handle(req, res));
// appointmentRouter.post('/edit-Appointment/:id', (req: Request, res: Response) => editAppointmentController.handle(req, res));
// appointmentRouter.post('/add-Appointment', (req: Request, res: Response) => addAppointmentController.handle(req, res));

export default appointmentRouter;
