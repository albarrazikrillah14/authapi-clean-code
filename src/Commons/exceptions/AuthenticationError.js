const ClientError = require("./ClientErorr");

class AuthenticationError extends ClientError {
  constructor(message) {
    super(message, 401);

    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationError;