const UserRepository = require('../UserRepository');

describe('UserRepository', () => {
  it('should throw error when invoke abstract class',  async () => {
    const userRepository = new UserRepository();

    await expect(userRepository.verifyAvailableUsername('')).rejects.toThrow(Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED'));
    
    await expect(userRepository.addUser({})).rejects.toThrow(Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED'));
  });
});