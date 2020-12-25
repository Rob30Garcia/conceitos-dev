# conceitos de node.js

<h3 align="center">
  Mini projeto para entender alguns conceitos de backend
</3>

<p align="center">
  <a href="#sobre-o-mini-projeto">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Sobre o mini

Crie uma aplicação para armazenar projetos numa array e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `id`, `title` e `owner` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', owner: 'Nome do proprientário'}`;

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota é alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota é deletar o projeto com o `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto', owner: 'Nome do proprientário' }`. O id usa o uuid para a criação do id.

```js
[
  {
    id: "1",
    title: "Novo projeto",
    owner: "Nome do Proprietário",
  }
];
```
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Robert :wave:

