const PasswordHash = require('../PasswordHash');

describe('PasswordHash', () => {
  it('should throw error when invoke abstract behavior', async () => {
    const passwordHash = new PasswordHash();

    await expect(passwordHash.hash('')).rejects.toThrow(Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED'));
  });
});