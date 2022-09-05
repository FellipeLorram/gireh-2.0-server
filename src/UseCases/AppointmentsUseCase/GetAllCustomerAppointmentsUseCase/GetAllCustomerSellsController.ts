import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetAllCustomerSellsUseCase } from './GetAllCustomerSellsCase';

export class GetAllCustomerSellsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getAllCustomerSellsUseCase: GetAllCustomerSellsUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const sell = await this.getAllCustomerSellsUseCase
        .execute(req.params.id);

      return this.messenger.sendResponse(res, 200, sell);
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
