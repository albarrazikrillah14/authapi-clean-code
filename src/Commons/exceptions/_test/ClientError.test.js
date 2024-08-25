const ClientError = require('../ClientErorr');

describe('ClientError', () => {
  it('should throw error when invoke abstract class', () => {
    expect(() => new ClientError('')).toThrow(Error('cannot instantiate abstract class'));
  });
});