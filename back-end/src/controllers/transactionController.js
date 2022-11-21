const transactionService = require('../services/transactionService');

const getAll = async (req, res) => {
  const { id } = req.params;
  try {
    const transactions = await transactionService.getAll(id);

    if (!transactions) return res.status(404).json({ message: 'Product Not Found' });

    return res.status(200).json(transactions);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Service Error' });
  }
};

const create = async (req, res) => {
  const { name, value, id } = req.body;

  try {
    const newTransaction = await transactionService.create(name, id, value);
    return res.status(200).json(newTransaction);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Service Error' });
  }
};

module.exports = { create, getAll };