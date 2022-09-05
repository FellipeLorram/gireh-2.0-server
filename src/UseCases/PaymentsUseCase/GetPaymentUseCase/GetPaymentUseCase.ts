import { Payment } from '../../../Entities/Payments';
import { IPaymentsRepository } from '../../../Repositories/Payments/Payment';

export class GetPaymentUse {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private paymentsRepository: IPaymentsRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(id: string): Promise<Payment | null> {
    const payments = await this.paymentsRepository.getPayment(id);
    return payments;
  }
}
