class Application {
  server: any;

  Exception: any;

  constructor({ server }: any) {
    this.server = server;
  }

  async start(container: any): Promise<void> {
    await this.server.start(container);
  }
}

export default Application;
