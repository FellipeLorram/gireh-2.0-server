import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { ISell } from '../../../Entities/Sell';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { AddSellUseCase } from './AddSellUseCase';

export class AddCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private addSellUseCase: AddSellUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body.customerRef) {
        return this.messenger.sendResponse(res, 400, 'Customer ref unprovided');
      }

      const newSell = req.body as ISell;
      newSell.id = uuid();

      const sell = await this.addSellUseCase
        .execute(newSell);

      return this.messenger.sendResponse(res, 200, sell);
    } catch (error) {
      if (error instanceof Error) {
        return this.messenger.sendResponse(res, 400, error.message || 'unexpected error');
      }

      return this.messenger.sendResponse(res, 500, 'unexpected error');
    }
  }
}
