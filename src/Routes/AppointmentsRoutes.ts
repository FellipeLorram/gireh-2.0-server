/* eslint-disable max-len */
import { Router, Request, Response } from 'express';
import { addAppointmentController } from '../UseCases/AppointmentsUseCase/AddAppointmentUseCase/_Index';
import { editAppointmentController } from '../UseCases/AppointmentsUseCase/EditAppointmentUseCase/_Index';
import { getAllCustomerAppointmentsController } from '../UseCases/AppointmentsUseCase/GetAllCustomerAppointmentsUseCase/_Index';
import { getSingleAppointmentController } from '../UseCases/AppointmentsUseCase/GetSingleAppointmentUseCase/_Index';
import { removeAppointmentController } from '../UseCases/AppointmentsUseCase/RemoveAppointmentUseCase/_Index';

const appointmentRouter = Router();

appointmentRouter.get('/add-appointment/:id', (req: Request, res: Response) => addAppointmentController.handle(req, res));
appointmentRouter.get('/customer-Appointments/:id', (req: Request, res: Response) => getAllCustomerAppointmentsController.handle(req, res));
appointmentRouter.get('/Appointment/:id', (req: Request, res: Response) => getSingleAppointmentController.handle(req, res));
appointmentRouter.delete('/remove-Appointment/:id', (req: Request, res: Response) => removeAppointmentController.handle(req, res));
appointmentRouter.post('/edit-Appointment/:id', (req: Request, res: Response) => editAppointmentController.handle(req, res));
appointmentRouter.post('/add-Appointment', (req: Request, res: Response) => addAppointmentController.handle(req, res));

export default appointmentRouter;
