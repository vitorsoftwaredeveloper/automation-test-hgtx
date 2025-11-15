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

    cy.contains("Botão do Pânico - Usuários").click();
  });

  it.skip("deve ser capaz de visualizar a página de Botão do Pânico - Usuários.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.contains("h2", "Usuários").should("be.visible");
        cy.get("input[name='search']").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar um grid listando informações dos usuários.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.viewport(1920, 1080);

        cy.contains("ID").should("be.visible");
        cy.contains("Usuário").should("be.visible");
        cy.contains("Estado").should("be.visible");
        cy.contains("Cidade").should("be.visible");
        cy.contains("Ações").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de inserir dados no campo Pesquisar e filtrar os usuários pela informação inserida.", () => {
    let count = 0;

    cy.intercept(
      "GET",
      "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-app-api8.hgtx.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait(3000);

        cy.get('[data-field="nome"]')
          .not(":first")
          .each(($cell) => {
            expect($cell.text().trim()).to.include(name);
          });
      }
    );
  });

  it.skip("deve ser capaz de inserir dados no campo Pesquisar e limpar o input ao clicar no botão de limpar.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
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
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.get('[aria-label="filtrar"]').should("be.visible").click();

        cy.get('input[role="combobox"]').eq(0).focus();
        cy.contains("label", "Estados").should("be.visible").type("Paraíba");
        cy.get('li[role="option"]').should("be.visible").click();

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
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.get('[data-testid="ArrowDropDownIcon"]')
          .should("be.visible")
          .parent()
          .click();
        cy.get('[data-value="25"]').should("be.visible").click();

        cy.scrollTo("top");

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");
        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait(2000);

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

  it.skip("deve ser capaz de inserir dados na modal de filtro e filtrar por resultados que correspondam apenas a cidade de Adamantina.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.get('[data-testid="ArrowDropDownIcon"]')
          .should("be.visible")
          .parent()
          .click();
        cy.get('[data-value="25"]').should("be.visible").click();

        cy.scrollTo("top");

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");
        cy.get('li[role="option"]').should("be.visible").click();

        cy.get('input[role="combobox"]').eq(1).focus().type("Adamantina");
        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait(2000);

        cy.log("Verificando se todos os estados são São Paulo");
        cy.get('[data-field="estado"]')
          .not(":first")
          .then(($cells) => {
            const valorBase = $cells.first().text().trim();
            cy.wrap($cells).each(($cell) => {
              expect($cell.text().trim()).to.eq(valorBase);
            });
          });

        cy.log("Verificando se todas as cidades são Adamantina");
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

  it.skip("deve ser capaz de cancelar a ação na modal de filtro.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.get('[aria-label="filtrar"]').click();

        cy.contains("button", "Cancelar").click();

        cy.contains("Filtros").should("not.exist");
      }
    );
  });

  it.skip("deve ser capaz de fechar a modal de filtro.", () => {
    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        cy.get('[aria-label="filtrar"]').click();

        cy.get("svg[data-testid='CloseIcon']").should("be.visible").click();

        cy.contains("Filtros").should("not.exist");
      }
    );
  });

  it.skip("deve ser capaz de visualizar e editar Dados pessoais do usuário clicando sobre o ícone na coluna Ações > Editar e depois salvar as alterações.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.wait(1000);

        cy.log("Guardando dados do usuário para edição");
        let nome, cpf, rg, ddd, telefone, email;

        cy.get('input[name="nome"]')
          .invoke("val")
          .then((val) => (nome = val));

        cy.get('input[name="cpf"]')
          .invoke("val")
          .then((val) => (cpf = val));

        cy.get('input[name="rg"]')
          .invoke("val")
          .then((val) => (rg = val));

        cy.get('input[name="ddd"]')
          .invoke("val")
          .then((val) => (ddd = val));

        cy.get('input[name="telefone"]')
          .invoke("val")
          .then((val) => (telefone = val));

        cy.get('input[name="email"]')
          .invoke("val")
          .then((val) => (email = val));

        cy.then(() => {
          cy.log("nome:", nome);
          cy.log("cpf:", cpf);
          cy.log("rg:", rg);
          cy.log("ddd:", ddd);
          cy.log("telefone:", telefone);
          cy.log("email:", email);

          cy.log("Editando dados do usuário");
          cy.get('input[name="nome"]').clear().type(nome);
          cy.get('input[name="cpf"]').clear().type(cpf);
          cy.get('input[name="rg"]').clear().type(rg);
          cy.get('input[name="ddd"]').clear().type(ddd);
          cy.get('input[name="telefone"]').clear().type(telefone);
          cy.get('input[name="email"]').clear().type(email);

          cy.contains("button", "Salvar").should("be.visible").click();
          cy.contains("Dados salvos com sucesso").should("be.visible");
          cy.log("Fechando a modal de edição");
          cy.get("body").type("{esc}");
        });
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro na obtenção de Dados pessoais do usuário clicando sobre o ícone na coluna Ações > Editar.", () => {
    let count = 0;

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("GET", "**/obter_dados_pessoais/**", {
      statusCode: 500,
    }).as("getUserDataError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();

        cy.contains("Não foi possível obter os dados").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro quando tentar atualizar dados de usuário clicando sobre o botão Salvar.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("POST", "**/editar_dados_pessoais", {
      statusCode: 500,
    }).as("editUserDataError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();

        cy.wait(1000);
        cy.contains("Salvar").should("be.visible").click();

        cy.contains("Erro ao salvar os dados").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar e editar Endereço do usuário clicando sobre o ícone na coluna Ações > Editar > Endereço e depois salvar as alterações.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Endereço").should("be.visible").click();
        cy.wait(1000);

        cy.log("Guardando dados do endereço para edição");
        let tipoEndereco,
          cep,
          logradouro,
          complemento,
          bairro,
          cidade,
          uf,
          numero;

        cy.get('input[name="tipoEndereco"]')
          .invoke("val")
          .then((val) => (tipoEndereco = val));

        cy.get('input[name="cep"]')
          .invoke("val")
          .then((val) => (cep = val));

        cy.get('input[name="logradouro"]')
          .invoke("val")
          .then((val) => (logradouro = val));

        cy.get('input[name="complemento"]')
          .invoke("val")
          .then((val) => (complemento = val));

        cy.get('input[name="bairro"]')
          .invoke("val")
          .then((val) => (bairro = val));

        cy.get('input[name="cidade"]')
          .invoke("val")
          .then((val) => (cidade = val));

        cy.get('input[name="uf"]')
          .invoke("val")
          .then((val) => (uf = val));

        cy.get('input[name="numero"]')
          .invoke("val")
          .then((val) => (numero = val));

        cy.then(() => {
          cy.log("tipoEndereco:", tipoEndereco);
          cy.log("cep:", cep);
          cy.log("logradouro:", logradouro);
          cy.log("complemento:", complemento);
          cy.log("bairro:", bairro);
          cy.log("cidade:", cidade);
          cy.log("uf:", uf);
          cy.log("numero:", numero);

          cy.log("Editando dados do usuário");
          cy.get('div[role="combobox"][aria-haspopup="listbox"]').eq(1).click();
          cy.get(`li[role="option"][data-value=${tipoEndereco}]`)
            .should("be.visible")
            .click();
          cy.get('input[name="cep"]').clear().type(cep);
          cy.get('input[name="logradouro"]').clear().type(logradouro);
          cy.get('input[name="complemento"]').clear().type(complemento);
          cy.get('input[name="bairro"]').clear().type(bairro);
          cy.get('input[name="cidade"]').clear().type(cidade);
          cy.get('input[name="uf"]').clear().type(uf);
          cy.get('input[name="numero"]').clear().type(numero);

          cy.contains("button", "Salvar").should("be.visible").click();
          cy.contains("Endereço salvo com sucesso").should("be.visible");
          cy.log("Fechando a modal de edição");
          cy.get("body").type("{esc}");
        });
      }
    );
  });

  it.skip("deve ser capaz de a requisição retornar sucesso ao buscar um cep existente no Ações > Editar > Endereço.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("GET", "**/viacep.com.br/**").as("getCep");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Endereço").should("be.visible").click();
        cy.wait(1000);

        cy.get('input[name="cep"]').clear().type("58073316");
        cy.contains("button", "Buscar").should("be.visible").click();
        cy.wait("@getCep").its("response.statusCode").should("eq", 200);

        cy.log("Fechando a modal de edição");
        cy.get("body").type("{esc}");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro ao buscar um cep não existente no Ações > Editar > Endereço.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Endereço").should("be.visible").click();
        cy.wait(1000);

        cy.get('input[name="cep"]').clear().type("00000000");
        cy.contains("button", "Buscar").should("be.visible").click();

        cy.contains("CEP não encontrado").should("be.visible");
        cy.log("Fechando a modal de edição");
        cy.get("body").type("{esc}");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro na obtenção de Endereço do usuário clicando sobre o ícone na coluna Ações > Editar > Endereço.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("GET", "**/obter_endereco/**", {
      statusCode: 500,
    }).as("getAddressError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Endereço").should("be.visible").click();
        cy.wait(1000);

        cy.wait("@getAddressError");

        cy.contains("Erro ao obter o endereço").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro quando tentar atualizar Endereço do usuário clicando sobre o botão Salvar.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("POST", "**/editar_endereco", {
      statusCode: 500,
    }).as("editAddressError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Endereço").should("be.visible").click();
        cy.wait(1000);

        cy.contains("Salvar").should("be.visible").click();

        cy.contains("Erro ao salvar o endereço").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar e editar Informações médicas do usuário clicando sobre o ícone na coluna Ações > Editar > Inf. Médicas e depois salvar as alterações.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Inf. Médicas").should("be.visible").click();
        cy.wait(1000);

        cy.log("Guardando dados de Inf. Médicas para edição");
        let tipoSanguineo,
          alergias,
          condicoesMedicas,
          medicacoes,
          historicoDoencas;

        cy.get('input[name="tipoSanguineo"]')
          .invoke("val")
          .then((val) => (tipoSanguineo = val));

        cy.get('input[name="alergias"]')
          .invoke("val")
          .then((val) => (alergias = val));

        cy.get('input[name="condMedicasPreEstab"]')
          .invoke("val")
          .then((val) => (condicoesMedicas = val));

        cy.get('input[name="medicamentos"]')
          .invoke("val")
          .then((val) => (medicacoes = val));

        cy.get('input[name="historicoDoencas"]')
          .invoke("val")
          .then((val) => (historicoDoencas = val));

        cy.then(() => {
          cy.log("tipoSanguineo:", tipoSanguineo);
          cy.log("alergias:", alergias);
          cy.log("condicoesMedicas:", condicoesMedicas);
          cy.log("medicacoes:", medicacoes);
          cy.log("historicoDoencas:", historicoDoencas);

          cy.log("Editando dados do usuário");
          cy.get('div[role="combobox"][aria-haspopup="listbox"]').eq(1).click();
          cy.get(`li[role="option"][data-value=${tipoSanguineo}]`)
            .should("be.visible")
            .click();
          cy.get('input[name="alergias"]')
            .clear()
            .type(alergias || "Nenhuma");
          cy.get('input[name="condMedicasPreEstab"]')
            .clear()
            .type(condicoesMedicas || "Nenhuma");
          cy.get('input[name="medicamentos"]')
            .clear()
            .type(medicacoes || "Nenhuma");
          cy.get('input[name="historicoDoencas"]')
            .clear()
            .type(historicoDoencas || "Nenhuma");

          cy.contains("button", "Salvar").should("be.visible").click();
          cy.contains("Dados salvos com sucesso").should("be.visible");
          cy.log("Fechando a modal de edição");
          cy.get("body").type("{esc}");
        });
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro na obtenção de Informações médicas do usuário clicando sobre o ícone na coluna Ações > Editar > Inf. Médicas.", () => {
    let count = 0;

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("GET", "**/obter_informacoes_medicas/**", {
      statusCode: 500,
    }).as("getMedicalInfoError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Inf. Médicas").should("be.visible").click();

        cy.contains("Erro ao buscar os dados").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro quando tentar atualizar dados de Informações médicas clicando sobre o botão Salvar.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("POST", "**/editar_informacoes_medicas", {
      statusCode: 500,
    }).as("editMedicalInfoError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Inf. Médicas").should("be.visible").click();

        cy.wait(1000);
        cy.contains("Salvar").should("be.visible").click();

        cy.contains("Erro ao salvar os dados").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar Contatos de emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();
        cy.wait(1000);

        cy.contains("Qnt. de Contatos Cadastrados").should("be.visible");
        cy.contains("Novo Contato").should("be.visible");

        cy.log("Fechando a modal");
        cy.get("body").type("{esc}");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma modal para cadastro de novos contatos na aba Cont. Emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência > Novo Contato.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.get('input[name="nome"]').focus();
        cy.contains("label", "Nome").should("be.visible");

        cy.get('input[name="ddd"]').focus();
        cy.contains("label", "DDD").should("be.visible");

        cy.get('input[name="telefone"]').focus();
        cy.contains("label", "Telefone").should("be.visible");

        cy.get('input[name="email"]').focus();
        cy.contains("label", "Email").should("be.visible");

        cy.contains("Tipo de Contato").should("be.visible");
        cy.contains(
          "Envio de notificação (Após o acionamento do botão do pânico)"
        ).should("be.visible");
        cy.contains("Envio de notificação no WhatsApp").should("be.visible");
        cy.contains("button", "Cancelar").should("be.visible");
        cy.contains("button", "Salvar").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de fechar a modal para cadastrar novos contatos na aba Cont. Emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência > Novo Contato > Cancelar.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.contains("button", "Cancelar").should("be.visible").click();
        cy.contains("Salvar").should("not.exist");
      }
    );
  });

  it.skip("deve ser capaz de cadastrar novos contatos na aba Cont. Emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência > Novo Contato > Salvar.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.get('input[name="nome"]').focus().type("Contato de Teste");

        cy.get('input[name="ddd"]').focus().type("11");

        cy.get('input[name="telefone"]').focus().type("999999999");

        cy.get('input[name="email"]').focus().type("teste@email.com");

        cy.contains("button", "Salvar").should("be.visible").click();

        cy.wait(1000);

        cy.contains("Contato salvo com sucesso").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de 'Campo obrigatório' aba Cont. Emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência > Novo Contato > Salvar.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.get('input[name="nome"]').focus().type(" ");

        cy.get('input[name="ddd"]').focus().type(" ");

        cy.get('input[name="telefone"]').focus().type(" ");

        cy.get('input[name="email"]').focus().type(" ");

        cy.contains("button", "Salvar").should("be.visible").click();

        cy.wait(1000);

        cy.contains("Campo obrigatório").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro ao tentar cadastrar um novo contato na aba Cont. Emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência > Novo Contato > Salvar.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("POST", "**/contatos_emergenciais", {
      statusCode: 500,
    }).as("addEmergencyContactError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.get('input[name="nome"]').focus().type("Contato de Teste");

        cy.get('input[name="ddd"]').focus().type("11");

        cy.get('input[name="telefone"]').focus().type("999999999");

        cy.get('input[name="email"]').focus().type("teste@email.com");

        cy.contains("button", "Salvar").should("be.visible").click();

        cy.wait(1000);

        cy.contains("Não foi possível salvar o contato").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro na obtenção de Cont. Emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência.", () => {
    let count = 0;

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("GET", "**/listar_contatos_emergenciais/**", {
      statusCode: 500,
    }).as("getEmergencyContactsError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Não foi possível obter os dados").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar Contatos de emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência. e editar as informações de um contato.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();
        cy.wait(1000);

        cy.get('[aria-label="more"][role="menuitem')
          .should("be.visible")
          .eq(1)
          .click();

        cy.contains("li", "Editar").should("be.visible").click();

        cy.wait(1000);

        let nome, ddd, telefone, email;

        cy.get('input[name="nome"]')
          .invoke("val")
          .then((val) => (nome = val));
        cy.get('input[name="ddd"]')
          .invoke("val")
          .then((val) => (ddd = val));
        cy.get('input[name="telefone"]')
          .invoke("val")
          .then((val) => (telefone = val));
        cy.get('input[name="email"]')
          .invoke("val")
          .then((val) => (email = val));

        cy.then(() => {
          cy.log("nome:", nome);
          cy.log("ddd:", ddd);
          cy.log("telefone:", telefone);
          cy.log("email:", email);

          cy.log("Editando dados do usuário");
          cy.get('input[name="nome"]').clear().type(nome);
          cy.get('input[name="ddd"]').clear().type(ddd);
          cy.get('input[name="telefone"]').clear().type(telefone);
          cy.get('input[name="email"]').clear().type(email);

          cy.contains("button", "Salvar").should("be.visible").click();
          cy.contains("Contato salvo com sucesso").should("be.visible");

          cy.log("Fechando a modal de edição");
          cy.get("body").type("{esc}");
        });
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro na aba Contatos de emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência. > Editar, pois o servidor retornou um erro.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("GET", "**/obter_contatos_emergenciais/**", {
      statusCode: 500,
    }).as("getEmergencyContactsError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();
        cy.wait(1000);

        cy.get('[aria-label="more"][role="menuitem')
          .should("be.visible")
          .eq(1)
          .click();

        cy.contains("li", "Editar").should("be.visible").click();

        cy.contains("Não foi possível obter os dados").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar Contatos de emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência. e editar as informações de um contato, mas cancelar a operação de edição.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();
        cy.wait(1000);

        cy.get('[aria-label="more"][role="menuitem')
          .should("be.visible")
          .eq(1)
          .click();

        cy.contains("li", "Editar").should("be.visible").click();

        cy.wait(1000);
        cy.contains("button", "Cancelar").should("be.visible").click();
        cy.contains("Salvar").should("not.exist");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma modal para remover um contato na aba de Contatos de emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência, clicando no botão de Excluir na coluna Ações.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.get('input[name="nome"]').focus().type("Contato de Teste");

        cy.get('input[name="ddd"]').focus().type("11");

        cy.get('input[name="telefone"]').focus().type("999999999");

        cy.get('input[name="email"]').focus().type("teste@email.com");

        cy.contains("button", "Salvar").should("be.visible").click();

        cy.wait(1000);

        cy.contains("Contato salvo com sucesso").should("be.visible");

        cy.get('[aria-label="more"][role="menuitem')
          .should("be.visible")
          .last()
          .click();

        cy.contains("li", "Excluir").should("be.visible").click();
        cy.contains("Excluir").should("be.visible");
        cy.contains("Deseja prosseguir com a exclusão do registro?").should(
          "be.visible"
        );
        cy.contains("button", "Cancelar").should("be.visible");
        cy.contains("button", "Confirmar").should("be.visible").click();

        cy.contains("Contato excluído com sucesso").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de visualizar uma mensagem de erro ao tentar excluir um contato na aba de Contatos de emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência, clicando no botão de Excluir na coluna Ações.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("DELETE", "**/excluir/**", {
      statusCode: 500,
    }).as("deleteEmergencyContactError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.get('input[name="nome"]').focus().type("Contato de Teste");

        cy.get('input[name="ddd"]').focus().type("11");

        cy.get('input[name="telefone"]').focus().type("999999999");

        cy.get('input[name="email"]').focus().type("teste@email.com");

        cy.contains("button", "Salvar").should("be.visible").click();

        cy.wait(1000);

        cy.contains("Contato salvo com sucesso").should("be.visible");

        cy.get('[aria-label="more"][role="menuitem')
          .should("be.visible")
          .last()
          .click();

        cy.contains("li", "Excluir").should("be.visible").click();
        cy.contains("Excluir").should("be.visible");
        cy.contains("Deseja prosseguir com a exclusão do registro?").should(
          "be.visible"
        );
        cy.contains("button", "Cancelar").should("be.visible");
        cy.contains("button", "Confirmar").should("be.visible").click();

        cy.contains("Não foi possível excluir o contato").should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de cancelar a remoção de um contato na aba de Contatos de emergência clicando sobre o ícone na coluna Ações > Editar > Cont. Emergência, clicando no botão de Excluir na coluna Ações.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("DELETE", "**/excluir/**", {
      statusCode: 500,
    }).as("deleteEmergencyContactError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.contains("Novo Contato").should("be.visible").click();

        cy.get('input[name="nome"]').focus().type("Contato de Teste");

        cy.get('input[name="ddd"]').focus().type("11");

        cy.get('input[name="telefone"]').focus().type("999999999");

        cy.get('input[name="email"]').focus().type("teste@email.com");

        cy.contains("button", "Salvar").should("be.visible").click();

        cy.wait(1000);

        cy.contains("Contato salvo com sucesso").should("be.visible");

        cy.get('[aria-label="more"][role="menuitem')
          .should("be.visible")
          .last()
          .click();

        cy.contains("li", "Excluir").should("be.visible").click();
        cy.contains("Excluir").should("be.visible");
        cy.contains("Deseja prosseguir com a exclusão do registro?").should(
          "be.visible"
        );
        cy.contains("button", "Cancelar").should("be.visible").click();
        cy.contains("button", "Confirmar").should("be.visible");

        cy.contains("Deseja prosseguir com a exclusão do registro?").should(
          "not.be.visible"
        );
      }
    );
  });

  it.skip("deve ser capaz de paginar os Contatos de emergência do grid de contatos.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("DELETE", "**/excluir/**", {
      statusCode: 500,
    }).as("deleteEmergencyContactError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.wait(1000);

        cy.get('button[aria-label="Go to next page"]').should("be.visible");

        cy.get('button[aria-label="Go to previous page"]').should("be.visible");
      }
    );
  });

  it.skip("deve ser capaz de paginar os resultados do grid de Contatos de emergência.", () => {
    let count = 0;
    cy.viewport(1920, 1080);

    cy.intercept(
      "GET",
      "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10*",
      (req) => {
        count++;

        if (count === 2) {
          const novaUrl =
            "https://creci-v8-api.goutron.com.br/api/v1/BotaoPanicoDadosPessoais/listar_cadastros/1/10?nome=Fernando+Melo";
          req.url = novaUrl;
        }
        req.continue();
      }
    ).as("listarEventos");

    cy.intercept("DELETE", "**/excluir/**", {
      statusCode: 500,
    }).as("deleteEmergencyContactError");

    cy.origin(
      "https://creci-app-frontend.hgtx.com.br/creci/botao-panico/cadastros",
      () => {
        const name = "Fernando Melo";
        cy.get("input[placeholder='Pesquisar']").clear().type(name);

        cy.get('[aria-label="filtrar"]').click();

        cy.get('input[role="combobox"]').eq(0).focus().type("São Paulo");

        cy.get('li[role="option"]').should("be.visible").click();

        cy.contains("button", "Filtrar").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('[role="menuitem"]').should("be.visible").first().click();
        cy.contains("Editar").should("be.visible").click();
        cy.contains("Cont. Emergência").should("be.visible").click();

        cy.wait(1000);

        cy.get('[data-testid="ArrowDropDownIcon"]')
          .should("be.visible")
          .parent()
          .eq(1)
          .click();

        cy.get('[data-value="25"]').should("be.visible").click();

        cy.wait("@listarEventos");

        cy.wait(1000);

        cy.get('div[role="rowgroup"]')
          .not(":first")
          .children()
          .then(($rows) => {
            const finishRowCount = $rows.length;

            expect(finishRowCount).to.greaterThan(10);
          });
      }
    );
  });

  // falta agora gravacoes
});
