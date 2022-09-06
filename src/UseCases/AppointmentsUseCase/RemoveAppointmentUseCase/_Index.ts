import { appointmentRepository } from '../../../Repositories/Appointment/Implementation/MongoDBAppointmentRepository';
import { messenger } from '../../../Utils/Messenger/Messenger';
import { RemoveAppointmentController } from './RemoveAppointmentController';
import { RemoveAppointmentsUseCase } from './RemoveAppointmentUseCase';

const removeAppointmentUseCase = new RemoveAppointmentsUseCase(appointmentRepository);
const removeAppointmentController = new
RemoveAppointmentController(removeAppointmentUseCase, messenger);

export { removeAppointmentController };
