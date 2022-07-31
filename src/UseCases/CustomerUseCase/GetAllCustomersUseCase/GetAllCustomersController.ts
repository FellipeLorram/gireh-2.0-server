import { Request, Response } from 'express';
import { GetAllCustomersUseCase } from './GetAllCustomersUseCase';

export class GetAllCustomersController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private getAllCustomersUseCase: GetAllCustomersUseCase,
    // eslint-disable-next-line no-empty-function
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const customers = await this.getAllCustomersUseCase
        .execute();

      return res.status(200).json(customers);
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
