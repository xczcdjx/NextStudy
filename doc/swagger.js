// lib/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Next.js API 文档',
            version: '1.0.0',
        },
    },
    apis: ['../src/app/api/**/*.ts'],

};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
