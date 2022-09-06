import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { EditAppointmentUseCase } from './EditAppointmentUseCase';

export class EditAppointmentController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private editAppointmentUseCase: EditAppointmentUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const appointment = await this.editAppointmentUseCase
        .execute(req.params.id, req.body);

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
