import { appointmentRepository } from '../../../Repositories/Appointment/Implementation/MongoDBAppointmentRepository';
import { EditAppointmentController } from './EditAppointmentController';
import { EditAppointmentUseCase } from './EditAppointmentUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const editAppointmentUseCase = new EditAppointmentUseCase(appointmentRepository);
const editAppointmentController = new
EditAppointmentController(editAppointmentUseCase, messenger);

export { editAppointmentController };
