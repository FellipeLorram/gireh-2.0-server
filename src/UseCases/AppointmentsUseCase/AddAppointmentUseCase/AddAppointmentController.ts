import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { AddAppointmentUseCase } from './AddAppointmentUseCase';

export class AddCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private addAppointmentUseCase: AddAppointmentUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body.customerRef) {
        return this.messenger.sendResponse(res, 400, 'Customer ref unprovided');
      }

      const newAppointment = req.body;
      newAppointment.id = uuid();

      const sell = await this.addAppointmentUseCase
        .execute(newAppointment);

      return this.messenger.sendResponse(res, 200, sell);
    } catch (error) {
      if (error instanceof Error) {
        return this.messenger.sendResponse(res, 400, error.message || 'unexpected error');
      }

      return this.messenger.sendResponse(res, 500, 'unexpected error');
    }
  }
}
