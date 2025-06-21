const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

// Path ke file swagger.yaml
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};