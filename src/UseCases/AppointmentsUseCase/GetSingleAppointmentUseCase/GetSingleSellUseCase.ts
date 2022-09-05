import { ISell } from '../../../Entities/Sell';
import { ISellRepository } from '../../../Repositories/Sell/Sell';

export class GetSingleSellUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private SellRepository: ISellRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(SellId: string): Promise<ISell | null> {
    const Sell = await this.SellRepository.GetSingleSell(SellId);
    return Sell;
  }
}
