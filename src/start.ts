import container from './container';

const { app } = container.cradle;

app.start(container).catch((error: any) => {
  // app.server.logger.error(error.stack);
  console.log(error.stack);
  process.exit();
});
