import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetAllAppointmentsUseCase } from './GetAllAppointmentsUseCase';

export class GetAllAppointmentsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getAllAppointmentsUseCase: GetAllAppointmentsUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const appointments = await this.getAllAppointmentsUseCase
        .execute();

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
