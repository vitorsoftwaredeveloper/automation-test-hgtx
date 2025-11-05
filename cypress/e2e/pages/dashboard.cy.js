/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://core.hgtx.com.br/aplicativos/apps");
    cy.get("#loginInputEmail").type("qatestercodex@hgtx.com.br");
    cy.get("#mat-input-1").type("tester123");
    cy.get('button[type="submit"]').click();
  });

  it("deve ser capaz de visualizar a página da inicial", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");

    cy.wait("@getApps").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      // cy.contains("Codex 2.0").click();

      cy.origin("https://hgtx-codex.goutron.com.br", () => {
        cy.url().should("include", "codex");
        cy.contains("h1", "HGTX Codex").should("be.visible");
        cy.contains("Bate-papo").should("be.visible");
        cy.contains("Imagens").should("be.visible");
        cy.contains("Transcrição de Áudio").should("be.visible");
        cy.contains("Geração de Áudio").should("be.visible");
        cy.contains("Bots").should("be.visible");
        cy.contains("Agente de Parecer").should("be.visible");
      });
    });
  });
});
