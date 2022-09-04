import { Request, Response } from 'express';
import { IMessenger } from '../../../Utils/Messenger/Messenger';
import { EditSellsUseCase } from './EditSellUseCase';

export class EditSellsController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private editSellsUseCase: EditSellsUseCase,
    private messenger: IMessenger,
    // eslint-disable-next-line no-empty-function
  ) {
    this.messenger = messenger;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const sell = await this.editSellsUseCase
        .execute(req.params.id, req.body);

      return this.messenger.sendResponse(res, 200, sell);
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
