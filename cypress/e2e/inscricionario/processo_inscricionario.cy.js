/// <reference types="cypress" />

describe("Teste HGTX CRECI - Processo Inscricionario", () => {
  beforeEach(() => {
    cy.loginCreci();
    cy.intercept("POST", "**/listar_apps_usuario/**", {
      statusCode: 200,
      body: {
        totalRegistros: 9,
        results: [
          {
            aplicativoID: 162,
            nome: "Consultar Censo - Pessoa Física",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/162",
            urlDestino: "https://creci-procinscr.goutron.com.br/auth/censo-pf",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNjIiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL2NlbnNvLXBmIiwianRpIjoiYmY5YTU4NGYtM2U3My00OWU3LTgzYzMtMDY4MWQ5NzFkZjVjIiwibmJmIjoxNzYzODAxMjUyLCJleHAiOjE3NjM4MDQ4NTIsImlhdCI6MTc2MzgwMTI1Mn0.LJ62nqqaENA2Cqi5BN0byADv4u0YoK52No6kiqA4bWk",
          },
          {
            aplicativoID: 158,
            nome: "Gerenciar Inscrições de Estágio",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/158",
            urlDestino: "https://creci-procinscr.goutron.com.br/auth/estagios",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNTgiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL2VzdGFnaW9zIiwianRpIjoiOTE4ZWQyMzUtY2ZjYi00OTUxLWJkOTMtNWUyZGFhMzBhMmI4IiwibmJmIjoxNzYzODAxMjUyLCJleHAiOjE3NjM4MDQ4NTIsImlhdCI6MTc2MzgwMTI1Mn0.QYpfw_ljP5eUC7HDHrmY_ak23w9stUyVj6JmNnftZKg",
          },
          {
            aplicativoID: 161,
            nome: "Gerenciar Inscrições de Pessoa Física",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/161",
            urlDestino:
              "https://creci-procinscr.goutron.com.br/auth/pessoa-fisica",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNjEiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL3Blc3NvYS1maXNpY2EiLCJqdGkiOiI5YWY0MTUwNi02NmExLTRlMjQtYWJjNS01YjYwZWY4NTBmMjIiLCJuYmYiOjE3NjM4MDEyNTIsImV4cCI6MTc2MzgwNDg1MiwiaWF0IjoxNzYzODAxMjUyfQ.hN3z7GbREg6HBSZ1aPzyiJuIEiZDQLBCKpdOaYMLlh8",
          },
          {
            aplicativoID: 164,
            nome: "Gerenciar Inscrições de Pessoa Jurídica",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/164",
            urlDestino:
              "https://creci-procinscr.goutron.com.br/auth/pessoa-juridica",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNjQiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL3Blc3NvYS1qdXJpZGljYSIsImp0aSI6ImNkY2Y4N2U4LWNlMDUtNDM0ZC1hODExLWZmNTdjNmVlNzg5OSIsIm5iZiI6MTc2MzgwMTI1MiwiZXhwIjoxNzYzODA0ODUyLCJpYXQiOjE3NjM4MDEyNTJ9.I8XQ7jVrNY49LhJkfBePjsk-QRbM0nJHualZ_ChyARQ",
          },
          {
            aplicativoID: 159,
            nome: "Inscrição - Estagiário",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/159",
            urlDestino:
              "https://creci-procinscr.goutron.com.br/auth/inscricao-estagios",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNTkiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL2luc2NyaWNhby1lc3RhZ2lvcyIsImp0aSI6IjhmYzFmZmVlLWVhM2MtNGIzOC1hZDQxLWY4MGVhM2Q0MzRkYSIsIm5iZiI6MTc2MzgwMTI1MiwiZXhwIjoxNzYzODA0ODUyLCJpYXQiOjE3NjM4MDEyNTJ9.RiwehGzxiwrp9DnNNj9FfuXXs1B-1h51mzyVmUTBkQ4",
          },
          {
            aplicativoID: 160,
            nome: "Inscrição - Pessoa Física",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/160",
            urlDestino:
              "https://creci-procinscr.goutron.com.br/auth/inscricao-pf",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNjAiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL2luc2NyaWNhby1wZiIsImp0aSI6IjU1YjVlZjg2LTRlYWYtNGQ2My05MGIzLWZlMjY1N2E0MjFiYiIsIm5iZiI6MTc2MzgwMTI1MiwiZXhwIjoxNzYzODA0ODUyLCJpYXQiOjE3NjM4MDEyNTJ9.e3c1iHMIUkx-ccF7WfEqiX9TBwhHNN4egX4XcbD6tbs",
          },
          {
            aplicativoID: 163,
            nome: "Inscrição - Pessoa Jurídica",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/163",
            urlDestino:
              "https://creci-procinscr.goutron.com.br/auth/inscricao-pj",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNjMiLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL2luc2NyaWNhby1waiIsImp0aSI6IjU2Y2M3YmYyLTgwODctNGEyZC1hNTJlLTc2ZjJkODdkNTcwZCIsIm5iZiI6MTc2MzgwMTI1MiwiZXhwIjoxNzYzODA0ODUyLCJpYXQiOjE3NjM4MDEyNTJ9.iRSatOR9hvqdG7ICIoZ9Ddo6hYKd6VRh2M8eWKo9zf0",
          },
          {
            aplicativoID: 157,
            nome: "Parâmetros Gerais",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/157",
            urlDestino:
              "https://creci-procinscr.goutron.com.br/auth/parametros",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxNTciLCJlc3RDb2QiOiIxIiwiZXN0Q29kRW5jcnlwdCI6Ind2YmFqRjRiWndGaldnT1pwYU84OXc9PSIsInVybERlc3Rpbm8iOiJodHRwczovL2NyZWNpLXByb2NpbnNjci5nb3V0cm9uLmNvbS5ici9hdXRoL3BhcmFtZXRyb3MiLCJqdGkiOiI3NzlhYmVhNi1lNDA3LTQ2ZTUtOTVmZS03YmZmNjhlYjA1MDYiLCJuYmYiOjE3NjM4MDEyNTIsImV4cCI6MTc2MzgwNDg1MiwiaWF0IjoxNzYzODAxMjUyfQ._jl-cXL2wNKBV2VfHLPHyMBcMCIqgBU_JD5SoYzKHFE",
          },
          {
            aplicativoID: 19,
            nome: "Processo Inscricionário",
            favorito: false,
            icone:
              "https://creci-hgtxcore-api.goutron.com.br/api/v1/image_render/app_ico/19",
            urlDestino:
              "https://creci-procinscr.goutron.com.br/auth/requerimentos",
            nativoMobile: false,
            disponivel: true,
            indisponivelMensagem: "",
            appShareUrl:
              "https://creci-hgtxcore.goutron.com.br/app-share-redir?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aXZvSUQiOiIxOSIsImVzdENvZCI6IjEiLCJlc3RDb2RFbmNyeXB0Ijoid3ZiYWpGNGJad0ZqV2dPWnBhTzg5dz09IiwidXJsRGVzdGlubyI6Imh0dHBzOi8vY3JlY2ktcHJvY2luc2NyLmdvdXRyb24uY29tLmJyL2F1dGgvcmVxdWVyaW1lbnRvcyIsImp0aSI6ImM5MDBlM2Q2LTU2MzAtNGU0MS04YTdkLTBkNzZjY2MzMjIwMCIsIm5iZiI6MTc2MzgwMTI1MiwiZXhwIjoxNzYzODA0ODUyLCJpYXQiOjE3NjM4MDEyNTJ9.WFkEYoq73gPa95ANTtlRxzhhRLwwqGnb8Dq5oixxseE",
          },
        ],
        errorCode: 0,
        errorMessage: "",
      },
    }).as("getApps");

    cy.contains("Processo Inscricionário").click();
  });

  it("deve ser capaz de visualizar a página de Processo Inscricionário.", () => {
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
});
