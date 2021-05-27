import express from 'express';
import { Logger } from 'winston';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { scopePerRequest, loadControllers } from 'awilix-express';
import swaggerOption from '../config/swaggerOptions';
import IConfig from './v1/interfaces/config';

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

  async start(container: any): Promise<void> {
    const specs = swaggerJsdoc(swaggerOption);
    this.app
      .use(cors({ credentials: true }))
      .use(express.urlencoded({ extended: true }))
      .use(express.json())
      .use(helmet())
      .use(scopePerRequest(container))
      .use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(specs))
      .use(morgan('combined', this.morganOption))
      .use(loadControllers('./routes/*.js', { cwd: __dirname }))
      .use('/', (req: express.Request, res: express.Response) => res.send('Welcome To Trending Language Analysis'));

    this.app.listen(this.config.port, () => {
      this.log.info(`App is running on port ${this.config.port}`);
    });
  }
}

export default Server;
