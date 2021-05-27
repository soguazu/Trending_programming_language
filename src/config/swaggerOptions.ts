const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Trending Programming Language',
      version: '0.1.0',
      description: 'API for analyzing trending programming languages',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'grey white',
        url: '',
        email: 'soguazu@gmail.com',
      },
    },
    host: 'localhost:8080',
    basePath: '/api/v1',
    servers: [
      {
        url: 'http://localhost:8080/api/v1',
      },
    ],
  },
  apis: ['../../docs/*.yaml'],
};

export default options;
