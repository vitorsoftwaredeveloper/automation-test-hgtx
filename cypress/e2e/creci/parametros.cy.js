/// <reference types="cypress" />

describe("Teste HGTX CRECI - Usuários", () => {
  beforeEach(() => {
    cy.loginCreci();
    cy.intercept("POST", "**/listar_apps_usuario/**", {
      statusCode: 200,
      body: {
        totalRegistros: 3,
        results: [
          {
            aplicativoID: 150,
            nome: "Botão do Pânico - Eventos",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/150",
            urlDestino:
              "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNTAiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLWFwcC1mcm9udGVuZC5oZ3R4LmNvbS5ici9jcmVjaS9ib3Rhby1wYW5pY28vZXZlbnRvcyIsImp0aSI6IjYwYjY0ZjkwLTYwMGItNGMzNy04MjVhLWIyNWFhZTFiZDdmNiIsIm5iZiI6MTc2Mjk2OTI4NSwiZXhwIjoxNzYyOTcyODg1LCJpYXQiOjE3NjI5NjkyODV9.bqrtAJ-rSOw2xC7ctNMkIGCvg-l1dWbxBTb5UkhfzC0",
          },
          {
            aplicativoID: 152,
            nome: "Botão do Pânico - Usuários",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/152",
            urlDestino:
              "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNTIiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLWFwcC1mcm9udGVuZC5oZ3R4LmNvbS5ici9jcmVjaS9ib3Rhby1wYW5pY28vY2FkYXN0cm9zIiwianRpIjoiMjEyMDFjNmMtNzk0OS00OGFlLWJlZTUtMTQ2ZTkzY2Q2MjU1IiwibmJmIjoxNzYyOTY5Mjg1LCJleHAiOjE3NjI5NzI4ODUsImlhdCI6MTc2Mjk2OTI4NX0.ovtgnXmYqfbOCIgIhcJcUBAdE23_drMAFzop3LK3180",
          },
          {
            aplicativoID: 151,
            nome: "Botão do Pânico Parâmetros",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/151",
            urlDestino:
              "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/parametros-gerais",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNTEiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLWFwcC1mcm9udGVuZC5oZ3R4LmNvbS5ici9jcmVjaS9ib3Rhby1wYW5pY28vcGFyYW1ldHJvcy1nZXJhaXMiLCJqdGkiOiJmZTdiM2FhMS1hOTdhLTQzNWItOWNiMS1iZDk1NDExNDNhYTMiLCJuYmYiOjE3NjI5NjkyODUsImV4cCI6MTc2Mjk3Mjg4NSwiaWF0IjoxNzYyOTY5Mjg1fQ.kpZVE8Jv_ykUGSxlUr2IQKVAUl9r07UcJH-ZSNLTVd8",
          },
        ],
        errorCode: 0,
        errorMessage: "",
      },
    }).as("getApps");

    cy.contains("Botão do Pânico Parâmetros").click();
  });

  it("deve ser capaz de visualizar a página de Botão do Pânico - Parâmetros.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.contains("p", "Textos do Sistema").should("be.visible");
        cy.contains("p", "Imagens do Sistema").should("be.visible");
        cy.contains("p", "Vídeos do Sistema").should("be.visible");
        cy.contains("button", "Cancelar Alterações")
          .should("be.visible")
          .should("not.be.enabled");
        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("not.be.enabled");
      }
    );
  });

  it("deve ser capaz de visualizar uma mensagem de erro quando não consegue carregar as informações da página de Botão do Pânico - Parâmetros.", () => {
    cy.intercept("GET", "**/obter_tour", { statusCode: 500 });

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.contains("p", "Textos do Sistema").should("be.visible");
        cy.contains("p", "Imagens do Sistema").should("be.visible");
        cy.contains("p", "Videos do Sistema").should("be.visible");
        cy.contains("Erro ao buscar os dados");
      }
    );
  });

  it("deve ser capaz de editar as informações da seção Textos do Sistema", () => {
    cy.intercept("POST", "**/editar_tour/**").as("editParameters");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Textos do Sistema").should("be.visible").click();

        cy.contains("p", "Tour Botão do Pânico").should("be.visible");

        let texto1, texto2, texto3, texto4;

        cy.get('input[name="texto1"]')
          .invoke("val")
          .then((val) => (texto1 = val));

        cy.get('input[name="texto2"]')
          .invoke("val")
          .then((val) => (texto2 = val));

        cy.get('input[name="texto3"]')
          .invoke("val")
          .then((val) => (texto3 = val));

        cy.get('input[name="texto4"]')
          .invoke("val")
          .then((val) => (texto4 = val));

        cy.then(() => {
          cy.log(texto1, texto2, texto3, texto4);

          cy.get('input[name="texto1"]')
            .clear()
            .type(texto1 + " ");
          cy.get('input[name="texto2"]')
            .clear()
            .type(texto2 + " ");
          cy.get('input[name="texto3"]')
            .clear()
            .type(texto3 + " ");
          cy.get('input[name="texto4"]')
            .clear()
            .type(texto4 + " ");
        });

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.wait(2000);

        cy.then(() => {
          cy.log(texto1, texto2, texto3, texto4);

          cy.get('input[name="texto1"]').clear().type(texto1);
          cy.get('input[name="texto2"]').clear().type(texto2);
          cy.get('input[name="texto3"]').clear().type(texto3);
          cy.get('input[name="texto4"]').clear().type(texto4);

          cy.contains("button", "Salvar Alterações")
            .should("be.visible")
            .should("be.enabled")
            .click();

          cy.contains("Dados salvos com sucesso").should("be.visible");
        });
      }
    );
  });

  it("deve ser capaz de ver uma mensagem de erro na tentativa de salvar as alterações ao editar as informações da seção Textos do Sistema", () => {
    cy.intercept("POST", "**/editar_tour", { statusCode: 500 }).as(
      "editParameters"
    );

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Textos do Sistema").should("be.visible").click();

        cy.contains("p", "Tour Botão do Pânico").should("be.visible");

        let texto1, texto2, texto3, texto4;

        cy.get('input[name="texto1"]')
          .invoke("val")
          .then((val) => (texto1 = val));

        cy.get('input[name="texto2"]')
          .invoke("val")
          .then((val) => (texto2 = val));

        cy.get('input[name="texto3"]')
          .invoke("val")
          .then((val) => (texto3 = val));

        cy.get('input[name="texto4"]')
          .invoke("val")
          .then((val) => (texto4 = val));

        cy.then(() => {
          cy.log(texto1, texto2, texto3, texto4);

          cy.get('input[name="texto1"]')
            .clear()
            .type(texto1 + " ");
          cy.get('input[name="texto2"]')
            .clear()
            .type(texto2 + " ");
          cy.get('input[name="texto3"]')
            .clear()
            .type(texto3 + " ");
          cy.get('input[name="texto4"]')
            .clear()
            .type(texto4 + " ");
        });

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.contains("Erro ao salvar os dados").should("be.visible");
      }
    );
  });

  it("deve ser capaz de editar as informações da seção Imagens do Sistema", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Imagens do Sistema").should("be.visible").click();

        cy.contains("p", "Tour 01 - Botão do Pânico").should("be.visible");
        cy.contains("p", "Tour 02 - Botão do Pânico").should("be.visible");
        cy.contains("p", "Tour 03 - Botão do Pânico").should("be.visible");

        const filePath = "cypress/downloads/creci.png";
        cy.readFile(filePath, "base64").then((fileContent) => {
          cy.get('input[type="file"]').each(($input, index) => {
            if (index < 4) {
              const blob = Cypress.Blob.base64StringToBlob(
                fileContent,
                "image/png"
              );

              const testFile = new File([blob], "creci.png", {
                type: "image/png",
              });

              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(testFile);

              $input[0].files = dataTransfer.files;
              $input[0].dispatchEvent(new Event("change", { bubbles: true }));
            }
          });
        });

        cy.scrollTo("bottom");

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.contains("Dados salvos com sucesso").should("be.visible");
      }
    );
  });

  it("deve ser capaz de ver uma mensagem de erro na tentativa de salvar as alterações ao editar as informações da seção Imagens do Sistema", () => {
    cy.intercept("POST", "**/editar_tour", { statusCode: 500 }).as(
      "editParameters"
    );

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Imagens do Sistema").should("be.visible").click();

        cy.contains("p", "Tour 01 - Botão do Pânico").should("be.visible");
        cy.contains("p", "Tour 02 - Botão do Pânico").should("be.visible");
        cy.contains("p", "Tour 03 - Botão do Pânico").should("be.visible");

        const filePath = "cypress/downloads/creci.png";
        cy.readFile(filePath, "base64").then((fileContent) => {
          cy.get('input[type="file"]').each(($input, index) => {
            if (index < 4) {
              const blob = Cypress.Blob.base64StringToBlob(
                fileContent,
                "image/png"
              );

              const testFile = new File([blob], "creci.png", {
                type: "image/png",
              });

              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(testFile);

              $input[0].files = dataTransfer.files;
              $input[0].dispatchEvent(new Event("change", { bubbles: true }));
            }
          });
        });

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.contains("Erro ao salvar os dados").should("be.visible");
      }
    );
  });

  it("deve ser capaz de editar as informações da seção Vídeos do Sistema", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Videos do Sistema").should("be.visible").click();

        cy.contains("p", "Tour 04 - Botão do Pânico").should("be.visible");

        const urlVideo = "https://www.youtube.com/watch?v=Maqr5dlCTvs";
        const urlVideo2 = "https://www.youtube.com/shorts/M8HMU4FFKfU";

        let url;
        cy.get('input[name="url"]')
          .invoke("val")
          .then((val) => (url = val));

        cy.then(() => {
          cy.get('input[name="url"]')
            .clear()
            .type(url === urlVideo ? urlVideo2 : urlVideo);
        });

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.contains("Dados salvos com sucesso").should("be.visible");
      }
    );
  });

  it("deve ser capaz de visualizar uma mensagem de erro na tentativa de salvar as alterações ao editar as informações da seção Vídeos do Sistema", () => {
    cy.intercept("POST", "**/editar_tour", { statusCode: 500 }).as(
      "editParameters"
    );

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Videos do Sistema").should("be.visible").click();

        cy.contains("p", "Tour 04 - Botão do Pânico").should("be.visible");

        const urlVideo = "https://www.youtube.com/watch?v=Maqr5dlCTvs";
        const urlVideo2 = "https://www.youtube.com/shorts/M8HMU4FFKfU";

        let url;
        cy.get('input[name="url"]')
          .invoke("val")
          .then((val) => (url = val));

        cy.then(() => {
          cy.get('input[name="url"]')
            .clear()
            .type(url === urlVideo ? urlVideo2 : urlVideo);
        });

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.contains("Erro ao salvar os dados").should("be.visible");
      }
    );
  });

  it("deve ser capaz de alterar todas as informações e cancelar qualquer alteração", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Textos do Sistema").should("be.visible").click();

        let texto1, texto2, texto3, texto4;

        cy.get('input[name="texto1"]')
          .invoke("val")
          .then((val) => (texto1 = val));

        cy.get('input[name="texto2"]')
          .invoke("val")
          .then((val) => (texto2 = val));

        cy.get('input[name="texto3"]')
          .invoke("val")
          .then((val) => (texto3 = val));

        cy.get('input[name="texto4"]')
          .invoke("val")
          .then((val) => (texto4 = val));

        cy.then(() => {
          cy.log(texto1, texto2, texto3, texto4);

          cy.get('input[name="texto1"]')
            .clear()
            .type(texto1 + " ");
          cy.get('input[name="texto2"]')
            .clear()
            .type(texto2 + " ");
          cy.get('input[name="texto3"]')
            .clear()
            .type(texto3 + " ");
          cy.get('input[name="texto4"]')
            .clear()
            .type(texto4 + " ");
        });

        cy.contains("p", "Imagens do Sistema").should("be.visible").click();

        const filePath = "cypress/downloads/creci.png";
        cy.readFile(filePath, "base64").then((fileContent) => {
          cy.get('input[type="file"]').each(($input, index) => {
            if (index < 4) {
              const blob = Cypress.Blob.base64StringToBlob(
                fileContent,
                "image/png"
              );

              const testFile = new File([blob], "creci.png", {
                type: "image/png",
              });

              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(testFile);

              $input[0].files = dataTransfer.files;
              $input[0].dispatchEvent(new Event("change", { bubbles: true }));
            }
          });
        });

        cy.contains("p", "Videos do Sistema").should("be.visible").click();
        const urlVideo = "https://www.youtube.com/watch?v=Maqr5dlCTvs";
        const urlVideo2 = "https://www.youtube.com/shorts/M8HMU4FFKfU";

        let url;
        cy.get('input[name="url"]')
          .invoke("val")
          .then((val) => (url = val));

        cy.then(() => {
          cy.get('input[name="url"]')
            .clear()
            .type(url === urlVideo ? urlVideo2 : urlVideo);
        });

        cy.contains("button", "Cancelar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.contains("button", "Cancelar Alterações")
          .should("be.visible")
          .should("not.be.enabled");

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("not.be.enabled");
      }
    );
  });

  it("deve ser capaz de visualizar uma mensagem de erro ao informar uma URL inválida na seção Videos do Sistema", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Paramêtros Gerais").should("be.visible");
        cy.wait(1000);

        cy.contains("p", "Videos do Sistema").should("be.visible").click();

        let url;
        cy.get('input[name="url"]')
          .invoke("val")
          .then((val) => (url = val));

        cy.then(() => {
          cy.get('input[name="url"]').clear().type("alguma coisa");
        });

        cy.contains("button", "Salvar Alterações")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.contains("URL inválida").should("be.visible");
      }
    );
  });
});
