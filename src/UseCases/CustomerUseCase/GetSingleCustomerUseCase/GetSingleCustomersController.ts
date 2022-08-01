import { Request, Response } from 'express';
import { GetSingleCustomersUseCase } from './GetSingleCustomersUseCase';

export class GetSingleCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getSingleCustomersUseCase: GetSingleCustomersUseCase,
    // eslint-disable-next-line no-empty-function
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const customer = await this.getSingleCustomersUseCase
        .execute(req.params.id);

      return res.status(200).json(customer);
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
