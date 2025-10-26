/// <reference types="cypress" />

describe("Teste HGTX Codex - Login", () => {
  beforeEach(() => {
    cy.visit("https://core.hgtx.com.br/aplicativos/apps");
  });

  it("deve ser capaz de realizar o login", () => {
    cy.get("#loginInputEmail").type("qatestercodex@hgtx.com.br");
    cy.get("#mat-input-1").type("tester123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "apps");
    cy.contains("Codex 2.0").should("be.visible");
  });

  it("deve ser capaz de visualizar um erro de login", () => {
    cy.get("#loginInputEmail").type("qatestercodex@hgtx.com.br");
    cy.get("#mat-input-1").type("tester");
    cy.get('button[type="submit"]').click();

    cy.contains("Usuário e/ou Senha inválidos. Tente novamente").should("be.visible");
  });
});
