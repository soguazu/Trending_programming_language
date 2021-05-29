import { ITrendingLanguageRepository } from '../interfaces/trending_languages';

class TrendingLanguageService {
  trendingLanguageRepository: ITrendingLanguageRepository;

  constructor({ trendingLanguageRepository }: { trendingLanguageRepository: ITrendingLanguageRepository }) {
    this.trendingLanguageRepository = trendingLanguageRepository;
  }

  async getTrendingLanguage(): Promise<any> {
    return this.trendingLanguageRepository.getTrendingLanguage();
  }
}

export default TrendingLanguageService;
