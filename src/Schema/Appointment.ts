import { Schema, model } from 'mongoose';

const AppointmentSchema = new Schema({
  customerRef: { type: String, required: true },
  id: { type: String, required: true },
  anaminesis: { type: String, required: true },
  rightEye: {
    esf: '',
    cil: '',
    axle: '',
    add: '',
    acv: '',
    ophthalmoscopy: '',
  },
  leftEye: {
    esf: '',
    cil: '',
    axle: '',
    add: '',
    acv: '',
    ophthalmoscopy: '',
  },
  createdAt: { type: Date, default: Date.now() },
});

const AppointmentModel = model('Appointment', AppointmentSchema);

export default AppointmentModel;
