// swagger-server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Swagger 文档已启动：http://localhost:${PORT}/api-docs`);
});
