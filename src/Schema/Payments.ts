import { model, Schema } from 'mongoose';

const paymentsSchemma = new Schema({
  sellRef: { type: String, required: true },
  paymentType: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
  id: { type: String, required: true },
});

const PaymentModel = model('Payment', paymentsSchemma);

export default PaymentModel;
