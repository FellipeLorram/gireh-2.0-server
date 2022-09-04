import { IPaymentsRepository } from '../../../Repositories/Payments/Payment';

export class DeletePaymentUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private paymentRepository: IPaymentsRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(id: string): Promise<void> {
    await this.paymentRepository.removePayment(id);
  }
}
