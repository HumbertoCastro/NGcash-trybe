const express = require('express');

const router = express.Router();
const userController = require('../controllers/usersController');
const userDataVerify = require('../middlewares/userDataVerify');

router.post('/users', userDataVerify, userController.create);
router.get('/users/:id', userController.getUserById);

module.exports = router;