import { ISell } from '../../../Entities/Sell';
import { ISellRepository } from '../../../Repositories/Sell/Sell';

export class AddSellUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private sellRepository: ISellRepository,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(sell: ISell): Promise<ISell | null> {
    const newCustomer = await this.sellRepository.AddSell(sell);
    return newCustomer;
  }
}
