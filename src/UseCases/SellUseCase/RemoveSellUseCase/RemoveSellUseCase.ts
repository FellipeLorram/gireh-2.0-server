import { ISellRepository } from '../../../Repositories/Sell/Sell';

export class DeleteSellsUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private SellsRepository: ISellRepository,
  // eslint-disable-next-line no-empty-function
  ) {
  }

  async execute(SellsId: string): Promise<void> {
    await this.SellsRepository.RemoveSell(SellsId);
  }
}
