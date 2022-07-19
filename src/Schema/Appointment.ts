import { Schema, model } from 'mongoose';

const AppointmentSchema = new Schema({
  customerRef: { type: String, required: true },
  id: { type: String, required: true },
  anaminesis: { type: String, required: true },
  rightEye: {
    esf: { type: String, required: false },
    cil: { type: String, required: false },
    axle: { type: String, required: false },
    add: { type: String, required: false },
    acv: { type: String, required: false },
    ophthalmoscopy: { type: String, required: false },
  },
  leftEye: {
    esf: { type: String, required: false },
    cil: { type: String, required: false },
    axle: { type: String, required: false },
    add: { type: String, required: false },
    acv: { type: String, required: false },
    ophthalmoscopy: { type: String, required: false },
  },
});

const AppointmentModel = model('Appointment', AppointmentSchema);

export default AppointmentModel;
