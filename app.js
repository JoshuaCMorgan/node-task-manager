const express = require('express');
const app = express();
const port = 3000;
const tasksRoutes = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config();
// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res, next) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasksRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();
