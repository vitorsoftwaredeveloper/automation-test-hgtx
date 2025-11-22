Cypress.Commands.add("loginCodex", () => {
  const user = Cypress.env("API_USER");
  const pass = Cypress.env("API_PASS");

  cy.visit("https://core.hgtx.com.br/aplicativos/apps");

  cy.get("#loginInputEmail").should("be.visible").type(user);

  cy.get("#mat-input-1")
    .should("be.visible")
    .should("not.be.disabled")
    .type(pass);

  cy.get('button[type="submit"]').should("be.enabled").click();
});

Cypress.Commands.add("loginCreci", () => {
  const user = Cypress.env("API_USER");
  const pass = Cypress.env("API_PASS");

  cy.visit("https://creci-hgtxcore.goutron.com.br/aplicativos/apps");

  cy.get("#loginInputEmail").should("be.visible").type(user);

  cy.get("#mat-input-1")
    .should("be.visible")
    .should("not.be.disabled")
    .type(pass);

  cy.get('button[type="submit"]').should("be.enabled").click();
});
