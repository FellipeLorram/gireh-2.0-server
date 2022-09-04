import { Payment } from '../../../Entities/Payments';
import { IPaymentsRepository } from '../../../Repositories/Payments/Payment';

export class GetAllSellPaymentsUse {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private paymentsRepository: IPaymentsRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(id: string): Promise<Payment[]> {
    const payments = await this.paymentsRepository.getAllSellsPayments(id);
    return payments;
  }
}
