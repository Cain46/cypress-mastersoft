import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// URL base (usa cypress.config.js si querés usar baseUrl)
const APP_URL = 'http://192.168.0.50/PortalActoresWeb';

Given('que estoy en la pantalla de login', () => {
  cy.visit(`${APP_URL}/Account/Login`);
});

/* === Escenario: Visualización === */
Then('debería ver el formulario de login con campos y botones', () => {
  cy.get('#Usuario').should('be.visible');
  cy.get('#Password').should('be.visible');

  cy.get('body').then(($b) => {
    const hayButAceptar = $b.find('#butAceptar').length > 0;
    const hayButLogin = $b.find('#butLogin').length > 0;
    const hayAceptarTexto = $b.find('button:contains("Aceptar"), [role="button"]:contains("Aceptar")').length > 0;
    expect(hayButAceptar || hayButLogin || hayAceptarTexto, 'Existe botón de ingresar').to.be.true;
  });
});

/* === Login exitoso === */
When('ingreso mis credenciales y confirmo', () => {
  const user = Cypress.env('USER');
  const pass = Cypress.env('PASS');

  cy.get('#Usuario').clear().type(user);
  cy.get('#Password').clear().type(pass, { log: false });

  cy.get('body').then(($b) => {
    if ($b.find('#butAceptar').length) cy.get('#butAceptar').click();
    else cy.contains('button, [role="button"]', 'Aceptar', { matchCase: false }).click();
  });
});

Then('debería ingresar al sistema', () => {
  cy.location('pathname', { timeout: 10000 }).should('not.include', '/Account/Login');
});

/* === Login negativo === */
When('ingreso usuario {string} y contraseña {string} y cliquear {string}', (usuario, pass, boton) => {
  cy.get('#Usuario').clear().type(usuario);
  cy.get('#Password').clear().type(pass);
  cy.contains('button, [role="button"], a', boton, { matchCase: false }).click();
});

Then('debería permanecer en la pantalla de login', () => {
  cy.location('pathname', { timeout: 10000 }).should('include', '/Account/Login');
});

Then('debería ver un mensaje de error', () => {
  const candidatos = [
    '[role="alert"]', '.alert', '.alert-danger',
    '.validation-summary-errors', '.text-danger', '#validationMessage'
  ];
  const selector = candidatos.join(',');
  cy.get('body').then(($b) => {
    if ($b.find(selector).length) cy.get(selector).first().should('be.visible');
    else cy.contains(/(incorrect|inválid|err[oó]r|credencial)/i).should('be.visible');
  });
});

/* === Mostrar/Ocultar contraseña === */
When('escribo {string} en el campo contraseña', (pass) => {
  cy.get('#Password').clear().type(pass, { log: false });
});

When('activo el botón de mostrar contraseña', () => {
  cy.get('#Password').closest('div').within(() => {
    cy.get('button,[role="button"],[aria-label*="contra"],[class*="eye"]')
      .filter(':visible').first().click({ force: true });
  });
});

Then('el campo contraseña debe mostrarse en texto', () => {
  cy.get('#Password').should('have.attr', 'type', 'text');
});

When('desactivo el botón de mostrar contraseña', () => {
  cy.get('#Password').closest('div').within(() => {
    cy.get('button,[role="button"],[aria-label*="contra"],[class*="eye"]')
      .filter(':visible').first().click({ force: true });
  });
});

Then('el campo contraseña debe volver a estar oculto', () => {
  cy.get('#Password').should('have.attr', 'type', 'password');
});

/* === Recordar usuario === */
When('activo {string}', (label) => {
  cy.contains(/Recordar usuario/i)
    .parent()
    .find('input[type="checkbox"],input[type="radio"],button,[role="switch"]')
    .first()
    .click({ force: true });
});

When('escribo {string} en el campo usuario', (valor) => {
  cy.get('#Usuario').clear().type(valor);
});

When('recargo la página de login', () => {
  cy.reload();
  cy.location('pathname').should('include', '/Account/Login');
});

Then('el campo usuario debería mantener el valor {string}', (valor) => {
  cy.get('#Usuario').should('have.value', valor);
});

/* === Enlaces auxiliares === */
Then('debería ver el enlace {string}', (texto) => {
  cy.contains('a', texto, { matchCase: false })
    .should('be.visible')
    .and('have.attr', 'href')
    .and('not.be.empty');
});

/* === Click genérico === */
When('cliquear {string}', (label) => {
  cy.contains('button, a, [role="button"]', label, { matchCase: false }).click();
});
