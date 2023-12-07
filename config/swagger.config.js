export default {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Aha test backend API',
        version: '1.0.0',
        description: 'API list for test.',
        license: {
          name: 'MIT',
          url: 'https://choosealicense.com/licenses/mit/',
        },
        contact: {
          name: 'Hoang Vu',
          url: 'https://github.com/vt132',
          email: 'hoangvt201201@gmail.com',
        },
      },
      basePath: '/api',
      servers: [
        {
          url: 'http://localhost:3000/api/',
        },
      ],
    },
    tags: [
      {
        "name": "User",
        "description": "API for users"
      }
    ],
    apis: [
      "src/models/*.js",
      "src/utils/helpers/*.js",
      "src/api/controllers/user/*.js",
      "src/api/controllers/user/edit/*.js",
      "src/api/controllers/user/auth/*.js"
    ]
  };