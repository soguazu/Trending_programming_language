import { createContainer, asValue, asClass } from 'awilix';
import Server from './api/server';
import { logger, morganOption } from './infra/Logger';
import Application from './app/application';
import Config from './config';
import HttpException from './api/v1/Exception/HttpException';

const container = createContainer();
container.register({
  server: asClass(Server).singleton(),
  // Application layer
  app: asClass(Application).singleton(),
  logger: asValue(logger),
  morganOption: asValue(morganOption),
  config: asValue(Config),
  httpException: asClass(HttpException).singleton(),
});

export default container;
