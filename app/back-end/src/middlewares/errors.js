const errors = (err, _req, res, _next) => {
  if (err.errorCode) return res.status(err.errorCode).json({ message: err.message });
  console.log(err);
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errors; 