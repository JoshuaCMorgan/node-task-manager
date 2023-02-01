const express = require('express');
const app = express();
const port = 3000;
const tasksRoutes = require('./routes/tasks')

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res, next) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasksRoutes);


app.listen(port, console.log(`Server is listening on port ${port}...`));
