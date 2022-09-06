import { appointmentRepository } from '../../../Repositories/Appointment/Implementation/MongoDBAppointmentRepository';
import { GetAllCustomerAppointmentsController } from './GetAllCustomerAppointmentsController';
import { GetAllCustomerAppointmentsUseCase } from './GetAllCustomerAppointmentsCase';
import { messenger } from '../../../Utils/Messenger/Messenger';

const getAllCustomerAppointmentsUseCase = new
GetAllCustomerAppointmentsUseCase(appointmentRepository);
const getAllCustomerAppointmentsController = new
GetAllCustomerAppointmentsController(getAllCustomerAppointmentsUseCase, messenger);

export { getAllCustomerAppointmentsController };
