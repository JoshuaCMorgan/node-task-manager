const Task = require('../models/Task');

const getAllTasks = (req, res, next) => {
  res.send('get all tasks ');
};

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch(error) {
    res.status(500).json({ msg: error })
  }
};

const getTask = (req, res, next) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res, next) => {
  res.send('update task');
};

const deleteTask = (req, res, next) => {
  res.send('delete task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
