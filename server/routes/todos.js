const express = require('express');
const { getTodo, getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todos');

const router = express.Router();

// Get all Todos
router.get('/', getTodos);
router.get('/:id', getTodo);

// Create a new Todo
router.post('/', createTodo);

// Update a Todo
router.put('/:id', updateTodo);

// Delete a Todo
router.delete('/:id', deleteTodo);


module.exports = router;
