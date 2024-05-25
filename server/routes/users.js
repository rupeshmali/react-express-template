const express = require('express');
const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../controllers/users');

const router = express.Router();

// Get all Users
router.get('/', getUsers);
router.get('/:id', getUser);

// Create a new User
router.post('/', createUser);

// Update a User
router.put('/:id', updateUser);

// Delete a User
router.delete('/:id', deleteUser);

module.exports = router;