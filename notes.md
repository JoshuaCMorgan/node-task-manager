# Routes
starter routes.
convention is `/api/v1`. Server has both `api` routes and page routes. We need to distinguish between the two.
Versions are added in case changes are made to api
```javascript
// app.get('/api/v1/tasks')        - get all tasks
// app.post('/api/v1/tasks')       - create a new task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task
```