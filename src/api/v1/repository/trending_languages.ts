/* eslint-disable class-methods-use-this */

class TrendingLanguageRepository {
  axios: any;

  constructor({ axiosHelper }: any) {
    this.axios = axiosHelper;
  }

  async getTrendingLanguage(): Promise<any> {
    const dateString = await this.getDate();

    const url = `https://api.github.com/search/repositories?q=created:>${dateString}&sort=stars&order=desc&per_page=100`;

    const trendingRepositories = await this.axios.get(url);

    const payload = await this.analyzeRepositories(trendingRepositories.items);

    return payload;
  }

  async getDate(): Promise<string> {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date.toISOString().split('T')[0];
  }

  async analyzeRepositories(repositories: Array<any>): Promise<any> {
    const languagesData: any = {};

    for (let i = 0; i < repositories.length; i += 1) {
      if (!languagesData[repositories[i].language]) {
        if (repositories[i].language) {
          languagesData[repositories[i].language] = {};
          languagesData[repositories[i].language].total = 1;
          languagesData[repositories[i].language].repoList = [repositories[i].url];
        }
      } else {
        languagesData[repositories[i].language].total += 1;
        languagesData[repositories[i].language].repoList.push(repositories[i].url);
      }
    }

    return languagesData;
  }
}

export default TrendingLanguageRepository;
