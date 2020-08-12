# Conceitos do React JS

## Babel

O babel tem a função de converter (transpilar) o código do React para uma versão que seja interpretável pelos navegadores

## Webpack

A função do webpack é definir de que modo ocorrerão as transpilações para cada tipo de arquivo (.js, .css...);

## Loader

Os loader são que realmente tratarão o "código fonte" para o código de produção.

Exemplos: babel-loader, css-loader, image-loader...

## JSX: JavaScript XML

Utilização da sintaxe XML dentro de arquivos JavaScript, usada, no geral, para montar elementos HTML.

## Componente no React JS

De forma simplificada, um componente é uma função que retorna conteúdo JSX. Uma caracteristica de sua utilização é o reaproveitamento de código, em componentes que se repetem em diversos lugares da aplicação;

## Fragment

O "Elemento" `React.Fragment` cria um "container" para dois, ou mais, elementos sem nenhum efeito estrutural no HTML gerado. Pode ser usado como elemento "pai" para blocos de conteúdo HTML.

Exemplo:

```javascript
function App() {
  return (
    <React.Fragment>
      <Header />
      <h1>Hello World</h1>
    <React.Fragment/>
  );
}
```

Ou simplesmente:

```javascript
function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
    </>
  );
}
```
