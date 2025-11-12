/// <reference types="cypress" />

describe("Teste HGTX CRECI - Eventos", () => {
  beforeEach(() => {
    cy.loginCreci();
    cy.intercept("POST", "**/listar_apps_usuario/1/12", {
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
              "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
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

    cy.contains("Botão do Pânico - Eventos").click();
  });

  it.skip("deve ser capaz de visualizar a página de Botão do Pânico - Eventos.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.contains("h2", "Eventos").should("be.visible");
        cy.get("input[name='search']").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de inserir dados no campo Pesquisar e filtrar os eventos pela informação inserida.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[data-field="nome"]')
          .eq(1)
          .invoke("text")
          .then((name) => {
            cy.get("input[name='search']")
              .should("be.visible")
              .type(`${name.trim()}`)
              .type("{enter}")
              .should("be.visible", name.trim());
          });
      }
    );
  });

  it.skip("deve ser capaz de inserir dados no campo Pesquisar e limpar o input ao licar no botão de limpar.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[data-field="nome"]')
          .eq(1)
          .invoke("text")
          .then((name) => {
            cy.get("input[name='search']")
              .should("be.visible")
              .type(`${name.trim()}`)
              .should("be.visible", name.trim());
          });

        cy.get("svg[data-testid='CloseIcon']").should("be.visible").click();

        cy.get("input[name='search']").should("have.value", "");
      }
    );
  });
  it("deve ser capaz de abrir a modal de filtro.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[aria-label="filtrar"]').should("be.visible").click();
        // cy.get("input[placeholder='DD/MM/AAAA']").should("be.visible").focus();

        cy.get('input[inputmode="numeric"]').first().focus()

        cy.contains('label', 'Data Inicial').should('be.visible');


        // cy.get("input[placeholder='Estados']").should("be.visible");

        // cy.get("input[placeholder='Cidades']").should("be.visible");
      }
    );
  });
  it.skip("deve ser capaz de inserir dados na modal de filtro e filtrar por resultados que correspondam aos critérios.", () => {});
  it.skip("deve ser capaz de cancelar a ação na modal de filtro.", () => {});
  it.skip("deve ser capaz de limpar a modal de filtro.", () => {});
  it.skip("deve ser capaz de visualizar um grid listando informações dos eventos.", () => {});
  it.skip("deve ser capaz de visualizar detalhes dos eventos clicando sobre o ícone na coluna Ver detalhes.", () => {});
  it.skip("deve ser capaz de visualizar detalhes dos eventos com informações gerais.", () => {});
  it.skip("deve ser capaz de visualizar detalhes dos eventos com informações de arquivos.", () => {});
  it.skip("deve ser capaz de visualizar detalhes dos eventos com informações de arquivos e realizar o download de vídeo.", () => {});
  it.skip("deve ser capaz de visualizar detalhes dos eventos com informações de arquivos e realizar o download de áudio.", () => {});
  it.skip("deve ser capaz de visualizar opção de Ver Localização onde o evento irá acontecer.", () => {});
  it.skip("deve ser capaz de visualizar detalhes do usuário que criou o evento.", () => {});
});

// 5438
// 12/11/2025 - 09:59
// Fernando Melo

// São Paulo

// Região Imediata de São Paulo
