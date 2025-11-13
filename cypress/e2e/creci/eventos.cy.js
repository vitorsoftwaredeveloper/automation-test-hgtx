/// <reference types="cypress" />

describe("Teste HGTX CRECI - Eventos", () => {
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

  it.skip("deve ser capaz de visualizar um grid listando informações dos eventos.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.viewport(1920, 1080);

        cy.contains("ID").should("be.visible");
        cy.contains("Data e Hora").should("be.visible");
        cy.contains("Usuário").should("be.visible");
        cy.contains("Estado").should("be.visible");
        cy.contains("Cidade").should("be.visible");
        cy.contains("Ver Detalhes").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de inserir dados no campo Pesquisar e filtrar os eventos pela informação inserida.", () => {
    let count = 0;

    cy.intercept(
      "GET",
      "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[data-field="nome"]')
          .not(":first")
          .each(($cell) => {
            expect($cell.text().trim()).to.include(name);
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

  it.skip("deve ser capaz de abrir a modal de filtro.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[aria-label="filtrar"]').should("be.visible").click();

        cy.get('input[placeholder="DD/MM/AAAA"]').eq(0).focus();
        cy.contains("label", "Data Inicial").should("be.visible");

        cy.get('input[placeholder="DD/MM/AAAA"]').eq(1).focus();
        cy.contains("label", "Data Final").should("be.visible");

        cy.get('input[role="combobox"]').eq(0).focus();
        cy.contains("label", "Estados").should("be.visible");

        cy.get('input[role="combobox"]').eq(1).focus();
        cy.contains("label", "Cidade").should("be.visible");

        cy.contains("button", "Filtrar").should("be.visible");
        cy.contains("button", "Cancelar").should("be.visible");
        cy.contains("button", "Limpar Filtros").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de inserir dados na modal de filtro e filtrar por resultados que correspondam apenas ao estado de São Paulo.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[data-testid="ArrowDropDownIcon"]')
          .should("be.visible")
          .parent()
          .click();
        cy.get('[data-value="25"]').should("be.visible").click();

        cy.scrollTo("top");

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.contains("button", "Filtrar").click();

        cy.get('[data-field="estado"]')
          .not(":first")
          .then(($cells) => {
            const valorBase = $cells.first().text().trim();
            cy.wrap($cells).each(($cell) => {
              expect($cell.text().trim()).to.eq(valorBase);
            });
          });
      }
    );
  });

  it.skip("deve ser capaz de inserir dados na modal de filtro e filtrar por resultados que correspondam apenas a cidade de São Paulo.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[data-testid="ArrowDropDownIcon"]')
          .should("be.visible")
          .parent()
          .click();
        cy.get('[data-value="25"]').should("be.visible").click();

        cy.scrollTo("top");

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(1).focus().type("São Paulo");

        cy.contains("button", "Filtrar").click();

        cy.wait(2000);

        cy.get('[data-field="cidade"]')
          .not(":first")
          .then(($cells) => {
            const valorBase = $cells.first().text().trim();
            cy.wrap($cells).each(($cell) => {
              expect($cell.text().trim()).to.eq(valorBase);
            });
          });
      }
    );
  });

  it.skip("deve ser capaz de inserir dados na modal de filtro e filtrar por resultados que correspondam com Data e Hora a partir da data informada.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        const now = new Date();

        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();

        const dataFormatada = `${day}/${month}/${year}`;

        cy.get('[data-testid="ArrowDropDownIcon"]')
          .should("be.visible")
          .parent()
          .click();

        cy.get('[data-value="25"]').should("be.visible").click();

        cy.scrollTo("top");

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[placeholder="DD/MM/AAAA"]')
          .eq(0)
          .focus()
          .clear()
          .type(dataFormatada);

        cy.contains("button", "Filtrar").click();

        cy.wait(2000);

        cy.get("body").then(($body) => {
          if ($body.text().includes("Não há registros")) {
            cy.contains("Não há registros").should("be.visible");
          } else {
            cy.get('[data-field="data"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text().trim()).to.include(dataFormatada);
              });
          }
        });
      }
    );
  });

  it.skip("deve ser capaz de cancelar a ação na modal de filtro.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[aria-label="filtrar"]').click();

        cy.contains("button", "Cancelar").click();

        cy.contains("Filtros").should("not.exist");
      }
    );
  });

  it.skip("deve ser capaz de fechar a modal de filtro.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.get('[aria-label="filtrar"]').click();

        cy.get("svg[data-testid='CloseIcon']").should("be.visible").click();

        cy.contains("Filtros").should("not.exist");
      }
    );
  });

  it.skip("deve ser capaz de visualizar informações gerais do evento clicando sobre o ícone na coluna Ver detalhes.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.viewport(1920, 1080);

        cy.get('[data-field="actions"]').eq(1).click();
        cy.contains("Detalhes do Evento").should("be.visible");
        cy.contains("div", "Geral").should("be.visible");
        cy.contains("div", "Arquivos").should("be.visible");

        cy.contains("p", "Evento").should("be.visible");
        cy.contains("p", "Data").should("be.visible");
        cy.contains("p", "Hora").should("be.visible");
        cy.contains("p", "Usuário").should("be.visible");
        cy.contains("p", "Estado").should("be.visible");
        cy.contains("p", "Cidade").should("be.visible");

        cy.contains("p", "Usuário Responsável").should("be.visible");
        cy.contains("p", "Nome Completo").should("be.visible");
        cy.contains("p", "CPF").should("be.visible");
        cy.contains("p", "RG").should("be.visible");
        cy.contains("p", "Data de Emissão").should("be.visible");
        cy.contains("p", "Data de Nascimento").should("be.visible");
        cy.contains("p", "DDD").should("be.visible");
        cy.contains("p", "Telefone").should("be.visible");
        cy.contains("p", "E-mail").should("be.visible");

        cy.contains("a", "Ver Localização").should("be.visible");
        cy.contains("button", "Ver detalhes do usuário").should("be.visible");
        cy.contains("button", "Voltar").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro ao obter os detalhes dos eventos clicando sobre o ícone na coluna Ver detalhes.", () => {
    cy.intercept("GET", "**/obter_evento/**", {
      statusCode: 500,
      body: {
        errorCode: 500,
        errorMessage: "Erro interno do servidor.",
      },
    }).as("getEventDetailsError");

    cy.intercept("GET", "**/obter_arquivos/**", {
      statusCode: 500,
      body: {
        errorCode: 500,
        errorMessage: "Erro interno do servidor.",
      },
    }).as("getFilesError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.viewport(1920, 1080);

        cy.get('[data-field="actions"]').eq(1).click();

        cy.wait("@getEventDetailsError");

        cy.contains(
          "Não foi possível obter os dados. Falha na comunicação com o servidor."
        ).should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar informações de arquivos do evento clicando sobre o ícone na coluna Ver detalhes.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.viewport(1920, 1080);

        cy.get('[data-field="actions"]').eq(3).click();
        cy.contains("Detalhes do Evento").should("be.visible");
        cy.contains("button", "Geral").should("be.visible");
        cy.contains("button", "Arquivos").should("be.visible").click();
        cy.contains("ID").should("be.visible");
        cy.contains("Nome").should("be.visible");
        cy.contains("Data de Criação").should("be.visible");
        cy.contains("Horário de Criação").should("be.visible");
        cy.contains("Duração").should("be.visible");
        cy.contains("Tipo").should("be.visible");
        cy.contains("Tamanho").should("be.visible");

        cy.get("body").then(($body) => {
          if ($body.text().includes("Não há registros")) {
            cy.contains("Não há registros").should("be.visible");
          } else {
            cy.get('[data-field="id"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text()).to.not.be.empty;
              });
            cy.get('[data-field="nomeUsuario"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text()).to.not.be.empty;
              });
            cy.get('[data-field="dataCriacao"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text()).to.not.be.empty;
              });
            cy.get('[data-field="horarioCriacao"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text()).to.not.be.empty;
              });
            cy.get('[data-field="duracao"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text()).to.not.be.empty;
              });
            cy.get('[data-field="tipo"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text()).to.not.be.empty;
              });
            cy.get('[data-field="tamanho"]')
              .not(":first")
              .each(($cell) => {
                expect($cell.text()).to.not.be.empty;
              });
          }
        });
      }
    );
  });

  it.skip("deve ser capaz de visualizar detalhes dos eventos com informações de arquivos e realizar o download de vídeo.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.get('[data-field="nome"]')
          .not(":first")
          .each(($cell) => {
            const rowText = $cell.parent().text();

            if (
              rowText.includes("Fernando Melo") &&
              rowText.includes("Região Imediata de São Paulo")
            ) {
              cy.wrap($cell.parent())
                .find(
                  '[data-field="verDetalhes"] button, [aria-label="Ver Detalhes"], svg'
                )
                .scrollIntoView()
                .should("be.visible")
                .click({ force: true });

              cy.contains("button", "Arquivos").should("be.visible").click();

              cy.get('[data-field="tipo"]')
                .not(":first")
                .each(($cell) => {
                  const rowText = $cell.parent().text();

                  if (rowText.includes("Video")) {
                    cy.wrap($cell.parent())
                      .find(
                        '[data-field="actions"] button, [aria-label="Download"]'
                      )
                      .should("be.visible")
                      .click({ force: true });

                    cy.contains("Download realizado com sucesso", {
                      timeout: 10000,
                    })
                      .should("be.visible")
                      .click();
                  }
                });
            }
          });
      }
    );
  });

  it.skip("deve ser capaz de visualizar detalhes dos eventos com informações de arquivos e realizar o download de áudio.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.get('[data-field="nome"]')
          .not(":first")
          .each(($cell) => {
            const rowText = $cell.parent().text();

            if (
              rowText.includes("Fernando Melo") &&
              rowText.includes("Região Imediata de São Paulo")
            ) {
              cy.wrap($cell.parent())
                .find(
                  '[data-field="verDetalhes"] button, [aria-label="Ver Detalhes"], svg'
                )
                .scrollIntoView()
                .should("be.visible")
                .click({ force: true });

              cy.contains("button", "Arquivos").should("be.visible").click();

              cy.get('[data-field="tipo"]')
                .not(":first")
                .each(($cell) => {
                  const rowText = $cell.parent().text();

                  if (rowText.includes("Audio")) {
                    cy.wrap($cell.parent())
                      .find(
                        '[data-field="actions"] button, [aria-label="Download"]'
                      )
                      .should("be.visible")
                      .click({ force: true });

                    cy.contains("Download realizado com sucesso", {
                      timeout: 10000,
                    })
                      .should("be.visible")
                      .click();
                  }
                });
            }
          });
      }
    );
  });

  it.skip("deve ser capaz de visualizar detalhes do usuário que criou o evento.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.viewport(1920, 1080);

        cy.get('[data-field="actions"]').eq(1).click();

        cy.contains("button", "Ver detalhes do usuário")
          .should("be.visible")
          .click();

        cy.contains("Editar Usuário Ryan").should("be.visible");
        cy.contains("Dados Pessoais").should("be.visible");
        cy.contains("Endereço").should("be.visible");
        cy.contains("Inf. Médicas").should("be.visible");
        cy.contains("Cont. Emergência").should("be.visible");
        cy.contains("Gravações").should("be.visible");
        cy.contains("Vídeos").should("be.visible");

        cy.contains("Nome").should("be.visible");
        cy.contains("CPF").should("be.visible");
        cy.contains("RG").should("be.visible");
        cy.contains("Data Nascimento").should("be.visible");
        cy.contains("Data Emissão").should("be.visible");
        cy.contains("DDD").should("be.visible");
        cy.contains("Telefone").should("be.visible");
        cy.contains("Email").should("be.visible");

        cy.contains("button", "Salvar").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de fechar a modal de Ver detalhes do evento clicando no ícone de fechar.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        cy.viewport(1920, 1080);

        cy.get('[data-field="actions"]').eq(1).click();

        cy.get("svg[data-testid='CloseIcon']").should("be.visible").click();

        cy.contains("Detalhes do Evento").should("not.exist");
      }
    );
  });

  it.skip("deve ser capaz de visualizar opção de Ver Localização onde o evento irá acontecer.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoEventos/listar_eventos/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.get('[data-field="nome"]')
          .not(":first")
          .each(($cell) => {
            const rowText = $cell.parent().text();

            if (
              rowText.includes("Fernando Melo") &&
              rowText.includes("Região Imediata de São Paulo")
            ) {
              cy.wrap($cell.parent())
                .find(
                  '[data-field="verDetalhes"] button, [aria-label="Ver Detalhes"], svg'
                )
                .scrollIntoView()
                .should("be.visible")
                .click({ force: true });

              cy.contains("a", "Ver Localização")
                .should("have.attr", "target", "_blank")
                .click();
            }
          });
      }
    );
  });

  it("deve ser capaz de visualizar uma mensagem de erro quando é inserido uma informação no campo Pesquisar mas o servidor respondeu com erro.", () => {
    let count = 0;

    cy.intercept("GET", "**/listar_eventos/**", {
      statusCode: 500,
      body: {
        errorCode: 500,
        errorMessage: "Erro interno do servidor.",
      },
    }).as("getEventDetailsError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/eventos",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.wait("@getEventDetailsError");

        cy.contains(
          "Não foi possível obter os dados. Falha na comunicação com o servidor."
        ).should("be.visible");

        cy.contains("Não há registros").should("be.visible");
      }
    );
  });

  // esse teste nao dá para ser feito visto que o botao de limpar filtro, limpa o filtro e reseta todo o grid e nao os campos dentro da modal
  // it.skip("deve ser capaz de limpar a modal de filtro.", () => {});
});
