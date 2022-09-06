import { IAppointment } from '../../../Entities/Appointment';
import { IAppointmentRepository } from '../../../Repositories/Appointment/Appointment';

export class GetSingleAppointmentUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private AppointmentRepository: IAppointmentRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(AppointmentId: string): Promise<IAppointment | null> {
    const Appointment = await this.AppointmentRepository.GetSingleAppointment(AppointmentId);
    return Appointment;
  }
}
