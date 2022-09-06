import { appointmentRepository } from '../../../Repositories/Appointment/Implementation/MongoDBAppointmentRepository';
import { GetSingleAppointmentController } from './GetSingleAppointmentController';
import { GetSingleAppointmentUseCase } from './GetSingleAppointmentUseCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const getSingleAppointmentUseCase = new GetSingleAppointmentUseCase(appointmentRepository);
const getSingleAppointmentController = new
GetSingleAppointmentController(getSingleAppointmentUseCase, messenger);

export { getSingleAppointmentController };
