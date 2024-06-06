const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Todo = mongoose.model('todo', todoSchema)
module.exports = Todo

