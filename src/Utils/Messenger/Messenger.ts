import { Response } from 'express';

type Status = 200 | 400 | 500

export interface IMessenger {
  // eslint-disable-next-line no-unused-vars
  sendResponse(res: Response, status: Status, data: any): Response;
}

class Messenger implements IMessenger {
  sendResponse(res: Response, status: Status, data: any): Response {
    return res.status(status).json({
      message: data,
    });
  }
}

export const messenger = new Messenger();
