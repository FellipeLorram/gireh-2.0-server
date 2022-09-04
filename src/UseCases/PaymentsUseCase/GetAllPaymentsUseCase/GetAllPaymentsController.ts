import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetAllPayments } from './GetAllPaymentsUseCase';

export class GetAllPaymentsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getAllPaymentsUseCase: GetAllPayments,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const Payments = await this.getAllPaymentsUseCase
        .execute();

      return this.messenger.sendResponse(res, 200, Payments);
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
