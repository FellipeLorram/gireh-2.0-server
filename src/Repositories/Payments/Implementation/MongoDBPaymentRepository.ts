import { Payment } from '../../../Entities/Payments';
import PaymentModel from '../../../Schema/Payments';
import { IPaymentsRepository } from '../Payment';

class MongoDBPaymentsRepository implements IPaymentsRepository {
  async addPayment(sellRef: string, payment: Payment): Promise<Payment> {
    return PaymentModel.create(payment);
  }

  async getAllPayments(): Promise<Payment[]> {
    return PaymentModel.find().sort({ created_at: -1 });
  }

  async getAllSellsPayments(sellRef: string): Promise<Payment[]> {
    return PaymentModel.find({ sellRef }).sort({ created_at: -1 });
  }

  async removePayment(id: string): Promise<void> {
    PaymentModel.findOneAndDelete({ id });
  }

  async getPayment(id: string): Promise<Payment | null> {
    return PaymentModel.findOne({ id });
  }
}

export const paymentsRepository = new MongoDBPaymentsRepository();
