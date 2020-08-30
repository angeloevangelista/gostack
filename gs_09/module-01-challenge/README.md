# module-01-challenge

### Using middleware and validating entry information

Sample middleware: 

```javascript
function checkTitleExists(req, res, next) {
  let { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  req.title = title;

  return next();
}
```

Applying the middleware:
```javascript
server.put('/projects/:id', checkIdExists, checkTitleExists, checkProjectExists, (req, res) => {
  if (req.index == -1) {
    return res.json({ error: 'Project does not exist' });
  }

  const { title } = req.body;

  projects[req.index].title = title;

  return res.json(projects[req.index]);
});

```
