import { IAppointment } from '../../../Entities/Appointment';
import AppointmentModel from '../../../Schema/Appointment';
import { IAppointmentRepository } from '../Appointment';

export class MongoDBAppointmentRepository implements IAppointmentRepository {
  async AddAppointment(appointment: IAppointment): Promise<IAppointment> {
    const newAppointment = await AppointmentModel.create(appointment);
    return newAppointment;
  }

  async EditAppointment(
    id: string,
    customerRef: string,
    appointment: IAppointment,
  ): Promise<IAppointment | null> {
    const editedAppointment = await AppointmentModel
      .findOneAndUpdate({ id, customerRef }, appointment);
    return editedAppointment;
  }

  async RemoveAppointment(id: string, customerRef: string): Promise<void> {
    await AppointmentModel.deleteOne({ id, customerRef });
  }

  async GetAllAppointment(customerRef: string): Promise<IAppointment[]> {
    const customerAppointments = await AppointmentModel.find({ customerRef });
    return customerAppointments;
  }

  async GetSingleAppointment(id: string, customerRef: string): Promise<IAppointment | null> {
    const appointment = await AppointmentModel.findOne({ id, customerRef });
    return appointment;
  }
}
