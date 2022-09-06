import { IAppointmentRepository } from '../../../Repositories/Appointment/Appointment';

export class RemoveAppointmentsUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private AppointmentRepository: IAppointmentRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(AppointmentId: string): Promise<void> {
    await this.AppointmentRepository.RemoveAppointment(AppointmentId);
  }
}
