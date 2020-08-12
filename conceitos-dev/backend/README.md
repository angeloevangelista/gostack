# Conceitos do node js

# Métodos HTTP

Os métodos do HTTP possuem significado semântico e são responsáveis por indicar as ações a serem realizadas ao acessar um determinado recurso.

## GET

Usado para consultar/recuperar recursos, este verbo estará presente apenas em requisições que retornam informações.

#### Exemplo de rota:

```
https://my.api/projects

https://my.api/projects?page=2
```

Com este verbo é muito comum a utilização de `query params`, parâmetros usados após `?`

## POST

Usado para criar recursos, usa-se POST em requisições que objetivam criar recursos novos no destino.

#### Exemplo de rota:

```
https://my.api/projects
```

As requisições do tipo POST costumam requerer um corpo junto à requisição, com as informações necessárias para a criação, os `body params`. Existem alguns formatos para este corpo da requisição, abaixo temos um exemplo usando o formato JSON.

```JSON
{
  "id": 0,
  "title": "Learning HTTP methods",
  "category": "backend",
  "description": "This project aims to help the people to understand HTTP methods"
}
```

## PUT

Usado para atualização de recursos, diferente da utilização do POST, o PUT modifica recursos existentes.

#### Exemplo de rota:

```
https://my.api/projects/1
```

As requisições do tipo PUT, assim como as do tipo POST, costumam requerer um `body params`, em conjunto com parâmetros "identificadores", estes são chamados de `route params`

```JSON
{
  "id": 1,
  "title": "Learning HTTP methods",
  "category": "all",
  "description": "This project aims to help people, and my future self, to understand HTTP methods 😜️"
}
```

## DELETE

Usado para remoção de recursos, sua função é indicar que a requisição pretende excluir/remover o recurso indicado. É importante lembrar que não necessariamente ocorrerá uma exclusão "física", mas que a requisição irá tornar um registro não mais "elegível" para consultas, por exemplo.

#### Exemplo de rota:

```
https://my.api/projects/1
```

As requisições do tipo DELETE não costumam receber os `body params`, no geral apenas os `route params`, para identificação do recurso a ser excluído.

# Middlewares

Os middlewares são trechos de código, funções, que interceptam a execução de uma requisição, podendo impedir sua execução e/ou permitir a continuação desta.

#### Exemplo de middleware no Express JS:

```javascript
function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!validate(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' });
  }

  return next();
}
```

A função `validateProjectId` realiza a validação do `id` informado, para saber se o mesmo segue o padrão para os ids gerados.

#### Exemplo de uso:

```javascript
// o middleware será aplicado em todas as requisições definidas a partir deste ponto
app.use(validateProjectId);

// aplicado apenas nas rotas que seguirem este padrão
app.use('/projects/:id', validateProjectId);


// aplicado exclusivamente na rotas no qualfoi incluído
app.delete('/projects/:id', (request, response) => {
  /// corpo da função  
});
```
