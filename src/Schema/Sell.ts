import { Schema, model } from 'mongoose';

const SellSchema = new Schema({
  customerRef: { type: String, required: true },
  id: { type: String, required: true },
  rightEye: {
    esf: '',
    cil: '',
    axle: '',
    add: '',
  },
  leftEye: {
    esf: '',
    cil: '',
    axle: '',
    add: '',
  },
  frames: [{
    name: '',
    price: 0,
  }],
  lenses: [{
    name: '',
    price: 0,
  }],
  total: { type: Number, required: true },
  remains: { type: Number, required: true },
  payments: [{
    type: '',
    value: 0,
  }],
  createdAt: { type: Date, required: false, default: Date.now() },
});

const SellModel = model('Sell', SellSchema);

export default SellModel;
