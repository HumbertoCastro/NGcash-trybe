const badRequest = (message) => ({
  message,
  errorCode: 400,
  stack: Error().stack,
});

module.exports = badRequest;