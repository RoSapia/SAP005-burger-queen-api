# Burger Queen - Back-end



## 1. Prefácio

Um pequeno restaurante de hamburgueres, que está crescendo, necessita de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.

A interface front-end da aplicação Burger Queen já foi criada, e agora foi necessário
criar o back-end para manejar os dados. Neste caso, isso foi feito através
de uma _API rest_ que será compatível com as requisições vindas do front.

## 2. Resumo do projeto

Fora utilizado o [Node.js](https://nodejs.org/) para criar a API Rest / um servidor web que deverá _servir_ `JSON`
através de uma conexão `HTTP`. 

O boilerplate foi criado com o comando para criação de _boilerplates_ básicos do Sequelize. 
O _stack_ escolhido: [Express](https://expressjs.com/),
[Sequelize](https://sequelize.org), [PostgreSQL](https://www.postgresql.org/docs/)
e outras bibliotecas auxiliares.

Com o uso do [Postman](https://www.getpostman.com), realizei as rotas e utilizei 
para para enviar dados através do _header_ e _body_.

Fora seguido o modelo de arquitetura **MVC** (Model View Controller), utilizando boas práticas de desenvolvimento web.

### 3. API

A API expõe os seguintes endpoints:

#### 3.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 3.2 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 3.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

## 4. Deploy

O _deploy_ para produção foi feito utilizando o serviço de hospedagem
[Heroku](https://www.heroku.com/home), que tem integração com o
[PostgreSQL](https://www.heroku.com/postgres).

O link da API é: http://bq-apir.herokuapp.com/ .
E o link da documentação : https://documenter.getpostman.com/view/14387029/TzCP87kA

