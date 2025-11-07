/// <reference types="cypress" />

describe("Teste HGTX Codex - Login", () => {
  beforeEach(() => {
    cy.visit("/aplicativos/apps");
  });

  it("O sistema deve permitir fazer o login", () => {
    cy.get("#loginInputEmail").type("qatestercodex@hgtx.com.br");
    cy.get("#mat-input-1").type("tester123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "apps");
    cy.contains("Codex 2.0").should("be.visible");
  });

  it("O sistema deve mostrar mensagem quando uma tentativa de login não tem sucesso devido as credenciais estarem incorretas.", () => {
    cy.get("#loginInputEmail").type("qatestercodex@hgtx.com.br");
    cy.get("#mat-input-1").type("tester");
    cy.get('button[type="submit"]').click();

    cy.contains("Usuário e/ou Senha inválidos. Tente novamente").should("be.visible");
  });
});
