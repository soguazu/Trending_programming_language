import { Request, Response } from 'express';
import { route, GET } from 'awilix-express';
import { ITrendingLanguageService } from '../interfaces/trending_languages';

@route('/api/v1/trending_languages')
export default class API {
  trendingLanguageService: ITrendingLanguageService;

  constructor({ trendingLanguageService }: { trendingLanguageService: ITrendingLanguageService }) {
    this.trendingLanguageService = trendingLanguageService;
  }

  @GET()
  async getUser(req: Request, res: Response): Promise<void> {
    res.send(await this.trendingLanguageService.getTrendingLanguage());
  }
}
