import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetSingleCustomersUseCase } from './GetSingleCustomersUseCase';

export class GetSingleCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getSingleCustomersUseCase: GetSingleCustomersUseCase,
    private messenger: IMessenger,

    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const customer = await this.getSingleCustomersUseCase
        .execute(req.params.id);

      return this.messenger.sendResponse(res, 200, customer);
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
