/* eslint-disable no-unused-vars */
import { IAppointment } from '../../Entities/Appointment';

export interface IAppointmentRepository {
  AddAppointment(appointment: IAppointment): Promise<IAppointment>;
  EditAppointment(id: string, userRef: string, appointment: IAppointment): Promise<IAppointment>;
  GetAllAppointment(userRef: string): Promise<IAppointment[]>;
  GetSingleAppointment(id: string, userRef: string): Promise<IAppointment>;
  RemoveAppointment(id: string, userRef: string): void;
}
