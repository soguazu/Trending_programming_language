const app = {
  serviceName: {
    doc: 'Microservice Name',
    format: '*',
    default: 'TrendingLanguage',
    env: 'SERVICE_NAME',
    sensitive: false,
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 5000,
    env: 'APP_PORT',
    sensitive: false,
  },
  apiVersion: {
    doc: 'The API version',
    format: '*',
    default: 'v1',
    env: 'API_VERSION',
    sensitive: false,
  },
  secret: {
    doc: 'App secret',
    format: '*',
    default: 'hfn{p$M@lO99v^Z',
    env: 'APP_SECRET',
    sensitive: true,
  },
  env: {
    doc: 'The application environment',
    format: ['production', 'development', 'test', 'qa', 'staging'],
    default: 'development',
    env: 'NODE_ENV',
    sensitive: false,
  },
};

export default app;
