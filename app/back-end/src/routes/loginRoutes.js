const express = require('express');

const router = express.Router();
const loginController = require('../controllers/loginController');
const loginDataVerify = require('../middlewares/loginDataVerify');

router.post('/login', loginDataVerify, loginController.login);

module.exports = router; 