import { ISell } from '../../../Entities/Sell';
import { ISellRepository } from '../../../Repositories/Sell/Sell';

export class EditSellsUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private SellRepository: ISellRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(sellId: string, sell: ISell): Promise<ISell | null> {
    const Sell = await this.SellRepository.EditSell(sellId, sell);
    return Sell;
  }
}
