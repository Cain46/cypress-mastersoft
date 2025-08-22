import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estoy en la pantalla de login', () => {
  cy.visit('/Account/Login'); // usa baseUrl
});

When('ingreso usuario {string} y contraseña {string} y cliquear {string}', (usuario, pass, boton) => {
  cy.get('#Usuario').clear().type(usuario, { force: true });
  cy.get('#Password').clear().type(pass, { force: true });

  cy.contains('button, [role="button"], a', boton, { matchCase: false }).click();
});

Then('debería permanecer en la pantalla de login', () => {
  cy.location('pathname', { timeout: 10000 }).should('include', '/Account/Login');
});

Then('debería ver un mensaje de error', () => {
  // Buscamos contenedores típicos de error y, si no hay, caemos a un texto común
  const candidatos = [
    '[role="alert"]',
    '.alert',
    '.alert-danger',
    '.validation-summary-errors',
    '.text-danger',
    '#validationMessage'
  ];
  cy.get('body').then(($b) => {
    const selector = candidatos.join(',');
    if ($b.find(selector).length) {
      cy.get(selector).first().should('be.visible');
    } else {
      cy.contains(/(incorrect|inválid|err[oó]r|credencial)/i).should('be.visible');
    }
  });
});
