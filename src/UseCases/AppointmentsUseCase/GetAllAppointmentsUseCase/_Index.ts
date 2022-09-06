import { appointmentRepository } from '../../../Repositories/Appointment/Implementation/MongoDBAppointmentRepository';
import { GetAllAppointmentsController } from './GetAllAppointmentsController';
import { GetAllAppointmentsUseCase } from './GetAllAppointmentsUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const getAllAppointmentsUseCase = new GetAllAppointmentsUseCase(appointmentRepository);
const getAllAppointmentsController = new
GetAllAppointmentsController(getAllAppointmentsUseCase, messenger);

export { getAllAppointmentsController };
