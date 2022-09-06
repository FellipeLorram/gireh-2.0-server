import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { GetSingleAppointmentUseCase } from './GetSingleAppointmentUseCase';

export class GetSingleAppointmentController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getSingleAppointmentUseCase: GetSingleAppointmentUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const appointment = await this.getSingleAppointmentUseCase
        .execute(req.params.id);

      return this.messenger.sendResponse(res, 200, appointment);
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
