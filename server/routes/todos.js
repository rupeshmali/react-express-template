const express = require('express');
const { getTodo, getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todos');

const router = express.Router();

// Get all todos
router.get('/', getTodos);
router.get('/:id', getTodo);

// Create a new todo
router.post('/', createTodo);

// Update a todo
router.put('/:id', updateTodo);

// Delete a todo
router.delete('/:id', deleteTodo);

module.exports = router;
