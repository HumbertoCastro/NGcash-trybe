const cors = require('cors');
const express = require('express');
const path = require('path');
const { json } = require('body-parser');
const errors = require('../middlewares/errors');
const loginRoutes = require('../routes/loginRoutes');
const usersRoutes = require('../routes/usersRoutes');
const accountRouter = require('../routes/accountRouter');
const transactionRouter = require('../routes/transactionRouter');
const registerRoutes = require('../routes/registerRoutes');

const app = express();

app.use(json());
app.use(cors());

app.use(registerRoutes);
app.use(transactionRouter);
app.use(loginRoutes);
app.use(usersRoutes);
app.use(accountRouter);
app.use(registerRoutes);

app.use('/images', express.static(path.join(__dirname, '../../public/images')));
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errors);

module.exports = app;
