const conflict = (message) => ({
  message,
  errorCode: 409,
  stack: Error().stack,
});

module.exports = conflict;