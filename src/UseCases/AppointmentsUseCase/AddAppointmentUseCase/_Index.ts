import { appointmentRepository } from '../../../Repositories/Appointment/Implementation/MongoDBAppointmentRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { AddAppointmentController } from './AddAppointmentController';
import { AddAppointmentUseCase } from './AddAppointmentUseCase';

const addAppointmentUseCase = new AddAppointmentUseCase(appointmentRepository);
const addAppointmentController = new AddAppointmentController(addAppointmentUseCase, messenger);

export { addAppointmentController };
