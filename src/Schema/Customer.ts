import { Schema, model } from 'mongoose';

const CustomerSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: Array, required: false },
});

export const CustomerModel = model('Customer', CustomerSchema);
