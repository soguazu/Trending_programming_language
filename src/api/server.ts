import express, { NextFunction, Request, Response } from 'express';
import { Logger } from 'winston';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { AwilixContainer } from 'awilix';
import { scopePerRequest, loadControllers } from 'awilix-express';
import swaggerOption from '../../docs/swaggerOptions';
import IConfig from './v1/interfaces/config';
import { errorMiddleware } from './v1/error/ApiError';

class Server {
  config: IConfig;

  log: Logger;

  app: any;

  morganOption: any;

  constructor({ config, logger, morganOption }: any) {
    this.config = config.getProperties();
    this.log = logger;
    this.app = express();
    this.morganOption = morganOption;
  }

  async start(container: AwilixContainer): Promise<void> {
    const specs = swaggerJsdoc(swaggerOption);

    this.app
      .use(compression())
      .use(express.urlencoded({ extended: true }))
      .use(express.json())
      .use(cors({ credentials: true }))
      .use(helmet())
      .use(morgan('combined', this.morganOption))
      .use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(specs))
      .use(scopePerRequest(container))
      .use(loadControllers('v1/routes/*.js', { cwd: __dirname }))
      .use(errorMiddleware)
      .use((req: Request, res: Response, next: NextFunction) => {
        const error: any = new Error(`Can't find ${req.originalUrl} on this server!`);
        error.status = 404;

        next(error);
      });

    this.app.listen(this.config.port, () => {
      this.log.info(`App is running on port ${this.config.port}`);
    });
  }
}

export default Server;
