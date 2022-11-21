const express = require('express');

const transactionController = require('../controllers/transactionController');

const transactionRouter = express.Router();

transactionRouter.get('/transaction/:id', transactionController.getAll);
transactionRouter.post('/transaction', transactionController.create);

module.exports = transactionRouter;
