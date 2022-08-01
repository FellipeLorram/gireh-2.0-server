import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { EditCustomersUseCase } from './EditCustomersUseCase';

export class EditCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private editCustomersUseCase: EditCustomersUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const customer = await this.editCustomersUseCase
        .execute(req.body);

      return this.messenger.sendResponse(res, 200, customer);
    } catch (error) {
      if (error instanceof Error) {
        return this.messenger.sendResponse(res, 400, error.message || 'unexpected error');
      }

      return this.messenger.sendResponse(res, 500, 'unexpected error');
    }
  }
}
