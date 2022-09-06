import { IAppointment } from '../../../Entities/Appointment';
import { IAppointmentRepository } from '../../../Repositories/Appointment/Appointment';

export class EditAppointmentUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private AppointmentRepository: IAppointmentRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(AppointmentId: string, appointment: IAppointment): Promise<IAppointment | null> {
    const Appointment = await this
      .AppointmentRepository.EditAppointment(AppointmentId, appointment);
    return Appointment;
  }
}
