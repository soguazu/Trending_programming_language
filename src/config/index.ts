import convict from 'convict';
import dotEnvExtended from 'dotenv-extended';
import appConfig from './app';

dotEnvExtended.load({
  encoding: 'utf8',
  silent: false,
  path: '.env',
  defaults: '.defaults.env',
  schema: '.schema.env',
  errorOnMissing: true,
  errorOnExtra: false,
  errorOnRegex: false,
  includeProcessEnv: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false,
});

const configCombine = { ...appConfig };

const config = convict(configCombine);

config.validate({ allowed: 'strict' });

export default config;
