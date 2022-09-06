import { IAppointment } from '../../../Entities/Appointment';
import { IAppointmentRepository } from '../../../Repositories/Appointment/Appointment';

export class GetAllAppointmentsUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private appointmentRepository: IAppointmentRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(): Promise<IAppointment[]> {
    const Appointments = await this.appointmentRepository.GetAppointments();
    return Appointments;
  }
}
