import { Payment } from '../../../Entities/Payments';
import { IPaymentsRepository } from '../../../Repositories/Payments/Payment';

export class AddPaymentUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private sellRepository: IPaymentsRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(payment: Payment, sellId: string): Promise<Payment | null> {
    const newPayment = await this.sellRepository.addPayment(sellId, payment);
    return newPayment;
  }
}
