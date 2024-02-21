# Blog API

Bem-vindo à Blog API, uma aplicação Node.js desenvolvida com o pacote Sequelize para gerenciar a produção de conteúdo para um blog. Este projeto inclui autenticação JWT para proteger operações sensíveis, seguindo os princípios do REST.

## Estrutura do Projeto

```
./src
|-- controllers
|-- services
|-- models
|-- routes
|-- config
|-- middleware
|-- utils
```

- **controllers:** Responsável por gerenciar as requisições HTTP.
- **services:** Agrupa a lógica de negócios da aplicação, separando-a dos controladores.
- **models:** Armazena os modelos Sequelize que representam as entidades do banco de dados.
- **routes:** Define as rotas da API.
- **config:** Configurações da aplicação, como conexão com o banco de dados.
- **middleware:** Middleware para autenticação JWT.
- **utils:** Funções utilitárias.

## Funcionalidades

### Autenticação

- Rota para login, retornando um token JWT para autenticação em operações protegidas.

### Usuários

- Criação de usuários para autenticação.

### Categorias

- Operações CRUD para gerenciar categorias de posts.

### Posts

- Criação de posts associados a um usuário e categoria.
- Recuperação de informações sobre um post específico.
- Atualização de detalhes de um post.

## JWT Authentication

Para acessar operações protegidas, inclua o token JWT na header da requisição

## Como Executar

1. Instale as dependências:

npm install

2. Execute as migrations:

npm run migrate

3. nicie a aplicação:

npm start

## Docker

A aplicação está containerizada usando Docker.

