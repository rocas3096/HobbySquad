class ExpressError extends Error {
  constructor(message, type, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
  }
}
module.exports = ExpressError;
