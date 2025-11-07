/// <reference types="cypress" />

describe("Teste HGTX Codex - Geração de Áudio", () => {
  beforeEach(() => {
    cy.login()
  });

  it("deve visualizar a página de transcrição de áudio com opções de transcrição e histórico.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");
      cy.contains("h1", "HGTX Codex").should("be.visible");
      cy.contains("Transcrição de Áudio").click();

      cy.contains("Transcrição").should("be.visible");
      cy.contains("Histórico").should("be.visible");
      cy.contains("Converter Áudio em Texto").should("be.visible");
      cy.contains(
        "Envie um arquivo de áudio para transcrição (máx. 25MB)"
      ).should("be.visible");
      cy.contains(
        "Formatos: flac, m4a, mp3, mp4, mpeg, mpga, oga, ogg, wav, webm"
      ).should("be.visible");
      cy.get("label[for='audio-upload']").should("be.visible");
      cy.contains("Selecionar Arquivo").should("be.visible");
      cy.contains("Clique para selecionar ou arraste o arquivo").should(
        "be.visible"
      );
    });
  });

  it("deve ser capaz de transcrever áudio enviado", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/transcrever_audio").as(
      "transcribeAudio"
    );

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Transcrição de Áudio").click();

      const filePath = "cypress/downloads/audio.mp3";
      cy.readFile(filePath, "base64").then((fileContent) => {
        cy.get('input[type="file"]').then(($input) => {
          const blob = Cypress.Blob.base64StringToBlob(
            fileContent,
            "audio/mpeg"
          );
          const testFile = new File([blob], "audio.mp3", {
            type: "audio/mpeg",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          $input[0].files = dataTransfer.files;
          $input[0].dispatchEvent(new Event("change", { bubbles: true }));
        });
      });

      cy.contains("Transcrevendo áudio").should("be.visible");

      cy.wait("@transcribeAudio").its("response.statusCode").should("eq", 200);

      cy.contains("Transcrição concluída").should("be.visible");
      cy.contains("Transcrito").should("be.visible");

      cy.contains("Copiar").should("be.visible");
      cy.contains("Baixar").should("be.visible");
      cy.contains("Excluir").should("be.visible");
      cy.contains("Quer ser meu amigo?").should("be.visible");
    });
  });

  it("deve ser capaz de visualizar mensagem de erro ao transcrever áudio enviado.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/transcrever_audio", {
      statusCode: 500,
      body: { message: "Erro simulado" },
    }).as("getTranscribeAudio");

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Transcrição de Áudio").click();

      const filePath = "cypress/downloads/audio.mp3";
      cy.readFile(filePath, "base64").then((fileContent) => {
        cy.get('input[type="file"]').then(($input) => {
          const blob = Cypress.Blob.base64StringToBlob(
            fileContent,
            "audio/mpeg"
          );
          const testFile = new File([blob], "audio.mp3", {
            type: "audio/mpeg",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          $input[0].files = dataTransfer.files;
          $input[0].dispatchEvent(new Event("change", { bubbles: true }));
        });
      });

      cy.contains("Transcrevendo áudio").should("be.visible");

      cy.wait("@getTranscribeAudio")
        .its("response.statusCode")
        .should("eq", 500);

      cy.contains("Erro na transcrição").should("be.visible");
    });
  });

  it("deve ser capaz de excluir transcrição de áudio.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/transcrever_audio").as(
      "transcribeAudio"
    );

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Transcrição de Áudio").click();

      const filePath = "cypress/downloads/audio.mp3";
      cy.readFile(filePath, "base64").then((fileContent) => {
        cy.get('input[type="file"]').then(($input) => {
          const blob = Cypress.Blob.base64StringToBlob(
            fileContent,
            "audio/mpeg"
          );
          const testFile = new File([blob], "audio.mp3", {
            type: "audio/mpeg",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          $input[0].files = dataTransfer.files;
          $input[0].dispatchEvent(new Event("change", { bubbles: true }));
        });
      });
      cy.contains("Transcrevendo áudio").should("be.visible");

      cy.wait("@transcribeAudio", { timeout: 200000 })
        .its("response.statusCode")
        .should("eq", 200);

      cy.contains("Transcrição concluída").should("be.visible");

      cy.contains("Excluir").scrollIntoView().should("be.visible").click();
    });
  });

  it("deve ser capaz de navegar para a aba de histórico de transcrições e validar a lista de transcrições.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.intercept("POST", "**/webhook/codex/transcrever_audio").as(
      "transcribeAudio"
    );

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Transcrição de Áudio").click();

      const filePath = "cypress/downloads/audio.mp3";
      cy.readFile(filePath, "base64").then((fileContent) => {
        cy.get('input[type="file"]').then(($input) => {
          const blob = Cypress.Blob.base64StringToBlob(
            fileContent,
            "audio/mpeg"
          );
          const testFile = new File([blob], "audio.mp3", {
            type: "audio/mpeg",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          $input[0].files = dataTransfer.files;
          $input[0].dispatchEvent(new Event("change", { bubbles: true }));
        });
      });
      cy.contains("Transcrevendo áudio").should("be.visible");

      cy.wait("@transcribeAudio", { timeout: 200000 })
        .its("response.statusCode")
        .should("eq", 200);

      cy.contains("Transcrição concluída").should("be.visible");

      cy.contains("Histórico").scrollIntoView().should("be.visible").click();

      cy.contains("Quer ser meu amigo?").should("be.visible");
    });
  });

  it("deve ser capaz de gerar uma mensagem de erro ao tentar enviar um arquivo de áudio maior que 25MB.", () => {
    cy.contains("Codex 2.0").click();

    cy.intercept("POST", "**/aplicativos/gerar_aretrs").as("getApps");
    cy.wait("@getApps").its("response.statusCode").should("eq", 200);

    cy.wait(3000);
    // cy.contains("Codex 2.0").click();

    cy.origin("https://hgtx-codex.goutron.com.br", () => {
      cy.url().should("include", "codex");

      cy.contains("Transcrição de Áudio").click();

      const filePath = "cypress/downloads/big-audio.mp3";
      cy.readFile(filePath, "base64").then((fileContent) => {
        cy.get('input[type="file"]').then(($input) => {
          const blob = Cypress.Blob.base64StringToBlob(
            fileContent,
            "audio/mpeg"
          );
          const testFile = new File([blob], "big-audio.mp3", {
            type: "audio/mpeg",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
          $input[0].files = dataTransfer.files;
          $input[0].dispatchEvent(new Event("change", { bubbles: true }));
        });
      });

      cy.contains("Arquivo inválido").should("be.visible");
      cy.contains("Arquivo muito grande. Tamanho máximo: 25MB").should(
        "be.visible"
      );
    });
  });
});
