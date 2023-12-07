const express = require('express');
const userRoutes = require('./routes/user');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
var express = require('express')
var cors = require('cors')



const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use(cors())
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My App API',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/*.js'], // Path to your route files
  };
  
  const specs = swaggerJsdoc(options);
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, () => console.log('Server started on port 3000'));
