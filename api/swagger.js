// api/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Pipeline',
    version: '1.0.0',
    description: 'Documentación automática con Swagger para el laboratorio CI/CD',
  },
  servers: [
    { url: 'http://localhost:3001', description: 'Local' } // <-- tu app corre en 3001
  ],
};

const options = {
  swaggerDefinition,
  apis: ['api/**/*.js'], // Ajusta si tus rutas viven en otro lugar
};

module.exports = swaggerJSDoc(options);
