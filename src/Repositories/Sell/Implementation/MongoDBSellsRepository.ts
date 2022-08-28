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

  async GetSingleSell(id: string, customerRef: string): Promise<ISell | null> {
    const sell = await SellModel.findOne({ _id: id, customerRef });
    return sell;
  }

  async RemoveSell(id: string): Promise<void> {
    await SellModel.findOneAndDelete({ _id: id });
  }

  async EditSell(id: string, customerRef: string, Sell: ISell): Promise<ISell | null> {
    const editedSell = await SellModel.findOneAndUpdate({ _id: id, customerRef }, Sell);
    return editedSell;
  }

  async GetAllSells(): Promise<ISell[]> {
    return SellModel.find().sort({ created_at: -1 });
  }
}

export const sellsRepository = new MongoDBSellsRepository();
