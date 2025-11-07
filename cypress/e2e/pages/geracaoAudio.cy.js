/// <reference types="cypress" />

describe("Teste HGTX Codex - Geração de Áudio", () => {
  beforeEach(() => {
    cy.login()
  });

  it("deve visualizar a página de gravação de áudio com opções de geração e histórico.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");
      cy.contains("h1", "HGTX Codex").should("be.visible");
      cy.contains("Geração de Áudio").click();

      cy.contains("Gerar Áudio").should("be.visible");
      cy.contains("Histórico").should("be.visible");
      cy.contains("Converter Texto em Voz").should("be.visible");
      cy.get("textarea").should("be.visible");
      cy.contains("Tipo de Voz").should("be.visible");
      cy.contains("Gerar Áudio").should("be.visible").should("be.disabled");
    });
  });

  it("deve ser capaz de gerar áudio a partir de texto.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/gerar_audio").as("generateAudio");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Geração de Áudio").click();

      cy.get("textarea").type("Olá, este é um teste de geração de áudio.");

      cy.contains("Gerar Áudio").click();

      cy.contains("Gerando áudio").should("be.visible");

      cy.wait("@generateAudio").its("response.statusCode").should("eq", 200);

      cy.contains("Áudio gerado com sucesso").should("be.visible");
    });
  });

  it("deve ser capaz de visualizar mensagem de erro ao tentar gerar áudio quando a API falha.", () => {
    cy.contains("Codex 2.0").click();
    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.intercept("POST", "**//webhook/codex/gerar_audio", {
      statusCode: 500,
      body: { message: "Erro simulado na geração de áudio" },
    });

    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");
      cy.contains("Geração de Áudio").click();

      cy.get("textarea").type("Teste de falha na geração de áudio.");

      cy.contains("Gerar Áudio").click();

      cy.contains("Erro na geração", { timeout: 120000 }).should("be.visible");
    });
  });

  it("deve ser capaz de visualizar a opção de realizar o donwload do áudio gerado.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.intercept("POST", "**/webhook/codex/gerar_audio").as("generateAudio");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Geração de Áudio").click();

      cy.get("textarea").type("Olá, este é um teste de geração de áudio.");

      cy.contains("Gerar Áudio").click();
      cy.contains("Gerando áudio").should("be.visible");

      cy.contains("Áudio gerado com sucesso").should("be.visible");

      cy.wait("@generateAudio").its("response.statusCode").should("eq", 200);

      cy.contains("Baixar").scrollIntoView().should("be.visible");
    });
  });

  it("deve ser capaz de excluir áudio gerado.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**//webhook/codex/gerar_audio").as("generateAudio");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Geração de Áudio").click();

      cy.get("textarea").type("Olá, este é um teste de geração de áudio.");

      cy.contains("Gerar Áudio").click();
      cy.contains("Gerando áudio").should("be.visible");

      cy.wait("@generateAudio", { timeout: 200000 })
        .its("response.statusCode")
        .should("eq", 200);

      cy.contains("Áudio gerado com sucesso").should("be.visible");

      cy.contains("Excluir").scrollIntoView().should("be.visible").click();
      cy.contains("Áudio removido").should("be.visible");
    });
  });

  it("deve ser capaz de visualizar o histórico de áudios gerados.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**//webhook/codex/gerar_audio").as("generateAudio");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Geração de Áudio").click();

      cy.get("textarea").type("Olá, vc é meu amigo.");

      cy.contains("Gerar Áudio").click();
      cy.contains("Gerando áudio").should("be.visible");

      cy.wait("@generateAudio", { timeout: 200000 })
        .its("response.statusCode")
        .should("eq", 200);

      cy.contains("Áudio gerado com sucesso").should("be.visible");

      cy.contains("Histórico").click();

      cy.get("input[placeholder='Buscar por voz ou conteúdo...']").type(
        "Olá, vc é meu amigo."
      );

      cy.contains("Olá, vc é meu amigo.").should("be.visible");
    });
  });

  it("deve ser capaz de visualizar uma mensagem de erro ao gerar áudio a partir de texto.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/gerar_audio", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    }).as("generateAudio");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Geração de Áudio").click();

      cy.get("textarea").type("Olá, este é um teste de geração de áudio.");

      cy.contains("Gerar Áudio").click();

      cy.wait("@generateAudio").its("response.statusCode").should("eq", 500);

      cy.contains("Erro na geração").should("be.visible");
    });
  });
});
