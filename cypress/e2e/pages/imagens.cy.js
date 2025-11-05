/// <reference types="cypress" />

describe("Teste HGTX Codex - Imagens", () => {
  beforeEach(() => {
    cy.visit("https://core.hgtx.com.br/aplicativos/apps");

    cy.get("#loginInputEmail")
      .should("be.visible")
      .type("qatestercodex@hgtx.com.br");
    cy.get("#mat-input-1")
      .should("be.visible")
      .should("not.be.disabled")
      .type("tester123");
    cy.get('button[type="submit"]').should("be.enabled").click();

    cy.url({ timeout: 15000 }).should("include", "/aplicativos/apps");
  });

  it("deve ser capaz de gerar uma imagem.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/image_generator").as("getImages");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Imagens").click();

      cy.get("textarea")
        .should("be.visible")
        .type("eu quero uma imagem de um gato astronauta");

      cy.get("svg.lucide-sparkles").click({ force: true });

      cy.contains("Gerando sua imagem").should("be.visible");
      cy.contains("Isso pode levar alguns segundos").should("be.visible");

      cy.wait("@getImages").its("response.statusCode").should("eq", 200);

      cy.get("div.relative.aspect-square img", { timeout: 10000 })
        .should("be.visible")
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });

      cy.contains("Imagem gerada com sucesso").should("be.visible");
    });
  });

  it("deve ser capaz de visualizar uma mensagem de erro ao gerar uma imagem.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/image_generator", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    }).as("getImages");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Imagens").click();

      cy.get("textarea")
        .should("be.visible")
        .type("eu quero uma imagem de um gato astronauta");

      cy.get("svg.lucide-sparkles").click({ force: true });

      cy.wait("@getImages").its("response.statusCode").should("eq", 500);

      cy.contains("Erro na geração").should("be.visible");
    });
  });

  it("deve ser capaz de realizar o download da imagem gerada.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/image_generator").as("getImages");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Imagens").click();

      cy.get("textarea")
        .should("be.visible")
        .type("eu quero uma imagem de um gato astronauta");

      cy.get("svg.lucide-sparkles").click({ force: true });

      cy.contains("Gerando sua imagem").should("be.visible");
      cy.contains("Isso pode levar alguns segundos").should("be.visible");

      cy.wait("@getImages").then((interception) => {
        expect(interception.response?.statusCode).to.eq(200);
      });

      cy.wait(4000);
      cy.get("div.relative.aspect-square").trigger("mouseover");
      cy.contains("Baixar").should("exist").click({ force: true });

      cy.contains("Download iniciado").should("be.visible");
    });
  });

  it("deve ser capaz de excluir a imagem gerada.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/image_generator").as("getImages");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Imagens").click();

      cy.get("textarea")
        .should("be.visible")
        .type("eu quero uma imagem de um gato astronauta");

      cy.get("svg.lucide-sparkles").click({ force: true });

      cy.contains("Gerando sua imagem").should("be.visible");
      cy.contains("Isso pode levar alguns segundos").should("be.visible");

      cy.wait("@getImages").then((interception) => {
        expect(interception.response?.statusCode).to.eq(200);
      });

      cy.wait(4000);
      cy.get("div.relative.aspect-square").trigger("mouseover");
      cy.contains("Excluir").should("exist").click({ force: true });

      cy.contains("Imagem removida").should("be.visible");
    });
  });

  it("deve ser capaz inserir busca e não visualizar imagem gerada.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/image_generator").as("getImages");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Imagens").click();

      cy.contains("Histórico").click();

      cy.get("input[placeholder='Buscar por descrição...']").type(
        "cachorro na lua"
      );

      cy.contains("Nenhuma imagem encontrada").should("be.visible");
    });
  });

  it("deve ser capaz de visualizar histórico com última imagem gerada.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/image_generator").as("getImages");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Imagens").click();

      cy.get("textarea")
        .should("be.visible")
        .type("eu quero uma imagem de um gato astronauta");

      cy.get("svg.lucide-sparkles").click({ force: true });

      cy.contains("Gerando sua imagem").should("be.visible");
      cy.contains("Isso pode levar alguns segundos").should("be.visible");

      cy.wait("@getImages").then((interception) => {
        expect(interception.response?.statusCode).to.eq(200);
      });

      cy.contains("Histórico").click();

      cy.get("input[placeholder='Buscar por descrição...']").type(
        "eu quero uma imagem de um gato astronauta"
      );

      cy.contains("Nenhuma imagem encontrada").should("not.exist");
    });
  });
});
