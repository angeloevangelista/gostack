# modulo-01
### Understanding middlewares in express

Below you can see an example of a middlware you can add on your route/routes

```javascript
server.use((req, res, next) => {

  console.time('Request');

  console.log({
    Method: req.method,
    Url: req.url,
  });

  next();

  console.timeEnd('Request');
});
```
