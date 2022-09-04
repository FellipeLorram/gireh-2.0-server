import { Payment } from '../../../Entities/Payments';
import { IPaymentsRepository } from '../../../Repositories/Payments/Payment';

export class GetAllPayments {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private paymentsRepository: IPaymentsRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(): Promise<Payment[]> {
    const payments = await this.paymentsRepository.getAllPayments();
    return payments;
  }
}
