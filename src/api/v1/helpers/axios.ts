import axios from 'axios';

class Axios {
  url: string;

  logger: any;

  constructor({ logger }: any) {
    this.url = '';
    this.logger = logger;
  }

  async get(url: string): Promise<any> {
    this.url = url;
    let payload;
    try {
      const response = await axios.get(url);
      payload = response.data;
    } catch (err) {
      this.logger.error(err);
    }
    return payload;
  }
}

export default Axios;
