import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { ICustomer } from '../../../Entities/Customer';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { AddCustomersUseCase } from './AddCustomersUseCase';

export class AddCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private addCustomersUseCase: AddCustomersUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, address, phone } = req.body as ICustomer;
      const id = uuid();
      const customer = await this.addCustomersUseCase
        .execute({
          id,
          name,
          address,
          phone,
        });

      return this.messenger.sendResponse(res, 200, customer);
    } catch (error) {
      if (error instanceof Error) {
        return this.messenger.sendResponse(res, 400, error.message || 'unexpected error');
      }

      return this.messenger.sendResponse(res, 500, 'unexpected error');
    }
  }
}
