
# API de Blogs 

Uma API e um banco de dados para a produção de conteúdo para um blog!


## Tech Stack

**Server:** Node, Express

**Banco de Dados** MySql

**ORM** Sequelize

**Security** JWT 

**Docker**


## Installation

#### Com Docker

Após clonar:

* configure as variáveis de ambiente usando o arquivo `.env.example` como base.

* para subir os containers:` docker-compose up -d`

* abra um terminal dentro do container node (`docker exec -it blogs_api bash`)

* instale as dependências com `npm install`
 
* rode `npm run prestart` para criar o banco de dados

* rode `npm run seed` para popular o banco de dados

* rode `npm start` para subir o servidor na porta 3000 do container

* opcionalmente você pode rodar `npm run debug` para subir o servidor em modo desenvolvimento

* para ver o retorno das rotas será necessário uma ferramenta como o [ThunderClient](https://www.thunderclient.com/) ou o [Insomnia](https://insomnia.rest/download)

* se utilizar o [ThunderClient](https://www.thunderclient.com/) import a collection com todas as requisições prontas no arquivo `thunder-collection_blog-API.json` na raiz do projeto

#### Sem Docker 

Após clonar:

* configure as variáveis de ambiente usando o arquivo .env.example como base.

* instale as dependências com npm install

* rode `npm run prestart` para criar o banco de dados

* rode `npm run seed` para popular o banco de dados

* rode `npm start` para subir o servidor na porta 3000 do container

* para ver o retorno das rotas será necessário uma ferramenta como o [ThunderClient](https://www.thunderclient.com/) ou o [Insomnia](https://insomnia.rest/download)

* se utilizar o [ThunderClient](https://www.thunderclient.com/) import a collection com todas as requisições prontas no arquivo `thunder-collection_blog-API.json` na raiz do projeto
## API Reference

### Base URI http://localhost:3000

### Login

```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** "lewishamilton@gmail.com"  |
| `password` | `string` | **Required** "123456"

* **Os dados do exemplo acima podem ser utilizados no body da requisição**, eles correspondem a um usuário que foi populado no Banco de Dados ao startar a aplicação
* Essa rota retorna o **token JWT** que será **necessário** para fazer as outras consultas.
* **Copie o token**, ele será necessário para fazer as outras consultas   


### User

```http
  GET /user
```
* Passe o **token** no atributo **authorization do header** da requisição
* Retorna a lista de todos os usuários

```http
  GET /user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do usuário |

```http
  POST /user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `displayName`      | `string` | **Required**. Nome no mínimo 8 caracteres |
| `email`   | `string`| **Required** email válido |
| `password` | `string`| **Required** senha de no mínimo 6 caracteres |
| `image` | ` url` | **Optional** |

* ao criar um novo usuário com sucesso é retornado um **token JWT** 

```http
  DELETE /user/me
```
* Passe o **token** no atributo **authorization do header** da requisição
* Essa rota exclui o usuário logado

### Post

```http
  GET /post/search?q=
```
* Passe o **token** no atributo **authorization do header** da requisição
* O endpoint traz os blogs post baseados no **q** do banco de dados, se ele existir ou um array vazio

```http
  GET /post
```
* Passe o **token** no atributo **authorization do header** da requisição
* retorna todos os posts 

```http
  GET /post/:id
```
* Passe o **token** no atributo **authorization do header** da requisição
* busca um poste por id

```http
  POST /post
```
* Passe o **token** no atributo **authorization do header** da requisição
* cria um novo post

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Título do post |
| `content`   | `string`| **Required** Conteúdo do post |
| `categoryIds` | `array`| **Required** um array com o código das categorias do post no formato [1, 2]|

```http
  PUT /post/:id
```
* Passe o **token** no atributo **authorization do header** da requisição

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Título do post |
| `content`   | `string`| **Required** Conteúdo do post |

```http
  DELETE /post/:id
```
* Passe o **token** no atributo **authorization do header** da requisição
* Deleta um post pelo id

### Categories

```http
  GET /categories
```
* Passe o **token** no atributo **authorization do header** da requisição
* Retorna a lista de categorias. 

```http
  POST /categories
```
* Passe o **token** no atributo **authorization do header** da requisição

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Nome da categoria |
