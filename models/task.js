const mongoose = require('mongoose');

//setup structure for all documents in collection
const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
