import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetAllCustomerAppointmentsUseCase } from './GetAllCustomerAppointmentsCase';

export class GetAllCustomerAppointmentsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getAllCustomerAppointmentsUseCase: GetAllCustomerAppointmentsUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const appointments = await this.getAllCustomerAppointmentsUseCase
        .execute(req.params.id);

      return this.messenger.sendResponse(res, 200, appointments);
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
