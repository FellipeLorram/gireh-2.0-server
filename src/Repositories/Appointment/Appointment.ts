/* eslint-disable no-unused-vars */
import { IAppointment } from '../../Entities/Appointment';

export interface IAppointmentRepository {
  AddAppointment(appointment: IAppointment): Promise<IAppointment>;
  EditAppointment(
    id: string,
    customerRef: string,
    appointment: IAppointment
    ): Promise<IAppointment | null>;
  GetAllAppointment(customerRef: string): Promise<IAppointment[]>;
  GetSingleAppointment(id: string, customerRef: string): Promise<IAppointment | null>;
  RemoveAppointment(id: string, customerRef: string): Promise<void> ;
}
