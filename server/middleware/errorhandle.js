function errorHandler(err, req, res, next) {
  res.status(500).send();
}

module.exports = errorHandler;
