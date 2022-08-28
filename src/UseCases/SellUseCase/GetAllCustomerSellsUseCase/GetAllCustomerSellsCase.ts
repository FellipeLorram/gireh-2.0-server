import { ISell } from '../../../Entities/Sell';
import { ISellRepository } from '../../../Repositories/Sell/Sell';

export class GetAllCustomerSellsUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private SellRepository: ISellRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(customerRef: string): Promise<ISell[] | null> {
    const Sell = await this.SellRepository.GetAllCustomerSells(customerRef);
    return Sell;
  }
}
