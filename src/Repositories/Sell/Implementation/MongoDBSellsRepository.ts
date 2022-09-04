import { ISell } from '../../../Entities/Sell';
import SellModel from '../../../Schema/Sell';
import { ISellRepository } from '../Sell';

class MongoDBSellsRepository implements ISellRepository {
  async AddSell(Sell: ISell): Promise<ISell> {
    const newSell = await SellModel.create(Sell);
    return newSell;
  }

  async GetAllCustomerSells(customerRef: string): Promise<ISell[] | []> {
    const allCustomerSells = await SellModel.find({ customerRef });
    return allCustomerSells;
  }

  async GetSingleSell(id: string): Promise<ISell | null> {
    const sell = await SellModel.findOne({ id });
    return sell;
  }

  async RemoveSell(id: string): Promise<void> {
    await SellModel.findOneAndDelete({ id });
  }

  async EditSell(id: string, Sell: ISell): Promise<ISell | null> {
    const editedSell = await SellModel.findOneAndUpdate({ id }, Sell);
    return editedSell;
  }

  async GetAllSells(): Promise<ISell[]> {
    return SellModel.find().sort({ created_at: -1 });
  }
}

export const sellsRepository = new MongoDBSellsRepository();
