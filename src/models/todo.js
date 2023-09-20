const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String, default: 'new' }
});

module.exports = model('tareas', todoSchema);