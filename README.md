# Automation Test HGTX

Projeto de automação de testes E2E (End-to-End) desenvolvido com Cypress para validação de funcionalidades da plataforma HGTX.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes Implementados](#testes-implementados)
- [Documentação dos Testes](#documentação-dos-testes)

## Sobre o Projeto

Este projeto contém uma suíte de testes automatizados que valida as principais funcionalidades da aplicação HGTX, incluindo:

- Autenticação de usuários
- Funcionalidades do dashboard
- Geração de áudio
- Transcrição de áudio
- Upload e gerenciamento de imagens
- Integração com BatePapo

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[Cypress](https://www.cypress.io/)** v15.5.0 - Framework de testes E2E
- **JavaScript** - Linguagem de programação

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 20.x ou superior)
- **npm** (geralmente vem com o Node.js)

Para verificar se já possui o Node.js instalado:

```bash
node --version
npm --version
```

## Instalação

1. Descompatar zip

2. Acesse o diretório do projeto:

```bash
cd automation-test-hgtx
```

3. Instale as dependências:

```bash
npm install
```

## Como Executar

### Modo Interativo (Cypress Test Runner)

Para abrir a interface interativa do Cypress, onde você pode visualizar e executar os testes em tempo real:

```bash
npm run cypress:open
```

Este comando abrirá a interface gráfica do Cypress, onde você pode:
- Selecionar a opção E2E Testing
- Selecionar o Chrome
- Selecionar o botão **E2E Testing in Chrome**

## 📁 Estrutura do Projeto

```
automation-test-hgtx/
│
├── cypress/
│   ├── downloads/          # Arquivos baixados durante os testes
│   │   ├── audio.mp3
│   │   └── big-audio.mp3
│   │
│   ├── e2e/               # Arquivos de teste (specs)
│   │   └── pages/
│   │       ├── batepapo.cy.js
│   │       ├── dashboard.cy.js
│   │       ├── geracaoAudio.cy.js
│   │       ├── imagens.cy.js
│   │       ├── login.cy.js
│   │       └── transcricaoAudio.cy.js
│   │
│   ├── fixtures/          # Dados de teste estáticos
│   │   └── example.json
│   │
│   └── support/           # Comandos e configurações customizadas
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js      # Configurações do Cypress
├── package.json          # Dependências e scripts
├── package-lock.json     # Lock de versões das dependências
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md            # Documentação do projeto
```

## Testes Implementados

### 1. Login (login.cy.js)
Valida o fluxo de autenticação de usuários na plataforma.

**Cenários testados:**
- Login com credenciais válidas
- Validação de mensagens de erro com credenciais inválidas
- Redirecionamento após login bem-sucedido

### 2. Dashboard (dashboard.cy.js)
Testa as funcionalidades principais da página inicial após o login.

**Cenários testados:**
- Carregamento correto dos elementos do dashboard
- Exibição de informações do usuário
- Acesso às funcionalidades principais

### 3. Geração de Áudio (geracaoAudio.cy.js)
Valida o processo de geração de áudio a partir de texto.

**Cenários testados:**
- Inserção de texto para conversão
- Geração bem-sucedida do arquivo de áudio
- Download do áudio gerado
- Validação de erros em casos de entrada inválida

### 4. Transcrição de Áudio (transcricaoAudio.cy.js)
Testa a funcionalidade de conversão de áudio em texto.

**Cenários testados:**
- Upload de arquivo de áudio
- Processamento da transcrição
- Exibição do texto transcrito
- Tratamento de arquivos com diferentes formatos e tamanhos
- Validação com arquivos grandes (big-audio.mp3)

### 5. Gerenciamento de Imagens (imagens.cy.js)
Valida as operações relacionadas a imagens na plataforma.

**Cenários testados:**
- Upload de imagens
- Visualização de imagens carregadas
- Edição/manipulação de imagens
- Exclusão de imagens
- Validação de formatos e tamanhos suportados

### 6. BatePapo (batepapo.cy.js)
Testa a funcionalidade de chat/conversação da plataforma.

**Cenários testados:**
- Envio de mensagens
- Recebimento de respostas
- Histórico de conversas
- Funcionalidades de chat em tempo real
- Erros no envio das mensagens
- Erros na criação de pastas
- Erros na criação de novo chat


## Pontos que dificultaram o teste

- O componentes que compõe as telas não estão adequadamente preparados para serem testados, alguns faltam id. Mas o principal campo que determina que aquela tela está apta a ser testada estava faltando em todos os componentes que é o atributo **data-testid ou data-cy**. Sem eles todos os testes ficam muito suscetíveis a falha.

- A plataforma possui intermitência, por vezes, os testes acabam falhando por não carregar corretamente o dashboard com todos os aplicativos.

## Pontos de melhoria para o desenvolvimento

- Evitar console.log, isso induz ao ofensor de sistemas, a ter acesso a segredos ou comportamentos que podem dar certa vantagem para invadir o sistema.

- Verificar o comportamento dos estados (useState e useEffect, caso usem Reaact) internos dos componentes para evitar requisição repetida.

- Implementar a prática do Lazing Loading de imagens, por vezes, a tela fica sobrecarregada e lenta devido ao carregamento massivo de inúmeras imagens. A ideia é fazer esse carregamento de forma gradual, de acordo com o que está sendo visto pelo usuário.


<br>

**By Vitor Soares - Quero estar com vcs para construírmos boas soluções juntos!**