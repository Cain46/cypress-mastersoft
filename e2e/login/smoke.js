import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que abro {string}', (url) => {
  cy.visit(url);
});

Then('debería ver el texto {string}', (texto) => {
  cy.contains(texto).should('be.visible');
});
