import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { AddPaymentUseCase } from './AddPaymentUseCase';

export class AddPaymentController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private addPaymentUseCase: AddPaymentUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const newPayment = req.body;
      newPayment.id = uuid();

      const payment = await this.addPaymentUseCase
        .execute(newPayment, req.params.id);

      return this.messenger.sendResponse(res, 200, payment);
    } catch (error) {
      if (error instanceof Error) {
        return this.messenger.sendResponse(res, 400, error.message || 'unexpected error');
      }

      return this.messenger.sendResponse(res, 500, 'unexpected error');
    }
  }
}
