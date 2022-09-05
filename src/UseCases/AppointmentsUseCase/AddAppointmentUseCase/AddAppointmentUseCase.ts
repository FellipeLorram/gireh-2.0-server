import { IAppointment } from '../../../Entities/Appointment';
import { IAppointmentRepository } from '../../../Repositories/Appointment/Appointment';

export class AddAppointmentUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private appointmentRepository: IAppointmentRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(appointment: IAppointment): Promise<IAppointment> {
    const newAppointment = await this.appointmentRepository.AddAppointment(appointment);
    return newAppointment;
  }
}
