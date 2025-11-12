/// <reference types="cypress" />

describe("Teste HGTX Codex - Bate-papo", () => {
  beforeEach(() => {
    cy.loginCodex()
  });

  it("deve visualizar a página de bate-papo com opções de novo chat e nova pasta", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");
      cy.contains("h1", "HGTX Codex").should("be.visible");
      cy.contains("Bate-papo").click();
      cy.contains("Novo Chat").should("be.visible");
      cy.contains("Nova Pasta").should("be.visible");
    });
  });

  it("deve visualizar mensagem de erro ao tentar criar um novo chat quando a tentativa de criação de novo chat falha.", () => {
    cy.contains("Codex 2.0").click();
    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.intercept("GET", "**/get_chat_folders/qatestercodex@hgtx.com.br", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    });

    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.contains("Bate-papo").click();
      cy.contains("Novo Chat").click();
      cy.contains("Erro ao carregar dados", { timeout: 120000 }).should(
        "be.visible"
      );
    });
  });

  it("deve criar uma nova pasta de chat e validar que está visível na tela", () => {
    cy.contains("Codex 2.0").click();
    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.contains("Bate-papo").click();
      cy.contains("Nova Pasta").click();

      cy.get("#folder-name", { timeout: 10000 })
        .should("be.visible")
        .should("not.be.disabled")
        .type("PASTA DE EXEMPLO", { force: true });

      cy.contains("Criar Pasta").should("be.visible").click({ force: true });

      cy.contains("PASTA DE EXEMPLO", { timeout: 15000 }).should("be.visible");
    });
  });

  it("deve visualizar mensagem de erro ao criar nova pasta quando a API falha", () => {
    cy.contains("Codex 2.0").click();
    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");

    cy.intercept("POST", "**/webhook/codex/post_folders", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    });

    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.contains("Bate-papo").click();
      cy.contains("Nova Pasta").click();

      cy.get("#folder-name", { timeout: 10000 })
        .should("be.visible")
        .should("not.be.disabled")
        .type("PASTA DE EXEMPLO", { force: true });

      cy.contains("Criar Pasta").should("be.visible").click({ force: true });

      cy.contains("Erro ao criar pasta", { timeout: 120000 }).should(
        "be.visible"
      );
    });
  });

  it("deve visualizar mensagem de erro quando o bot não consegue responder.", () => {
    cy.contains("Codex 2.0").click();
    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");

    cy.intercept("POST", "**/webhook/codex/message", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    }).as("messageError");

    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.contains("Bate-papo").click();

      cy.get('textarea[placeholder="Digite sua mensagem..."]')
        .should("be.visible")
        .type("oi{enter}");

      cy.get("body", { timeout: 120000 }).should(($body) => {
        const text = $body.text();
        expect(
          text.includes(
            "Desculpe, ocorreu um erro ao processar sua mensagem"
          ) || text.includes("Erro ao enviar mensagens.")
        ).to.be.true;
      });
    });
  });

  it("deve ser capaz de alterar a personaliadade do bot.", () => {
    cy.contains("Codex 2.0").click();
    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");

    cy.intercept("POST", "**/webhook/codex/message", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    }).as("messageError");

    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.contains("Bate-papo").click();
      cy.contains("Personalidade").click();

      cy.contains("Personalidade da IA").should("be.visible");
      cy.contains("Defina o estilo, tom ou função da IA nesta conversa").should(
        "be.visible"
      );
      cy.contains("Você é um assistente útil e prestativo.")
        .clear()
        .type("Vc é um teste.");

      cy.contains("Salvar").click();

      cy.contains("Personalidade").click();
      cy.contains("Vc é um teste.").should("be.visible");
    });
  });

  it("deve ser capaz de não alterar a personaliadade do bot caso aperte o botão cancelar.", () => {
    cy.contains("Codex 2.0").click();
    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");

    cy.intercept("POST", "**/webhook/codex/message", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    }).as("messageError");

    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.contains("Bate-papo").click();
      cy.contains("Personalidade").click();

      cy.contains("Personalidade da IA").should("be.visible");
      cy.contains("Defina o estilo, tom ou função da IA nesta conversa").should(
        "be.visible"
      );

      cy.contains("Você é um assistente útil e prestativo.")
        .clear()
        .type("Vc é um teste.");

      cy.contains("Cancelar").click();

      cy.contains("Personalidade").click();
      cy.contains("Você é um assistente útil e prestativo.").should(
        "be.visible"
      );
    });
  });
});
