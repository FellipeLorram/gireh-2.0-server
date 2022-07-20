import { EyeInformation } from './Types/EyeInfo';

export interface IAppointment {
  customerRef: string;
  id: string;
  anaminesis: string;
  rightEye?: EyeInformation;
  leftEye?: EyeInformation;
}
