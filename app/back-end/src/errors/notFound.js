const notFound = (message) => ({
  message,
  errorCode: 404,
  stack: Error().stack,
});

module.exports = notFound;