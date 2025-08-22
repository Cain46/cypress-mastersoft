const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: ['e2e/**/*.feature', 'cypress/e2e/**/*.feature'], // cubrimos tus carpetas
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },
    baseUrl: 'http://192.168.0.50/PortalActoresWeb', //Portal de Actores 
    viewportWidth: 1440,
    viewportHeight: 900,
    video: true,
    retries: 1,
  },
});
