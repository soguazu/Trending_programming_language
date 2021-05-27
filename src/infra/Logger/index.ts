import buildDevLogger from './dev_logger';
import buildProdLogger from './prod_logger';

function init() {
  let logger: any = null;
  if (process.env.NODE_ENV === 'development') {
    logger = buildDevLogger();
  } else {
    logger = buildProdLogger();
  }
  return logger;
}

export const logger = init();

export const morganOption: any = {
  stream: {
    write(message: string) {
      logger.info(message.trim());
    },
  },
};
