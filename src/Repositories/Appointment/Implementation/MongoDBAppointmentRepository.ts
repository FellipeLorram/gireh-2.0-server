import { IAppointment } from '../../../Entities/Appointment';
import AppointmentModel from '../../../Schema/Appointment';
import { IAppointmentRepository } from '../Appointment';

export class MongoDBAppointmentRepository implements IAppointmentRepository {
  async AddAppointment(appointment: IAppointment): Promise<IAppointment> {
    return AppointmentModel.create(appointment);
  }

  async EditAppointment(
    id: string,
    appointment: IAppointment,
  ): Promise<IAppointment | null> {
    return AppointmentModel.findOneAndUpdate({ id }, appointment);
  }

  async RemoveAppointment(id: string): Promise<void> {
    await AppointmentModel.deleteOne({ id });
  }

  async GetAllCustomerAppointments(customerRef: string): Promise<IAppointment[]> {
    return AppointmentModel.find({ customerRef });
  }

  async GetSingleAppointment(id: string): Promise<IAppointment | null> {
    return AppointmentModel.findOne({ id });
  }

  async GetAppointments(): Promise<IAppointment[]> {
    return AppointmentModel.find().sort({ createdAt: -1 });
  }
}

export const appointmentRepository = new MongoDBAppointmentRepository();
