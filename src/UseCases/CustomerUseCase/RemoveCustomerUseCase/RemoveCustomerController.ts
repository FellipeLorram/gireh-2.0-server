import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { DeleteCustomerUseCase } from './RemoveCustomerUseCase';

export class DeleteCustomerController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private deleteCustomerUseCase: DeleteCustomerUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.deleteCustomerUseCase
        .execute(req.params.id);

      return this.messenger.sendResponse(res, 200, 'Customer removed sucessfully');
    } catch (error) {
      if (error instanceof Error) {
        return this.messenger.sendResponse(res, 400, error.message || 'Unexpected error');
      }

      return this.messenger.sendResponse(res, 500, 'Unexpected error');
    }
  }
}
