import { ISell } from '../../../Entities/Sell';
import { ISellRepository } from '../../../Repositories/Sell/Sell';

export class GetAllSellsUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private SellRepository: ISellRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(): Promise<ISell[]> {
    const Sells = await this.SellRepository.GetAllSells();
    return Sells;
  }
}
