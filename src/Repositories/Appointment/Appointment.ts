/* eslint-disable no-unused-vars */
import { IAppointment } from '../../Entities/Appointment';

export interface IAppointmentRepository {
  AddAppointment(appointment: IAppointment): Promise<IAppointment>;
  EditAppointment(id: string, appointment: IAppointment): Promise<IAppointment | null>;
  GetAllCustomerAppointments(customerRef: string): Promise<IAppointment[]>;
  GetAppointments(): Promise<IAppointment[]>;
  GetSingleAppointment(id: string): Promise<IAppointment | null>;
  RemoveAppointment(id: string): Promise<void>;
}
