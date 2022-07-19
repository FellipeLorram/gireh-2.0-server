import { EyeInformation } from './Types/EyeInfo';
import { Frames } from './Types/Frames';
import { Lenses } from './Types/Lenses';
import { Payments } from './Types/Payments';

export interface ISell {
  customerRef: string;
  id: string;
  rightEye?: EyeInformation;
  leftEye?: EyeInformation;
  frames: Frames[];
  lenses: Lenses[];
  total: number;
  remains: number;
  payments: Payments[];
}
