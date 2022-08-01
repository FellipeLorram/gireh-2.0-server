import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetAllCustomersUseCase } from './GetAllCustomersUseCase';

export class GetAllCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getAllCustomersUseCase: GetAllCustomersUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const customers = await this.getAllCustomersUseCase
        .execute();

      return this.messenger.sendResponse(res, 200, customers);
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
