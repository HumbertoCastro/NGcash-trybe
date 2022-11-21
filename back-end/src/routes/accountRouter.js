const express = require('express');

const accountController = require('../controllers/accountController');

const accountRouter = express.Router();

accountRouter.get('/account/:id', accountController.getById);

module.exports = accountRouter;