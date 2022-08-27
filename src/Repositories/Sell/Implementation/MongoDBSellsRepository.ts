import { ISell } from '../../../Entities/Sell';
import SellModel from '../../../Schema/Sell';
import { ISellRepository } from '../Sell';

export class MongoDBSellsRepository implements ISellRepository {
  async AddSell(Sell: ISell): Promise<ISell> {
    const newSell = await SellModel.create(Sell);
    return newSell;
  }

  async GetAllSells(customerRef: string): Promise<ISell[]> {
    const allSells = await SellModel.find({ customerRef });
    return allSells;
  }

  async GetSingleSell(id: string, customerRef: string): Promise<ISell | null> {
    const sell = await SellModel.findOne({ id, customerRef });
    return sell;
  }

  async RemoveSell(id: string, customerRef: string): Promise<void> {
    await SellModel.findOneAndDelete({ id, customerRef });
  }

  async EditSell(id: string, customerRef: string, Sell: ISell): Promise<ISell | null> {
    const editedSell = await SellModel.findOneAndUpdate({ id, customerRef }, Sell);
    return editedSell;
  }
}

export const sellsRepository = new MongoDBSellsRepository();
