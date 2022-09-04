/* eslint-disable no-unused-vars */
import { Payment } from '../../Entities/Payments';

export interface IPaymentsRepository {
  addPayment(sellRef: string, payment: Payment): Promise<Payment>;
  removePayment(id: string): Promise<void>;
  getAllPayments(): Promise<Payment[]>;
  getAllSellsPayments(sellRef: string): Promise<Payment[]>;
}
