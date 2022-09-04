import { EyeInformation } from './Types/EyeInfo';
import { Frames } from './Types/Frames';
import { Lenses } from './Types/Lenses';

export interface ISell {
  customerRef: string;
  id: string;
  rightEye?: EyeInformation;
  leftEye?: EyeInformation;
  frames: Frames[];
  lenses: Lenses[];
  total: number;
  remains: number;
  createdAt?: Date;
}
