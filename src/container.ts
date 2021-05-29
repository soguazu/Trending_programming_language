import { createContainer, asValue, asClass, InjectionMode } from 'awilix';
import Server from './api/server';
import { logger, morganOption } from './infra/Logger';
import Application from './app/application';
import Config from './config';
import TrendingLanguageService from './api/v1/services/trending_languages';
import TrendingLanguageRepository from './api/v1/repository/trending_languages';
import Axios from './api/v1/helpers/axios';
import { ApiError } from './api/v1/error/ApiError';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  apiError: asValue(ApiError),
  axiosHelper: asClass(Axios),
  trendingLanguageRepository: asClass(TrendingLanguageRepository),
  trendingLanguageService: asClass(TrendingLanguageService),
  server: asClass(Server).singleton(),
  app: asClass(Application).singleton(),
  logger: asValue(logger),
  morganOption: asValue(morganOption),
  config: asValue(Config),
});

export default container;
