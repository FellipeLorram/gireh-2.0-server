import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetAllSellsUseCase } from './GetAllSellsUseCase';

export class GetAllSellsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getAllSellUseCase: GetAllSellsUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const Sell = await this.getAllSellUseCase
        .execute();

      return this.messenger.sendResponse(res, 200, Sell);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message || 'Unexpected error.',
        });
      }

      return res.status(500).json({
        message: 'Unexpected error.',
      });
    }
  }
}
