const express = require('express');
const { getUser, getUsers, updateUser, deleteUser } = require('../controllers/users');

const router = express.Router();

// Get all Users
router.get('/', getUsers);
router.get('/me', getUser);

// Update a User
router.put('/:id', updateUser);

// Delete a User
router.delete('/:id', deleteUser);


module.exports = router;
