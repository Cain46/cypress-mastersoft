import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estoy en la pantalla de login', () => {
  cy.visit('/Account/Login');
});

When('ingreso mis credenciales y confirmo', () => {
  const user = Cypress.env('USER');
  const pass = Cypress.env('PASS');

  cy.get('#Usuario').clear().type(user);
  cy.get('#Password').clear().type(pass, { log: false });

  // Click en el botón de ingresar: id conocido o texto "Aceptar"
  cy.get('body').then(($b) => {
    if ($b.find('#butAceptar').length) {
      cy.get('#butAceptar').click();
    } else {
      cy.contains('button, [role="button"]', 'Aceptar', { matchCase: false }).click();
    }
  });
});

Then('debería ingresar al sistema', () => {
  // Genérico: ya no estoy en /Account/Login
  cy.location('pathname', { timeout: 10000 }).should('not.include', '/Account/Login');
  // (Opcional: agrega un selector propio si el panel tiene un id/testid estable)
  // cy.get('[data-testid="panel-principal"]').should('be.visible');
});
