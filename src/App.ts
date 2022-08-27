import express from 'express';
import helmet from 'helmet';
import { customerRoutes, sellRoutes } from './Routes/_Index';
// import {
//   homeRoutes,
//   patientRoutes,
//   tokenRoutes,
//   userRoutes,
// } from './Routes/_Index';

class App {
  app: any;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(helmet());
  }

  routes() {
    this.app.use('/', customerRoutes);
    this.app.use('/', sellRoutes);
    // this.app.use('/', tokenRoutes);
    // this.app.use('/', patientRoutes);
  }
}

export default new App().app;
