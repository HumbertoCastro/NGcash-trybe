const express = require('express');

const router = express.Router();
const registerController = require('../controllers/registerController');
const userDataVerify = require('../middlewares/userDataVerify');

router.post('/register', userDataVerify, registerController.create);

module.exports = router;