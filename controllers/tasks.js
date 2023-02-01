const getAllTasks = (req, res, next) => {
  res.send('get all tasks ');
}

const createTask = (req, res, next) => {
  res.send('create new task');
}

const getTask = (req, res, next) => {
  res.send('get single task');
}

const updateTask = (req, res, next) => {
  res.send('update task');
}

const deleteTask = (req, res, next) => {
  res.send('delete task');
}


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}