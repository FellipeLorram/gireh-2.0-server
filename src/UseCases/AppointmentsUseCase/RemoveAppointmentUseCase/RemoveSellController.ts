import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { DeleteSellsUseCase } from './RemoveSellUseCase';

export class DeleteSellController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private deleteSellUseCase: DeleteSellsUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.deleteSellUseCase
        .execute(req.params.id);

      return this.messenger.sendResponse(res, 200, 'Sell removed sucessfully');
    } catch (error) {
      if (error instanceof Error) {
        return this.messenger.sendResponse(res, 400, error.message || 'Unexpected error');
      }

      return this.messenger.sendResponse(res, 500, 'Unexpected error');
    }
  }
}
