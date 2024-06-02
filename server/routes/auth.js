const express = require('express');
const { signIn, signUp } = require('../controllers/auth');

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/sign-up', signUp);

module.exports = router;
