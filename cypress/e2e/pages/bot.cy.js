/// <reference types="cypress" />

describe("Teste HGTX Codex - Bot", () => {
  beforeEach(() => {
    cy.visit("/aplicativos/apps");

    cy.get("#loginInputEmail")
      .should("be.visible")
      .type("qatestercodex@hgtx.com.br");


    cy.get("#mat-input-1")
      .should("be.visible")
      .should("be.enabled")
      .type("tester123");

    cy.get('button[type="submit"]').should("be.enabled").click();

    cy.url({ timeout: 15000 }).should("include", "/aplicativos/apps");

    cy.contains("Codex 2.0").click();

  });

  it("deve visualizar o submenu BOTS e navegar até ele.", () => {

     cy.contains("Bots").click()
  });

});
